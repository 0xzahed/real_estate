'use client';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/components/Toast';

export default function ContactPage() {
  const { push } = useToast();

  return (
    <div className="container-x py-10 lg:py-14">
      <span className="eyebrow">Get in touch</span>
      <h1 className="h-display mt-3 text-4xl sm:text-5xl">Contact</h1>
      <p className="mt-3 max-w-2xl text-muted">Visit our Gulshan studio, call us, or send a message — we reply within one business hour.</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {[
            { icon: MapPin, t: 'Office', d: 'House 12, Road 5, Gulshan 1, Dhaka 1212' },
            { icon: Phone, t: 'Phone', d: '+880 1700 000 000 (Sat–Thu, 9AM–8PM)' },
            { icon: Mail, t: 'Email', d: 'hello@havenestates.com' },
            { icon: Clock, t: 'Viewing Hours', d: 'Everyday 9AM – 8PM, by appointment' },
          ].map((c) => (
            <div key={c.t} className="card flex gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-accent">
                <c.icon size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{c.t}</p>
                <p className="mt-1 text-sm font-semibold">{c.d}</p>
              </div>
            </div>
          ))}
          <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-[#e8eef4]">
            <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(#d3dde7 1px, transparent 1px), linear-gradient(90deg, #d3dde7 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <span className="relative flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-lift">
              <MapPin size={16} className="text-accent" /> Gulshan 1, Dhaka — Map
            </span>
          </div>
        </div>

        <div className="card p-6 sm:p-10">
          <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted">Buying, selling or just exploring? Tell us a little.</p>
          <form
            className="mt-6 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => { e.preventDefault(); push({ title: 'Message sent', desc: 'Thank you — our team will reach out shortly.' }); }}
          >
            <div>
              <label className="label">Full Name</label>
              <input required placeholder="e.g. Tanisha Karim" className="input" />
            </div>
            <div>
              <label className="label">Phone</label>
              <input required placeholder="+880 1XXX XXXXXX" className="input" />
            </div>
            <div className="sm:col-span-2">
              <label className="label">Email</label>
              <input type="email" required placeholder="you@example.com" className="input" />
            </div>
            <div className="sm:col-span-2">
              <label className="label">I am interested in</label>
              <select className="input">
                <option>Buying a property</option>
                <option>Renting a property</option>
                <option>Selling my property</option>
                <option>Investment advice</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="label">Message</label>
              <textarea rows={5} required placeholder="Tell us your budget, preferred area and timeline…" className="input resize-none" />
            </div>
            <button className="btn-accent sm:col-span-2">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
