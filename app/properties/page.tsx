'use client';
import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, LayoutGrid, List as ListIcon, MapPin, BedDouble, Bath, Ruler, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/data/mock';
import { useToast } from '@/components/Toast';

export default function PropertiesPage() {
  const { push } = useToast();
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('All');
  const [type, setType] = useState('All');
  const [sort, setSort] = useState('featured');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    let r = [...properties];
    if (q) r = r.filter((p) => (p.title + p.area + p.location).toLowerCase().includes(q.toLowerCase()));
    if (status !== 'All') r = r.filter((p) => p.status === status);
    if (type !== 'All') r = r.filter((p) => p.type === type);
    if (sort === 'price-asc') r.sort((a, b) => a.priceValue - b.priceValue);
    if (sort === 'price-desc') r.sort((a, b) => b.priceValue - a.priceValue);
    if (sort === 'area') r.sort((a, b) => b.sqft - a.sqft);
    return r;
  }, [q, status, type, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container-x py-10 lg:py-14">
      <span className="eyebrow">Browse listings</span>
      <h1 className="h-display mt-3 text-4xl sm:text-5xl">Properties</h1>
      <p className="mt-3 max-w-2xl text-muted">
        {filtered.length} verified properties across Dhaka. Filter by intent, type and budget.
      </p>

      {/* search + sort bar */}
      <div className="card mt-8 flex flex-col gap-3 p-4 lg:flex-row lg:items-center">
        <label className="flex flex-1 items-center gap-2 rounded-xl bg-canvas px-4 py-3">
          <Search size={17} className="text-muted" />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1); }}
            placeholder="Search by name, area or road… e.g. Gulshan"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className="input !w-auto cursor-pointer">
            <option>All</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
          <select value={type} onChange={(e) => { setType(e.target.value); setPage(1); }} className="input !w-auto cursor-pointer">
            <option>All</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            <option>Commercial</option>
            <option>Land</option>
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input !w-auto cursor-pointer">
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="area">Largest Area</option>
          </select>
          <div className="flex rounded-xl border border-line p-1">
            <button onClick={() => setView('grid')} aria-label="Grid view" className={`flex h-9 w-9 items-center justify-center rounded-lg ${view === 'grid' ? 'bg-ink text-white' : 'text-muted'}`}>
              <LayoutGrid size={16} />
            </button>
            <button onClick={() => setView('list')} aria-label="List view" className={`flex h-9 w-9 items-center justify-center rounded-lg ${view === 'list' ? 'bg-ink text-white' : 'text-muted'}`}>
              <ListIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      {pageItems.length === 0 ? (
        <div className="card mx-auto mt-10 max-w-md p-12 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-canvas text-muted">
            <SlidersHorizontal size={22} />
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold">No matches found</h3>
          <p className="mt-2 text-sm text-muted">Try clearing your search or choosing a different filter.</p>
          <button onClick={() => { setQ(''); setStatus('All'); setType('All'); }} className="btn-primary mt-6 w-full">
            Clear Filters
          </button>
        </div>
      ) : view === 'grid' ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((p) => (
            <GridCard key={p.id} id={p.id} />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-5">
          {pageItems.map((p) => (
            <div key={p.id} className="card grid overflow-hidden sm:grid-cols-[280px_1fr]">
              <div className="relative h-56 sm:h-full sm:min-h-[220px]">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="40vw" />
                <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">{p.status}</span>
              </div>
              <div className="flex flex-col justify-center p-6">
                <p className="flex items-center gap-1.5 text-[13px] text-muted"><MapPin size={14} className="text-accent-dark" /> {p.area}</p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="font-display text-xl font-bold">{p.price}</p>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-[13px] font-medium text-ink-soft">
                  {p.beds > 0 && <span className="flex items-center gap-1.5"><BedDouble size={15} className="text-muted" /> {p.beds} Beds</span>}
                  {p.baths > 0 && <span className="flex items-center gap-1.5"><Bath size={15} className="text-muted" /> {p.baths} Baths</span>}
                  <span className="flex items-center gap-1.5"><Ruler size={15} className="text-muted" /> {p.sqft.toLocaleString()} sq.ft.</span>
                  <span className="flex items-center gap-1"><Star size={13} className="fill-accent text-accent" /> {p.rating}</span>
                </div>
                <div className="mt-5 flex gap-3">
                  <Link href={`/properties/${p.id}`} className="btn-primary flex-1 !py-3">View Details</Link>
                  <button onClick={() => push({ title: 'Saved to favourites', desc: p.title })} className="btn-ghost !px-4 !py-3" aria-label="Save">
                    <Heart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* pagination */}
      <div className="mt-10 flex items-center justify-center gap-2">
        <button disabled={page === 1} onClick={() => setPage((v) => Math.max(1, v - 1))} className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white disabled:opacity-40" aria-label="Previous page">
          <ChevronLeft size={17} />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`h-10 w-10 rounded-xl text-sm font-bold transition ${page === i + 1 ? 'bg-ink text-white' : 'border border-line bg-white hover:border-ink'}`}
          >
            {i + 1}
          </button>
        ))}
        <button disabled={page === totalPages} onClick={() => setPage((v) => Math.min(totalPages, v + 1))} className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white disabled:opacity-40" aria-label="Next page">
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
}

function GridCard({ id }: { id: string }) {
  const p = properties.find((x) => x.id === id)!;
  const { push } = useToast();
  return (
    <article className="card group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${p.status === 'For Sale' ? 'bg-ink text-white' : 'bg-accent text-ink'}`}>{p.status}</span>
        <button onClick={() => push({ title: 'Saved to favourites', desc: p.title })} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur" aria-label="Save">
          <Heart size={17} />
        </button>
      </div>
      <div className="p-5">
        <p className="flex items-center gap-1.5 text-[13px] text-muted"><MapPin size={14} className="text-accent-dark" /> {p.area}</p>
        <h3 className="mt-1.5 font-display text-lg font-semibold">{p.title}</h3>
        <p className="mt-1 font-display text-xl font-bold">{p.price}</p>
        <div className="mt-3 flex gap-4 border-t border-line pt-3 text-[13px] font-medium text-ink-soft">
          {p.beds > 0 && <span className="flex items-center gap-1.5"><BedDouble size={15} className="text-muted" /> {p.beds}</span>}
          {p.baths > 0 && <span className="flex items-center gap-1.5"><Bath size={15} className="text-muted" /> {p.baths}</span>}
          <span className="flex items-center gap-1.5"><Ruler size={15} className="text-muted" /> {p.sqft.toLocaleString()}</span>
        </div>
        <Link href={`/properties/${p.id}`} className="mt-4 flex w-full items-center justify-center rounded-xl bg-canvas py-3 text-sm font-semibold transition group-hover:bg-ink group-hover:text-white">
          View Details
        </Link>
      </div>
    </article>
  );
}
