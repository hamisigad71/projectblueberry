import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    slug: 'stories',
    title: 'Stories',
    subtitle: 'Podcast · Video · Documentary',
    desc: 'We produce podcasts, documentary-style films, and multimedia content that turn complex research and lived experience into content people actually want to engage with.',
    link: '/services/stories',
    img: 'https://i.pinimg.com/1200x/4c/d9/e7/4cd9e77da3977ead9a9a3289114af378.jpg',
  },
  {
    id: '02',
    slug: 'strategy',
    title: 'Strategy',
    subtitle: 'Communications · Campaigns · Consultancy',
    desc: 'Strategic communications planning, campaign architecture and narrative development for organizations trying to reach the people who matter most to their mission.',
    link: '/services/strategy',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '03',
    slug: 'digital',
    title: 'Digital',
    subtitle: 'Platforms · Web · Data Visualization',
    desc: 'From research hubs to campaign microsites, we build digital products that make dense information accessible and beautiful.',
    link: '/services/digital',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '04',
    slug: 'insight',
    title: 'Insight',
    subtitle: 'Media Monitoring · Narrative Analysis',
    desc: 'We track how narratives move through African media landscapes, giving your organization the intelligence to respond in real time.',
    link: '/services/insight',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '05',
    slug: 'experiences',
    title: 'Experiences',
    subtitle: 'Events · Livestreams · Workshops',
    desc: 'We design and produce high-quality events, livestreams and workshops that bring communities, researchers and policymakers into meaningful conversation.',
    link: '/services/experiences',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
  },
];

export function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[var(--color-bb-warm)] py-24 md:py-36">
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16 md:mb-20 pb-16 border-b border-black/[0.08]">
          <div>
            <div className="eyebrow text-[var(--color-bb-accent)] mb-5">What We Do</div>
            <h2 className="section-heading text-[var(--color-bb-dark)] max-w-xl">
              We turn complex<br />ideas into experiences<br />people understand.
            </h2>
          </div>
          <p className="body-lg text-[var(--color-bb-muted)] max-w-sm md:pt-16">
            Five interconnected capabilities, working together to create communications that drive change.
          </p>
        </div>

        {/* Interactive service list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-start">

          {/* Left: list */}
          <ul className="space-y-0 divide-y divide-black/[0.06]">
            {services.map((svc, idx) => (
              <li key={svc.id}>
                <button
                  className="w-full text-left py-6 group flex items-center justify-between gap-6 focus:outline-none"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-xs font-bold tracking-[0.15em] text-[var(--color-bb-muted)] font-sans w-6 shrink-0">
                      {svc.id}
                    </span>
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-200 ${activeIndex === idx ? 'text-[var(--color-bb-accent)]' : 'text-[var(--color-bb-dark)]'}`}>
                        {svc.title}
                      </h3>
                      <p className="text-xs font-medium text-[var(--color-bb-muted)] mt-1 font-sans tracking-wide">
                        {svc.subtitle}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ x: activeIndex === idx ? 0 : -8, opacity: activeIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-[var(--color-bb-accent)] shrink-0" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </button>
              </li>
            ))}
          </ul>

          {/* Right: panel  */}
          <div className="hidden lg:block sticky top-28 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-8 bg-gray-200">
                  <img
                    src={services[activeIndex].img}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="body-lg text-[var(--color-bb-muted)] mb-6">
                  {services[activeIndex].desc}
                </p>
                <Link
                  to={services[activeIndex].link}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-bb-accent)] hover:gap-4 transition-all duration-200"
                >
                  Explore {services[activeIndex].title}
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
