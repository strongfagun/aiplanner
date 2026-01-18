import React from 'react';

interface CompanyIntroProps {
  onBack: () => void;
}

const CompanyIntro: React.FC<CompanyIntroProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#003B5C] py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              MetLife<br/>
              <span className="text-blue-400">금융서비스</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed word-keep-all">
              150년 이상의 역사와 전통을 자랑하는 글로벌 금융 리더 메트라이프가 만든<br/>
              대한민국 최고의 전문 금융 판매 전문 법인입니다.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">혁신적인 금융 솔루션</h2>
            <p className="text-slate-600 leading-relaxed mb-6 word-keep-all">
              메트라이프 금융서비스는 고객의 생애 주기에 맞춘 정밀한 자산 관리와 위험 보장 솔루션을 제공합니다. 
              단순한 상품 판매를 넘어, 고객의 인생과 함께하는 진정한 동반자가 되는 것이 우리의 목표입니다.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-blue-600 font-black text-3xl mb-2">150+</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Global Years</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-blue-600 font-black text-3xl mb-2">40+</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Countries</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <blockquote className="text-xl italic font-serif border-l-4 border-blue-500 pl-6 mb-8">
              "우리는 고객이 인생의 모든 순간을 더 즐겁게 누릴 수 있도록 돕습니다."
            </blockquote>
            <p className="text-slate-400 text-sm leading-relaxed">
              최고의 재무 설계 전문가들이 최첨단 기술과 인간의 따뜻함을 결합하여, 
              고객 한 분 한 분을 위한 세상에 단 하나뿐인 플랜을 설계합니다.
            </p>
          </div>
        </div>

        <div className="mt-32 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl"
          >
            <span className="iconify" data-icon="solar:alt-arrow-left-bold"></span>
            메인 페이지로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;