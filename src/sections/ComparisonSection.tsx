import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Clock, Check, X, User, Flashlight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const comparisonData = [
  {
    feature: 'Learning Source',
    traditional: 'Ready-made, generic courses',
    plynn: 'YouTube, AI Tools, Real-world sources',
  },
  {
    feature: 'Curation',
    traditional: 'Static libraries',
    plynn: 'AI-driven, prompt-based tailoring',
  },
  {
    feature: 'Relevance',
    traditional: 'Low (Generic)',
    plynn: 'High (Solves immediate problems)',
  },
  {
    feature: 'Recognition',
    traditional: 'Partial',
    plynn: 'Full Organizational Recognition',
  },
  {
    feature: 'Cost Structure',
    traditional: '~$9/user (High effective cost)',
    plynn: '~$5/user (High utilization & ROI)',
  },
];

const proofPoints = [
  {
    icon: TrendingUp,
    title: '3× engagement',
    description: 'Teams using Plynn curate learning paths 3× more often than traditional library assignments.',
  },
  {
    icon: Clock,
    title: 'Minutes, not quarters',
    description: 'From learning need to published path in under 10 minutes.',
  },
  {
    icon: User,
    title: 'Personal & Customizable',
    description: 'Forget one-size-fits all, with Plynn *you\'re* in control',
  },
  {
    icon: Flashlight,
    title: 'No more shadow learning',
    description: 'Bring on-the-job learning out of the shadows and into a structured, measurable flow',
  },
  {
    icon: Flashlight,
    title: 'From bottlenecks to multipliers',
    description: 'Built for overloaded L&D teams, Plynn empowers employees to curate their own learning while making informal learning visible, trackable, and tied to business outcomes.',
  },
];

export function ComparisonSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const table = tableRef.current;
    const proof = proofRef.current;

    if (!section || !heading || !table || !proof) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(heading,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            once: true,
          }
        }
      );

      const rows = table.querySelectorAll('.table-row');
      gsap.fromTo(rows,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: table,
            start: 'top 80%',
            once: true,
          }
        }
      );

      const cards = proof.querySelectorAll('.proof-card');
      gsap.fromTo(cards,
        { y: 30, scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: proof,
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
      id="compare"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plynn-text text-center mb-12"
        >
          The Economic & Methodological{' '}
          <span className="gradient-text">Shift</span>
        </h2>

        {/* Comparison Table */}
        <div ref={tableRef} className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-plynn-border">
                <th className="text-left py-4 px-4 font-sans text-xs font-semibold uppercase tracking-wider text-plynn-text-secondary">
                  Feature
                </th>
                <th className="text-left py-4 px-4 font-sans text-xs font-semibold uppercase tracking-wider text-plynn-text-secondary">
                  Traditional Catalogs
                </th>
                <th className="text-left py-4 px-4 font-sans text-xs font-semibold uppercase tracking-wider text-plynn-purple">
                  The Plynn Approach
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr
                  key={row.feature}
                  className="table-row border-b border-plynn-border hover:bg-plynn-subtle/50 transition-colors"
                >
                  <td className="py-4 px-4 text-plynn-text font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-plynn-text-secondary">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      {row.traditional}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-plynn-purple">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      {row.plynn}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Proof Points */}
        <div
          ref={proofRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="proof-card card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-plynn-purple/20 to-plynn-purple/5 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-plynn-purple" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-plynn-text mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-plynn-text-secondary leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
