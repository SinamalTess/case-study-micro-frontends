const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

module.exports = {
    extends: [path.resolve(__dirname, '../../webpack.config.common.js')],
    entry: './src/index.ts',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                sectionA: 'sectionA@http://localhost:8082/remoteEntry.js',
            },
        }),
    ],
}
