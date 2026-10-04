import SectionHeading from './SectionHeading';

const steps = [
  { n: '01', t: 'Search', d: 'Find properties based on your location, budget and requirements.' },
  { n: '02', t: 'Explore', d: 'Compare properties and explore detailed information.' },
  { n: '03', t: 'Connect', d: 'Contact the agent and schedule a property visit.' },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Simple process"
          title="How It Works"
          subtitle="Three steps between you and your next home."
        />
        <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-line md:block" />
          {steps.map((s) => (
            <div key={s.n} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink font-display text-lg font-bold text-accent shadow-soft">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
