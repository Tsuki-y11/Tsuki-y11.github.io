import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Tsuki-y11",
  description: "二叉搜索树、AVL树学习笔记",
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构', link: '/data-structures/binary-search-tree' },
      { text: '算法', link: '/algorithms/' },
      { text: 'GitHub', link: 'https://github.com/Tsuki-y11' }
    ],
    
    // 侧边栏（最关键）
    sidebar: {
      // 数据结构分类
      '/data-structures/': [
        {
          text: '树结构',
          collapsed: false, // 默认展开
          items: [
            { text: '二叉搜索树', link: '/data-structures/binary-search-tree' },
            { text: 'AVL树', link: '/data-structures/avl-tree' },
            { text: '红黑树', link: '/data-structures/red-black-tree' }
          ]
        },
        {
          text: '图结构',
          collapsed: true, // 默认折叠
          items: [
            { text: 'DFS与BFS', link: '/data-structures/dfs-bfs' },
            { text: '最短路径', link: '/data-structures/shortest-path' }
          ]
        }
      ],
      
      // 算法分类
      '/algorithms/': [
        {
          text: '基础算法',
          items: [
            { text: '排序算法', link: '/algorithms/sorting' },
            { text: '搜索算法', link: '/algorithms/searching' }
          ]
        }
      ]
    }
  }
})
