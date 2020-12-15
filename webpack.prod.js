const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const timestamp = new Date().getTime();
const publicPath = '/input-editor/'; //for github page

module.exports = {
  cache: true,
  entry: {
    app: './examples/index.ts',
  },
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `[name].[hash].bundle.js?_=${timestamp}`,
    path: path.resolve(__dirname, 'public'),
    pathinfo: true,
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/u,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        removeComments: true,
      },
      template: 'examples/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['browser', 'module', 'main'],
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
  },
};
