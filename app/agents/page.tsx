'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Star, ArrowRight } from 'lucide-react';
import { agents } from '@/data/mock';

export default function AgentsPage() {
  const [q, setQ] = useState('');
  const list = agents.filter((a) =>
    (a.name + a.role + a.location + a.specialties.join(' ')).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="container-x py-10 lg:py-14">
      <span className="eyebrow">Our team</span>
      <h1 className="h-display mt-3 text-4xl sm:text-5xl">Agents</h1>
      <p className="mt-3 max-w-2xl text-muted">Search and connect with verified property professionals across Dhaka.</p>

      <div className="card mt-8 flex items-center gap-2 p-2">
        <label className="flex flex-1 items-center gap-2 rounded-xl bg-canvas px-4 py-3">
          <Search size={17} className="text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, specialty or area…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </label>
        <span className="hidden rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white sm:block">
          {list.length} Agents
        </span>
      </div>

      {list.length === 0 ? (
        <div className="card mx-auto mt-10 max-w-md p-12 text-center">
          <h3 className="font-display text-xl font-semibold">No agents found</h3>
          <p className="mt-2 text-sm text-muted">Try a different name or specialty.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((a) => (
            <article key={a.id} className="card group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-square overflow-hidden">
                <Image src={a.image} alt={a.name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="30vw" />
                <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold backdrop-blur">
                  <Star size={12} className="fill-accent text-accent" /> {a.rating}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{a.name}</h3>
                <p className="text-[13px] font-medium text-accent-dark">{a.role}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={13} /> {a.location} · {a.propertiesCount} listings
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {a.specialties.slice(0, 2).map((s) => (
                    <span key={s} className="rounded-full bg-canvas px-2.5 py-1 text-[11px] font-semibold text-ink-soft">{s}</span>
                  ))}
                </div>
                <Link href={`/agents/${a.id}`} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-canvas py-2.5 text-sm font-semibold transition group-hover:bg-ink group-hover:text-white">
                  View Profile <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
