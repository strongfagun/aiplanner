import React from 'react';

const DetailedAnalysisSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black mb-8 border border-blue-100 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              AI PLANNER Analysis Engine
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-8 leading-tight word-keep-all">
              단순한 나열이 아닙니다<br/>
              <span className="text-blue-600">약관 속 숨은 빈틈까지</span><br/>
              정밀하게 찾아냅니다
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed word-keep-all max-w-xl">
              고객님이 업로드하신 보험 파일을 AI가 1초 만에 파싱합니다. 
              <strong>전문가 시스템의 분석 로직</strong>이 결합된 AI가 뇌·심장 보장 공백부터 
              가성비 떨어지는 특약까지 완벽하게 분석하여 PDF 리포트로 보내드립니다.
            </p>

            <div className="space-y-6">
              {[
                { title: "기존 가입 내역 정밀 파싱", desc: "전 보험사 약관 데이터를 바탕으로 가입된 모든 특약을 정확히 분류합니다.", icon: "solar:document-add-bold" },
                { title: "보장 밸런스 점수 산출", desc: "암, 뇌, 심장 등 3대 질병의 보장 비율을 데이터로 수치화합니다.", icon: "solar:graph-up-bold" },
                { title: "맞춤형 리모델링 제안", desc: "불필요한 지출은 줄이고 부족한 보장만 핀셋으로 집어 제안합니다.", icon: "solar:magic-stick-3-bold" }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <span className="iconify text-2xl" data-icon={item.icon}></span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed word-keep-all">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Report Preview */}
          <div className="order-1 lg:order-2 relative">
             <div className="bg-slate-900 rounded-[3rem] p-4 shadow-[0_40px_100px_rgba(15,23,42,0.2)] border-8 border-slate-800 relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                <div className="bg-white rounded-[2.5rem] h-[650px] overflow-hidden flex flex-col">
                    {/* Report Header */}
                    <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                        <div className="flex justify-between items-start mb-6">
                            <img src="https://r2.erweima.ai/i/9e0a6d0c950c4c4c8e7e1c8d8b9e8b7c.png" alt="Logo" className="w-10 h-10 object-contain" />
                            <div className="text-right">
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">AI Planner Result</div>
                                <div className="text-xs text-slate-900 font-black">ANALYSIS_REPORT.pdf</div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-black text-slate-900">김0주 고객 보장분석</h3>
                            <p className="text-xs text-slate-500">38세, 남성 | 분석 전문가: AI PLANNER 팀</p>
                        </div>
                    </div>

                    {/* Report Summary Body */}
                    <div className="p-8 space-y-8 flex-1 overflow-y-auto no-scrollbar">
                        <div className="flex items-center justify-between p-6 bg-rose-50 rounded-2xl border border-rose-100">
                            <div>
                                <div className="text-[10px] text-rose-400 font-bold uppercase mb-1">Expert Rating</div>
                                <div className="text-3xl font-black text-rose-600">2.5 <span className="text-lg text-rose-400">/ 5.0</span></div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold text-rose-600 mb-1">보장 불균형 감지</div>
                                <div className="text-[10px] text-rose-400 leading-tight">데이터 분석 결과<br/>리스크 보완이 필요합니다</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                                <span className="text-sm font-bold text-slate-900">월 납입 보험료</span>
                                <span className="text-xl font-black text-blue-600">135,816원</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="w-full py-4 bg-slate-900 text-white rounded-xl text-center text-xs font-bold shadow-xl">
                                카톡으로 전체 리포트 받기
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DetailedAnalysisSection;