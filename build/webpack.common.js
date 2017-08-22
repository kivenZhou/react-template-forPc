const webpack = require('webpack')
const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, '')
];

module.exports = {
    entry: {
        'index': ['./src/entries/main.js']
    },
    output: {
        filename: 'js/[name].[hash].js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist/'),
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
		extensions: ['.web.js', '.js', '.json']
    },
    module: {
        rules:[{
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            include: svgSpriteDirs,
        },{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: ['babel-loader']
        },{
            test: /\.html$/,
            exclude:/(node_modules)/,
            loader: 'html-loader?attrs=img:src img:data-src'
        },{
            test: /\.(jpg|gif|png)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: 'img/[hash:8].[name].[ext]',
                }
            }]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            exclude: /(node_modules)/,
            use: 'file-loader'
        }]
    }
}