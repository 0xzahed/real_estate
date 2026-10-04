'use client';
import { useState } from 'react';
import { CheckCircle2, UploadCloud, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/Toast';

const steps = ['Basics', 'Details', 'Photos & Contact'];

export default function ListPropertyPage() {
  const [step, setStep] = useState(0);
  const { push } = useToast();

  return (
    <div className="container-x max-w-4xl py-10 lg:py-14">
      <span className="eyebrow">List with Haven</span>
      <h1 className="h-display mt-3 text-4xl sm:text-5xl">List Your Property</h1>
      <p className="mt-3 text-muted">
        Free valuation, professional photography and access to 2,500+ verified buyers. Takes ~3 minutes.
      </p>

      <div className="mt-8 flex gap-2">
        {steps.map((s, i) => (
          <button
            key={s}
            onClick={() => setStep(i)}
            className={`flex flex-1 items-center gap-2 rounded-xl border p-3.5 text-left transition ${
              step === i ? 'border-ink bg-ink text-white' : step > i ? 'border-emerald-200 bg-emerald-50' : 'border-line bg-white'
            }`}
          >
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${step === i ? 'bg-accent text-ink' : step > i ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-muted'}`}>
              {step > i ? <CheckCircle2 size={15} /> : i + 1}
            </span>
            <span className="hidden text-sm font-semibold sm:block">{s}</span>
          </button>
        ))}
      </div>

      <form
        className="card mt-6 p-6 sm:p-10"
        onSubmit={(e) => {
          e.preventDefault();
          if (step < 2) setStep(step + 1);
          else push({ title: 'Listing submitted!', desc: 'Our verification team will call you within 24 hours.' });
        }}
      >
        {step === 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="label">Property Title *</label>
              <input required placeholder="e.g. Sunlit 3-Bed Apartment near Gulshan Lake" className="input" />
            </div>
            <div>
              <label className="label">Property Type *</label>
              <select className="input">
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
                <option>Commercial</option>
                <option>Land / Plot</option>
              </select>
            </div>
            <div>
              <label className="label">Listing For *</label>
              <div className="grid grid-cols-2 gap-2">
                {['Sale', 'Rent'].map((t, i) => (
                  <label key={t} className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-semibold transition ${i === 0 ? 'border-ink bg-ink text-white' : 'border-line'}`}>
                    <input type="radio" name="intent" defaultChecked={i === 0} className="sr-only" /> For {t}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="label">Location *</label>
              <input required placeholder="e.g. Road 11, Banani, Dhaka" className="input" />
            </div>
            <div>
              <label className="label">Expected Price (BDT) *</label>
              <input required placeholder="e.g. ৳1,85,00,000" className="input" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="label">Bedrooms</label>
              <select className="input">
                {['1', '2', '3', '4', '5+'].map((n) => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Bathrooms</label>
              <select className="input">
                {['1', '2', '3', '4', '5+'].map((n) => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Area (sq.ft.)</label>
              <input placeholder="e.g. 2150" className="input" />
            </div>
            <div className="sm:col-span-3">
              <label className="label">Description *</label>
              <textarea required rows={5} placeholder="Facing, floor, light, renovation, nearby schools / transport…" className="input resize-none" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="label">Property Images</label>
              <button
                type="button"
                onClick={() => push({ title: 'Photo upload (prototype)', desc: 'Image picker would open here.' })}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line bg-canvas px-6 py-10 text-sm text-muted transition hover:border-accent"
              >
                <UploadCloud size={28} className="text-accent-dark" />
                <span className="font-semibold text-ink">Click to upload photos</span>
                JPG / PNG, up to 20 images · Professional shoot available free
              </button>
            </div>
            <div>
              <label className="label">Your Name *</label>
              <input required placeholder="Full name" className="input" />
            </div>
            <div>
              <label className="label">Phone *</label>
              <input required placeholder="+880 1XXX XXXXXX" className="input" />
            </div>
            <div className="sm:col-span-2">
              <label className="label">Email</label>
              <input type="email" placeholder="you@example.com" className="input" />
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep(Math.max(0, step - 1))}
            className="btn-ghost disabled:opacity-40"
          >
            Back
          </button>
          <button className="btn-primary min-w-[220px]">
            {step === 2 ? 'Submit Listing' : 'Continue'} <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
