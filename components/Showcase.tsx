'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, BedDouble, Bath, Ruler, Star, ArrowRight, CalendarCheck, Phone } from 'lucide-react';
import { useState } from 'react';
import { properties } from '@/data/mock';
import { useToast } from './Toast';

const p = properties.find((x) => x.id === 'grand-residence')!;

export default function Showcase() {
  const [active, setActive] = useState(0);
  const { push } = useToast();

  return (
    <section className="container-x py-20 lg:py-28">
      <div className="card overflow-hidden lg:grid lg:grid-cols-2">
        {/* gallery */}
        <div className="bg-slate-100 p-5 sm:p-8">
          <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              key={active}
              src={p.gallery[active]}
              alt={p.title}
              fill
              className="animate-fadeUp object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <span className="absolute left-4 top-4 rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink">
              Signature Listing
            </span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {p.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                  active === i ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={g} alt="" fill className="object-cover" sizes="20vw" />
              </button>
            ))}
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <span className="eyebrow">Featured Showcase</span>
          <h3 className="h-display mt-3 text-3xl sm:text-4xl">{p.title}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-[15px] text-muted">
            <MapPin size={16} className="text-accent-dark" /> {p.location}, Dhaka
          </p>
          <p className="mt-4 font-display text-4xl font-bold">৳2.85 Crore</p>
          <p className="mt-1 text-sm text-muted">৳8,769 / sq.ft. · Negotiable for serious buyers</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: BedDouble, v: '4', l: 'Bedrooms' },
              { icon: Bath, v: '4', l: 'Bathrooms' },
              { icon: Ruler, v: '3,250', l: 'sq.ft.' },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-line bg-canvas p-4 text-center">
                <s.icon size={20} className="mx-auto text-accent-dark" />
                <p className="mt-2 text-lg font-bold">{s.v}</p>
                <p className="text-xs font-medium text-muted">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm">
            <Star size={15} className="fill-accent text-accent" />
            <span className="font-semibold">5.0</span>
            <span className="text-muted">· Verified listing · RAJUK approved · Ready handover</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/properties/${p.id}`} className="btn-primary flex-1">
              View Property <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => push({ title: 'Agent contacted', desc: 'Sarah Ahmed will call you shortly.' })}
              className="btn-ghost flex-1"
            >
              <Phone size={16} /> Contact Agent
            </button>
          </div>
          <button
            onClick={() => push({ title: 'Visit scheduled', desc: 'We have reserved your slot for Saturday, 11 AM.' })}
            className="btn-accent mt-3 w-full"
          >
            <CalendarCheck size={16} /> Schedule Visit
          </button>
        </div>
      </div>
    </section>
  );
}
