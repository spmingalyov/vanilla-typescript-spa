const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/index.ts',
	mode: 'development',
	devServer: {
		static: path.join(__dirname, 'dist'), // Используйте static вместо contentBase
		compress: true,
		port: 8080,
		open: true, // Автоматически открывать браузер
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{ test: /\.txt$/, use: 'raw-loader' },
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: 'style-loader',
						options: { injectType: 'singletonStyleTag' },
					},
					'css-loader',
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}
