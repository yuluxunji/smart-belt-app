import React, { useState, useEffect } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';
import './Dashboard.css'; // 我们把样式也放在这里方便管理

export default function Dashboard() {
  // 模拟一些动态数据，让页面看起来是“活”的
  const [energy, setEnergy] = useState(86);
  const [isCharging, setIsCharging] = useState(true);

  // 模拟微能量充电动画
  useEffect(() => {
    const interval = setInterval(() => {
      setIsCharging(prev => !prev); // 让闪电图标闪烁
      // 偶尔增加一点电量
      if (Math.random() > 0.8) {
        setEnergy(prev => Math.min(prev + 1, 100));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      {/* 顶部状态栏 */}
      <header className="top-bar">
        <div className="greeting">
          <div className="time">下午好</div>
          <div className="user">Alex</div>
        </div>
        <div className="energy-capsule">
          <BoltIcon 
            className={`icon ${isCharging ? 'charging' : ''}`} 
            width={14} 
          />
          <span className="label">{isCharging ? '微能量回收中' : '电量'}</span>
          <span className="val">{energy}%</span>
        </div>
      </header>

      {/* 核心大圆环：今日健康分 */}
      <section className="score-section">
        <div className="score-circle">
          <svg viewBox="0 0 100 100" className="svg-ring">
            {/* 背景轨道 */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
            {/* 进度条 (85分) */}
            <circle 
              cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" 
              strokeWidth="8" 
              strokeDasharray="283" 
              strokeDashoffset="40" // 这里的偏移量决定了缺口大小，85分大约对应40
              strokeLinecap="round"
              className="progress-ring"
            />
            {/* 定义渐变色 */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="inner-content">
            <div className="big-num">85</div>
            <div className="sub-text">腰椎健康分</div>
          </div>
        </div>
      </section>

      {/* 数据卡片网格 */}
      <section className="grid-section">
        {/* 压力卡片 */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">情绪/压力</span>
            <span className="status safe">平稳</span>
          </div>
          <div className="wave-container">
             {/* 用CSS画一个简单的呼吸波形 */}
             <div className="wave-bar" style={{height: '40%'}}></div>
             <div className="wave-bar" style={{height: '70%'}}></div>
             <div className="wave-bar" style={{height: '50%'}}></div>
             <div className="wave-bar" style={{height: '80%'}}></div>
             <div className="wave-bar" style={{height: '30%'}}></div>
          </div>
        </div>

        {/* 姿态简报 */}
        <div className="card">
           <div className="card-header">
            <span className="card-title">坐姿统计</span>
            <span className="status warn">注意</span>
          </div>
          <div className="stat-row">
            <div className="stat-item">
              <div className="val">4.5<small>h</small></div>
              <div className="desc">久坐时长</div>
            </div>
            <div className="stat-item">
              <div className="val">12</div>
              <div className="desc">不良次数</div>
            </div>
          </div>
        </div>
      </section>

       {/* AI 推荐卡片 */}
       <section className="ai-suggestion">
         <div className="ai-header">
           <span className="ai-label">AI 动态干预</span>
           <span className="ai-time">刚刚</span>
         </div>
         <div className="ai-content">
           监测到您已久坐超过45分钟，建议开启<span className="highlight">「动态支撑模式」</span>以缓解L4-L5椎体压力。
         </div>
         {/* 这个按钮是个很好的演示点，可以不做实际跳转，只做点击反馈 */}
         <button className="action-btn" onClick={() => alert('已为您自动优化气囊支撑策略')}>一键优化</button>
       </section>

    
    </div>
  );
}
