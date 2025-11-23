import React, { useState, useEffect } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';
import './Dashboard.css';
import { useTranslation, Trans } from 'react-i18next'; // 1. 导入钩子


export default function Dashboard() {
  const { t } = useTranslation(); // 2. 获取 t 函数

  const [energy, setEnergy] = useState(86);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCharging(prev => !prev);
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
          {/* 3. 把所有硬编码的中文，换成 t('标签名') */}
          <div className="time">{t('dashboard_greeting')}</div>
          <div className="user">{t('dashboard_user')}</div>
        </div>
        <div className="energy-capsule">
          <BoltIcon 
            className={`icon ${isCharging ? 'charging' : ''}`} 
            width={14} 
          />
          <span className="label">{isCharging ? t('dashboard_energy_charging') : t('dashboard_energy_power')}</span>
          <span className="val">{energy}%</span>
        </div>
      </header>

      {/* 核心大圆环 */}
      <section className="score-section">
        <div className="score-circle">
          {/* ... SVG 代码不变 ... */}
          <svg viewBox="0 0 100 100" className="svg-ring">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
            <circle 
              cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" 
              strokeWidth="8" 
              strokeDasharray="283" 
              strokeDashoffset="40"
              strokeLinecap="round"
              className="progress-ring"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="inner-content">
            <div className="big-num">85</div>
            <div className="sub-text">{t('dashboard_health_score')}</div>
          </div>
        </div>
      </section>

      {/* 数据卡片网格 */}
      <section className="grid-section">
        {/* 压力卡片 */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">{t('dashboard_stress_title')}</span>
            <span className="status safe">{t('dashboard_stress_status')}</span>
          </div>
          <div className="wave-container">
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
            <span className="card-title">{t('dashboard_posture_stats_title')}</span>
            <span className="status warn">{t('dashboard_posture_stats_status')}</span>
          </div>
          <div className="stat-row">
            <div className="stat-item">
              <div className="val">4.5<small>h</small></div>
              <div className="desc">{t('dashboard_sitting_duration')}</div>
            </div>
            <div className="stat-item">
              <div className="val">12</div>
              <div className="desc">{t('dashboard_bad_posture_count')}</div>
            </div>
          </div>
        </div>
      </section>

       {/* AI 推荐卡片 */}
       <section className="ai-suggestion">
         <div className="ai-header">
           <span className="ai-label">{t('dashboard_ai_title')}</span>
           <span className="ai-time">{t('dashboard_ai_time')}</span>
         </div>
         <div className="ai-content">
           <Trans
              i18nKey="dashboard_ai_suggestion"
              components={{ 0: <span className="highlight" /> }}
            />
         </div>
         {/* 这里的 alert 也需要翻译 */}
         <button className="action-btn" onClick={() => alert(t('alert_optimization_success'))}>{t('dashboard_ai_action')}</button>
       </section>
    </div>
  );
}
