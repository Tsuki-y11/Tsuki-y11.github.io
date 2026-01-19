---
layout: home

title: Tsuki-y11
titleTemplate: 学习笔记
description: 计算机科学学习笔记 | 编程 · 算法 · 系统

hero:
  name: Tsuki-y11
  actions:
    - theme: brand
      text: Notes
      link: /Y1S1/C/basic
    - theme: alt
      text: GitHub
      link: https://github.com/Tsuki-y11
      external: true

## 📈 学习进度

<div class="progress-grid">
  <div class="progress-card">
    <h3>Y1S1</h3>
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
    <p>SWDW、OOP、离散数学</p>
  </div>
  
  <div class="progress-card">
    <h3>Y2S1 - 第三学期</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 70%"></div>
    </div>
    <p>DSA、DBMS、CO</p>
  </div>
  
  <div class="progress-card">
    <h3>Y2S2 - 第四学期</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 50%"></div>
    </div>
    <p>DAA、OS</p>
  </div>
</div>

<div class="footer">
  <p>🚀 <strong>Tsuki-y11</strong></p>
  <p><small>{{ new Date().toLocaleDateString('zh-EN') }}</small></p>
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
