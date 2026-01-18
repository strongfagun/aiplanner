import React from 'react';

interface FAQProps {
  onBack: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  const faqs = [
    { q: "보험 분석은 정말 무료인가요?", a: "네, AI플래너의 모든 분석 서비스와 상담은 100% 무료로 제공됩니다." },
    { q: "내 보험 정보를 어떻게 불러오나요?", a: "공동인증서나 간편인증을 통해 단 1분 만에 가입된 보험 내역을 안전하게 불러올 수 있습니다." },
    { q: "비대면 가입은 안전한가요?", a: "금융감독원 가이드를 준수하며, 각 보험사의 정식 전자서명 시스템을 통해 체결되므로 대면 가입과 동일하게 안전합니다." },
    { q: "기존 보험을 해지해야 하나요?", a: "아니요. AI플래너는 가능한 기존 보험을 유지하면서 부족한 보장만 보완하는 것을 최우선으로 합니다." },
    { q: "상담원은 누구인가요?", a: "메트라이프 금융서비스 소속의 검증된 전문 재무설계사들이 상담을 도와드립니다." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-slate-900 mb-12 text-center">자주 묻는 질문</h1>
        
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-blue-600">Q.</span>
                <span className="word-keep-all">{f.q}</span>
              </div>
              <div className="text-sm text-slate-500 leading-relaxed pl-7 border-t border-slate-50 pt-3">
                {f.a}
              </div>
            </div>
          ))}
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

export default FAQ;