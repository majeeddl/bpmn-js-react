import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import VitePluginStyleInject from "vite-plugin-style-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    VitePluginStyleInject(),
    // terser(),
    // scss({
    //   output: "dist/index.min.css",
    //   outputStyle: "compressed",
    // }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      name: "BpmnJsReact",
      formats: ["es", "umd"],
      fileName: (format) => `bpmn-js-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
