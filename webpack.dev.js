const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    devServer: {
        contentBase: './dist',
        port: '9191',
        inline: true,
        historyApiFallback: true,
        hot: true,
        // proxyTale: {
        //     '/api': {
        //         target: 'http://test.com:8080',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    }
})