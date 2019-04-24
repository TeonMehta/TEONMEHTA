const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/index.js',
        work: './src/js/work.js',
        about: './src/js/about.js',
        contact: './src/js/contact.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
                query: {
                    variable: 'contacts',
                    interpolate : '\\{\\{(.+?)\\}\\}',
                    evaluate : '\\[\\[(.+?)\\]\\]'
                }
            }
        ],

    },
    devServer: {
        contentBase: './dist',
        writeToDisk: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            _: "underscore"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/views/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/views/work.html',
            filename: 'work.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/views/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/views/contact.html',
            filename: 'contact.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './src/views/text.ejs',
            filename: 'text.ejs'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './src/views/new-contact.ejs',
            filename: 'new-contact.ejs'
        }),
    ]
};