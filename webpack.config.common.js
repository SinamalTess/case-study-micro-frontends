const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    webpackCommonConfig: {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
            }),
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    },
}
