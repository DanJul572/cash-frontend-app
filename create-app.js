#!/usr/bin/env node

// Scaffolds a new Module Federation remote under apps/<name> following the existing remotes
// (dashboard pattern), then registers it in the host.
// Usage: pnpm create:app [name] [port]   (missing values are asked interactively)
import { execSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { createInterface } from 'readline';

const ROOT_DIR = import.meta.dirname;
const APPS_DIR = join(ROOT_DIR, 'apps');
const FEDERATION_FILE = join(ROOT_DIR, 'module-federation.shared.ts');
const REMOTES_TYPES_FILE = join(ROOT_DIR, 'src', 'remotes.d.ts');
const ENV_EXAMPLE_FILE = join(ROOT_DIR, '.env.example');
// Vite's default port, used by the host dev server
const HOST_PORT = 5173;

const rl = createInterface({ input: process.stdin, output: process.stdout });
// Reading lines through the iterator buffers them, so piped answers are not lost between prompts
const lines = rl[Symbol.asyncIterator]();

async function ask(question) {
  process.stdout.write(question);
  const { value, done } = await lines.next();
  if (done) throw new Error('Input closed before all questions were answered');
  return value;
}

// ── Naming ────────────────────────────────────────────────

const toWords = (name) => name.split('-');
const toCamel = (name) =>
  toWords(name)
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
const toPascal = (name) =>
  toWords(name)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
const toTitle = (name) =>
  toWords(name)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
const toConstant = (name) => name.replaceAll('-', '_').toUpperCase();

const validateName = (name) => {
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(name)) {
    return 'Use kebab-case: lowercase letters and digits separated by "-", e.g. "report-summary"';
  }
  if (existsSync(join(APPS_DIR, name))) return `apps/${name} already exists`;
  if (new RegExp(`^\\s+${toCamel(name)}:`, 'm').test(readFileSync(FEDERATION_FILE, 'utf8'))) {
    return `Remote "${toCamel(name)}" is already registered in module-federation.shared.ts`;
  }
  return null;
};

// ── Ports ─────────────────────────────────────────────────

/** Ports taken by the host, every federation remote and any app with a hardcoded port. */
const getUsedPorts = () => {
  const ports = new Set([HOST_PORT]);
  const federation = readFileSync(FEDERATION_FILE, 'utf8');
  for (const [, port] of federation.matchAll(/port:\s*(\d+)/g)) ports.add(Number(port));

  for (const app of readdirSync(APPS_DIR)) {
    const viteConfig = join(APPS_DIR, app, 'vite.config.ts');
    if (!existsSync(viteConfig)) continue;
    for (const [, port] of readFileSync(viteConfig, 'utf8').matchAll(/const port = (\d+)/g)) {
      ports.add(Number(port));
    }
  }
  return ports;
};

/** The first free port after the highest remote port, so remotes stay in one contiguous range. */
const getRecommendedPort = (usedPorts) => {
  const federation = readFileSync(FEDERATION_FILE, 'utf8');
  const remotePorts = [...federation.matchAll(/port:\s*(\d+)/g)].map(([, port]) => Number(port));
  let port = Math.max(HOST_PORT, ...remotePorts) + 1;
  while (usedPorts.has(port)) port++;
  return port;
};

const validatePort = (port, usedPorts) => {
  if (!Number.isInteger(port) || port < 1024 || port > 65535) {
    return 'Port must be a whole number between 1024 and 65535';
  }
  if (usedPorts.has(port)) return `Port ${port} is already used`;
  return null;
};

// ── Prompts ───────────────────────────────────────────────

async function askName(initial) {
  let name = initial?.trim();
  for (;;) {
    if (!name) name = (await ask('App name (kebab-case, e.g. report-summary): ')).trim();
    const error = validateName(name);
    if (!error) return name;
    console.log(`❌ ${error}`);
    if (initial) process.exit(1);
    name = '';
  }
}

async function askPort(initial, usedPorts) {
  const recommended = getRecommendedPort(usedPorts);
  let answer = initial?.trim();
  for (;;) {
    if (!answer) {
      answer = (await ask(`Port (recommended ${recommended}): `)).trim() || `${recommended}`;
    }
    const port = Number(answer);
    const error = validatePort(port, usedPorts);
    if (!error) return port;
    console.log(`❌ ${error}`);
    if (initial) process.exit(1);
    answer = '';
  }
}

// ── Templates ─────────────────────────────────────────────

