# 部署指南

## 部署到 GitHub Pages

### 1. 配置 base

在 `config.js` 中设置 `base`：

```javascript
module.exports = {
  base: '/your-repo-name/',
  // ...其他配置
}
```

### 2. 创建 GitHub Actions 工作流

在 `.github/workflows/deploy.yml` 中：

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '14'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs/.vuepress/dist
```

## 部署到 Netlify

### 1. 构建配置

在 Netlify 控制台中设置：

- **Build command**: `npm run build`
- **Publish directory**: `docs/.vuepress/dist`

### 2. 环境变量

设置 `NODE_VERSION` 为 `14` 或更高版本。

## 部署到 Vercel

### 1. 安装 Vercel CLI

```bash
npm i -g vercel
```

### 2. 部署

```bash
vercel --prod
```

### 3. 配置 vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "docs/.vuepress/dist",
  "installCommand": "npm install"
}
```

## 部署到自己的服务器

### 1. 构建项目

```bash
npm run build
```

### 2. 上传文件

将 `docs/.vuepress/dist` 目录下的所有文件上传到服务器的 web 根目录。

### 3. 配置 Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 使用 Docker 部署

### 1. 创建 Dockerfile

```dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/docs/.vuepress/dist /usr/share/nginx/html
```

### 2. 构建和运行

```bash
# 构建镜像
docker build -t vuepress-site .

# 运行容器
docker run -d -p 80:80 vuepress-site
```

## 自动化部署脚本

```bash
#!/bin/bash

# deploy.sh
echo "开始部署..."

# 构建项目
npm run build

# 部署到服务器
rsync -avz --delete docs/.vuepress/dist/ user@server:/path/to/web/

echo "部署完成！"
```

## 常见问题

### 1. 静态资源 404

确保在 `config.js` 中正确设置了 `base` 路径。

### 2. 路由问题

对于 SPA 路由，需要配置服务器重定向规则。

### 3. 缓存问题

部署后清除 CDN 缓存或浏览器缓存。