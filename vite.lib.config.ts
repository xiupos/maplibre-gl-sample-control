import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,

    lib: {
      entry: "src/main.ts",
      formats: ["es", "cjs"],
    },
  },
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.lib.json',
    }),
  ],
});
