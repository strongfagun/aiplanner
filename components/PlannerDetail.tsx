import React from 'react';

interface PlannerDetailProps {
  onBack: () => void;
}

const PlannerDetail: React.FC<PlannerDetailProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden py-24 bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          {/* Profile Image with frame */}
          <div className="w-72 h-72 md:w-96 md:h-[500px] relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-[3rem] rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200">
               <img 
                 src="https://r2.erweima.ai/i/68037b98048648fc95e0c662ae104443.png" 
                 alt="이용만 설계사" 
                 className="w-full h-full object-cover object-top"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Experience Badges */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900 text-white px-5 py-3 rounded-2xl font-bold shadow-xl text-sm border border-slate-800">
               10yr IT PM 💻
            </div>
            <div className="absolute top-10 -right-4 bg-blue-600 text-white px-5 py-3 rounded-2xl font-bold shadow-xl text-sm border border-blue-500">
               4yr Insurance Specialist 🛡️
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 rounded-full text-xs font-black mb-6 tracking-widest uppercase">
              IT PM Based Insurance Architect
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight text-slate-900">
              기술과 데이터로 설계하는<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">보험의 새로운 솔루션, 이용만</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed word-keep-all max-w-2xl font-medium">
              10년의 IT 회사 PM(Project Manager) 경력으로 다져진 논리적 분석력과 
              4년의 현장 보험 설계 노하우를 결합했습니다. 복잡한 보험을 가장 명확한 
              데이터 솔루션으로 풀어드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* Main Experience Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Professional Background */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <span className="iconify" data-icon="solar:history-bold"></span>
                </span>
                전문 커리어 (Career Path)
              </h2>
              <div className="space-y-10 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                 <div className="relative pl-12">
                    <div className="absolute left-0 top-1.5 w-10 h-10 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center z-10 shadow-sm">
                        <span className="iconify text-blue-600" data-icon="solar:laptop-bold"></span>
                    </div>
                    <div className="text-blue-600 font-bold text-xs mb-1 uppercase tracking-wider">IT Strategy (10 Years)</div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">IT 기업 프로젝트 매니저(PM)</h4>
                    <p className="text-slate-500 text-sm leading-relaxed word-keep-all">
                      대규모 시스템 구축 및 데이터 분석 프로젝트를 총괄하며, 복잡한 비즈니스 로직을 효율적인 프로세스로 설계하는 전문성을 쌓았습니다.
                    </p>
                 </div>
                 
                 <div className="relative pl-12">
                    <div className="absolute left-0 top-1.5 w-10 h-10 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center z-10 shadow-sm">
                        <span className="iconify text-indigo-600" data-icon="solar:shield-check-bold"></span>
                    </div>
                    <div className="text-indigo-600 font-bold text-xs mb-1 uppercase tracking-wider">Insurance Planning (4 Years)</div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">보험 설계 전문 플래너</h4>
                    <p className="text-slate-500 text-sm leading-relaxed word-keep-all">
                      현장의 불합리한 판매 관행을 체감하고, 고객에게 정말 필요한 '보장 중심'의 정직한 설계를 실천하며 수많은 고객의 신뢰를 얻었습니다.
                    </p>
                 </div>

                 <div className="relative pl-12">
                    <div className="absolute left-0 top-1.5 w-10 h-10 bg-white border-2 border-emerald-600 rounded-full flex items-center justify-center z-10 shadow-sm">
                        <span className="iconify text-emerald-600" data-icon="solar:magic-stick-3-bold"></span>
                    </div>
                    <div className="text-emerald-600 font-bold text-xs mb-1 uppercase tracking-wider">Present</div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">AI플래너 대표 설계사</h4>
                    <p className="text-slate-500 text-sm leading-relaxed word-keep-all">
                      IT의 분석 기술과 보험의 전문 지식을 결합하여, 누구나 투명하게 자신의 보험을 이해하고 가입할 수 있는 새로운 보험 생태계를 구축하고 있습니다.
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Vision & Solution */}
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-14 border border-slate-100 flex flex-col justify-center">
             <h2 className="text-2xl font-black mb-8">나의 미션 (Vision)</h2>
             <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h4 className="font-black text-blue-600 mb-3 text-lg">복잡함을 명쾌함으로</h4>
                    <p className="text-slate-600 text-sm leading-relaxed word-keep-all">
                      보험 약관은 읽기 힘든 암호가 되어서는 안 됩니다. IT PM의 관점으로 약관의 핵심을 데이터로 시각화하여, 고객님이 스스로 납득할 수 있는 근거를 제시합니다.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h4 className="font-black text-indigo-600 mb-3 text-lg">감정이 아닌 증거 중심</h4>
                    <p className="text-slate-600 text-sm leading-relaxed word-keep-all">
                      지인 영업이나 감정 호소가 아닌, 팩트 기반의 '보장 공백 분석'을 통해 가장 합리적인 가성비 플랜을 도출하는 것이 저의 설계 원칙입니다.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h4 className="font-black text-emerald-600 mb-3 text-lg">지속 가능한 관리 솔루션</h4>
                    <p className="text-slate-600 text-sm leading-relaxed word-keep-all">
                      가입은 끝이 아닌 시작입니다. 디지털 기술을 활용해 고객님이 가입한 보험이 인생의 변화에 맞춰 최적으로 유지될 수 있도록 끝까지 함께합니다.
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* Final CTA Container */}
        <div className="mt-24 text-center">
           <div className="inline-block relative w-full">
              <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-10 rounded-full"></div>
              <div className="relative bg-white border border-slate-100 p-12 md:p-20 rounded-[4rem] shadow-2xl flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 word-keep-all leading-tight">
                    IT 전문가의 시각으로 설계한<br/>
                    프리미엄 보험 솔루션을 만나보세요
                  </h2>
                  <p className="text-slate-500 mb-12 max-w-xl mx-auto">
                    단순한 보험 추천이 아닌, 고객님의 재무적 안전을 위한<br/>
                    데이터 아키텍처를 설계해드립니다.
                  </p>
                  
                  <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
                    {/* Primary Actions Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                          href="https://open.kakao.com/o/sl31nygh" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-12 py-5 bg-[#FEE500] text-[#3c1e1e] rounded-2xl font-black text-xl hover:bg-[#fdd835] transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                          <span className="iconify text-2xl" data-icon="ri:kakao-talk-fill"></span>
                          1:1 상담 신청하기
                        </a>
                        <button 
                          onClick={onBack}
                          className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center"
                        >
                          메인으로 가기
                        </button>
                    </div>

                    {/* Naver Verification Button */}
                    <div className="pt-4 border-t border-slate-100 mt-4 flex justify-center">
                        <a 
                          href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjky&pkid=1&os=36477827&qvt=0&query=%EC%9D%B4%EC%9A%A9%EB%A7%8C" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#03C75A]/20 text-[#03C75A] rounded-2xl font-bold hover:bg-[#03C75A]/5 hover:border-[#03C75A]/40 transition-all"
                        >
                          <div className="w-8 h-8 bg-[#03C75A] rounded-lg flex items-center justify-center text-white text-xs font-black shadow-sm group-hover:scale-110 transition-transform">N</div>
                          <span className="text-base">네이버 인물정보 공식 프로필 확인하기</span>
                          <span className="iconify text-xl" data-icon="solar:arrow-right-up-bold"></span>
                        </a>
                    </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerDetail;