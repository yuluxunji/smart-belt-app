import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './PosturePage.css';

export default function PosturePage() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('Normal');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(Math.random() > 0.7 ? 'Warning' : 'Normal');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <h2>{t('posture_title')}</h2>
      
      <div className={`monitor-circle ${status}`}>
        <div className="scan-line" style={{ background: status === 'Normal' ? 'var(--success)' : 'var(--accent)'}}></div>
        <div className="posture-icon">
          <div className="head"></div>
          <div className={`spine ${status === 'Warning' ? 'bent' : ''}`}></div>
        </div>
      </div>

      <div className="status-text">
        {t('posture_status_label')}{' '}
        <span style={{ color: status === 'Normal' ? 'var(--success)' : 'var(--accent)' }}>
          {status === 'Normal' ? t('posture_status_good') : t('posture_status_warning')}
        </span>
      </div>

      <div className="grid-stats">
        <div className="stat-card">
          <div className="val">12°</div>
          <div className="label">{t('posture_bend_angle')}</div>
        </div>
        <div className="stat-card">
          <div className="val">45<small>kg</small></div>
          <div className="label">{t('posture_vertebra_pressure')}</div>
        </div>
      </div>
    </div>
  );
}

