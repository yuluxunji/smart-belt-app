import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, Cog6ToothIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Dashboard from './pages/Dashboard';
import SmartControl from './pages/SmartControl';
import PosturePage from './pages/PosturePage';
import TempControl from './pages/TempControl';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bottom-nav">
      <button className={`nav-item ${path === '/' ? 'active' : ''}`} onClick={() => navigate('/')}>
        <HomeIcon className="nav-icon" />
        <span>概览</span>
      </button>
      
      <button className={`nav-item ${path === '/posture' ? 'active' : ''}`} onClick={() => navigate('/posture')}>
        <ChartBarIcon className="nav-icon" />
        <span>姿态</span>
      </button>

      <div className="ai-btn-wrapper" onClick={() => navigate('/control')}>
        <div className="ai-btn">
          <SparklesIcon style={{ width: 30 }} />
        </div>
      </div>

      <button className={`nav-item ${path === '/temp' ? 'active' : ''}`} onClick={() => navigate('/temp')}>
        <svg className="nav-icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
        <span>温控</span>
      </button>

      <button className={`nav-item ${path === '/settings' ? 'active' : ''}`} onClick={() => alert('Pre只需展示核心功能')}>
        <Cog6ToothIcon className="nav-icon" />
        <span>设置</span>
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* 根容器 */}
      <div className="app-container">
        {/* 这个容器是专门用来滚动的 */}
        <div className="scroll-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/control" element={<SmartControl />} />
            <Route path="/posture" element={<PosturePage />} />
            <Route path="/temp" element={<TempControl />} />
          </Routes>
        </div>

        {/* 导航栏在滚动容器之外，所以它会固定在底部 */}
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;

