'use strict';

const webpack = require("webpack");
const path = require("path");

const libraryName = "Providers";
module.exports = {
    context: __dirname + "/src",
    entry: {
        ovpProvider: "kProvider/ovp/ovpProvider.js",
        ottProvider: "kProvider/ott/OttProvider.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    // options: { presets: ["es2015"] }
                }],
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
            }
        ]
    },
    devServer: {
        contentBase: __dirname + "/src"
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
};
