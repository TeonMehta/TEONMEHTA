const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
             app: './src/js/index.js',
             work: './src/js/work.js',
            about:'./src/js/about.js',
            contact:'./src/js/contact.js',
   },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {

        },
        extensions: ['.js', '.jsx', '.css']
    },
    target: 'web',
    devtool: '#source-map',


    module: {
             rules: [
                 {
                     test: /\.js$/,
                     exclude: /node_modules/,
                     loader: "babel-loader",
                 },
                 {
                     // Loads the javacript into html template provided.
                     // Entry point is set below in HtmlWebPackPlugin in Plugins
                     test: /\.html$/,
                     use: [
                         {
                             loader: "html-loader",
                             //options: { minimize: true }
                         }
                     ]
                 },
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

     ]
   },
   //  devServer: {
   //           contentBase: './dist',
   // },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/templates/index.html',
            filename: 'index.html',
            excludeChunks: [ 'server' ]
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/templates/work.html',
            filename: 'work.html',
            excludeChunks: [ 'server' ]
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/templates/about.html',
            filename: 'about.html',
            excludeChunks: [ 'server' ]
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/templates/contact.html',
            filename: 'contact.html',
            excludeChunks: [ 'server' ]
        }),
    ]
};