const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  cache: true,
  entry: './src/input-editor.ts',
  target: 'web',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'input-editor.js',
    library: 'InputEditor',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/u,
        exclude: /node_modules/,
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
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
