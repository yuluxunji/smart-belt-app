import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomeIcon, ChartBarIcon, Cog6ToothIcon, SparklesIcon, FireIcon } from '@heroicons/react/24/outline'; // FireIcon for Temp
import Dashboard from './pages/Dashboard';
import SmartControl from './pages/SmartControl';
import PosturePage from './pages/PosturePage';
import TempControl from './pages/TempControl';
import SettingsPage from './pages/SettingsPage'; // 导入新页面

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { t } = useTranslation();

  return (
    <div className="bottom-nav">
      <button className={`nav-item ${path === '/' ? 'active' : ''}`} onClick={() => navigate('/')}>
        <HomeIcon className="nav-icon" />
        <span>{t('nav_dashboard')}</span>
      </button>
      
      <button className={`nav-item ${path === '/posture' ? 'active' : ''}`} onClick={() => navigate('/posture')}>
        <ChartBarIcon className="nav-icon" />
        <span>{t('nav_posture')}</span>
      </button>

      <div className="ai-btn-wrapper" onClick={() => navigate('/control')}>
        <div className="ai-btn">
          <SparklesIcon style={{ width: 30 }} />
        </div>
        {/* AI按钮下也可以加个文字 */}
      </div>

      <button className={`nav-item ${path === '/temp' ? 'active' : ''}`} onClick={() => navigate('/temp')}>
        <FireIcon className="nav-icon" />
        <span>{t('nav_temp')}</span>
      </button>

      <button className={`nav-item ${path === '/settings' ? 'active' : ''}`} onClick={() => navigate('/settings')}>
        <Cog6ToothIcon className="nav-icon" />
        <span>{t('nav_settings')}</span>
      </button>
    </div>
  );
}

function App() {
  // 通过在主App组件上应用 useTranslation，确保语言变化时能触发重渲染
  const { i18n } = useTranslation();
  
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="scroll-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/control" element={<SmartControl />} />
            <Route path="/posture" element={<PosturePage />} />
            <Route path="/temp" element={<TempControl />} />
            <Route path="/settings" element={<SettingsPage />} /> {/* 添加新路由 */}
          </Routes>
        </div>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
