var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
    },
    plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
    extensions: ['.js', '.jsx']
    },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        include: [
          path.resolve(__dirname, "src"),
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader",
      }
    ],
  }
}