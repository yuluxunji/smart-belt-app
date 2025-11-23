import React from 'react';
import { useTranslation } from 'react-i18next';
import './SettingsPage.css'; // 我们为它创建一个单独的CSS文件

export default function SettingsPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="page-container">
      <h2>{t('settings_title')}</h2>
      <div className="setting-card">
        <div className="setting-row">
          <span className="setting-label">{t('settings_language_label')}</span>
          <div className="lang-switcher">
            <button 
              className={i18n.language.startsWith('zh') ? 'active' : ''}
              onClick={() => changeLanguage('zh')}
            >
              中文
            </button>
            <button 
              className={i18n.language.startsWith('en') ? 'active' : ''}
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
