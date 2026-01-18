import React, { useEffect, useRef, useState } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // 마우스가 없는 모바일 기기 등에서는 작동하지 않도록 함
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // 움직임이 감지되면 즉시 표시
      setIsVisible(true);

      // 기존 타이머 제거
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      // 0.8초 동안 움직임이 없으면 사라지게 함
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 800);

      // 특정 요소(버튼, 링크) 호버 감지
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, input, [role="button"]');
      setIsHovering(!!isClickable);
    };

    const animate = () => {
      // 부드러운 추적을 위한 보간법 (Lerp)
      const lerp = 0.15;
      cursorX += (mouseX - cursorX) * lerp;
      cursorY += (mouseY - cursorY) * lerp;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [isHovering]);

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-14 h-14 -ml-7 -mt-7 rounded-full pointer-events-none z-[9999] transition-all duration-500 ease-out flex items-center justify-center ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(79, 70, 229, 0.05) 70%, transparent 100%)',
        boxShadow: isHovering ? '0 0 40px rgba(59, 130, 246, 0.4)' : '0 0 20px rgba(59, 130, 246, 0.15)',
        backdropFilter: 'blur(3px)',
      }}
    >
      {/* 커서 중앙의 AP 텍스트 */}
      <span className="text-[11px] font-black tracking-tighter text-blue-600 select-none drop-shadow-sm">
        AP
      </span>
      
      {/* 바깥쪽 링 효과 */}
      <div className={`absolute inset-0 rounded-full border border-blue-400/10 transition-transform duration-700 ${isHovering ? 'scale-125' : 'scale-100'}`}></div>
    </div>
  );
};

export default CursorEffect;