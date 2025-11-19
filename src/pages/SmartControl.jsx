import React, { useState } from 'react';
import './SmartControl.css'; // 这里的样式你可以自己根据需求微调，或者直接用通用样式

export default function SmartControl() {
  // 气囊状态，true为充气
  const [airbags, setAirbags] = useState({
    L1: false, L2: true, L3: false, // 默认中间支撑
    R1: false, R2: true, R3: false
  });

  const [intensity, setIntensity] = useState(65);

  const toggleBag = (id) => {
    setAirbags(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // --- 核心功能：AI 随机对称生成 ---
  const handleAIMode = () => {
    // 模拟AI思考 Loading (可选)
    
    // 随机生成逻辑 (保持左右对称)
    const active1 = Math.random() > 0.5; // 上区
    const active2 = Math.random() > 0.3; // 中区 (概率高点)
    const active3 = Math.random() > 0.5; // 下区

    setAirbags({
      L1: active1, R1: active1,
      L2: active2, R2: active2,
      L3: active3, R3: active3
    });

    // 随机调整强度
    setIntensity(Math.floor(Math.random() * (90 - 50 + 1)) + 50);
  };

  return (
    <div className="page-container">
      <div className="header">
        <h2>隐形气囊阵列</h2>
        <button className="ai-trigger-btn" onClick={handleAIMode}>AI 自适应生成</button>
      </div>

      <div className="waist-model">
        {/* 背景图 - 用CSS画一个简单的腰椎示意，或者用图片 */}
        <div className="spine-line"></div>
        
        {/* 左侧气囊组 */}
        <div className="bag-group left">
          {['L1', 'L2', 'L3'].map(id => (
            <div 
              key={id} 
              className={`airbag ${airbags[id] ? 'active' : ''}`}
              onClick={() => toggleBag(id)}
            >
              {id}
            </div>
          ))}
        </div>

        {/* 右侧气囊组 */}
        <div className="bag-group right">
          {['R1', 'R2', 'R3'].map(id => (
            <div 
              key={id} 
              className={`airbag ${airbags[id] ? 'active' : ''}`}
              onClick={() => toggleBag(id)}
            >
              {id}
            </div>
          ))}
        </div>
      </div>

      <div className="controls-panel">
        <div className="slider-label">
          <span>支撑强度</span>
          <span style={{color: 'var(--primary)'}}>{intensity}%</span>
        </div>
        <input 
          type="range" 
          min="0" max="100" 
          value={intensity} 
          onChange={(e) => setIntensity(e.target.value)}
          className="styled-range"
        />
        <p className="hint-text">点击气囊可手动调节局部支撑</p>
      </div>
      
      
    </div>
  );
}
