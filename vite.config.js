import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from "vite-plugin-qrcode";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), qrcode()],

	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "src/__tests__/setup.js",
	},
});
