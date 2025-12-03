# 配置说明

## 基本配置

### 网站标题和描述

```javascript
module.exports = {
  title: '网站标题',
  description: '网站描述'
}
```

### 主题配置

#### 导航栏

```javascript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
    { 
      text: '下拉菜单',
      items: [
        { text: '选项1', link: '/option1' },
        { text: '选项2', link: '/option2' }
      ]
    }
  ]
}
```

#### 侧边栏

```javascript
themeConfig: {
  sidebar: [
    '/',
    '/page1',
    '/page2'
  ]
}
```

#### 分组侧边栏

```javascript
themeConfig: {
  sidebar: [
    {
      title: '分组1',
      collapsable: false,
      children: [
        '/page1',
        '/page2'
      ]
    },
    {
      title: '分组2',
      collapsable: true,
      children: [
        '/page3',
        '/page4'
      ]
    }
  ]
}
```

## 高级配置

### 多语言支持

```javascript
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '中文网站'
    },
    '/en/': {
      lang: 'en-US',
      title: 'English Site'
    }
  }
}
```

### 插件配置

```javascript
module.exports = {
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/plugin-search', {
      searchMaxSuggestions: 10
    }]
  ]
}
```

### 自定义样式

```javascript
module.exports = {
  head: [
    ['link', { rel: 'stylesheet', href: '/styles/custom.css' }]
  ]
}
```

## Webpack 配置

```javascript
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../')
      }
    }
  }
}
```