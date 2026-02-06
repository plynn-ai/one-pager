import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Library, TrendingDown, PackageX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '5-15%', label: 'Average Usage Rate', icon: TrendingDown },
  { value: '50%+', label: 'Never Consumed', icon: PackageX },
];

export function FailedResponseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const statsEl = statsRef.current;

    if (!section || !headline || !body || !statsEl) return;

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

      const statItems = statsEl.querySelectorAll('.stat-item');
      gsap.fromTo(statItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsEl,
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-600 mb-6">
              <Library className="w-3.5 h-3.5" />
              The Failed Response
            </span>
            
            <div ref={headlineRef}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plynn-text mb-6">
                The <span className="gradient-text">"Course Catalog"</span> Trap
              </h2>
            </div>
            
            <p 
              ref={bodyRef}
              className="text-lg text-plynn-text-secondary leading-relaxed"
            >
              Organizations respond by buying massive libraries like Udemy or Coursera. 
              The data shows this approach is broken. Organizations spend thousands on 
              content libraries that employees rarely use, resulting in wasted budget 
              and unmet learning needs.
            </p>
          </div>

          {/* Right Stats */}
          <div ref={statsRef} className="space-y-6">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="stat-item card flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <div className="font-serif text-3xl lg:text-4xl text-plynn-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-plynn-text-secondary">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="stat-item p-6 rounded-2xl bg-gradient-to-br from-plynn-purple/5 to-plynn-purple/10 border border-plynn-purple/20">
              <p className="text-sm text-plynn-text-secondary">
                <strong className="text-plynn-text">The Result:</strong> Companies pay for 
                thousands of licenses but only a fraction of employees actively use them, 
                creating a massive waste of L&D budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
