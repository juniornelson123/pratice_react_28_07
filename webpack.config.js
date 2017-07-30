const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/index.jsx',
	output:{
		path: __dirname+'/public',
		filename: './app.js'
	},
	devServer:{
		port: 3030,
		contentBase: './public'
	},
	resolve: {
		extensions: [' ', '.js', '.jsx'],
		alias: {
			modules: __dirname+'/node_modules',
			jquery: 'modules/jquery/dist/jquery.min.js'
		}
	},
	plugins:[
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new ExtractTextPlugin('app.css')
	],
	module:{
		loaders:[{
			test: /.js[x]?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		},{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
		},{
			test: /\.woff|woff2|.ttf|.eot|.svg|.jpg|.png*.*$/,
			loader: 'file-loader'
		}]
	}

}