const getAppFiles = ({ name, camel, pascal, title, constant }) => {
  const namespaceConstant = `${constant}_TRANSLATION_NAMESPACE_CONSTANT`;
  const resources = `${camel}TranslationResources`;
  const pageStyle = `${camel}PageStyle`;
  const moduleDir = `src/modules/${name}`;

  return {
    'package.json': `${JSON.stringify(
      {
        name,
        private: true,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'tsc --noEmit && vite build',
          preview: 'vite preview',
          typecheck: 'tsc --noEmit',
        },
        dependencies: {
          '@emotion/react': 'catalog:',
          '@emotion/styled': 'catalog:',
          '@mui/material': 'catalog:',
          '@tanstack/react-query': 'catalog:',
          '@tanstack/react-router': 'catalog:',
          '@zapplib/core': 'workspace:*',
          axios: 'catalog:',
          i18next: 'catalog:',
          react: 'catalog:',
          'react-dom': 'catalog:',
          'react-i18next': 'catalog:',
        },
        devDependencies: {
          '@module-federation/vite': 'catalog:',
          '@types/react': 'catalog:',
          '@types/react-dom': 'catalog:',
          '@vitejs/plugin-react': 'catalog:',
          typescript: 'catalog:',
          vite: 'catalog:',
        },
      },
      null,
      2,
    )}\n`,

    'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} (standalone)</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,

    'tsconfig.json': readFileSync(join(APPS_DIR, 'dashboard', 'tsconfig.json'), 'utf8'),

    'vite.config.ts': `import { defineConfig } from 'vite';

import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';

import { federationRemotes, getFederationShared } from '../../module-federation.shared';
import packageJson from './package.json' with { type: 'json' };

const { port } = federationRemotes.${camel};

export default defineConfig({
  // Reuse the repo root .env while this remote lives in the monorepo
  envDir: '../..',
  plugins: [
    react(),
    federation({
      name: '${camel}',
      filename: 'remoteEntry.js',
      exposes: {
        './${pascal}Page': './src/exposes/${name}-page.tsx',
      },
      shared: getFederationShared(packageJson.dependencies),
      // The host declares this remote's types itself, so its typecheck never needs the remote running
      dts: false,
    }),
  ],
  server: {
    port,
    strictPort: true,
    origin: \`http://localhost:\${port}\`,
  },
  preview: {
    port,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
});
`,

    'src/main.tsx': `// Async boundary: lets Module Federation negotiate shared singletons before React loads
import('./bootstrap');
`,

    'src/vite-env.d.ts': `/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
`,

    'src/bootstrap.tsx': `import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { CssBaseline } from '@mui/material';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { createHttpClient, setHttpClient } from '@zapplib/core';

import { standaloneRouter } from './standalone/standalone-router';
import { initStandaloneTranslation } from './standalone/standalone-translation';

// Standalone mode: this app provides what the host would otherwise provide
setHttpClient(createHttpClient({ baseURL: import.meta.env.VITE_API_BASE_URL }));
initStandaloneTranslation();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <CssBaseline />
      <RouterProvider router={standaloneRouter} />
    </QueryClientProvider>
  </StrictMode>,
);
`,

    [`src/exposes/${name}-page.tsx`]: `import i18n from 'i18next';

import { ${namespaceConstant} } from '../modules/${name}/constants';
import { ${resources} } from '../modules/${name}/locales';

// i18next is a shared singleton owned by the host, so this remote adds its own namespace
// when it loads instead of the host importing the remote's locale files.
const registerTranslations = () => {
  for (const [lng, resources] of Object.entries(${resources})) {
    i18n.addResourceBundle(lng, ${namespaceConstant}, resources, true);
  }
};

if (i18n.isInitialized) {
  registerTranslations();
} else {
  i18n.on('initialized', registerTranslations);
}

export { default } from '../modules/${name}/pages/${name}-page';
`,

    [`${moduleDir}/constants/index.ts`]: `export * from './translation-constant';
`,

    [`${moduleDir}/constants/translation-constant.ts`]: `export const ${namespaceConstant} = '${camel}';
`,

    [`${moduleDir}/locales/${name}-en.json`]: `${JSON.stringify(
      { title, description: `This is the ${title} page.` },
      null,
      2,
    )}\n`,

    [`${moduleDir}/locales/${name}-id.json`]: `${JSON.stringify(
      { title, description: `Ini adalah halaman ${title}.` },
      null,
      2,
    )}\n`,

    [`${moduleDir}/locales/index.ts`]: `import ${camel}EN from './${name}-en.json';
import ${camel}ID from './${name}-id.json';

/** Register under \`${namespaceConstant}\` in the app's i18n resources. */
export const ${resources} = {
  en: ${camel}EN,
  id: ${camel}ID,
};
`,

    [`${moduleDir}/styles/index.ts`]: `export * from './${name}-page-style';
`,

    [`${moduleDir}/styles/${name}-page-style.ts`]: `import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
} as const satisfies SxProps<Theme>;

export const ${pageStyle} = {
  containerStyle,
} satisfies Record<string, SxProps<Theme>>;
`,

    [`${moduleDir}/pages/${name}-page.tsx`]: `import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ${namespaceConstant} } from '../constants';
import { ${pageStyle} } from '../styles';

export default function ${pascal}Page() {
  const { t } = useTranslation(${namespaceConstant});

  return (
    <Box sx={${pageStyle}.containerStyle}>
      <Typography variant="h5">{t('title')}</Typography>
      <Typography color="text.secondary">{t('description')}</Typography>
    </Box>
  );
}
`,

    'src/standalone/standalone-page-component.tsx': `import ${pascal}Page from '../modules/${name}/pages/${name}-page';

// Standalone mode plays the host's part: it passes the page its config, links and callbacks
export default function StandalonePageComponent() {
  return <${pascal}Page />;
}
`,

    'src/standalone/standalone-placeholder-component.tsx': readFileSync(
      join(APPS_DIR, 'dashboard', 'src', 'standalone', 'standalone-placeholder-component.tsx'),
      'utf8',
    ),

    'src/standalone/standalone-router.tsx': readFileSync(
      join(APPS_DIR, 'dashboard', 'src', 'standalone', 'standalone-router.tsx'),
      'utf8',
    ),

    'src/standalone/standalone-translation.ts': `import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { ${namespaceConstant} } from '../modules/${name}/constants';
import { ${resources} } from '../modules/${name}/locales';

export const initStandaloneTranslation = () => {
  if (i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources: {
      en: { [${namespaceConstant}]: ${resources}.en },
      id: { [${namespaceConstant}]: ${resources}.id },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: ${namespaceConstant},
    interpolation: {
      escapeValue: false,
    },
  });
};
`,
  };
};

