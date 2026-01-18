import React from 'react';

interface ExpertConsultationProps {
  onBack: () => void;
}

const ExpertConsultation: React.FC<ExpertConsultationProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black mb-6 border border-blue-100 uppercase tracking-widest">
          Premium Consultation
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
          AI가 분석하고<br/>
          <span className="text-blue-600">전문가가 마무리합니다</span>
        </h1>
        <p className="text-lg text-slate-500 mb-12 word-keep-all leading-relaxed">
          AI가 찾은 최적의 플랜, 더 궁금한 점이 있으신가요?<br/>
          보험 분야 최고의 전문가들이 1:1로 상세하게 상담해드립니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group cursor-pointer">
            <span className="iconify text-4xl text-blue-600 mb-6" data-icon="ri:kakao-talk-fill"></span>
            <h3 className="text-xl font-bold mb-2">카카오톡 상담</h3>
            <p className="text-sm text-slate-400">실시간으로 빠르고 간편하게 문의하세요.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group cursor-pointer">
            <span className="iconify text-4xl text-blue-600 mb-6" data-icon="solar:phone-calling-bold"></span>
            <h3 className="text-xl font-bold mb-2">전화 상담 예약</h3>
            <p className="text-sm text-slate-400">원하시는 시간에 전문가가 직접 전화드립니다.</p>
          </div>
        </div>

        <div className="text-center">
          <button onClick={onBack} className="px-8 py-3 bg-slate-100 text-slate-500 rounded-xl font-bold hover:bg-slate-200 transition-all">
            메인 페이지로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertConsultation;