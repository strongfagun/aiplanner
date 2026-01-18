import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-3 leading-tight tracking-tight word-keep-all">
                복잡한 보험 가입, <br className="md:hidden"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                   단 4단계로 완벽하게
                </span>
            </h2>
            <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto word-keep-all">
                데이터는 AI가 분석하고, 고객님은 선택만 하세요.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Card 1: Core Philosophy */}
          <div className="md:col-span-2 rounded-[1.5rem] md:rounded-[2.5rem] bg-white p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-3 word-keep-all">
                "기존 보험 해지하세요"<br/>
                <span className="text-blue-600 underline decoration-blue-100 decoration-4 md:decoration-8 underline-offset-4">절대 하지 않는 말입니다.</span>
            </h3>
            <p className="text-slate-500 text-sm md:text-lg mb-5 leading-relaxed word-keep-all">
                불필요한 해지 유도 없이, 데이터로 증명된 부족한 부분만 정밀하게 채워드립니다.
            </p>
            <div>
              <a href="https://open.kakao.com/o/sl31nygh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#FEE500] text-[#3c1e1e] px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-sm">
                  카카오톡 문의
              </a>
            </div>
          </div>

          {/* Card 2: No signup (Updated with High Visibility) */}
          <div className="md:col-span-1 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-amber-50 to-orange-100 border border-orange-200/50 p-6 md:p-8 flex flex-col justify-center shadow-lg shadow-orange-200/20 relative overflow-hidden group">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-4 shadow-sm group-hover:rotate-12 transition-transform">
                <span className="iconify text-2xl" data-icon="solar:smartphone-2-bold"></span>
             </div>
             <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight">
                회원가입/앱 설치 <span className="text-orange-600">제로</span>
             </h3>
             <p className="text-slate-600 text-sm md:text-base leading-relaxed word-keep-all font-medium">
                번거로움 없이 모바일 웹에서 <span className="text-slate-900 font-bold underline decoration-orange-300 decoration-2 underline-offset-2">즉시 내 보험을 확인</span>하세요.
             </p>
             {/* Background Decoration */}
             <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                <span className="iconify text-9xl text-orange-900" data-icon="solar:check-read-bold"></span>
             </div>
          </div>

          {/* Card 3: AI Search */}
          <div className="md:col-span-1 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#0F172A] text-white p-6 md:p-8 flex flex-col justify-center border border-white/5">
             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <span className="iconify text-xl" data-icon="solar:robot-bold"></span>
             </div>
             <h3 className="text-lg md:text-xl font-black text-white mb-2">Top 3 매칭 시스템</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
                가성비 최상위 3개 상품을 AI가 즉시 추출합니다.
             </p>
          </div>

          {/* Card 4: Mobile Contract (Updated with High Visibility) */}
          <div className="md:col-span-2 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-800 p-8 md:p-12 shadow-2xl shadow-blue-900/20 relative overflow-hidden group border border-blue-400/30">
             {/* Decorative Background Icon */}
             <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="iconify text-[200px] text-white" data-icon="solar:shield-check-bold"></span>
             </div>

             <div className="relative z-10">
                <h3 className="text-2xl md:text-5xl font-black text-white mb-5 word-keep-all leading-tight">
                   만남 없는 <span className="text-sky-300">100% 비대면</span> 청약
                </h3>
                <p className="text-blue-50/90 text-sm md:text-xl font-medium leading-relaxed max-w-lg word-keep-all">
                   복잡한 서류 절차 없이 카카오톡으로 받은 청약서에 <span className="text-white font-black underline decoration-sky-400/60 decoration-[6px] underline-offset-4">전자서명 한 번이면</span> 가입이 끝납니다.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;