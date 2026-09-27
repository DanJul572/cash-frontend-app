import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const dirname = import.meta.dirname;

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
      entry: { index: resolve(dirname, 'src/index.ts') },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      // Cover sub-path imports like 'react/jsx-runtime' so React is never bundled twice
      external: (id: string) => {
        const externalPackages = ['axios', 'react'];
        return externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
      },
    },
  },
});
