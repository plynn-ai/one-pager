import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Calendar, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function DisconnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const visual = visualRef.current;

    if (!section || !headline || !body || !visual) return;

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

      gsap.fromTo(body,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: body,
            start: 'top 80%',
            once: true,
          }
        }
      );

      gsap.fromTo(visual,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: visual,
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
      className="section-light py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-plynn-purple/10 text-plynn-purple mb-6">
              <FileText className="w-3.5 h-3.5" />
              The Disconnect
            </span>
            
            <div ref={headlineRef}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plynn-text mb-6">
                The Methodological{' '}
                <span className="gradient-text">Disconnect</span>
              </h2>
            </div>
            
            <p 
              ref={bodyRef}
              className="text-lg text-plynn-text-secondary leading-relaxed mb-8"
            >
              Traditional Personal Development Plans (PDPs) are static "intent documents" 
              created once a year. They are completely disconnected from the{' '}
              <strong className="text-plynn-text">dynamic, daily challenges</strong> where 
              real learning happens.
            </p>

            <div className="flex items-center gap-4 text-sm text-plynn-text-secondary">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Annual review cycle</span>
              </div>
              <ArrowRight className="w-4 h-4" />
              <span className="text-plynn-purple font-medium">Daily learning needs</span>
            </div>
          </div>

          {/* Right Visual */}
          <div ref={visualRef} className="relative">
            <div className="card p-8 relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-plynn-text mb-1">
                    Annual PDP Document
                  </h4>
                  <p className="text-sm text-plynn-text-secondary">
                    Created once, reviewed yearly
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-2 bg-gray-100 rounded-full w-full" />
                <div className="h-2 bg-gray-100 rounded-full w-4/5" />
                <div className="h-2 bg-gray-100 rounded-full w-3/5" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-plynn-border">
                <div className="flex items-center gap-2 text-amber-600 text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Static document vs. dynamic work reality</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-plynn-purple/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-plynn-purple/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { AlertTriangle } from 'lucide-react';
