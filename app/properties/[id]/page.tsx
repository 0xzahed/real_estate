'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  MapPin, BedDouble, Bath, Ruler, Star, Heart, Share2, Check,
  CalendarCheck, Phone, Mail, ShieldCheck, ChevronLeft, ArrowRight,
} from 'lucide-react';
import { properties, agents } from '@/data/mock';
import PropertyCard from '@/components/PropertyCard';
import { useToast } from '@/components/Toast';

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = (params?.id as string) ?? 'grand-residence';
  const p = properties.find((x) => x.id === id) ?? properties[0];
  const agent = agents.find((a) => a.id === p.agent) ?? agents[0];
  const [active, setActive] = useState(0);
  const [fav, setFav] = useState(false);
  const { push } = useToast();

  const related = properties.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <div className="container-x py-8 lg:py-12">
      <Link href="/properties" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
        <ChevronLeft size={16} /> Back to Properties
      </Link>

      <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${p.status === 'For Sale' ? 'bg-ink text-white' : 'bg-accent text-ink'}`}>{p.status}</span>
            <span className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ring-1 ring-line">{p.type}</span>
            <span className="flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold ring-1 ring-line">
              <Star size={12} className="fill-accent text-accent" /> {p.rating} · Verified
            </span>
          </div>
          <h1 className="h-display mt-3 text-3xl sm:text-4xl lg:text-5xl">{p.title}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-muted"><MapPin size={16} className="text-accent-dark" /> {p.location}, Dhaka</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => { setFav(!fav); push({ title: fav ? 'Removed from favourites' : 'Saved to favourites', desc: p.title }); }} className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${fav ? 'border-accent bg-accent text-ink' : 'border-line bg-white'}`} aria-label="Favourite">
            <Heart size={18} fill={fav ? 'currentColor' : 'none'} />
          </button>
          <button onClick={() => push({ title: 'Link copied', desc: 'Share this home with family and friends.' })} className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white" aria-label="Share">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* gallery */}
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
          <Image key={active} src={p.gallery[active]} alt={p.title} fill className="animate-fadeUp object-cover" sizes="70vw" priority />
        </div>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
          {p.gallery.slice(0, 4).map((g, i) => (
            <button key={i} onClick={() => setActive(i)} className={`relative aspect-square overflow-hidden rounded-2xl border-2 transition lg:aspect-auto lg:h-full lg:min-h-[140px] ${active === i ? 'border-accent' : 'border-transparent opacity-80 hover:opacity-100'}`}>
              <Image src={g} alt="" fill className="object-cover" sizes="25vw" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* main col */}
        <div className="space-y-6">
          <div className="card flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Total Price</p>
              <p className="mt-1 font-display text-3xl font-bold sm:text-4xl">{p.price}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: BedDouble, v: String(p.beds || '—'), l: 'Bedrooms' },
                { icon: Bath, v: String(p.baths || '—'), l: 'Bathrooms' },
                { icon: Ruler, v: p.sqft.toLocaleString(), l: 'sq.ft.' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-canvas px-5 py-3 text-center">
                  <s.icon size={18} className="mx-auto text-accent-dark" />
                  <p className="mt-1 font-bold">{s.v}</p>
                  <p className="text-[11px] font-medium text-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold">About this property</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {[
                ['Property Type', p.type],
                ['Status', p.status],
                ['Year Built', String(p.yearBuilt)],
                ['Area', p.area],
                ['Facing', 'South-East'],
                ['Handover', 'Ready'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-canvas p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">{k}</p>
                  <p className="mt-1 font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold">Amenities</h2>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {p.amenities.map((a) => (
                <p key={a} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Check size={15} />
                  </span>
                  {a}
                </p>
              ))}
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="p-6 pb-0 sm:p-8 sm:pb-0">
              <h2 className="font-display text-2xl font-semibold">Location</h2>
              <p className="mt-1 text-sm text-muted">{p.location}, Dhaka — map preview (prototype)</p>
            </div>
            <div className="relative m-6 mb-6 mt-4 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-[#e8eef4] sm:m-8 sm:mt-4">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(#d3dde7 1px, transparent 1px), linear-gradient(90deg, #d3dde7 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="absolute left-1/4 top-1/3 h-16 w-40 rotate-[-12deg] rounded-full bg-white shadow-soft" />
              <div className="absolute bottom-8 right-1/4 h-10 w-64 rotate-[8deg] rounded-full bg-white shadow-soft" />
              <div className="relative flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-accent shadow-lift">
                  <MapPin size={22} />
                </span>
                <span className="mt-2 rounded-full bg-ink px-4 py-2 text-xs font-bold text-white shadow-lift">{p.area}</span>
              </div>
            </div>
          </div>
        </div>

        {/* side col */}
        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <div className="flex items-center gap-4">
              <span className="relative h-16 w-16 overflow-hidden rounded-2xl">
                <Image src={agent.image} alt={agent.name} fill className="object-cover object-top" sizes="80px" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold">{agent.name}</p>
                <p className="text-[13px] font-medium text-accent-dark">{agent.role}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted"><Star size={12} className="fill-accent text-accent" /> {agent.rating} · {agent.reviews} reviews</p>
              </div>
            </div>
            <div className="mt-5 space-y-2.5">
              <button onClick={() => push({ title: 'Visit scheduled', desc: 'Saturday, 11 AM — confirmation sent via SMS.' })} className="btn-accent w-full">
                <CalendarCheck size={16} /> Schedule Viewing
              </button>
              <button onClick={() => push({ title: 'Calling agent…', desc: agent.phone })} className="btn-primary w-full">
                <Phone size={16} /> {agent.phone}
              </button>
              <Link href={`/agents/${agent.id}`} className="btn-ghost w-full">
                View Agent Profile <ArrowRight size={15} />
              </Link>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
              <ShieldCheck size={13} className="text-emerald-600" /> Verified agent · Responds within 1 hour
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-lg font-semibold">Request a callback</h3>
            <form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); push({ title: 'Request received', desc: 'The agent will contact you shortly.' }); }}>
              <div>
                <label className="label">Name</label>
                <input required placeholder="Your full name" className="input" />
              </div>
              <div>
                <label className="label">Phone</label>
                <input required placeholder="+880 1XXX XXXXXX" className="input" />
              </div>
              <div>
                <label className="label">Message</label>
                <textarea rows={3} defaultValue={`I am interested in ${p.title} (${p.price}). Please contact me.`} className="input resize-none" />
              </div>
              <button className="btn-primary w-full"><Mail size={15} /> Contact Agent</button>
            </form>
          </div>
        </div>
      </div>

      {/* related */}
      <div className="mt-16">
        <h2 className="h-display text-2xl sm:text-3xl">Similar Properties</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <PropertyCard key={r.id} p={r} />
          ))}
        </div>
      </div>
    </div>
  );
}
