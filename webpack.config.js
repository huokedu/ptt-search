const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const configs = {
  entry: './index.js',
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', 
        query:{
          presets: ['react', 'env'],
          plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ],
  },
  plugins: [new HtmlWebPackPlugin({
      template: './index.html'
  })],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'index_bundle.js'
  },
}

module.exports = configs;

