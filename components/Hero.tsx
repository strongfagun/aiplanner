import React, { useState, useEffect } from 'react';
import ReportModal from './ReportModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
      // @ts-ignore
      window.UnicornStudio.init();
    }
  }, []);

  const recommendedPlans = [
    { company: 'A사', name: '실속 건강보험', price: '32,400', tag: '가성비 1위', color: 'blue' },
    { company: 'B사', name: '더 넓은 종합보험', price: '41,200', tag: '보장범위 최상', color: 'indigo' },
    { company: 'C사', name: '다이렉트 암보험', price: '28,900', tag: '최저가 도전', color: 'purple' },
  ];

  return (
    <section 
      className="relative w-full min-h-[900px] overflow-hidden flex items-center bg-[#0B1120]"
    >
      
      {/* 0. Unicorn Studio Background */}
      <div className="absolute inset-0 z-0 opacity-60">
         <div 
           data-us-project="m8iQfUboU6JjfxlIoNQ7" 
           style={{ width: '100%', height: '100%' }}
         ></div>
      </div>

      {/* Background Overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/40 via-transparent to-[#0B1120] z-1"></div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none animate-pulse z-2"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none z-2"></div>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 rounded-full font-bold text-sm mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] font-inter">
            ✨ AI 기반 100% 비대면 보험 분석
          </div>
          <h1 className="text-5xl md:text-7xl font-display text-white tracking-tight leading-[1.1] mb-6 word-keep-all drop-shadow-2xl">
            묻지도 따지지 않고 <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">AI가 찾은 보험만</span> <br className="hidden md:block"/>
            가입시켜 드립니다
          </h1>
          <p className="text-lg md:text-xl text-slate-300/80 font-medium mb-10 max-w-lg leading-relaxed word-keep-all">
            빅데이터 분석으로 기존 보험은 지키고,<br/>
            부족한 보장만 AI가 정밀하게 찾아 추천합니다.<br/>
            불편한 대면 영업 없이, 모바일로 끝내세요.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a 
              href="https://open.kakao.com/o/sl31nygh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FEE500] text-[#3c1e1e] rounded-2xl font-bold text-lg hover:bg-[#fdd835] transition-all shadow-[0_0_20px_rgba(254,229,0,0.2)] hover:shadow-[0_0_30px_rgba(254,229,0,0.4)] transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span className="iconify text-xl" data-icon="ri:kakao-talk-fill"></span>
              카카오톡으로 시작하기
            </a>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 group flex-1 sm:flex-initial"
              >
                분석 리포트 예시
                <span className="iconify text-xl group-hover:translate-x-1 transition-transform" data-icon="solar:chart-2-bold"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2 perspective-1000">
          <div className="relative w-[300px] h-[600px] md:w-[360px] md:h-[720px] bg-slate-900 rounded-[3rem] shadow-[0_0_80px_rgba(37,99,235,0.15)] border-8 border-slate-800 overflow-hidden z-20 transform transition-transform hover:scale-[1.02] duration-500 ring-1 ring-white/10">
            <div className="w-full h-full bg-[#0F172A] relative flex flex-col">
               {/* App Header with Logo */}
               <div className="h-16 bg-[#1e293b]/90 backdrop-blur-md border-b border-slate-700/50 flex items-center px-6 justify-between shrink-0 sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <img src="https://r2.erweima.ai/i/9e0a6d0c950c4c4c8e7e1c8d8b9e8b7c.png" alt="Logo" className="w-6 h-6 object-contain" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest leading-none">AI PLANNER</span>
                      <span className="font-bold text-white text-xs">홍길동 고객님</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="iconify text-blue-300" data-icon="solar:magic-stick-3-bold-duotone"></span>
                  </div>
               </div>
               
               {/* Phone Body */}
               <div className="p-5 flex-1 flex flex-col gap-3 overflow-y-auto no-scrollbar bg-gradient-to-b from-[#0F172A] to-[#1e293b]">
                  <div className="mb-2">
                    <h4 className="text-white text-base font-black leading-tight">
                        AI가 선별한<br/>
                        <span className="text-blue-400 underline decoration-blue-400/30">가장 유리한 상품 3종</span>
                    </h4>
                  </div>

                  {recommendedPlans.map((plan, idx) => (
                    <div key={idx} className="bg-[#1E293B]/80 backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:border-blue-500/40 transition-all group relative overflow-hidden">
                        <div className="flex justify-between items-start mb-1.5">
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                {plan.tag}
                            </span>
                            <span className="text-[9px] text-slate-500 font-bold">{plan.company}</span>
                        </div>
                        <div className="font-bold text-white text-sm mb-1 group-hover:text-blue-300 transition-colors">{plan.name}</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-base font-black text-white">{plan.price}</span>
                            <span className="text-[10px] text-slate-500 font-medium">원 / 월</span>
                        </div>
                    </div>
                  ))}

                  <div className="mt-2 p-3 bg-blue-600/10 rounded-xl border border-blue-600/20">
                     <div className="text-[10px] text-blue-300 font-medium text-center leading-relaxed">
                        고객님의 연령/건강상태 분석 결과<br/>
                        <span className="text-white font-black underline">A사가 가장 저렴하고 보장이 넓습니다.</span>
                     </div>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-auto py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                      상세 분석 결과 보기
                      <span className="iconify" data-icon="solar:chart-square-bold"></span>
                  </button>
               </div>

               {/* Home Indicator */}
               <div className="h-6 flex justify-center items-center shrink-0">
                  <div className="w-24 h-1 bg-slate-700 rounded-full"></div>
               </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
        </div>
      </div>

      <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;