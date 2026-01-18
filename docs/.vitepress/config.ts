import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Tsuki的博客",
  description: "二叉搜索树、AVL树学习笔记",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/my-note' }
    ],
    sidebar: [
      {
        text: '数据结构',
        items: [
          { text: '二叉搜索树', link: '/my-note' }
        ]
      }
    ]
  }
})
