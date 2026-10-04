import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Eye, HeartHandshake, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { agents } from '@/data/mock';

export default function AboutPage() {
  return (
    <div>
      <div className="bg-ink">
        <div className="container-x py-16 lg:py-24">
          <span className="eyebrow !text-accent">About Haven Estates</span>
          <h1 className="h-display mt-3 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
            Dhaka’s boutique agency for exceptional homes.
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Since 2012 we have helped 850+ families buy, sell and rent with total transparency —
            verified titles, honest pricing and agents who answer on the first ring.
          </p>
          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-6">
            {[
              ['14+', 'Years'],
              ['৳900Cr+', 'Sales closed'],
              ['98%', 'Client satisfaction'],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-bold text-accent sm:text-4xl">{v}</p>
                <p className="mt-1 text-sm text-white/65">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Our office"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Our story" title="Trust, built one home at a time." />
          <p className="mt-5 leading-relaxed text-ink-soft">
            Haven Estates began with two desks in Gulshan and a simple rule: never list a property
            we wouldn’t show our own family. Today our in-house legal desk verifies every title,
            our photographers shoot every listing, and our agents publish live price data —
            so you always know where you stand.
          </p>
          <div className="mt-8 space-y-5">
            {[
              { icon: ShieldCheck, t: 'Verified, always', d: 'RAJUK, kharij and handover papers checked before a listing goes live.' },
              { icon: Eye, t: 'Radical transparency', d: 'Full fee breakdowns, past sale comps and honest condition reports.' },
              { icon: HeartHandshake, t: 'After-handover care', d: 'Registration, mutation and interior referrals — free for 12 months.' },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-accent">
                  <f.icon size={19} />
                </span>
                <div>
                  <p className="font-semibold">{f.t}</p>
                  <p className="mt-0.5 text-sm text-muted">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-8">
            Meet the Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="The People Behind Haven" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((a) => (
              <div key={a.id} className="card overflow-hidden text-center">
                <div className="relative mx-auto mt-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-accent/20">
                  <Image src={a.image} alt={a.name} fill className="object-cover object-top" sizes="128px" />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg font-semibold">{a.name}</p>
                  <p className="text-[13px] font-medium text-accent-dark">{a.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
