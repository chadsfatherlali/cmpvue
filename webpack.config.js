const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
	mode: ENV,
	entry: {
		cmp: './src/main.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
	        	test: /\.scss$/,
		        use: [
		          'vue-style-loader',
		          'css-loader',
		          'sass-loader'
		        ]
		    }
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
