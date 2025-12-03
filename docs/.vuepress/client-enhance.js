// VuePress 客户端增强文件
// 用于集成 MSW Mock 服务

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用运行在服务器还是客户端
}) => {
  // 只在客户端环境下启动 MSW
  // if (!isServer && process.env.NODE_ENV === 'development') {
  //   import('../../mock/browser').then(({ startMockWorker }) => {
  //     startMockWorker()
  //   }).catch(error => {
  //     console.error('Failed to load MSW:', error)
  //   })
  // }
}
