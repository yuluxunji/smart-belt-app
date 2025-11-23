import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TempControl.css';

export default function TempControl() {
  const { t } = useTranslation();
  const [temp, setTemp] = useState(40);
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="page-container">
      <h2>{t('temp_title')}</h2>

      <div className={`temp-dial ${isOn ? 'hot' : ''}`}>
        <div className="current-temp">{isOn ? temp : '--'}°C</div>
        <div className="label">{isOn ? t('temp_status_heating') : t('temp_status_standby')}</div>
      </div>

      <div className="control-card">
        <div className="row">
          <span className='setting-label'>{t('temp_toggle_label')}</span>
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
            <p className="note">{t('temp_ai_suggestion')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

