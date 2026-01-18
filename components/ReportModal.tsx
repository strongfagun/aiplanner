import React from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const insuranceData = [
    { category: '사망', item: '상해사망', recommended: 20000, current: 32450, status: '적절' },
    { category: '-', item: '질병사망', recommended: 10000, current: 11450, status: '적절' },
    { category: '장해/간병', item: '장기간병 1~4급', recommended: 1000, current: 0, status: '부족' },
    { category: '암', item: '일반암진단비', recommended: 5000, current: 13000, status: '적절' },
    { category: '-', item: '고액암진단비', recommended: 5000, current: 0, status: '부족' },
    { category: '뇌', item: '뇌졸중진단비', recommended: 3000, current: 1000, status: '부족' },
    { category: '심장', item: '급성심근경색진단비', recommended: 7000, current: 4000, status: '보통' },
    { category: '의료비', item: '상해입원의료비', recommended: 5000, current: 0, status: '부족' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-slate-100 shrink-0 bg-slate-50/50">
          <div className="flex items-center gap-3">
             <img src="https://r2.erweima.ai/i/9e0a6d0c950c4c4c8e7e1c8d8b9e8b7c.png" alt="Logo" className="w-6 h-6 object-contain" />
             <span className="font-bold text-slate-800 tracking-tight">AI PLANNER REPORT</span>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
          >
            <span className="iconify text-2xl" data-icon="solar:close-circle-bold"></span>
          </button>
        </div>

        {/* Modal Body - Scrollable Report */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-slate-50 p-6 md:p-12 space-y-12">
          
          {/* Page 1: Cover */}
          <div className="bg-white rounded-3xl shadow-sm p-12 min-h-[600px] flex flex-col justify-center relative overflow-hidden border border-slate-100">
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="decor" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                   <img src="https://r2.erweima.ai/i/9e0a6d0c950c4c4c8e7e1c8d8b9e8b7c.png" alt="Logo" className="w-16 h-16 object-contain" />
                   <span className="text-slate-900 font-black text-3xl tracking-tighter">AI PLANNER</span>
                </div>
                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Life Security Report</span>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                  고객님의<br/>
                  보장분석 리포트
                </h1>
                <p className="text-xl text-slate-500 max-w-md leading-relaxed">
                  데이터 기반 정밀 분석으로 고객님의 내일을 설계합니다.
                </p>
                <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap gap-8 text-sm text-slate-400">
                  <div>가온지점 AI플래너</div>
                  <div>조회일: 2025.12.12</div>
                  <div>분석 번호: #AP-251212-001</div>
                </div>
             </div>
          </div>

          {/* Page 2: Overview */}
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-slate-100">
             <div className="flex justify-between items-start mb-12">
                <div>
                   <h2 className="text-3xl font-black text-slate-900 mb-2">고객님 보험 현황</h2>
                   <div className="flex gap-4 text-slate-400 text-sm">
                      <span>남 40세</span>
                      <span>1985.03.01</span>
                   </div>
                </div>
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                   <img src="https://r2.erweima.ai/i/9e0a6d0c950c4c4c8e7e1c8d8b9e8b7c.png" alt="Logo" className="w-10 h-10 opacity-30 object-contain grayscale" />
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                   <h3 className="text-sm font-bold text-blue-900 mb-4">보험계약 현황</h3>
                   <div className="flex justify-between items-end">
                      <span className="text-slate-500">정상계약 7건</span>
                      <span className="text-2xl font-black text-blue-600">월 348,720원</span>
                   </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                   <h3 className="text-sm font-bold text-slate-900 mb-4">보험료 분석</h3>
                   <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                         <span className="text-slate-400">납입완료</span>
                         <span className="font-medium text-slate-600">23,065,570원</span>
                      </div>
                      <div className="flex justify-between text-xs">
                         <span className="text-slate-400">납입예정</span>
                         <span className="font-medium text-slate-600">43,640,030원</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-center shrink-0">
           <a 
            href="https://open.kakao.com/o/sl31nygh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl flex items-center gap-2"
           >
              상담 예약하기
              <span className="iconify" data-icon="solar:calendar-date-bold"></span>
           </a>
        </div>

      </div>
    </div>
  );
};

export default ReportModal;