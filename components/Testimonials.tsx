import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { testimonials } from '@/data/mock';

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client stories"
          title="What Our Clients Say"
          subtitle="Real families, real closings — across Dhaka."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
              <Quote size={28} className="text-accent" fill="currentColor" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                </span>
                <span>
                  <span className="block text-sm font-bold">{t.name}</span>
                  <span className="block text-xs text-muted">{t.location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
