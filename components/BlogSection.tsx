import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { blogPosts } from '@/data/mock';

export default function BlogSection() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Market insights"
          title="Real Estate Insights"
          subtitle="Guides, trends and investment thinking from our research desk."
        />
        <Link href="/about" className="btn-ghost shrink-0">
          All Articles <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((b) => (
          <article key={b.slug} className="card group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
            <div className="img-zoom relative aspect-[16/10]">
              <Image src={b.image} alt={b.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur">
                {b.category}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-medium text-muted">{b.date}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{b.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{b.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark">
                Read Article
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
