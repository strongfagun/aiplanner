import React from 'react';

const MarqueeSection: React.FC = () => {
  const content = (
    <div className="flex items-center gap-8 px-6">
      <span className="text-5xl md:text-7xl font-black text-transparent stroke-text opacity-40">AiPlanner</span>
      <span className="text-2xl md:text-3xl text-blue-500">✦</span>
      <span className="text-5xl md:text-7xl font-black text-white">AiPlanner</span>
      <span className="text-2xl md:text-3xl text-blue-500">✦</span>
      <span className="text-5xl md:text-7xl font-black text-transparent stroke-text opacity-40">AiPlanner</span>
      <span className="text-2xl md:text-3xl text-blue-500">✦</span>
      <span className="text-5xl md:text-7xl font-black text-white">AiPlanner</span>
      <span className="text-2xl md:text-3xl text-blue-500">✦</span>
    </div>
  );

  return (
    <section className="bg-[#0B1120] py-10 overflow-hidden relative border-y border-slate-800">
      {/* CSS for outlined text effect */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-transparent to-[#0B1120] z-10 pointer-events-none"></div>

      <div className="flex w-fit animate-scroll whitespace-nowrap">
        {content}
        {content}
      </div>
    </section>
  );
};

export default MarqueeSection;