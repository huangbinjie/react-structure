var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './app/app.ts'
        ],
        vendor: ["react", 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/tuibao/build",
        filename: 'tuibao/build/app.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=20480&name=images/[hash].[ext]" },
            { test: /\.jpg|\.svg$/, loader: "file-loader?name=images/[hash].[ext]" },
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.tsx', '.ts', '.js'],
        modulesDirectories: ['node_modules', 'app']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "[name].js"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "common.bundle.js"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./assets/index.html",
            minify: { collapseWhitespace: true },
            hash: true
        }),
    ]
}