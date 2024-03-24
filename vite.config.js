import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        setupFiles: "src/tests/setupTests.js",
        includeSource: ["src/**/*.{js,ts,vue}"]
    },
    define: {
        "import.meta.vitest": "undefined"
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
});
