import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config
export default defineConfig({
	server: {
		port: 2022,
	},
	preview: {
		port: 2023,
	},
	plugins: [react(), tsconfigPaths(), VitePWA({ registerType: 'autoUpdate' })],
	test: {
		include: ['**/__tests__/**'],
		environment: 'jsdom',
		globals: true,
		setupFiles: ['setupTests.ts'],
	},
})
