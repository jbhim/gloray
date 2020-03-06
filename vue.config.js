let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',

    devServer: {
        open: false // 配置自动启动浏览器
    },

    // 别名配置
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    }

}
