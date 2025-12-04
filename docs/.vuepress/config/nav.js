/**
 * @Author: longmo
 * @Date: 2025-12-04 23:48:13
 * @LastEditTime: 2025-12-05 00:24:09
 * @FilePath: docs/.vuepress/config/nav.js
 * @Description:
 */
const NavItems= [
    {text: '首页', link: '/'},
    {text: '指南', link: '/guide/'},
    {
        text: '示例',
        items: [
            {text: 'TOC 插件示例', link: '/markdown-it-toc-example'}
        ]
    },
    {text: 'GitHub', link: 'https://github.com'},
    {
        text: "Changelog",
        link: "https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md"
    }
]

exports.NavItems = NavItems
