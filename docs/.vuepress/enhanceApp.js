/**
 * @Author: longmo
 * @Date: 2025-12-04 23:36:44
 * @LastEditTime: 2025-12-04 23:43:06
 * @FilePath: docs/.vuepress/enhanceApp.js
 * @Description:
 */
/**
 * Client app enhancement file.
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 *
 * TODO
 * [ ] import bulma css here
 * [ ] use d3-graphviz <Dot> SFC
 */

export default ({
                    isServer,
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData // site metadata
                }) => {
    // ...apply enhancements for the site.
    // if (!isServer) {
    //     import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
    //         Vue.use(module.default)
    //     })
    // }
}