// ── Host registration ─────────────────────────────────────

function registerFederationRemote({ name, camel, port }) {
  const content = readFileSync(FEDERATION_FILE, 'utf8');
  const updated = content.replace(
    /(export const federationRemotes = \{[\s\S]*?)(\n\} as const;)/,
    `$1\n  ${camel}: { dir: '${name}', port: ${port} },$2`,
  );
  if (updated === content)
    throw new Error('Could not find federationRemotes in module-federation.shared.ts');
  writeFileSync(FEDERATION_FILE, updated);
}

function registerRemoteTypes({ camel, pascal }) {
  const declaration = `
declare module '${camel}/${pascal}Page' {
  import type { ComponentType } from 'react';

  const ${pascal}Page: ComponentType;
  export default ${pascal}Page;
}
`;
  writeFileSync(REMOTES_TYPES_FILE, readFileSync(REMOTES_TYPES_FILE, 'utf8') + declaration);
}

function registerEnvExample({ constant }) {
  const lines = readFileSync(ENV_EXAMPLE_FILE, 'utf8').split('\n');
  const lastRemoteIndex = lines.findLastIndex((line) => line.startsWith('VITE_REMOTE_'));
  const entry = `VITE_REMOTE_${constant}_ENTRY=`;
  if (lastRemoteIndex === -1) lines.push(entry);
  else lines.splice(lastRemoteIndex + 1, 0, entry);
  writeFileSync(ENV_EXAMPLE_FILE, lines.join('\n'));
}

// ── Main ──────────────────────────────────────────────────

async function main() {
  console.log(`
==================================
 Create Module Federation remote
==================================
`);

  const [argName, argPort] = process.argv.slice(2);
  const usedPorts = getUsedPorts();
  const name = await askName(argName);
  const port = await askPort(argPort, usedPorts);

  const app = {
    name,
    port,
    camel: toCamel(name),
    pascal: toPascal(name),
    title: toTitle(name),
    constant: toConstant(name),
  };

  console.log(`
  Folder         apps/${app.name}
  Remote name    ${app.camel}
  Exposes        ${app.camel}/${app.pascal}Page
  Dev port       ${app.port}
  Env override   VITE_REMOTE_${app.constant}_ENTRY
`);

  if (!argName || !argPort) {
    const confirm = (await ask('Create this app? (Y/n): ')).trim().toLowerCase();
    if (confirm && confirm !== 'y' && confirm !== 'yes') {
      console.log('Cancelled');
      return;
    }
  }

  const appDir = join(APPS_DIR, app.name);
  for (const [file, content] of Object.entries(getAppFiles(app))) {
    const filePath = join(appDir, file);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, content);
  }
  console.log(`✅ Created apps/${app.name}`);

  registerFederationRemote(app);
  registerRemoteTypes(app);
  registerEnvExample(app);
  console.log('✅ Registered in module-federation.shared.ts, src/remotes.d.ts and .env.example');

  console.log('\n📦 Installing dependencies...\n');
  execSync('pnpm install', { cwd: ROOT_DIR, stdio: 'inherit' });

  // pnpm rewrites the lockfile in its own style, so format it together with the new files
  execSync(
    `pnpm exec prettier --write --log-level=warn apps/${app.name} module-federation.shared.ts src/remotes.d.ts pnpm-lock.yaml`,
    { cwd: ROOT_DIR, stdio: 'inherit' },
  );

  console.log(`
✨ Done! Next steps:

  1. Run the remote alone:       pnpm --filter ${app.name} dev   → http://localhost:${app.port}
  2. Use it in the host, e.g. in a route under src/routes:

       const ${app.pascal}Page = lazyRemoteComponent(() => import('${app.camel}/${app.pascal}Page'));

  3. Add props to ${app.pascal}Page? Update its declaration in src/remotes.d.ts too.
`);
}

try {
  await main();
} catch (error) {
  console.error('\n❌ Error:');
  console.error(error.message);
  process.exitCode = 1;
} finally {
  rl.close();
}
