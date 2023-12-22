const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

module.exports = {
    extends: [path.resolve(__dirname, '../../webpack.config.common.js')],
    entry: './src/index.tsx',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'react',
            filename: 'remoteEntry.js',
            exposes: {
                './reactIndex': './src/index',
            },
        }),
    ],
}
