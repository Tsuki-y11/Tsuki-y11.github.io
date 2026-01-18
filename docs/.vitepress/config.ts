import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Tsuki-y11",
  description: "学习笔记",
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Note', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Tsuki-y11' }  // ✅ 删除末尾空格
    ],
    
    sidebar: [
      {
        text: '📚 全部笔记',
        collapsed: false,
        items: [
          {
            text: '大一上',
            items: [
              { text: '排序算法', link: '/algorithm/sorting' },
              { text: '搜索算法', link: '/algorithm/searching' },
              { text: '动态规划', link: '/algorithm/dp' }
            ]
          },
          {
            text: '大一下',
            items: [
              { text: 'SWDW', link: '/bayesian-network/probability' },
              { text: 'OOP', link: '/bayesian-network/structure' },
              { text: 'Discrete Math', link: '/bayesian-network/inference' }
            ]
          },
          {
            text: '大二上',
            items: [
              { text: 'Computer Organization', link: '/bioinformatics/sequence-alignment' },
              { text: 'Data Structure & Algorithm', link: '/bioinformatics/gene-prediction' },
              { text: 'Database Management System', link: '/compiler-construction/lecture/compiler-introduction' },  // ✅ 补全 link
              { text: 'Probability & Statistic', link: '/compiler-construction/lecture/compiler-lexical-analysis' }  // ✅ 补全 link
            ]
          },
          {
            text: '大二下',
            items: [
              { text: '编译器简介', link: '/compiler-construction/lecture/compiler-introduction' },
              { text: '词法分析', link: '/compiler-construction/lecture/compiler-lexical-analysis' },
              { text: '语法分析', link: '/compiler-construction/lecture/compiler-syntax-analysis' },
              { text: '语义分析', link: '/compiler-construction/lecture/compiler-semantic-analysis' },
              { text: '中间代码生成', link: '/compiler-construction/lecture/compiler-intermediate-code' },
              { text: 'First集与Follow集', link: '/compiler-construction/lecture/compiler-first-follow-set' }
            ]
          }
        ]
      }
    ]
  }
})