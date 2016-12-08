var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./app/index.js', './css/master.css'],
  output: {
    path: './build',
    filename: 'app.js'
  },
  resolve: {
    root: path.resolve(__dirname, 'app'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  postcss: function() {
    return [require('postcss-import'), require('precss'), require('autoprefixer'), require('cssnano')]
  }
}
