'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Heart, MapPin, BedDouble, Bath, Ruler, Star, ArrowRight } from 'lucide-react';
import type { Property } from '@/data/mock';
import { useToast } from './Toast';

export default function PropertyCard({ p }: { p: Property }) {
  const [fav, setFav] = useState(false);
  const { push } = useToast();

  return (
    <article className="card group overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="img-zoom relative aspect-[4/3]">
        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
              p.status === 'For Sale' ? 'bg-ink text-white' : 'bg-accent text-ink'
            }`}
          >
            {p.status}
          </span>
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur">
            {p.type}
          </span>
        </div>
        <button
          onClick={() => {
            setFav(!fav);
            push({
              title: !fav ? 'Saved to favourites' : 'Removed from favourites',
              desc: p.title,
            });
          }}
          aria-label="Save to favourites"
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition active:scale-90 ${
            fav ? 'bg-accent text-ink' : 'bg-white/95 text-ink hover:bg-white'
          }`}
        >
          <Heart size={17} fill={fav ? 'currentColor' : 'none'} />
        </button>
        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          <Star size={12} className="fill-accent text-accent" /> {p.rating.toFixed(1)}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="flex items-center gap-1.5 text-[13px] font-medium text-muted">
          <MapPin size={14} className="shrink-0 text-accent-dark" /> {p.area}
        </p>
        <h3 className="mt-1.5 font-display text-[19px] font-semibold leading-snug">{p.title}</h3>
        <p className="mt-2 font-display text-[22px] font-bold text-ink">
          {p.price}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-line pt-4 text-[13px] font-medium text-ink-soft">
          {p.beds > 0 && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} className="text-muted" /> {p.beds} Beds
            </span>
          )}
          {p.baths > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath size={16} className="text-muted" /> {p.baths} Baths
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Ruler size={16} className="text-muted" /> {p.sqft.toLocaleString()} sq.ft.
          </span>
        </div>

        <Link
          href={`/properties/${p.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-semibold transition group-hover:border-ink group-hover:bg-ink group-hover:text-white"
        >
          View Details <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
