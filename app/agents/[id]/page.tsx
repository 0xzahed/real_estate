'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MapPin, Star, Phone, Mail, ChevronLeft, BadgeCheck, CalendarCheck } from 'lucide-react';
import { agents, properties } from '@/data/mock';
import PropertyCard from '@/components/PropertyCard';
import { useToast } from '@/components/Toast';

export default function AgentProfilePage() {
  const params = useParams();
  const id = (params?.id as string) ?? 'sarah-ahmed';
  const a = agents.find((x) => x.id === id) ?? agents[0];
  const listings = properties.filter((p) => p.agent === a.id);
  const { push } = useToast();

  return (
    <div className="container-x py-8 lg:py-12">
      <Link href="/agents" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
        <ChevronLeft size={16} /> All Agents
      </Link>

      <div className="card mt-5 grid gap-8 p-6 sm:p-10 lg:grid-cols-[300px_1fr]">
        <div className="relative aspect-[3/3.4] overflow-hidden rounded-2xl">
          <Image src={a.image} alt={a.name} fill className="object-cover object-top" sizes="40vw" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-700">
            <BadgeCheck size={14} /> Verified Agent
          </span>
          <h1 className="h-display mt-3 text-3xl sm:text-4xl">{a.name}</h1>
          <p className="mt-1 font-medium text-accent-dark">{a.role}</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={15} /> {a.location} · {a.propertiesCount} active listings
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm">
            <Star size={15} className="fill-accent text-accent" />
            <span className="font-bold">{a.rating}</span>
            <span className="text-muted">· {a.reviews} client reviews</span>
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{a.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {a.specialties.map((s) => (
              <span key={s} className="rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-bold text-accent-dark ring-1 ring-accent/30">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => push({ title: 'Calling agent…', desc: a.phone })} className="btn-primary flex-1">
              <Phone size={16} /> {a.phone}
            </button>
            <button onClick={() => push({ title: 'Email drafted', desc: a.email })} className="btn-ghost flex-1">
              <Mail size={16} /> Email Agent
            </button>
            <button onClick={() => push({ title: 'Meeting booked', desc: 'Video consultation reserved for tomorrow.' })} className="btn-accent flex-1">
              <CalendarCheck size={16} /> Book Meeting
            </button>
          </div>
        </div>
      </div>

      <h2 className="h-display mt-12 text-2xl sm:text-3xl">
        Listings by {a.name.split(' ')[0]} {listings.length > 0 && <span className="text-muted">({listings.length})</span>}
      </h2>
      {listings.length === 0 ? (
        <div className="card mt-6 p-10 text-center text-sm text-muted">
          No live listings right now — contact {a.name.split(' ')[0]} for off-market options.
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
