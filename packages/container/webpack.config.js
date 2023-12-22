const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

module.exports = {
    extends: [path.resolve(__dirname, '../../webpack.config.common.js')],
    entry: './src/index.ts',
    devServer: {
        port: 8081,
    },
    plugins: [new ModuleFederationPlugin({
        name: 'container',
        filename: 'remoteEntry.js',
        exposes: {
            './containerIndex': './src/index'
        }
    })],
}
