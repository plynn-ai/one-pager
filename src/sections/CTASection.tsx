import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, Check, Sparkles, Linkedin } from 'lucide-react';
import logoSvg from '/logo.svg?url';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    target: 'For the Organization',
    text: 'Regain control, transparency, and accurate measurement of L&D spend.',
  },
  {
    target: 'For the Employee',
    text: 'Gain a sense of relevance, progress, and formal credit for the learning they are already doing.',
  },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'eran@plynn.dev' },
  { icon: Linkedin, label: 'Linkedin', value: 'https://www.linkedin.com/company/plynn' }
];

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const bullets = bulletsRef.current;
    const cta = ctaRef.current;
    const contact = contactRef.current;

    if (!section || !headline || !bullets || !cta || !contact) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headline,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            once: true,
          }
        }
      );

      const bulletItems = bullets.querySelectorAll('.benefit-item');
      gsap.fromTo(bulletItems,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bullets,
            start: 'top 80%',
            once: true,
          }
        }
      );

      gsap.fromTo(cta,
        { scale: 0.98, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 80%',
            once: true,
          }
        }
      );

      gsap.fromTo(contact,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contact,
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
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <div ref={headlineRef}>
              <span className="badge mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Get Started
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plynn-text mb-6">
                Bring your team's learning{' '}
                <span className="gradient-text">into the light.</span>
              </h2>
              <p className="text-lg text-plynn-text-secondary leading-relaxed mb-10">
                Plynn closes the gap between organizational strategy and the learning that actually happens on the ground.
              </p>
            </div>

            <div ref={bulletsRef} className="space-y-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit.target} className="benefit-item flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-plynn-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-plynn-purple" />
                  </div>
                  <div>
                    <span className="text-plynn-text font-semibold">
                      {benefit.target}:
                    </span>{' '}
                    <span className="text-plynn-text-secondary">
                      {benefit.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div ref={ctaRef}>
              <a href="mailto:hello@plynn.dev" className="btn-primary text-base px-8 py-4">
                Schedule a demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div
            ref={contactRef}
            className="card"
          >
            <h3 className="font-serif text-xl text-plynn-text mb-6">
              Get in touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-plynn-purple/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-plynn-purple" />
                  </div>
                  <div>
                    <p className="text-xs font-sans font-semibold uppercase tracking-wider text-plynn-text-secondary mb-1">
                      {item.label}
                    </p>
                    <a href={item.label === 'Email' ? `mailto:${item.value}` : item.value} className="text-plynn-text" rel="noopener noreferrer" target='_blank'>
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-plynn-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoSvg} alt='Logo' width='32' height='32' />
          <p className="text-sm text-plynn-text-secondary">
            © 2026 Plynn. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
