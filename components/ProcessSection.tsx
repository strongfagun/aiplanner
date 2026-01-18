import React from 'react';

const steps = [
  { step: "01", title: "문의 및 이력 점검", desc: "오픈 카톡으로 기존 보험 이력을 확인합니다.", icon: "solar:chat-round-line-bold" },
  { step: "02", title: "니즈 확인", desc: "설문을 통해 필요한 보장을 파악합니다.", icon: "solar:clipboard-list-bold" },
  { step: "03", title: "AI 정밀 분석", desc: "AI가 최신 약관을 학습해 최적의 보험을 도출합니다.", icon: "solar:cpu-bolt-bold" },
  { step: "04", title: "3가지 대안 제시", desc: "가장 유리한 3가지 대안을 투명하게 제안합니다.", icon: "solar:layers-bold" },
  { step: "05", title: "비대면 가입", desc: "모바일 청약으로 빠르고 간편하게 가입합니다.", icon: "solar:shield-check-bold" }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-[#0B1120] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-2 md:mb-0">
            복잡함은 덜어내고<br className="md:hidden"/> 
            <span className="text-blue-400">데이터로 혁신합니다</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
          {steps.map((item, index) => (
            <div key={index} className="flex md:flex-col items-center gap-4 md:gap-0 bg-slate-900/40 p-4 md:p-5 rounded-2xl border border-white/5">
              <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg md:text-xl">
                <span className="iconify" data-icon={item.icon}></span>
              </div>
              <div className="md:text-center md:mt-5">
                <h3 className="text-white font-bold text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-slate-400 text-[11px] md:text-[12px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScBDr9iS8zo3v22Ca9cgDmUbr6lkGcPzfXbu7AisSom-u5Kew/viewform?usp=dialog" className="inline-block px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold text-sm md:text-base shadow-lg">
             AI 분석 신청하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;