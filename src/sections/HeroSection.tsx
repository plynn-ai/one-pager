import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const badge = badgeRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;
    const decor = decorRef.current;

    if (!section || !badge || !headline || !subheadline || !cta || !decor) return;

    const ctx = gsap.context(() => {
      // Load animation timeline
      const loadTl = gsap.timeline({ delay: 0.2 });

      loadTl
        .fromTo(badge, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' })
        .fromTo(headline, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 0.1)
        .fromTo(subheadline, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.3)
        .fromTo(cta, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.4)
        .fromTo(decor, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.2);


    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20"
      id="product"
    >
      {/* Decorative Elements */}
      <div
        ref={decorRef}
        className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden md:block"
      >
        {/* Play button decoration */}
        <div className="relative">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-plynn-purple to-plynn-purple-dark flex items-center justify-center shadow-glow">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="ml-2">
              <path d="M16 12L36 24L16 36V12Z" fill="white" />
            </svg>
          </div>
          {/* Orbiting dots */}
          <div className="absolute -inset-4 border border-dashed border-plynn-purple/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-plynn-purple-light" />
          <div className="absolute -bottom-4 left-0 w-3 h-3 rounded-full bg-plynn-purple/40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div ref={badgeRef} className="mb-8">
          <span className="badge">
            <Sparkles className="w-3.5 h-3.5" />
            Bringing Light to Shadow Learning
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-plynn-text leading-tight mb-6"
        >
          Transform{' '}
          <span className="gradient-text">Invisible Learning</span>
          <br />
          Into Measurable Assets
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-lg lg:text-xl text-plynn-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Plynn turns informal, day-to-day learning into a trackable, measured organizational asset.
          Capture the learning that's already happening.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https:/www.plynn.dev" rel="noopener noreferrer" target='_blank' className="btn-primary text-base px-8 py-4">
            Visit Plynn
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="#solution" className="btn-secondary text-base px-8 py-4">
            See how it works
          </a>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
