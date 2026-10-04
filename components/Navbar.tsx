'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Search, Menu, X, MapPin } from 'lucide-react';

const links = [
  { label: 'Buy', href: '/properties?intent=buy' },
  { label: 'Rent', href: '/properties?intent=rent' },
  { label: 'Sell', href: '/list-property' },
  { label: 'Properties', href: '/properties' },
  { label: 'Agents', href: '/agents' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* top utility bar - hides on scroll */}
      <div
        className={`hidden bg-ink text-white/80 transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-1.5">
            <MapPin size={13} className="text-accent" /> House 12, Road 5, Gulshan 1, Dhaka 1212
          </p>
          <div className="flex items-center gap-5">
            <span>+880 1700 000 000</span>
            <span className="h-3 w-px bg-white/20" />
            <span>hello@havenestates.com</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-line bg-white/90 shadow-soft backdrop-blur-xl'
            : 'border-transparent bg-white'
        }`}
      >
        <div
          className={`container-x flex items-center justify-between gap-4 transition-all ${
            scrolled ? 'py-3' : 'py-4 lg:py-5'
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink font-display text-lg font-bold text-accent">
              H
            </span>
            <span className="leading-none">
              <span className="block font-display text-[19px] font-semibold tracking-tight">
                Haven Estates
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                Dhaka · Since 2012
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-[14px] font-medium text-ink-soft transition hover:bg-slate-100 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              href="/properties"
              aria-label="Search"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink transition hover:border-ink"
            >
              <Search size={18} />
            </Link>
            <Link href="/list-property" className="btn-accent !py-3">
              List Your Property
            </Link>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-line p-5">
            <span className="font-display text-lg font-semibold">Haven Estates</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 overflow-y-auto p-5">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-[15px] font-medium text-ink transition hover:bg-slate-100"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-3 border-t border-line p-5">
            <Link href="/list-property" onClick={() => setOpen(false)} className="btn-accent w-full">
              List Your Property
            </Link>
            <Link href="/properties" onClick={() => setOpen(false)} className="btn-ghost w-full">
              <Search size={16} /> Search Homes
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
