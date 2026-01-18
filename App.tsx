import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import DetailedAnalysisSection from './components/DetailedAnalysisSection';
import MarqueeSection from './components/MarqueeSection';
import ProcessSection from './components/ProcessSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import CompanyIntro from './components/CompanyIntro';
import Careers from './components/Careers';
import InsuranceScore from './components/InsuranceScore';
import InsuranceClaim from './components/InsuranceClaim';
import ExpertConsultation from './components/ExpertConsultation';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import PlannerDetail from './components/PlannerDetail';
import SimpleMarqueeSection from './components/SimpleMarqueeSection';
import CursorEffect from './components/CursorEffect';

export type ViewType = 'landing' | 'company' | 'careers' | 'score' | 'claim' | 'consult' | 'faq' | 'terms' | 'privacy' | 'planner-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('landing');

  // 스크롤을 최상단으로 이동시키는 효과
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    const back = () => setCurrentView('landing');
    switch (currentView) {
      case 'company':
        return <CompanyIntro onBack={back} />;
      case 'careers':
        return <Careers onBack={back} />;
      case 'score':
        return <InsuranceScore onBack={back} />;
      case 'claim':
        return <InsuranceClaim onBack={back} />;
      case 'consult':
        return <ExpertConsultation onBack={back} />;
      case 'faq':
        return <FAQ onBack={back} />;
      case 'terms':
        return <Terms onBack={back} />;
      case 'privacy':
        return <Privacy onBack={back} />;
      case 'planner-detail':
        return <PlannerDetail onBack={back} />;
      default:
        return (
          <>
            <section id="home">
                <Hero />
            </section>
            
            <section id="analysis" className="scroll-mt-24">
                <BentoGrid />
            </section>

            <DetailedAnalysisSection />
            
            <MarqueeSection />
            
            <section id="process" className="scroll-mt-24">
                <ProcessSection />
            </section>
            
            <section id="reviews" className="scroll-mt-24">
                <ReviewSection />
            </section>

            <SimpleMarqueeSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden scroll-smooth">
      <CursorEffect />
      <Navbar setView={setCurrentView} currentView={currentView} />
      <main>
        {renderContent()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;