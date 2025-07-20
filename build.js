import { build } from "esbuild";
import vuePlugin from "esbuild-plugin-vue3";
import fs from "fs";
import path from "path";
build({
  entryPoints: ["src/main.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  minify: true,
  plugins: [vuePlugin()],
}).catch(() => process.exit(1));

fs.copyFileSync("./index.html", "dist/index.html");
