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
    optimization:{  //优化
        splitChunks:{
            cacheGroups:{//缓存组，一个对象。它的作用在于，可以对不同的文件做不同的处理
                commonjs:{
                    name:'vender',      //输出的名字（提出来的第三方库）
                    test: /\.js/,       //通过条件找到要提取的文件
                    chunks:'initial'    //只对入口文件进行处理
                }
            }
        }
    },
    plugins:[
        new webpack.BannerPlugin('leonzhou wepack'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({ //它是一个插件，所以需要按插件的用法new一个
            $:'jquery', //接收名字:模块名
            _:'underscore'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            chunks: ['index','three','vender'],
            filename: 'test1.html'
        }),
        // new HtmlWebpackPlugin({
        //     title:'陈学辉',    /*这个值对应html里的title*/
        //     template:'./src/template.html', //模板文件地址
        //     filename:'test1.html',  //文件名，默认为index.html（路径相对于output.path的值）
        //     inject:true,    //script标签的位置，true/body为在</body>标签前，head为在<head>里，false表示页面不引入js文件
        //     hash:true,  //是否为引入的js文件添加hash值
        //     chunks:['one'], //页面里要引入的js文件，值对应的是entry里的key。省略参数会把entry里所有文件都引入
        //     excludeChunks:['one'],//页面里不能引入的js文件，与chunks刚好相反
        //     minify:{    //html-webpack-plugin内部集成了html-minifier
        //         collapseWhitespace:true,    //压缩空格
        //         removeAttributeQuotes:true, //移除引号
        //         removeComments:true,        //移除注释
        //     },
        // }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            chunks: ['two','vender'],
            filename: 'test2.html',
            minify:{    //html-webpack-plugin内部集成了html-minifier
                collapseWhitespace:true,    //压缩空格
                removeAttributeQuotes:true, //移除引号
                removeComments:true,        //移除注释
            }
        }),
        new ExtractTextPlugin('css/index.css')
    ]
}