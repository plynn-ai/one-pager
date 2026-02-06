import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EyeOff, Youtube, MessageSquare, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const shadowSources = [
  { icon: Youtube, label: 'YouTube' },
  { icon: MessageSquare, label: 'ChatGPT' },
  { icon: Brain, label: 'AI Tools' },
];

export function RealitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const cards = cardsRef.current;

    if (!section || !headline || !body || !cards) return;

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

      const cardItems = cards.querySelectorAll('.source-card');
      gsap.fromTo(cardItems,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-plynn-purple/10 text-plynn-purple mb-6">
            <EyeOff className="w-3.5 h-3.5" />
            The Reality
          </span>
          
          <div ref={headlineRef}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plynn-text mb-6">
              Your Employees Are Learning,
              <br />
              <span className="gradient-text">But You Can't See It</span>
            </h2>
          </div>
          
          <p 
            ref={bodyRef}
            className="text-lg text-plynn-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            When employees face an immediate challenge, they don't search the company course catalog. 
            They go to YouTube, ChatGPT, and AI tools to solve it instantly. This is <strong className="text-plynn-text">"Shadow Learning."</strong> 
            It is highly effective and needs-based, but it is currently invisible—untracked, unmeasured, 
            and unrecognized by the organization.
          </p>
        </div>

        {/* Shadow Learning Sources */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shadowSources.map((source) => (
            <div 
              key={source.label}
              className="source-card card flex flex-col items-center text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-plynn-purple/20 to-plynn-purple/5 flex items-center justify-center mb-4">
                <source.icon className="w-8 h-8 text-plynn-purple" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-plynn-text mb-2">
                {source.label}
              </h3>
              <p className="text-sm text-plynn-text-secondary">
                Primary source for just-in-time learning
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
