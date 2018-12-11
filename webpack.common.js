const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
        index: path.join(__dirname, '/src/index.js'),
        two: path.join(__dirname, '/src/two.js'),
        three: path.join(__dirname, '/src/promise.js')
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('leonzhou wepack'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        }),
        new ExtractTextPlugin('css/index.css')
    ]
}