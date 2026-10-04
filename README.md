# Haven Estates — Premium Real Estate Prototype

A production-grade frontend prototype for a property seller / real estate agency, built with **Next.js 14, React, Tailwind CSS and Lucide icons**.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Pages

| Route | Description |
|---|---|
| `/` | Hero + search, featured properties, by-type, why us, showcase, how it works, agents, CTA, testimonials, insights |
| `/properties` | Search, status/type filters, sorting, grid/list view, pagination |
| `/properties/[id]` | Gallery, price, amenities, map placeholder, agent card, callback form, similar homes |
| `/agents` | Directory with live search |
| `/agents/[id]` | Profile, stats, listings, contact actions |
| `/about` | Story, mission stats, values, team |
| `/contact` | Form, office info, map placeholder |
| `/list-property` | 3-step listing wizard (basics → details → photos & contact) |

## Design system

- Primary `#0F172A` · Secondary `#334155` · Accent `#C9A227`
- Background `#F8FAFC` · Surface `#FFFFFF` · Border `#E2E8F0` · Muted `#64748B`
- Display font: Fraunces (serif) · Body: Inter
- Rounded-2xl cards, subtle borders, soft shadows, image zoom + card lift on hover

All actions (favourites, scheduling, forms) fire elegant toast notifications — no backend required.
