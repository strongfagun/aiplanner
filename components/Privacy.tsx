import React from 'react';

interface PrivacyProps {
  onBack: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-black text-slate-900 mb-10">개인정보처리방침</h1>
        <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-8">
          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="text-blue-800 font-medium">AI플래너는 고객님의 개인정보를 가장 중요하게 생각하며, 관련 법규를 엄격히 준수하고 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. 수집하는 개인정보 항목</h2>
            <p>이름, 연락처, 생년월일, 성별, 가입된 보험 정보 및 분석을 위한 금융 거래 정보</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. 개인정보의 이용 목적</h2>
            <p>보험 보장 분석 리포트 생성, 맞춤형 상품 추천, 상담 서비스 제공 및 고객 지원</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
            <p>회원 탈퇴 시 혹은 서비스 이용 목적 달성 시 즉시 파기하는 것을 원칙으로 합니다.</p>
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

export default Privacy;