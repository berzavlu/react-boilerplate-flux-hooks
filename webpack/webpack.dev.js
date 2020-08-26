const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    open: true,
    hot: true,
    port: 4000,
    historyApiFallback: true,
    stats: 'errors-only',
    noInfo: true,
    quiet: true,
  },
})
