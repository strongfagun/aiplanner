import React from 'react';

interface InsuranceScoreProps {
  onBack: () => void;
}

const InsuranceScore: React.FC<InsuranceScoreProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-blue-200">
          <span className="iconify text-5xl" data-icon="solar:chart-line-up-bold"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">나의 보험 건강 점수</h1>
        <p className="text-lg text-slate-500 mb-12 word-keep-all">
          가입된 보험의 보장 금액과 범위를 데이터로 분석하여<br/>
          나의 보험이 얼마나 튼튼한지 점수로 확인해보세요.
        </p>
        
        <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100">
          <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-widest">분석 대기 중</div>
          <div className="text-6xl font-black text-slate-300 mb-8">?? <span className="text-2xl">점</span></div>
          <p className="text-slate-400 mb-10">로그인 후 내 보험 정보를 불러오면 즉시 산출됩니다.</p>
          <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all">
            내 보험 불러오기
          </button>
        </div>

        <div className="mt-20">
          <button onClick={onBack} className="text-slate-400 font-bold hover:text-slate-600 transition-colors">
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceScore;