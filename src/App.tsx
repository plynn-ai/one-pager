import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { RealitySection } from './sections/RealitySection';
import { FailedResponseSection } from './sections/FailedResponseSection';
import { HiddenCostSection } from './sections/HiddenCostSection';
import { DisconnectSection } from './sections/DisconnectSection';
import { SolutionSection } from './sections/SolutionSection';
import { ComparisonSection } from './sections/ComparisonSection';
import { CTASection } from './sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all components mount
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-white min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <RealitySection />
        <FailedResponseSection />
        <HiddenCostSection />
        <DisconnectSection />
        <SolutionSection />
        <ComparisonSection />
        <CTASection />
      </main>
    </div>
  );
}

export default App;
