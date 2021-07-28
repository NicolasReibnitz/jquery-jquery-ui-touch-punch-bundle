import { defineConfig } from 'vite';
import path from 'path';
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
// import legacy from '@rollup/plugin-legacy';
// import inject from '@rollup/plugin-inject';

export default defineConfig({
	server: {
		open: '/src/index.html'
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'lib/main.js'),
			name: 'MyLib',
			fileName: format => `jquery-jquery-ui-touch-punch-bundle.${format}.js`
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			//   external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				// globals: {
				// 	vue: 'Vue'
				// }
			}
		}
	}
});
