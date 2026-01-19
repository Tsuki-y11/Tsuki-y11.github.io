import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "Tsuki-y11",
  description: "学习笔记",
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Note', link: '/Y1S1/C/basic' },  // 修改这里
      { text: 'GitHub', link: 'https://github.com/Tsuki-y11' }
    ],
    
    sidebar: [
      {
        text: 'Notes',
        collapsed: false,
        items: [
          {
            text: 'Y1S1',
            items: [
              {
                text: 'Foundation of Programming C',
                collapsed: false,
                items: [
                  { text: 'C Programming Language', link: '/Y1S1/C/basic' },
                  { text: 'Primary Data Types and Variables (With Number)', link: '/Y1S1/C/Primary' },
                  { text: 'Formatted IO', link: '/Y1S1/C/Formatted' },
                  { text: 'Expressions', link: '/Y1S1/C/Expressions' },
                  { text: 'Decision Making', link: '/Y1S1/C/Decision' },
                  { text: 'Loops', link: '/Y1S1/C/loops' },
                  { text: 'Array', link: '/Y1S1/C/array' },
                  { text: 'Function', link: '/Y1S1/C/function' },
                  { text: 'Recursion', link: '/Y1S1/C/recursion' },
                  { text: 'String', link: '/Y1S1/C/string' },
                  { text: 'Structure Enumeration', link: '/Y1S1/C/structure' },
                  { text: 'Pointers', link: '/Y1S1/C/pointers' },  // 修改这里
                  { text: 'File', link: '/Y1S1/C/file' },
                  { text: 'Dynamic Memory', link: '/Y1S1/C/memory' }
                ]
              },
              { text: 'Linear Algebra', link: '/Y1S1/linear-algebra' },
              { text: 'Calculus I', link: '/Y1S1/calculus-1' }
            ]
          },
          {
            text: 'Y1S2',
            items: [
              { 
                text: 'Systems & Web Development Workshop',
                collapsed: false,
                items: [
                  { text: 'HtmlBasic', link: '/Y1S2/SWDW/1Ahtml'},
                  { text: 'CSS', link: '/Y1S2/SWDW/1bcss'},
                  { text: 'HtmlForms', link: '/Y1S2/SWDW/1cHtmlForms'},
                  { 
                    text: 'JavaScript',
                    collapsed: false,
                    items: [
                      { text: 'JS_IntroEvents', link: '/Y1S2/SWDW/4aJS_intro'},
                      { text: 'JS_Functions', link: '/Y1S2/SWDW/4bJS_functions'},
                      { text: 'JS_Variables', link: '/Y1S2/SWDW/5bJS_Variables'},
                      { text: 'JS_Condition', link: '/Y1S2/SWDW/5c_JS_Condition'},
                      { text: 'JS_Loops', link: '/Y1S2/SWDW/5d_JS_Loops'},
                      { text: 'JS_Arrays', link: '/Y1S2/SWDW/6a_JS_Arrays'},
                      { text: 'JS_Objects', link: '/Y1S2/SWDW/6b_JS_Objects'},
                    ]
                  },
                  {
                    text: 'PHP',
                    collapsed: false,
                    items: [
                      { text: 'PHP_Intro', link: '/Y1S2/SWDW/PHP_Intro'},
                      { text: 'PHP_MySQL', link: '/Y1S2/SWDW/PHP_MySQL'},
                      { text: 'Arrays', link: '/Y1S2/SWDW/PHP_Arrays'},
                      { text: 'Echo & Print Statements', link: '/Y1S2/SWDW/PHP_Echo_Print_Statements'},
                      { text: 'For loops', link: '/Y1S2/SWDW/PHP_for_loops'},
                      { text: 'Functions', link: '/Y1S2/SWDW/PHP_Functions'},
                      { text: 'If.else.elseif Statements', link: '/Y1S2/SWDW/PHP_if.else.elseif_Statements'},
                      { text: 'Switch Statement', link: '/Y1S2/SWDW/PHP_switch_Statement'}
                    ]
                  },
                ]
              },
              {
                text: 'Object-Oriented Programming',
                collapsed: false,
                items: [
                  { text: 'Class', link: '/Y1S2/oop/class' },
                  { text: 'Inheritance', link: '/Y1S2/oop/inheritance' },
                  { text: 'Polymorphism', link: '/Y1S2/oop/polymorphism' }
                ]
              },
              { text: 'Discrete Math', link: '/Y1S2/discrete-math' }
            ]
          },
          {
            text: 'Y2S1',
            items: [
              { text: 'Computer Organization', link: '/Y2S1/computer-org' },
              { text: 'Data Structures & Algorithms', link: '/Y2S1/dsa' },
              {
                text: 'Database Management Systems',
                collapsed: false,
                items: [
                  {
                    text: 'Conceptual Design',
                    items: [
                      { text: 'ER Model', link: '/Y2S1/dbms/conceptual/er-model' },
                      { text: 'Constraints', link: '/Y2S1/dbms/conceptual/constraints' },
                      { text: 'Extended Features', link: '/Y2S1/dbms/conceptual/features' },
                      { text: 'Design Issues', link: '/Y2S1/dbms/conceptual/design-issues' }
                    ]
                  },
                  {
                    text: 'Logic Design',
                    items: [
                      { text: 'Logic Design', link: '/Y1S1/dbms/logic-design' }  // ❌ 路径应该是 /Y2S1
                    ]
                  },
                  {
                    text: 'Relational Design',
                    items: [
                      { text: 'Purpose and Atomicity', link: '/Y2S1/dbms/relational/purpose' },
                      { text: 'Functional Dependency', link: '/Y2S1/dbms/relational/fd' },
                      { text: 'BCNF', link: '/Y2S1/dbms/relational/bcnf' },
                      { text: '3NF', link: '/Y2S1/dbms/relational/3nf' },
                      { text: 'MVD', link: '/Y2S1/dbms/relational/mvd' }
                    ]
                  }
                ]
              },
              { text: 'Probability & Statistic', link: '/Y2S1/probability-stats' }
            ]
          },
          {
            text: 'Y2S2',
            items: [
              { text: 'Data Programming Workshop', link: '/Y2S2/dpw' },
              { text: 'Data Communications & Networking', link: '/Y2S2/dcn' },
              { text: 'Design & Analysis of Algorithms', link: '/Y2S2/daa' },
              { text: 'Operating Systems', link: '/Y2S2/os' }
            ]
          }
        ]
      }
    ]
  }
})
