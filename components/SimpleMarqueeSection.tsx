import React from 'react';

const SimpleMarqueeSection: React.FC = () => {
  const content = (
    <div className="flex items-center gap-12 px-6">
      <span className="text-4xl md:text-6xl font-black text-[#0B1120] opacity-10">MAKE IT SIMPLE</span>
      <span className="text-2xl md:text-3xl text-blue-800">✦</span>
      <span className="text-4xl md:text-6xl font-black text-[#0B1120]">MAKE IT SIMPLE</span>
      <span className="text-2xl md:text-3xl text-blue-800">✦</span>
      <span className="text-4xl md:text-6xl font-black text-[#0B1120] opacity-10 font-serif italic">MAKE IT SIMPLE</span>
      <span className="text-2xl md:text-3xl text-blue-800">✦</span>
      <span className="text-4xl md:text-6xl font-black text-[#0B1120] opacity-5">MAKE IT SIMPLE</span>
      <span className="text-2xl md:text-3xl text-blue-800">✦</span>
    </div>
  );

  return (
    <section className="bg-white py-14 overflow-hidden relative border-y border-slate-100">
      {/* 측면 페이드 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>

      <div className="flex w-fit animate-scroll whitespace-nowrap">
        {content}
        {content}
      </div>
    </section>
  );
};

export default SimpleMarqueeSection;