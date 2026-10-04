import Image from 'next/image';
import Link from 'next/link';
import { Building2, Crown, Home, Briefcase, LandPlot, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const types = [
  {
    name: 'Apartments',
    count: '480 listings',
    icon: Building2,
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Luxury Villas',
    count: '120 listings',
    icon: Crown,
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Family Homes',
    count: '350 listings',
    icon: Home,
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Commercial Spaces',
    count: '210 listings',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Land & Plots',
    count: '180 listings',
    icon: LandPlot,
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
  },
];

export default function PropertyTypes() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Browse categories"
          title="Explore Properties by Type"
          subtitle="From sky-high apartments to serene plots — start with what fits your life."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {types.map((t) => (
            <Link
              key={t.name}
              href="/properties"
              className="group relative overflow-hidden rounded-2xl bg-ink"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5]">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur transition group-hover:bg-accent group-hover:text-ink">
                  <t.icon size={18} />
                </span>
                <p className="mt-3 font-display text-lg font-semibold text-white">{t.name}</p>
                <p className="flex items-center justify-between text-[13px] font-medium text-white/70">
                  {t.count}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
