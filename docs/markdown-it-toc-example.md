# markdown-it-toc-done-right 使用示例

## 简介

`markdown-it-toc-done-right` 是一个用于生成目录（Table of Contents）的 markdown-it 插件。它能够自动解析 Markdown 文档中的标题，并生成相应的目录链接。

## 安装

```bash
npm install markdown-it-toc-done-right
# 或
pnpm add markdown-it-toc-done-right
# 或
yarn add markdown-it-toc-done-right
```

## 基本用法

### 1. 在 Node.js 中使用

```javascript
const MarkdownIt = require('markdown-it');
const toc = require('markdown-it-toc-done-right');

const md = new MarkdownIt()
  .use(toc);

const markdown = `
# 主标题

## 第一章节

这里是一些内容...

### 1.1 子章节

更多内容...

## 第二章节

其他内容...
`;

const result = md.render(markdown);
console.log(result);
```

### 2. 在 VuePress 中配置

在 `docs/.vuepress/config.js` 中配置：

```javascript
module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-toc-done-right'), {
        // 配置选项
        level: [1, 2, 3],
        listType: 'ul',
        format: function(x, htmlencode) {
          return x;
        }
      });
    }
  }
};
```

## 配置选项

### 基本配置

```javascript
md.use(toc, {
  // 指定包含的标题级别
  level: [1, 2, 3, 4, 5, 6],
  
  // 目录列表类型：'ul' 或 'ol'
  listType: 'ul',
  
  // 自定义格式化函数
  format: function(x, htmlencode) {
    return x;
  },
  
  // 自定义 CSS 类名
  listClass: 'toc',
  listItemClass: 'toc-item',
  linkClass: 'toc-link',
  
  // 自定义 ID 前缀
  slugify: function(s) {
    return s.toString().toLowerCase()
      .replace(/\s+/g, '-')     // 替换空格为连字符
      .replace(/[^\w\-]+/g, '') // 移除非单词字符
      .replace(/\-\-+/g, '-')   // 替换多个连字符为单个
      .replace(/^-+/, '')       // 移除开头连字符
      .replace(/-+$/, '');      // 移除结尾连字符
  }
});
```

### 高级配置

```javascript
md.use(toc, {
  // 只包含特定级别的标题
  level: [2, 3, 4],
  
  // 使用有序列表
  listType: 'ol',
  
  // 自定义格式化
  format: function(x, htmlencode) {
    // 可以添加图标或其他 HTML 元素
    return htmlencode(x);
  },
  
  // 自定义容器
  containerHeaderHtml: '<div class="toc-header">目录</div>',
  containerFooterHtml: '</div>',
  
  // 自定义回调函数
  callback: function(html, ast) {
    // 处理生成的目录 HTML
    return html;
  }
});
```

## 实际示例

### 示例 1：基本目录生成

**输入 Markdown：**
```markdown
# 文档标题

[[toc]]

## 安装

安装步骤...

## 配置

配置说明...

### 基础配置

基础配置项...

### 高级配置

高级配置项...

## 使用方法

使用说明...
```

**输出 HTML：**
```html
<h1>文档标题</h1>
<div class="table-of-contents">
  <ul class="toc">
    <li class="toc-item">
      <a class="toc-link" href="#安装">安装</a>
    </li>
    <li class="toc-item">
      <a class="toc-link" href="#配置">配置</a>
      <ul class="toc">
        <li class="toc-item">
          <a class="toc-link" href="#基础配置">基础配置</a>
        </li>
        <li class="toc-item">
          <a class="toc-link" href="#高级配置">高级配置</a>
        </li>
      </ul>
    </li>
    <li class="toc-item">
      <a class="toc-link" href="#使用方法">使用方法</a>
    </li>
  </ul>
</div>
<h2 id="安装">安装</h2>
<p>安装步骤...</p>
<!-- 其他内容... -->
```

### 示例 2：自定义样式

```javascript
// 在 VuePress 配置中
module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-toc-done-right'), {
        level: [2, 3],
        listType: 'ul',
        listClass: 'custom-toc',
        listItemClass: 'custom-toc-item',
        linkClass: 'custom-toc-link'
      });
    }
  },
  head: [
    ['style', {}, `
      .custom-toc {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
      }
      .custom-toc-item {
        margin: 0.5rem 0;
      }
      .custom-toc-link {
        color: #2c3e50;
        text-decoration: none;
      }
      .custom-toc-link:hover {
        text-decoration: underline;
      }
    `]
  ]
};
```

### 示例 3：结合锚点插件

```javascript
const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');
const toc = require('markdown-it-toc-done-right');

const md = new MarkdownIt()
  .use(anchor, {
    permalink: true,
    permalinkClass: 'header-anchor'
  })
  .use(toc, {
    level: [2, 3],
    listType: 'ul'
  });
```

## 在 VuePress 中的完整配置

```javascript
// docs/.vuepress/config.js
module.exports = {
  title: '我的文档',
  description: '使用 markdown-it-toc-done-right 的示例',
  
  markdown: {
    extendMarkdown: md => {
      // 添加锚点插件
      md.use(require('markdown-it-anchor'), {
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: '#'
      });
      
      // 添加目录插件
      md.use(require('markdown-it-toc-done-right'), {
        level: [2, 3, 4],
        listType: 'ul',
        listClass: 'table-of-contents',
        listItemClass: 'toc-item',
        linkClass: 'toc-link',
        format: function(x, htmlencode) {
          return htmlencode(x);
        }
      });
    }
  },
  
  themeConfig: {
    sidebar: 'auto'
  },
  
  head: [
    ['style', {}, `
      .table-of-contents {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 6px;
        padding: 1rem;
        margin: 1.5rem 0;
      }
      .table-of-contents ul {
        margin: 0;
        padding-left: 1.5rem;
      }
      .table-of-contents li {
        margin: 0.25rem 0;
      }
      .table-of-contents a {
        color: #495057;
        text-decoration: none;
      }
      .table-of-contents a:hover {
        color: #007bff;
        text-decoration: underline;
      }
    `]
  ]
};
```

## 使用技巧

### 1. 在文档中插入目录

在 Markdown 文件中使用 `[[toc]]` 来插入目录：

```markdown
# 文档标题

[[toc]]

## 第一章节

内容...
```

### 2. 控制目录级别

通过配置 `level` 选项来控制包含的标题级别：

```javascript
// 只包含 h2 和 h3 标题
md.use(toc, {
  level: [2, 3]
});
```

### 3. 自定义目录位置

你可以在文档的任何位置使用 `[[toc]]` 来插入目录，通常放在标题之后：

```markdown
---
title: 我的文档
---

# 我的文档

[[toc]]

## 开始

这里开始正文...
```

## 常见问题

### Q: 目录不显示？
A: 确保：
1. 在文档中使用了 `[[toc]]` 标记
2. 配置了正确的标题级别
3. 标题有对应的内容

### Q: 目录链接不跳转？
A: 确保同时使用了锚点插件（如 `markdown-it-anchor`）

### Q: 如何自定义目录样式？
A: 通过 CSS 类名自定义样式，或使用 `listClass`、`linkClass` 等配置项

## 相关插件

- `markdown-it-anchor`: 为标题添加锚点
- `markdown-it`: Markdown 解析器
- `vuepress`: Vue 静态网站生成器

## 总结

`markdown-it-toc-done-right` 是一个功能强大的目录生成插件，特别适合用于文档网站和博客。通过合理配置，可以生成美观、实用的目录结构，提升用户的阅读体验。