---
layout: home

title: Tsuki-y11
titleTemplate: 学习笔记
description: 计算机科学学习笔记 | 编程 · 算法 · 系统

hero:
  name: Tsuki-y11
  text: 学习笔记
  tagline: 记录计算机科学学习历程，从基础到进阶
  image:
    src: /logo.svg
    alt: Tsuki-y11
  actions:
    - theme: brand
      text: 开始学习 →
      link: /Y1S1/C/basic
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/Tsuki-y11
      external: true

features:
  - icon: 📚
    title: 系统化学习
    details: 按学期分类，循序渐进，覆盖计算机科学核心课程
  - icon: 💻
    title: 代码实践
    details: 包含丰富的代码示例和项目实践，理论与实践结合
  - icon: 🎯
    title: 重点突出
    details: 提炼课程重点难点，帮助高效学习和复习
  - icon: 🔄
    title: 持续更新
    details: 随着学习进度不断更新和完善内容
  - icon: 📖
    title: 结构清晰
    details: 精心组织的目录结构，方便快速查找和学习
  - icon: 🚀
    title: 快速访问
    details: 响应式设计，支持电脑、平板和手机访问

---

## 📈 学习进度

<div class="progress-grid">
  <div class="progress-card">
    <h3>Y1S1 - 第一学期</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 100%"></div>
    </div>
    <p>C语言、线性代数、微积分</p>
  </div>
  
  <div class="progress-card">
    <h3>Y1S2 - 第二学期</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 85%"></div>
    </div>
    <p>Web开发、面向对象、离散数学</p>
  </div>
  
  <div class="progress-card">
    <h3>Y2S1 - 第三学期</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 70%"></div>
    </div>
    <p>数据结构、数据库、计算机组成</p>
  </div>
  
  <div class="progress-card">
    <h3>Y2S2 - 第四学期</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 50%"></div>
    </div>
    <p>算法、操作系统、网络</p>
  </div>
</div>

## 🎯 近期目标

- [x] 网站基础搭建
- [x] 课程笔记框架
- [ ] 完善 C 语言笔记
- [ ] 添加 Web 开发示例
- [ ] 整理算法题解
- [ ] 添加项目展示

## 📝 更新日志

| 日期 | 更新内容 |
|------|----------|
| 2026/01/19 | 网站正式上线，基础框架完成 |
| 2026/01/18 | 完成所有课程目录结构 |
| 2026/01/17 | 设计侧边栏和导航系统 |
| 2026/01/16 | 配置 VitePress 和 GitHub Pages |

---

<div class="footer">
  <p>🚀 <strong>持续学习，持续进步</strong></p>
  <p><small>最后更新：{{ new Date().toLocaleDateString('zh-CN') }}</small></p>
</div>

<style>
.progress-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.progress-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  transition: transform 0.3s ease;
}

.progress-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand);
}

.progress-card h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
}

.progress-bar {
  height: 8px;
  background: var(--vp-c-border);
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem 0;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand), var(--vp-c-brand-light));
  border-radius: 4px;
  transition: width 1s ease;
}

.progress-card p {
  margin: 0.5rem 0 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
}
</style>
