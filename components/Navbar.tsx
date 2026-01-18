import React, { useState, useEffect } from 'react';
import { ViewType } from '../App';

interface NavbarProps {
  setView: (view: ViewType) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentView !== 'landing') {
      setView('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || currentView !== 'landing' ? 'bg-white/90 backdrop-blur-md py-3 border-slate-100' : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => setView('landing')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
           <div className="w-10 h-10 relative">
              <img src="https://r2.erweima.ai/i/9e0a6d0c950c4c4c8e7e1c8d8b9e8b7c.png" alt="AI Planner Logo" className="w-full h-full object-contain" />
           </div>
           <span className={`font-black text-xl tracking-tighter transition-colors ${
             isScrolled || currentView !== 'landing' ? 'text-slate-900' : 'text-white'
           }`}>
             AI PLANNER
           </span>
        </div>

        <div className={`hidden md:flex items-center gap-8 font-medium text-sm ${
          isScrolled || currentView !== 'landing' ? 'text-slate-600' : 'text-slate-300'
        }`}>
          <a href="#" onClick={(e) => handleScrollTo(e, 'process')} className="hover:text-blue-600 transition-colors">서비스 소개</a>
          <a href="#" onClick={(e) => handleScrollTo(e, 'analysis')} className="hover:text-blue-600 transition-colors">보장 분석</a>
          <a href="#" onClick={(e) => handleScrollTo(e, 'reviews')} className="hover:text-blue-600 transition-colors">고객 후기</a>
          <button onClick={() => setView('company')} className={`hover:text-blue-600 transition-colors ${currentView === 'company' ? 'text-blue-600 font-bold' : ''}`}>회사 소개</button>
        </div>

        <div className="flex items-center gap-4">
            <button 
              onClick={() => setView('planner-detail')}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-sm flex items-center gap-2 ${
                isScrolled || currentView !== 'landing' 
                ? 'bg-slate-900 text-white hover:bg-blue-600' 
                : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
              }`}
            >
              <span className="iconify text-lg" data-icon="solar:user-bold-duotone"></span>
              대표 설계사
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;