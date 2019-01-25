const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
             app: './src/index.js',
         //app2: './src/index2.js'
   },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader'
                 ]
            },

     ]
   },
    devServer: {
             contentBase: './dist',
   },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
    ]
};