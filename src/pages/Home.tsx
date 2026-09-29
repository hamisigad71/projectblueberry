import { Hero } from '../components/sections/Hero';
import { TrustedClients } from '../components/sections/TrustedClients';
import { WhatWeDo } from '../components/sections/WhatWeDo';
import { FeaturedWork } from '../components/sections/FeaturedWork';
import { FlagshipCaseStudy } from '../components/sections/FlagshipCaseStudy';
import { WhyBlueberry } from '../components/sections/WhyBlueberry';
import { Process } from '../components/sections/Process';
import { WhoWeWorkWith } from '../components/sections/WhoWeWorkWith';
import { PodcastSection } from '../components/sections/PodcastSection';

export function Home() {
  return (
    <>
      <Hero />
      <TrustedClients />
      <WhatWeDo />
      <FeaturedWork />
      <FlagshipCaseStudy />
      <WhyBlueberry />
      <Process />
      <WhoWeWorkWith />
      <PodcastSection />
    </>
  );
}
