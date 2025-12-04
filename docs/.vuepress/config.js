/**
 * @Author: longmo
 * @Date: 2025-11-29 21:04:28
 * @LastEditTime: 2025-12-05 00:33:49
 * @FilePath: docs/.vuepress/config.js
 * @Description:
 */
const {NavItems} = require('./config/nav')
const {getGuideSidebar, getExampleSidebar} = require("./config/sidebar");
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    cache: false,
    dest: '../../dist',
    // 主题配置
    themeConfig: {
        // 导航栏配置
        nav: NavItems,
        // locales: {
        //     '/': {
        //         label: '简体中文',
        //         selectText: '选择语言',
        //         ariaLabel: '选择语言',
        //         editLinkText: '在 GitHub 上编辑此页',
        //         lastUpdated: '上次更新',
        //         nav: NavItems,
        //         // sidebar: Sidebar4EN
        //     },
        // },
        // 侧边栏配置
        sidebar: {
            '/': getExampleSidebar(),
            '/guide/': getGuideSidebar(),
        },

        // 侧边栏深度
        sidebarDepth: 2,

        // 搜索功能
        searchMaxSuggestions: 10,

        // 编辑链接
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页'
    },
    smoothScroll: true,
    // 插件配置 
    plugins: [
        'demo-container-v2.7',
        '@vuepress/back-to-top',
        // ['vuepress-plugin-side-anchor'], // 右侧添加侧边锚点
        ['vuepress-plugin-right-anchor'],
        // '@vuepress/active-header-links'
        ['vuepress-plugin-code-copy', {
            selector: 'div[class*="language-"] pre',
            align: 'top',
            color: '#27b1ff',
            backgroundTransition: true,
            backgroundColor: '#0075b8',
            successText: 'Copied!'
        }],
        ['vuepress-plugin-reading-time', {excludes: ['/about', '/tag/.*']}],
    ],
    extendMarkdown: md => {
        // 使用更多的 markdown-it 插件!
        // md.use(require('markdown-it-toc-done-right'))
        // md.use(require('markdown-it-disable-url-encode'));
    },
    extraWatchFiles: [
        '.vuepress/nav.js',
        '.vuepress/config/**'
    ]
    // // 客户端配置
    // clientRootMixin: require.resolve('./client-enhance.js'),

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

