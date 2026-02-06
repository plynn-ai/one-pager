import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DollarSign, Calculator, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HiddenCostSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const mathRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const math = mathRef.current;
    const result = resultRef.current;

    if (!section || !headline || !math || !result) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headline,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            once: true,
          }
        }
      );

      gsap.fromTo(math,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: math,
            start: 'top 80%',
            once: true,
          }
        }
      );

      gsap.fromTo(result,
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: result,
            start: 'top 80%',
            once: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-subtle py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-50 text-amber-600 mb-6">
            <DollarSign className="w-3.5 h-3.5" />
            The Hidden Cost
          </span>
          
          <div ref={headlineRef}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plynn-text mb-6">
              The Hidden <span className="gradient-text">Economic Cost</span>
            </h2>
            <p className="text-lg text-plynn-text-secondary max-w-3xl mx-auto leading-relaxed">
              The theoretical cost per user is low, but the effective cost is massive due to low engagement.
            </p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* The Math */}
          <div ref={mathRef} className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-plynn-purple/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-plynn-purple" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-plynn-text">The Math</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-plynn-border">
                <span className="text-plynn-text-secondary">Licenses</span>
                <span className="font-medium text-plynn-text">3,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-plynn-border">
                <span className="text-plynn-text-secondary">Cost per license</span>
                <span className="font-medium text-plynn-text">$9/month</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-plynn-border">
                <span className="text-plynn-text-secondary">Total monthly cost</span>
                <span className="font-medium text-plynn-text">$27,000</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-plynn-text-secondary">Active users (~10%)</span>
                <span className="font-medium text-plynn-text">300 people</span>
              </div>
            </div>
          </div>

          {/* The Reality */}
          <div 
            ref={resultRef}
            className="card border-plynn-purple/30 bg-gradient-to-br from-plynn-purple/5 to-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-plynn-text">The Reality</h3>
            </div>
            
            <div className="text-center py-6">
              <div className="font-serif text-5xl lg:text-6xl gradient-text mb-2">
                $90
              </div>
              <p className="text-plynn-text-secondary mb-6">
                per active user / month
              </p>
              
              <div className="p-4 rounded-xl bg-white border border-plynn-border">
                <p className="text-sm text-plynn-text-secondary">
                  That's <strong className="text-plynn-text">10x more</strong> than the 
                  theoretical cost due to low utilization and wasted licenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
