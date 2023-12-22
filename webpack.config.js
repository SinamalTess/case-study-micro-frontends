const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {webpackCommonConfig} = require("./webpack.config.common");

module.exports = {
    ...webpackCommonConfig,
    entry: "./packages/container/index.ts",
    devServer: {
        port: 8081
    },
}
