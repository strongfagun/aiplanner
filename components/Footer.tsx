import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  setView: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="relative bg-[#0B1120] text-white overflow-hidden border-t border-slate-800/50">
      
      {/* Subtle decorative glows matching Hero section tone */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-t border-slate-800 pt-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => setView('landing')}>
                <div className="w-12 h-12">
                    <img src="https://r2.erweima.ai/i/9e0a6d0c950c4c4c8e7e1c8d8b9e8b7c.png" alt="AI Planner Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-black text-2xl tracking-tighter text-white">
                    AI PLANNER
                </span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed word-keep-all">
               데이터와 기술로 보험의 비대칭을 해결합니다.<br/>
               투명하고 합리적인 금융 생활의 파트너.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">서비스</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => setView('score')} className="hover:text-blue-400 transition-colors text-left">보험 점수 확인</button></li>
              <li><button onClick={() => setView('claim')} className="hover:text-blue-400 transition-colors text-left">보험금 청구</button></li>
              <li><button onClick={() => setView('consult')} className="hover:text-blue-400 transition-colors text-left">전문가 상담</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">회사</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => setView('company')} className="hover:text-blue-400 transition-colors text-left">회사 소개</button></li>
              <li><button onClick={() => setView('careers')} className="hover:text-blue-400 transition-colors text-left">채용</button></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">공지사항</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">고객지원</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => setView('faq')} className="hover:text-blue-400 transition-colors text-left">자주 묻는 질문</button></li>
              <li><button onClick={() => setView('terms')} className="hover:text-blue-400 transition-colors text-left">이용약관</button></li>
              <li><button onClick={() => setView('privacy')} className="hover:text-blue-400 transition-colors text-left">개인정보처리방침</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 AI Planner. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="iconify text-xl cursor-pointer hover:text-white transition-colors" data-icon="solar:instagram-bold"></span>
            <span className="iconify text-xl cursor-pointer hover:text-white transition-colors" data-icon="solar:facebook-bold"></span>
            <span className="iconify text-xl cursor-pointer hover:text-white transition-colors" data-icon="solar:youtube-bold"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;