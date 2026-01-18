import{defineConfig} from 'vitepress'

    export default defineConfig({
        title: "Tsuki-y11",
        description: "学习笔记",

        themeConfig: {
            nav: [
                {text: '首页', link: '/'},
                {text: 'Note', link: '/'},
                {text: 'GitHub', link: 'https://github.com/Tsuki-y11'}
            ],

            sidebar: [
                {
                    text: 'Notes',
                    collapsed: false,
                    items: [
                        {
                            text: '大一上',
                            items: [
                                {
                                    text: 'Foundation of Programming C',
                                    collapsed: false,
                                    items: [
                                        {text: 'C Programming Language', link: '大一上/C/basic'},
                                        {text: 'Primary Data Types and Variables (With Number)', link: '大一上/C/Primary'},
                                        {text: 'Formatted IO', link: '大一上/C/Formatted'},
                                        {text: 'Expressions', link: '大一上/C/Expressions'},
                                        {text: 'Decision Making', link: '大一上/C/Decision'},
                                        {text: 'Loops', link: '大一上/C/loops'},
                                        {text: 'Array', link: '大一上/C/array'},
                                        {text: 'Function', link: '大一上/C/function'},
                                        {text: 'Recursion', link: '大一上/C/recursion'},
                                        {text: 'String', link: '大一上/C/string'},
                                        {text: 'Structure Enumeration', link: '大一上/C/structure'},
                                        {text: 'Pointers', link: '大一上/C/poniters'},
                                        {text: 'File', link: '大一上/C/file'},
                                        {text: 'Dynamic Memory', link: '大一上/C/memory'}
                                    ]
                                },
                                {text: 'Linear Algebra', link: '/algorithm/searching'}, {text: 'Calculus I', link: '/algorithm/dp'}
                            ]
                        },
                        {
                            text: '大一下',
                            items: [
                                {text: 'Systems & Web Development Workshop', link: '/bayesian-network/probability'},
                                {
                                    text: 'Object-Oriented Programming',
                                    collapsed: false,
                                    items: [
                                        {text: 'Class', link: '/bayesian-network/structure'}
                                    ]
                                },
                                {text: 'Discrete Math', link: '/bayesian-network/inference'}
                            ]
                        },
                        {
                            text: '大二上',
                            items: [
                                {text: 'Computer Organization', link: '/bioinformatics/sequence-alignment'},
                                {text: 'Data Structures & Algorithms', link: '/bioinformatics/gene-prediction'},
                                {
                                    text: 'Database Management Systems',
                                    collapsed: false,
                                    items: [
                                        {
                                            text: 'Conceptual Design',
                                            items: [
                                                {text: 'ER Model', link: 'DBMS/Conceptual Design/ER'},
                                                {text: 'Constraints', link: 'DBMS/Conceptual Design/constraints'},
                                                {text: 'Extended Features', link: 'DBMS/Conceptual Design/features'},
                                                {text: 'Design Issues', link: 'DBMS/Conceptual Design/design issues'}
                                            ]
                                        },
                                        {
                                            text: 'Logic Design',
                                            items: [
                                                {text: 'Logic Design', link: 'DBMS/logic design'}
                                            ]
                                        },
                                        {
                                            text: 'Relational Design',
                                            items: [
                                                {text: 'Purpose and Atomicity', link: 'DBMS/Relational Design/Purpose and Atomicity'},
                                                {text: 'Functional Dependency', link: 'DBMS/Relational Design/Functional Dependency'},
                                                {text: 'BCNF', link: 'DBMS/Relational Design/BCNF'},
                                                {text: '3NF', link: 'DBMS/Relational Design/3NF'},
                                                {text: 'MVD', link: 'DBMS/Relational Design/MVD'}
                                            ]
                                        }
                                    ]
                                },
                                {text: 'Probability & Statistic', link: '/compiler-construction/lecture/compiler-lexical-analysis'}
                            ]
                        },
                        {
                            text: '大二下',
                            items: [
                                {text: 'Data Programming Workshop', link: '/compiler-construction/lecture/compiler-introduction'},
                                {text: 'Data Communications & Networking', link: '/compiler-construction/lecture/compiler-lexical-analysis'},
                                {text: 'Design & Analysis of Algorithms', link: '/compiler-construction/lecture/compiler-syntax-analysis'},
                                {text: 'Operating Systems', link: '/compiler-construction/lecture/compiler-semantic-analysis'}
                            ]
                        }
                    ]
                }
            ]
        }
    })