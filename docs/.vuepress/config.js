/**
 * @Author: longmo
 * @Date: 2025-11-29 21:04:28
 * @LastEditTime: 2025-12-03 21:52:12
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
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { 
                text: '示例', 
                items: [
                    { text: 'TOC 插件示例', link: '/markdown-it-toc-example' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com' }
        ],
        
        // 侧边栏配置
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '/guide/',
                        '/guide/getting-started',
                        '/guide/configuration',
                        '/guide/deployment'
                    ]
                }
            ],
            '/': [
                {
                    title: '文档',
                    collapsable: false,
                    children: [
                        '/',
                        '/markdown-it-toc-example'
                    ]
                }
            ]
        },
        
        // 侧边栏深度
        sidebarDepth: 2,
        
        // 搜索功能
        searchMaxSuggestions: 10,
        
        // 编辑链接
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页'
    },
    
    // 插件配置
    plugins: [
        'demo-container-v2.7',
    ],
    extendMarkdown: md => {
        // 使用更多的 markdown-it 插件!
        md.use(require('markdown-it-toc-done-right'))
    }
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
