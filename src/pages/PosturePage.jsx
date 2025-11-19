import React, { useState, useEffect } from 'react';
import './PosturePage.css';


export default function PosturePage() {
  const [status, setStatus] = useState('Normal'); // Normal, Warning
  
  // 模拟数据跳动
  useEffect(() => {
    const interval = setInterval(() => {
      // 30% 概率变成不健康
      setStatus(Math.random() > 0.7 ? 'Warning' : 'Normal');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container" style={{ padding: 24, textAlign: 'center' }}>
      <h2>姿态与核心监测</h2>
      
      {/* 姿态可视化圆环 */}
      <div className={`monitor-circle ${status}`}>
        <div className="scan-line"></div>
        <div className="posture-icon">
          {/* 一个简单的小人画法 */}
          <div className="head"></div>
          <div className={`spine ${status === 'Warning' ? 'bent' : ''}`}></div>
        </div>
      </div>

      <div className="status-text">
        当前状态: <span style={{ color: status === 'Normal' ? 'var(--success)' : 'var(--accent)' }}>
          {status === 'Normal' ? '良好' : '腰椎前倾风险'}
        </span>
      </div>

      {/* 数据卡片 */}
      <div className="grid-stats">
        <div className="stat-card">
          <div className="val">12°</div>
          <div className="label">脊柱侧弯角</div>
        </div>
        <div className="stat-card">
          <div className="val">45<small>kg</small></div>
          <div className="label">L5椎体压力</div>
        </div>
      </div>

      
    </div>
  );
}
