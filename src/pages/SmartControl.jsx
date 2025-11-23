import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SmartControl.css'; 

export default function SmartControl() {
  const { t } = useTranslation();
  
  const [airbags, setAirbags] = useState({
    L1: false, L2: true, L3: false,
    R1: false, R2: true, R3: false
  });

  const [intensity, setIntensity] = useState(65);

  const toggleBag = (id) => {
    setAirbags(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAIMode = () => {
    const active1 = Math.random() > 0.5;
    const active2 = Math.random() > 0.3;
    const active3 = Math.random() > 0.5;

    setAirbags({
      L1: active1, R1: active1,
      L2: active2, R2: active2,
      L3: active3, R3: active3
    });
    setIntensity(Math.floor(Math.random() * (90 - 50 + 1)) + 50);
  };

  return (
    <div className="page-container">
      <div className="header">
        <h2>{t('control_title')}</h2>
        <button className="ai-trigger-btn" onClick={handleAIMode}>{t('control_ai_button')}</button>
      </div>

      <div className="waist-model">
        <div className="spine-line"></div>
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
          <span>{t('control_intensity_label')}</span>
          <span style={{color: 'var(--primary)'}}>{intensity}%</span>
        </div>
        <input 
          type="range" 
          min="0" max="100" 
          value={intensity} 
          onChange={(e) => setIntensity(e.target.value)}
          className="styled-range"
        />
        <p className="hint-text">{t('control_hint')}</p>
      </div>
    </div>
  );
}

