import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import PropertyTypes from '@/components/PropertyTypes';
import WhyChooseUs from '@/components/WhyChooseUs';
import Showcase from '@/components/Showcase';
import HowItWorks from '@/components/HowItWorks';
import AgentsSection from '@/components/AgentsSection';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <WhyChooseUs />
      <div className="bg-white">
        <Showcase />
      </div>
      <HowItWorks />
      <AgentsSection />
      <CTASection />
      <Testimonials />
      <BlogSection />
    </>
  );
}
