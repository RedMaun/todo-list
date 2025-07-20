// import { fileURLToPath, URL } from "node:url";

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueDevTools from "vite-plugin-vue-devtools";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/todo-list",
//   plugins: [vue()], //vueDevTools()],
//   build: {
//     outDir: "dist", // default
//     rollupOptions: {
//       input: "index.html", // or another entry point
//     },
//   },
//   // resolve: {
//   //   alias: {
//   //     "@": fileURLToPath(new URL("./src", import.meta.url)),
//   //   },
//   // },
// });

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});
