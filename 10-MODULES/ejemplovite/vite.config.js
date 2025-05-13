import { build } from "vite";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // root: "./src",
  /*   server: {
    port: 3000,
    open: true
  }, */
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        acerca: resolve(__dirname, "acerca.html"),
        contacto: resolve(__dirname, "contacto.html"),
      },
    },
  },
  /*--- configuracion del cors para habilitar lectura de api--*/
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // IP  del backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Opcional, según cómo su backend espera las rutas o endpoints
      },
    },
  },
});
