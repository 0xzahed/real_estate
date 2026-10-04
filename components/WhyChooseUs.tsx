import { ShieldCheck, Users, SearchCheck, Lock } from 'lucide-react';
import SectionHeading from './SectionHeading';

const features = [
  { icon: ShieldCheck, t: 'Verified Properties', d: 'Every listing is carefully reviewed for quality and accuracy.' },
  { icon: Users, t: 'Trusted Agents', d: 'Connect with experienced and verified property professionals.' },
  { icon: SearchCheck, t: 'Smart Search', d: 'Find properties quickly using powerful filters.' },
  { icon: Lock, t: 'Secure Process', d: 'A transparent and reliable property buying and renting experience.' },
];

export default function WhyChooseUs() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Why Haven Estates"
        title="Real Estate Made Simple"
        subtitle="We remove the friction from property — so you can move with confidence."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.t} className="card group p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-accent transition group-hover:bg-accent group-hover:text-ink">
              <f.icon size={22} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{f.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
