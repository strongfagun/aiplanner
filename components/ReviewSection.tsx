import React from 'react';

const reviews = [
  {
    name: "김0수",
    role: "IT 프리랜서 (30대 남)",
    content: "진짜 신박함ㅋ 보험 약관을 AI가 다 읽어준다길래 반신반의했는데.. 내가 놓치고있던 독소조항까지 싹 잡아주네여. 덕분에 뻘돈 나가는거 막음. ㄹㅇ 강추합니다 형님들.",
    rating: 5
  },
  {
    name: "이0영",
    role: "금융 분석가 (40대 여)",
    content: "금융 쪽 일해서 좀 깐깐하게 보는 편인데 여긴 군더더기가 없네요. 구글 설문으로 내 상황 딱 집어내서 3개만 추천해주니 결정하기 너무 편함. 번거롭게 전화 안와서 젤 좋음요.",
    rating: 5
  },
  {
    name: "박0준",
    role: "예술가 (20대 남)",
    content: "보험 진짜 1도 몰랐는데 걍 폰으로 슥슥 하니까 끝남 ㅋㅋㅋ 디자인도 이뻐서 리포트 보는 맛이 있네여. 비대면이라 부담도 없고 암튼 개꿀임.",
    rating: 5
  },
  {
    name: "최0서",
    role: "주부 (30대 여)",
    content: "애 키우느라 정신없는데 비대면이라 넘 고마웠어요ㅠㅠ 애 잘 때 카톡으루 서명하구 끝냈네용! AI가 약관 분석 다 해준다니 믿음두 가고~ 3가지 제안해주니까 비교하기 딱이에여~",
    rating: 5
  },
  {
    name: "정0훈",
    role: "자영업 (50대 남)",
    content: "보험아지매들 전화오는거 딱 질색인데 여긴 그런게 없네. AI가 객관적으로 봐준다니 함 해봤는데 기존꺼 나쁘지않다고 유지하래서 더 믿음이 갔음. 요즘 세상 참 좋아졌구만.",
    rating: 5
  },
  {
    name: "강0연",
    role: "회계사 (30대 여)",
    content: "숫자에 예민해서 꼼꼼히 봤는데 AI 분석 결과가 넘 논리적임.. 3가지 대안별 가성비 표 보고 바로 골랐어요. 오타두 없고(?) 깔끔하네여. 상담원분도 완전 친절쓰!!",
    rating: 5
  },
  {
    name: "조0현",
    role: "개발자 (20대 남)",
    content: "개발자로서 이 서비스 UI/UX 칭찬함. 분석 속도 개빠르고 걍 카톡으로 다 되니까 딴데 못갈듯. 묻지도 따지지도 않고 가입된다는게 이런거군여 ㄷㄷ",
    rating: 5
  },
  {
    name: "윤0지",
    role: "작가 (40대 여)",
    content: "글 쓰는 사람이라 그런지 설명이 친절한게 좋더라구요. 보장 범위가 복잡했는데 AI가 짚어주니 이해가 쏙쏙! 덕분에 보험 고민 덜었어요. 마음이 한결 가볍네용.",
    rating: 4
  },
  {
    name: "장0우",
    role: "건축가 (40대 남)",
    content: "설계가 아주 튼튼하네요. 약관 기반이라 할루시네이션? 그런 걱정 안해도 될듯하고.. 옵션 3개로 압축해주는게 아주 효율적입니다. 결정이 아주 쉬웠습니다.",
    rating: 5
  }
];

const ReviewSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-slate-100 relative overflow-hidden">
       {/* Background Grid Decor */}
       <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black mb-4 shadow-sm uppercase tracking-widest border border-blue-100">
               Real Voices
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6 leading-tight word-keep-all">
                데이터로 증명된<br/>
                <span className="text-blue-600">압도적인 고객 만족도</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg word-keep-all">
              수천 명의 고객이 AI의 정밀한 분석과 간편한 가입 프로세스를 통해<br/>
              불필요한 지출은 줄이고 보장은 탄탄하게 채웠습니다.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
                <div key={index} className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative group flex flex-col h-full">
                    <div className="flex gap-0.5 mb-5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`iconify text-xl ${i < review.rating ? 'text-amber-400' : 'text-slate-200'}`} data-icon="solar:star-bold"></span>
                        ))}
                    </div>
                    <p className="text-slate-700 mb-8 leading-relaxed font-medium text-base flex-1 word-keep-all">
                        "{review.content}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-bold shadow-inner group-hover:from-blue-50 group-hover:to-blue-100 group-hover:text-blue-600 transition-all duration-300">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{review.name}</div>
                            <div className="text-[11px] text-slate-400 font-medium tracking-tight">{review.role}</div>
                        </div>
                        <div className="ml-auto opacity-10 group-hover:opacity-30 transition-opacity">
                           <span className="iconify text-3xl" data-icon="solar:chat-square-check-bold"></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center px-4">
                <div className="text-3xl md:text-4xl font-mono font-black text-white mb-2">4.9<span className="text-blue-500 text-xl">/5.0</span></div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">사용자 만족도</div>
            </div>
             <div className="text-center px-4 border-l border-white/10">
                <div className="text-3xl md:text-4xl font-mono font-black text-white mb-2">99.2%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">분석 정확도</div>
            </div>
             <div className="text-center px-4 border-l border-white/10">
                <div className="text-3xl md:text-4xl font-mono font-black text-white mb-2">0<span className="text-blue-500 text-xl">sec</span></div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">대기 시간</div>
            </div>
             <div className="text-center px-4 border-l border-white/10">
                <div className="text-3xl md:text-4xl font-mono font-black text-white mb-2">0<span className="text-blue-500 text-xl">KRW</span></div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">평생 무료 상담</div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewSection;