import React, { useState } from 'react';
import './TempControl.css';


export default function TempControl() {
  const [temp, setTemp] = useState(40); // 默认 40度
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <h2>智能温控</h2>

      <div className={`temp-dial ${isOn ? 'hot' : ''}`}>
        <div className="current-temp">{isOn ? temp : '--'}°C</div>
        <div className="label">{isOn ? '加热中' : '待机'}</div>
      </div>

      <div className="control-card">
        <div className="row">
          <span>总开关</span>
          <div 
            className={`toggle-switch ${isOn ? 'on' : ''}`} 
            onClick={() => setIsOn(!isOn)}
          >
            <div className="toggle-knob"></div>
          </div>
        </div>

        {isOn && (
          <div className="slider-area">
            <div className="range-labels">
              <span>38°C</span>
              <span>45°C</span>
            </div>
            <input 
              type="range" min="38" max="45" step="0.5"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              className="styled-range"
            />
            <p className="note">AI 建议：41.5°C (根据您的生理周期预测)</p>
          </div>
        )}
      </div>

      
    </div>
  );
}
