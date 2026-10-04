import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { agents } from '@/data/mock';

export default function AgentsSection() {
  return (
    <section className="container-x py-20 lg:py-28" id="agents">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full lg:max-w-xl">
          <SectionHeading
            align="left"
            eyebrow="Our people"
            title="Meet Our Trusted Agents"
            subtitle="Verified professionals who know every block of Dhaka."
          />
        </div>
        <Link href="/agents" className="btn-ghost shrink-0">
          View All Agents <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.slice(0, 3).map((a) => (
          <article key={a.id} className="card group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
            <div className="img-zoom relative aspect-[4/3.4]">
              <Image src={a.image} alt={a.name} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 33vw" />
              <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold backdrop-blur">
                <Star size={12} className="fill-accent text-accent" /> {a.rating} ({a.reviews})
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{a.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-accent-dark">{a.role}</p>
              <p className="mt-2 flex items-center gap-1.5 text-[13px] text-muted">
                <MapPin size={14} /> {a.location} · {a.propertiesCount} properties
              </p>
              <Link
                href={`/agents/${a.id}`}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-canvas py-3 text-sm font-semibold transition group-hover:bg-ink group-hover:text-white"
              >
                View Profile <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
