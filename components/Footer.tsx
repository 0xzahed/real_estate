import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-display text-lg font-bold text-ink">
              H
            </span>
            <span className="font-display text-xl font-semibold">Haven Estates</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Dhaka’s trusted boutique agency for exceptional homes, verified listings and a
            transparent buying experience. Luxury, trust and modern service — since 2012.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/75">
            <p className="flex items-center gap-2.5">
              <Mail size={15} className="text-accent" /> hello@havenestates.com
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={15} className="text-accent" /> +880 1700 000 000
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
              House 12, Road 5, Gulshan 1, Dhaka 1212
            </p>
          </div>
          <div className="mt-6 flex gap-2.5">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 ring-1 ring-white/10 transition hover:bg-accent hover:text-ink"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {[
          {
            h: 'Explore',
            links: ['Buy Property', 'Rent Property', 'Sell Property', 'New Listings'],
            hrefs: ['/properties?intent=buy', '/properties?intent=rent', '/list-property', '/properties'],
          },
          {
            h: 'Company',
            links: ['About Us', 'Agents', 'Contact', 'Careers'],
            hrefs: ['/about', '/agents', '/contact', '/about'],
          },
          {
            h: 'Support',
            links: ['Help Center', 'FAQs', 'Privacy Policy', 'Terms'],
            hrefs: ['/contact', '/contact', '/contact', '/contact'],
          },
        ].map((col) => (
          <div key={col.h}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {col.h}
            </h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((l, i) => (
                <li key={l}>
                  <Link
                    href={col.hrefs[i]}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Haven Estates Ltd. All rights reserved. Prototype for demonstration.</p>
          <p> Crafted with care in Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
