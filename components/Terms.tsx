import React from 'react';

interface TermsProps {
  onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-black text-slate-900 mb-10">이용약관</h1>
        <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">제 1조 (목적)</h2>
            <p>이 약관은 AI플래너(이하 "회사")가 제공하는 모든 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">제 2조 (서비스의 내용)</h2>
            <p>회사는 이용자에게 보험 보장 분석, 맞춤형 보험 추천, 보험금 청구 대행 안내 등 금융 관련 정보를 제공합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">제 3조 (의무 및 책임)</h2>
            <p>회사는 안정적인 서비스 제공을 위해 최선을 다하며, 이용자는 본인의 정보를 정확하게 제공할 의무가 있습니다.</p>
          </section>
        </div>
        <div className="mt-20 text-center">
          <button onClick={onBack} className="text-slate-400 font-bold hover:text-slate-600 transition-colors">
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;