import React from 'react';

interface CareersProps {
  onBack: () => void;
}

const Careers: React.FC<CareersProps> = ({ onBack }) => {
  const jobs = [
    { title: "AI 데이터 분석가", dept: "Tech Lab", type: "정규직", location: "서울/원격" },
    { title: "전문 금융 플래너", dept: "Sales", type: "전문직", location: "전국" },
    { title: "UI/UX 디자이너", dept: "Product", type: "정규직", location: "서울" },
    { title: "보험 약관 분석 매니저", dept: "Operations", type: "계약직", location: "서울" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black mb-6 uppercase tracking-widest border border-blue-100">
           Career Opportunity
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
          보험의 미래를<br/>
          <span className="text-blue-600">함께 그릴 인재를 찾습니다</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto word-keep-all leading-relaxed">
          AI플래너는 기술로 금융의 불균형을 해결하고자 하는 꿈이 있습니다.<br/>
          자유로운 분위기 속에서 세상을 바꾸는 도전에 함께하세요.
        </p>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "최고의 업무 환경", desc: "최신 맥북 제공 및 유연 근무제 시행", icon: "solar:laptop-bold" },
             { title: "무한한 성장 지원", desc: "교육비, 도서비 무제한 지원", icon: "solar:book-bold" },
             { title: "건강한 삶", desc: "최고급 종합 건강검진 매년 지원", icon: "solar:heart-bold" }
           ].map((b, i) => (
             <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <span className="iconify text-2xl" data-icon={b.icon}></span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm">{b.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Job Openings */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          진행 중인 채용
        </h2>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between group hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer">
              <div>
                <div className="text-xs text-blue-500 font-bold mb-1 uppercase tracking-wider">{job.dept}</div>
                <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h4>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm text-slate-400 font-medium">
                <span>{job.location}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                <span>{job.type}</span>
                <span className="iconify text-xl group-hover:translate-x-1 transition-transform" data-icon="solar:alt-arrow-right-bold"></span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={onBack}
            className="px-10 py-4 border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all"
          >
            메인 페이지로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;