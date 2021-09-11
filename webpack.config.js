const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-env', {
								useBuiltIns: 'usage',
								corejs: {version: 3, proposals: true}
							}
						]
					]
				}
			},
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)/,
				use: {
					loader: 'url-loader',
					options: { limit: 5000 }
				}
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],

	resolve: {
		alias: {
			'~': path.resolve(__dirname, './'),
			'@lib': path.resolve(__dirname, './lib/'),
			'@public': path.resolve(__dirname, './public/'),
			'@src': path.resolve(__dirname, './src/')
		}
	}
}