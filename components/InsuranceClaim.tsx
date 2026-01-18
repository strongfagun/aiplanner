import React from 'react';

interface InsuranceClaimProps {
  onBack: () => void;
}

const InsuranceClaim: React.FC<InsuranceClaimProps> = ({ onBack }) => {
  const steps = [
    { title: "병원 서류 준비", desc: "진료비 영수증, 세부 내역서 등을 준비하세요.", icon: "solar:file-text-bold" },
    { title: "서류 촬영 및 업로드", desc: "앱에서 사진만 찍어 올리면 끝납니다.", icon: "solar:camera-bold" },
    { title: "AI 서류 검토", desc: "AI가 누락된 서류가 없는지 즉시 확인합니다.", icon: "solar:magic-stick-3-bold" },
    { title: "보험금 수령", desc: "심사 후 영업일 기준 3일 내 입금됩니다.", icon: "solar:wallet-bold" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">간편 보험금 청구</h1>
          <p className="text-slate-500">복잡한 서류 절차 없이 모바일로 간편하게 청구하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="iconify text-2xl" data-icon={s.icon}></span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">지금 바로 청구하시겠습니까?</h2>
          <p className="text-slate-400 mb-8">로그인 하시면 이전에 진료받은 내역을 자동으로 불러올 수 있습니다.</p>
          <button className="px-12 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-blue-50 transition-all">
            보험금 청구하기
          </button>
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

export default InsuranceClaim;