import path from 'path';
import ts from 'typescript';

const rootDir = path.resolve(import.meta.dirname, '..');

// App path aliases from tsconfig "paths", e.g. '@components', '@utils', '@' (for '@/*')
const { config } = ts.readConfigFile(path.join(rootDir, 'tsconfig.json'), ts.sys.readFile);
const appAliases = [
  ...new Set(Object.keys(config.compilerOptions.paths).map((key) => key.replace(/\/\*$/, ''))),
];

const isAppAlias = (source) =>
  appAliases.some((alias) => source === alias || source.startsWith(`${alias}/`));

/**
 * A module (src/modules/<name>), package (packages/<name>) or remote app (apps/<name>) must be movable to its own
 * repo, so it may only import its own files and installed packages (@zapplib/core, @zapplib/ui).
 */
const getBoundary = (filename) => {
  const segments = path.relative(rootDir, filename).split(path.sep);

  if (segments[0] === 'src' && segments[1] === 'modules' && segments.length > 3) {
    return {
      dir: path.join(rootDir, 'src', 'modules', segments[2]),
      name: `module "${segments[2]}"`,
    };
  }
  if (segments[0] === 'packages' && segments.length > 2) {
    return { dir: path.join(rootDir, 'packages', segments[1]), name: `package "${segments[1]}"` };
  }
  if (segments[0] === 'apps' && segments.length > 2) {
    return { dir: path.join(rootDir, 'apps', segments[1]), name: `app "${segments[1]}"` };
  }
  return null;
};

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Keep modules and packages independent from the app and from each other',
    },
    schema: [],
    messages: {
      appAlias:
        "'{{source}}' is an app path alias. The {{boundary}} must not depend on the app: use @zapplib/core or @zapplib/ui, or move the code into the {{boundary}}.",
      outside:
        "'{{source}}' reaches outside the {{boundary}}. Import only its own files, installed packages, @zapplib/core or @zapplib/ui.",
    },
  },
  create(context) {
    const boundary = getBoundary(context.filename);
    if (!boundary) return {};

    const check = (node) => {
      const source = node?.value;
      if (typeof source !== 'string') return;

      if (isAppAlias(source)) {
        context.report({ node, messageId: 'appAlias', data: { source, boundary: boundary.name } });
        return;
      }

      if (source.startsWith('.')) {
        const target = path.resolve(path.dirname(context.filename), source);
        const relative = path.relative(boundary.dir, target);
        if (relative.startsWith('..') || path.isAbsolute(relative)) {
          context.report({ node, messageId: 'outside', data: { source, boundary: boundary.name } });
        }
      }
    };

    return {
      ImportDeclaration: (node) => check(node.source),
      ExportAllDeclaration: (node) => check(node.source),
      ExportNamedDeclaration: (node) => check(node.source),
      ImportExpression: (node) => check(node.source),
    };
  },
};
