import * as path from 'path'

export default {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		}
	},
}
