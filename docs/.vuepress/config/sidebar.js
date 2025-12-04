/**
 * @Author: longmo
 * @Date: 2025-12-05 00:29:22
 * @LastEditTime: 2025-12-05 00:35:23
 * @FilePath: docs/.vuepress/config/sidebar.js
 * @Description: 
 */
// https://github.com/detailyang/vuepress/blob/1a930dc22e4298b648dad37fa07e2442cdcb3c10/packages/docs/docs/.vuepress/config.js
function getGuideSidebar() {
    return  [
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
    ]
}

function getExampleSidebar() {
    return  [
        {
            title: '文档',
            collapsable: false,
            children: [
                '/',
                '/markdown-it-toc-example'
            ]
        }
    ]
}
module.exports = {
    getGuideSidebar,
    getExampleSidebar
}
