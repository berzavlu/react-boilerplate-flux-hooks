const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const isProd = process.env.NODE_ENV === 'production'
const JSON_ENV = JSON.stringify(process.env.NODE_ENV)

module.exports = {
  entry: ['./app/index.jsx'],
  output: {
    filename: 'static/js/[name].[hash].chunk.js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: ['/node_modules'],
        use: [
          {
            loader: 'babel-loader',
            query: { compact: 'auto' },
          },
          {
            loader: 'eslint-loader',
            options: { fix: true },
          },
        ],
      },
      {
        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: 'style_[local]__[hash:base64:5]',
                    context: path.resolve(__dirname, 'src'),
                    hashPrefix: 'my-custom-hash',
                  },
                  onlyLocals: false,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  prependData: () => {
                    return `@import "./app/styles/base/_variables.scss";`
                  },
                },
              },
            ],
          },
          { use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
        ],
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader'],
            sideEffects: isProd,
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      assets: path.resolve(__dirname, './app/styles'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new SimpleProgressWebpackPlugin({ format: 'compact' }),
    new Dotenv(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON_ENV } }),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebPackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({
      filename: isProd
        ? 'static/css/[name].[contenthash].chunk.css'
        : '[name].css',
    }),
    new ErrorOverlayPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/resources', to: 'resources' }],
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 4000,
      proxy: 'http://localhost:4000/',
      open: false,
    }),
  ],
}
