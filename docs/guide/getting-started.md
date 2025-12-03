# 快速开始

## 安装

```bash
# 使用 npm
npm install -D vuepress

# 使用 yarn
yarn add -D vuepress

# 使用 pnpm
pnpm add -D vuepress
```

## 创建项目

```bash
mkdir vuepress-starter
cd vuepress-starter

# 初始化 package.json
npm init -y

# 创建文档目录
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

## 配置文件

在 `docs/.vuepress/config.js` 中添加基本配置：

```javascript
module.exports = {
  title: '我的 VuePress 网站',
  description: '这是我的第一个 VuePress 项目'
}
```

## 启动开发服务器

```bash
# 在 package.json 中添加脚本
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}

# 启动开发服务器
npm run dev
```

## 构建静态网站

```bash
npm run build
```

构建后的文件将生成在 `docs/.vuepress/dist` 目录中。