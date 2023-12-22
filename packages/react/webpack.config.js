const {webpackCommonConfig} = require("../../webpack.config.common");

module.exports = {
    ...webpackCommonConfig,
    entry: "./src/index.tsx",
    devServer: {
        port: 8082
    },
}
