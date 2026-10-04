'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Search, MapPin, ChevronDown, ShieldCheck, Star } from 'lucide-react';
import { useToast } from './Toast';
import Link from 'next/link';

export default function Hero() {
  const [intent, setIntent] = useState<'Buy' | 'Rent'>('Buy');
  const { push } = useToast();

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury home in Dhaka"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />
      </div>

      <div className="container-x relative pb-16 pt-16 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light ring-1 ring-white/15 backdrop-blur">
            <ShieldCheck size={14} className="text-accent" /> 100% Verified Listings in Dhaka
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
            Find a Place You&apos;ll Love to Call Home.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-lg">
            Discover exceptional homes, apartments and investment properties in the
            locations that matter most to you.
          </p>
        </div>

        {/* search panel */}
        <div className="card mt-10 max-w-5xl p-3 shadow-lift sm:p-4">
          <div className="flex gap-2 p-2">
            {(['Buy', 'Rent'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setIntent(t)}
                className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition ${
                  intent === t ? 'bg-ink text-white' : 'bg-slate-100 text-muted hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto]">
            {[
              { label: 'Location', value: 'Dhaka, Bangladesh', icon: MapPin },
              { label: 'Property Type', value: 'Apartment', icon: ChevronDown },
              { label: 'Price', value: '৳50L – ৳2Cr', icon: ChevronDown },
              { label: 'Bedrooms', value: '2+ Beds', icon: ChevronDown },
            ].map((f) => (
              <button
                key={f.label}
                onClick={() => push({ title: 'Filter applied (prototype)', desc: `${f.label}: ${f.value}` })}
                className="group flex items-center justify-between gap-2 rounded-xl border border-transparent px-4 py-3 text-left transition hover:border-line hover:bg-canvas"
              >
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">
                    {f.label}
                  </span>
                  <span className="mt-0.5 block text-[14px] font-semibold text-ink">{f.value}</span>
                </span>
                <f.icon size={16} className="shrink-0 text-muted" />
              </button>
            ))}
            <Link
              href="/properties"
              className="btn-primary min-h-[60px] lg:px-8"
              onClick={() => {}}
            >
              <Search size={17} /> Search
            </Link>
          </div>
        </div>

        {/* trust stats */}
        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          {[
            { v: '2,500+', l: 'Properties' },
            { v: '850+', l: 'Happy Clients' },
            { v: '120+', l: 'Verified Agents' },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                {s.v}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white/65">
                <Star size={13} className="fill-accent text-accent" /> {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
