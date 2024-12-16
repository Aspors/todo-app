import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";
import { packageDirectorySync } from "pkg-dir";

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve(packageRoot, "./src"),
            "@/styles": path.resolve(packageRoot, "./src/app/styles"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                additionalData: (content, filePath) => {
                    if (filePath.endsWith("index.scss")) {
                        return content;
                    }

                    return `@use '@/styles/index.scss' as *;` + content;
                },
            },
        },
    },
});
