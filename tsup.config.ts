import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm", "iife"],
  globalName: "NgarsaWidget",
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  treeshake: true,
  outExtension({ format }) {
    if (format === "iife") return { js: ".global.js" };
    if (format === "cjs") return { js: ".cjs" };
    return { js: ".js" };
  },
});
