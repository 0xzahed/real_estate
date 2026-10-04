'use client';
import { useState } from 'react';
import { properties } from '@/data/mock';
import PropertyCard from './PropertyCard';
import SectionHeading from './SectionHeading';

const tabs = ['All', 'For Sale', 'For Rent', 'Apartments', 'Houses', 'Commercial'] as const;

export default function FeaturedProperties() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('All');

  const filtered = properties.filter((p) => {
    if (tab === 'All') return p.featured || ['modern-luxury-apartment','contemporary-family-villa','premium-riverside-residence','skyline-studio-dhanmondi','gulshan-commercial-tower','uttara-family-home'].includes(p.id);
    if (tab === 'For Sale') return p.status === 'For Sale';
    if (tab === 'For Rent') return p.status === 'For Rent';
    if (tab === 'Apartments') return p.type === 'Apartment';
    if (tab === 'Houses') return p.type === 'House' || p.type === 'Villa';
    if (tab === 'Commercial') return p.type === 'Commercial';
    return true;
  }).slice(0, 6);

  return (
    <section className="container-x py-20 lg:py-28" id="featured">
      <SectionHeading
        eyebrow="Handpicked for you"
        title="Featured Properties"
        subtitle="Explore some of our most exceptional properties."
      />
      <div className="no-scrollbar mt-8 flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center sm:flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              tab === t
                ? 'bg-ink text-white shadow-soft'
                : 'border border-line bg-white text-ink-soft hover:border-ink hover:text-ink'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card mx-auto mt-10 max-w-md p-10 text-center">
          <p className="font-display text-xl font-semibold">No properties found</p>
          <p className="mt-2 text-sm text-muted">Try a different filter to explore more homes.</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </section>
  );
}
