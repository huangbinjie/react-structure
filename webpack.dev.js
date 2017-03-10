var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            'webpack/hot/only-dev-server',
            './app/app.ts'
        ],
        vendor: ["react", 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/",
        filename: 'app.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=20480&name=images/[hash].[ext]" },
            { test: /\.jpg|\.svg$/, loader: "file-loader?name=images/[hash].[ext]" },
            { test: /\.tsx?$/, loaders: ["react-hot", 'ts'] }
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
        new ExtractTextPlugin('build/css/[name].css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./assets/index.html",
            minify: { collapseWhitespace: true },
            hash: true
        }),
    ]
}