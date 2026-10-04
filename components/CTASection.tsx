import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="container-x pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_auto] lg:items-center lg:p-16">
          <div>
            <span className="eyebrow !text-accent">For owners & landlords</span>
            <h2 className="h-display mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">
              Have a Property to Sell or Rent?
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
              Reach thousands of potential buyers and renters with your property listing.
              Free valuation, professional photography and verification included.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/list-property" className="btn-accent whitespace-nowrap">
              List Your Property <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              <Phone size={16} /> Talk to an Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
