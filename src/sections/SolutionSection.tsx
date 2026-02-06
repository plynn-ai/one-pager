import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Clock, Target, CheckCircle, Search, Brain, Layout, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Query',
    description: 'Employee types what they want to learn. Natural language interface understands context and time constraints.',
    example: '"Learn Python basics for data analysis, 2 hours total"',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Analyze',
    description: "Plynn's AI analyzes the prompt, understanding proficiency level, time constraints, and learning objectives.",
    detects: 'Beginner, technical domain, microlearning preferred',
  },
  {
    number: '03',
    icon: Layout,
    title: 'Design',
    description: 'AI curates and sequences the most relevant YouTube content, creating structured, interactive learning paths.',
    curates: '12 videos, 8-15 min each, total 2h 15m',
  },
  {
    number: '04',
    icon: Play,
    title: 'Play & Engage',
    description: 'Employees watch and interact with curated content. Progress tracking provides insights into engagement.',
    result: 'Structured path, completion tracking, measurable outcomes',
  },
];

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Curation',
    description: 'Enter a prompt and get a tailored learning path in minutes.',
  },
  {
    icon: Clock,
    title: 'Real-Time Recognition',
    description: 'Track and measure learning as it happens, not once a year.',
  },
  {
    icon: Target,
    title: 'Needs-Based Learning',
    description: 'Content that solves immediate work challenges.',
  },
];

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const stepsEl = stepsRef.current;
    const featuresEl = featuresRef.current;

    if (!section || !headline || !body || !stepsEl || !featuresEl) return;

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

      const stepItems = stepsEl.querySelectorAll('.step-card');
      gsap.fromTo(stepItems,
        { y: 50, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsEl,
            start: 'top 80%',
            once: true,
          }
        }
      );

      const featureItems = featuresEl.querySelectorAll('.feature-card');
      gsap.fromTo(featureItems,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresEl,
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
      id="solution"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-50 text-green-600 mb-6">
            <CheckCircle className="w-3.5 h-3.5" />
            The Solution
          </span>
          
          <div ref={headlineRef}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plynn-text mb-6">
              Why <span className="gradient-text">Plynn?</span>
            </h2>
          </div>
          
          <p 
            ref={bodyRef}
            className="text-lg text-plynn-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Plynn connects real-time needs and actual learning behaviors with organizational recognition. 
            We turn a static process into a <strong className="text-plynn-text">living tool</strong> based 
            on real work challenges.
          </p>
        </div>

        {/* 4-Step Process */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="step-card card relative overflow-hidden"
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-plynn-purple/10 flex items-center justify-center">
                <span className="text-xs font-bold text-plynn-purple">{step.number}</span>
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-plynn-purple/20 to-plynn-purple/5 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-plynn-purple" />
              </div>
              
              <h3 className="font-sans text-lg font-semibold text-plynn-text mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm text-plynn-text-secondary leading-relaxed mb-4">
                {step.description}
              </p>
              
              {/* Example/Detects/Curates/Result Box */}
              {'example' in step && (
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-xs font-semibold text-plynn-purple uppercase tracking-wider">Example</span>
                  <p className="text-sm text-plynn-text mt-1">{step.example}</p>
                </div>
              )}
              {'detects' in step && (
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-xs font-semibold text-plynn-purple uppercase tracking-wider">Detects</span>
                  <p className="text-sm text-plynn-text mt-1">{step.detects}</p>
                </div>
              )}
              {'curates' in step && (
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-xs font-semibold text-plynn-purple uppercase tracking-wider">Curates</span>
                  <p className="text-sm text-plynn-text mt-1">{step.curates}</p>
                </div>
              )}
              {'result' in step && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Result</span>
                  <p className="text-sm text-plynn-text mt-1">{step.result}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="text-center mb-10">
          <h3 className="font-sans text-xl font-semibold text-plynn-text mb-2">
            Key Benefits
          </h3>
          <p className="text-plynn-text-secondary">
            What makes Plynn different from traditional learning platforms
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="feature-card card"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-plynn-purple/20 to-plynn-purple/5 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-plynn-purple" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-plynn-text mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-plynn-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="card max-w-3xl mx-auto text-center border-plynn-purple/20 bg-gradient-to-br from-plynn-purple/5 to-white mt-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-plynn-purple" />
            <span className="font-sans font-semibold text-plynn-text">Lightning Fast</span>
          </div>
          <p className="text-plynn-text-secondary">
            By the time you get back to the table with your coffee,{' '}
            <strong className="text-plynn-text">it's ready for you.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
