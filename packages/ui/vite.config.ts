import { readdirSync } from 'fs';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const dirname = import.meta.dirname;

// Every file in src/lib becomes its own entry so consumers can import a single
// component, e.g. '@zapplib/ui/components/PasswordField'.
const libDir = resolve(dirname, 'src/lib');
const subpathEntries = Object.fromEntries(
  readdirSync(libDir, { recursive: true, encoding: 'utf8' })
    .filter((file) => /\.tsx?$/.test(file))
    .map((file) => [file.replace(/\.tsx?$/, '').replaceAll(path.sep, '/'), resolve(libDir, file)]),
);

export default defineConfig({
  plugins: [
    dts({
      include: ['src'],
      entryRoot: 'src',
      outDirs: 'dist/types',
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    // Prevent Vite from transpiling ESM syntax into CJS-compatible output
    target: 'esnext',
    copyPublicDir: false,
    lib: {
      entry: {
        index: resolve(dirname, 'src/index.ts'),
        ...subpathEntries,
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      // Use a function to cover sub-path imports like:
      // 'react/jsx-runtime', '@mui/material/Button', '@mui/x-date-pickers/AdapterDayjs'
      // A plain string array only matches exact IDs, leaving sub-paths bundled in
      // and causing duplicate React instances or require() calls at runtime.
      external: (id: string) => {
        const externalPackages = [
          '@emotion/react',
          '@emotion/styled',
          '@iconify/react',
          '@mui/material',
          '@mui/x-data-grid',
          '@mui/x-date-pickers',
          '@zapplib/core',
          'dayjs',
          'react',
          'react-dom',
          'react-i18next',
        ];
        return externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
      },
      output: {
        format: 'es',
        // Code shared between entries goes to chunks/, so importing one entry
        // only loads the chunks it actually needs.
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
});
