/**
 * @Author: longmo
 * @Date: 2025-11-29 21:04:28
 * @LastEditTime: 2025-11-30 10:53:03
 * @FilePath: docs/.vuepress/config.js
 * @Description:
 */
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    cache: false,
    
    // 主题配置
    themeConfig: {
        // 导航栏配置
        nav: [
            // { text: '首页', link: '/' },
            // { text: '指南', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com' }
        ],
        
        // 侧边栏配置
        // sidebar: [
        //     '/',
        //     // '/guide/'
        // ]
    },
    
    // 插件配置
    plugins: [
        'demo-container-v2.7',
    ],
    // 客户端配置
    clientRootMixin: require.resolve('./client-enhance.js'),

    // 添加 Webpack 配置处理 ES 模块
    // configureWebpack: (config, isServer) => {
    //     return {
    //         // resolve 配置应该放在顶层
    //         // resolve: {
    //         //     // fullySpecified: false,
    //         //     extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx']
    //         // },
    //         module: {
    //             rules: [
    //                 {
    //                     test: /\.mjs$/,
    //                     include: /node_modules/,
    //                     type: 'javascript/auto',
    //                     use: {
    //                         loader: 'babel-loader',
    //                         options: {
    //                             presets: ['@babel/preset-env']
    //                         }
    //                     }
    //                 }
    //             ]
    //         }
    //     }
    // },
    // 使用 chainWebpack 替代 configureWebpack
    // chainWebpack: (config) => {
    //     config.module
    //         .rule('mjs')
    //         .test(/\.mjs$/)
    //         .include
    //         .add(/node_modules/)
    //         .end()
    //         .type('javascript/auto');
    // }
}
