export type Property = {
  id: string;
  title: string;
  location: string;
  area: string;
  price: string;
  priceValue: number; // in lakh for sorting
  beds: number;
  baths: number;
  sqft: number;
  type: 'Apartment' | 'House' | 'Villa' | 'Commercial' | 'Land';
  status: 'For Sale' | 'For Rent';
  image: string;
  gallery: string[];
  rating: number;
  agent: string;
  featured?: boolean;
  description: string;
  amenities: string[];
  yearBuilt: number;
};

export const properties: Property[] = [
  {
    id: 'modern-luxury-apartment',
    title: 'Modern Luxury Apartment',
    location: 'Gulshan Avenue, Gulshan',
    area: 'Gulshan, Dhaka',
    price: '৳1.85 Crore',
    priceValue: 185,
    beds: 3,
    baths: 3,
    sqft: 2150,
    type: 'Apartment',
    status: 'For Sale',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 4.9,
    agent: 'sarah-ahmed',
    featured: true,
    description:
      'A sun-filled corner residence on Gulshan Avenue with floor-to-ceiling glass, Italian marble flooring, a chef-grade kitchen and two covered parking bays. Walk to Gulshan Lake Park, top schools and diplomatic zone amenities.',
    amenities: ['Swimming Pool', 'Gym', 'Covered Parking', '24/7 Security', 'Power Backup', 'Lake View Balcony', 'Modular Kitchen', 'Servant Quarter'],
    yearBuilt: 2021,
  },
  {
    id: 'contemporary-family-villa',
    title: 'Contemporary Family Villa',
    location: 'Road 11, Banani',
    area: 'Banani, Dhaka',
    price: '৳3.20 Crore',
    priceValue: 320,
    beds: 5,
    baths: 5,
    sqft: 4200,
    type: 'Villa',
    status: 'For Sale',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 4.8,
    agent: 'james-wilson',
    featured: true,
    description:
      'Architect-designed villa with double-height living room, private lawn, rooftop terrace and smart-home automation throughout. A rare freehold opportunity in Banani DOHS fringe with quiet cul-de-sac positioning.',
    amenities: ['Private Lawn', 'Rooftop Terrace', 'Smart Home', 'Driver Room', 'Double Garage', 'Solar Backup', 'Home Office', 'Garden'],
    yearBuilt: 2019,
  },
  {
    id: 'premium-riverside-residence',
    title: 'Premium Riverside Residence',
    location: 'Block C, Bashundhara R/A',
    area: 'Bashundhara, Dhaka',
    price: '৳2.45 Crore',
    priceValue: 245,
    beds: 4,
    baths: 4,
    sqft: 3250,
    type: 'Apartment',
    status: 'For Sale',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 4.9,
    agent: 'nadia-rahman',
    featured: true,
    description:
      'East-facing riverside residence with panoramic views, 12-ft ceilings, wide decks and a serene master suite. Bashundhara’s most sought-after block — minutes from Evercare Hospital and ISD.',
    amenities: ['River View', 'Community Pool', 'Playground', 'Mosque Nearby', 'CCTV', 'Visitor Parking', 'Community Hall', 'Lift x2'],
    yearBuilt: 2022,
  },
  {
    id: 'grand-residence',
    title: 'The Grand Residence',
    location: 'Gulshan 2, Dhaka',
    area: 'Gulshan 2, Dhaka',
    price: '৳2.85 Crore',
    priceValue: 285,
    beds: 4,
    baths: 4,
    sqft: 3250,
    type: 'Apartment',
    status: 'For Sale',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 5.0,
    agent: 'sarah-ahmed',
    featured: true,
    description:
      'Our signature showcase — a palatial 3,250 sq.ft. residence with Burma teak panelling, double-door entrance, formal dining for 10, family lounge and staff accommodation. Unmatched Gulshan 2 address.',
    amenities: ['Concierge', 'Private Elevator Lobby', 'Rooftop Lounge', 'Gym', 'Generator', 'Intercom', 'Gas + Cylinder Backup', '3x Parking'],
    yearBuilt: 2020,
  },
  {
    id: 'skyline-studio-dhanmondi',
    title: 'Skyline Studio in Dhanmondi',
    location: 'Road 27, Dhanmondi',
    area: 'Dhanmondi, Dhaka',
    price: '৳65,000 /mo',
    priceValue: 65,
    beds: 2,
    baths: 2,
    sqft: 1250,
    type: 'Apartment',
    status: 'For Rent',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 4.7,
    agent: 'nadia-rahman',
    description:
      'Bright, fully-furnished rental ideal for young professionals — overlooking Dhanmondi Lake, with housekeeping, high-speed internet and flexible lease terms.',
    amenities: ['Furnished', 'Lake View', 'Housekeeping', 'WiFi Included', 'Gym', 'Lift'],
    yearBuilt: 2018,
  },
  {
    id: 'uttara-family-home',
    title: 'Serene Family Home',
    location: 'Sector 11, Uttara',
    area: 'Uttara, Dhaka',
    price: '৳1.65 Crore',
    priceValue: 165,
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'House',
    status: 'For Sale',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 4.6,
    agent: 'tanvir-hossain',
    description:
      'A calm, green-facing duplex in Uttara Sector 11 with front garden, prayer room and sunlit family space. Perfect for joint families seeking peace and connectivity.',
    amenities: ['Front Garden', 'Prayer Room', 'Garage', 'Rooftop Access', 'Solar Water Heater'],
    yearBuilt: 2016,
  },
  {
    id: 'gulshan-commercial-tower',
    title: 'Grade-A Office Floor',
    location: 'Gulshan North Avenue',
    area: 'Gulshan, Dhaka',
    price: '৳2.10 Lakh /mo',
    priceValue: 210,
    beds: 0,
    baths: 2,
    sqft: 5200,
    type: 'Commercial',
    status: 'For Rent',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 4.8,
    agent: 'james-wilson',
    description:
      'Column-free Grade-A office floor with 360° daylight, 40 workstations capacity, 2 meeting rooms, server room and dedicated basement parking for 8 cars.',
    amenities: ['Central AC', '8x Parking', 'Server Room', 'Meeting Rooms', 'Reception Lobby', '24/7 Access'],
    yearBuilt: 2021,
  },
  {
    id: 'purbachal-lake-plot',
    title: 'Lakeside Residential Plot',
    location: 'Sector 4, Purbachal',
    area: 'Purbachal, Dhaka',
    price: '৳95 Lakh',
    priceValue: 95,
    beds: 0,
    baths: 0,
    sqft: 3600,
    type: 'Land',
    status: 'For Sale',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 4.5,
    agent: 'tanvir-hossain',
    description:
      'South-facing 5-katha plot minutes from the lake, with clear RAJUK title, boundary wall and ready soil test. Ideal for a dream home or long-term land banking.',
    amenities: ['Clear Title', 'Boundary Wall', 'Lake Proximity', 'Wide Road Frontage'],
    yearBuilt: 2023,
  },
  {
    id: 'banani-penthouse',
    title: 'Banani Sky Penthouse',
    location: 'Road 5, Banani',
    area: 'Banani, Dhaka',
    price: '৳4.50 Crore',
    priceValue: 450,
    beds: 4,
    baths: 5,
    sqft: 4800,
    type: 'Apartment',
    status: 'For Sale',
    image:
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    ],
    rating: 5.0,
    agent: 'james-wilson',
    featured: true,
    description:
      'Duplex penthouse with private infinity pool, sky lounge, cinema room and 270° city views. Banani’s definitive trophy residence.',
    amenities: ['Private Pool', 'Cinema Room', 'Sky Lounge', 'Private Lift', 'Chef Kitchen', '4x Parking'],
    yearBuilt: 2023,
  },
];

export type Agent = {
  id: string;
  name: string;
  role: string;
  location: string;
  propertiesCount: number;
  rating: number;
  reviews: number;
  image: string;
  phone: string;
  email: string;
  bio: string;
  specialties: string[];
};

export const agents: Agent[] = [
  {
    id: 'sarah-ahmed',
    name: 'Sarah Ahmed',
    role: 'Senior Property Consultant',
    location: 'Gulshan, Dhaka',
    propertiesCount: 48,
    rating: 4.9,
    reviews: 132,
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    phone: '+880 1711 234 567',
    email: 'sarah@havenestates.com',
    bio: 'With 9 years in Dhaka’s prime residential market, Sarah specialises in Gulshan–Banani luxury apartments and has closed over ৳220 Crore in sales. Known for honest pricing guidance and off-market access.',
    specialties: ['Luxury Apartments', 'Gulshan', 'Investment Advisory'],
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Luxury Property Specialist',
    location: 'Banani, Dhaka',
    propertiesCount: 36,
    rating: 4.8,
    reviews: 98,
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    phone: '+880 1811 987 654',
    email: 'james@havenestates.com',
    bio: 'James advises HNW clients and corporates on villas, penthouses and commercial assets. Ex-Knight Frank, he brings an institutional lens to every negotiation.',
    specialties: ['Villas', 'Commercial', 'Corporate Leasing'],
  },
  {
    id: 'nadia-rahman',
    name: 'Nadia Rahman',
    role: 'Residential Property Advisor',
    location: 'Dhanmondi, Dhaka',
    propertiesCount: 52,
    rating: 4.9,
    reviews: 167,
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    phone: '+880 1911 456 789',
    email: 'nadia@havenestates.com',
    bio: 'Nadia helps first-time buyers and young families find homes that fit real life — schools, commute, community. Fluent in Bangla and English, loved for patience and clarity.',
    specialties: ['Family Homes', 'Rentals', 'First-time Buyers'],
  },
  {
    id: 'tanvir-hossain',
    name: 'Tanvir Hossain',
    role: 'Land & Investment Consultant',
    location: 'Uttara, Dhaka',
    propertiesCount: 29,
    rating: 4.7,
    reviews: 74,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    phone: '+880 1611 222 333',
    email: 'tanvir@havenestates.com',
    bio: 'Tanvir covers plots, emerging zones like Purbachal and rental-yield apartments. Data-driven, he publishes a monthly Dhaka price-tracker for his clients.',
    specialties: ['Land & Plots', 'Purbachal', 'Rental Yield'],
  },
];

export const testimonials = [
  {
    name: 'Rahim Uddin',
    location: 'Bashundhara, Dhaka',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    text: 'From first viewing to registration, everything was transparent. Sarah negotiated ৳12 lakh below asking and handled all paperwork. We moved in within 40 days.',
  },
  {
    name: 'Emily Chen',
    location: 'Gulshan, Dhaka',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    text: 'As an expat, I was nervous about renting in Dhaka. Nadia verified every document, arranged the lease in English and even helped set up utilities.',
  },
  {
    name: 'Arif Chowdhury',
    location: 'Banani, Dhaka',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    text: 'Sold my Banani flat 8% above market through Haven. Professional photos, 14 viewings in a week, and a clean close. Worth every taka of commission.',
  },
];

export const blogPosts = [
  {
    slug: 'dhaka-price-trends-2026',
    category: 'Market Trends',
    date: 'Sep 18, 2026',
    title: 'Dhaka Property Prices 2026: Where Value Is Moving',
    excerpt:
      'Gulshan holds firm while Bashundhara and Purbachal show the strongest 12-month appreciation. Here is what the data says.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'first-home-buying-guide',
    category: 'Buying Guides',
    date: 'Sep 10, 2026',
    title: 'The First-Time Buyer’s Checklist for Dhaka Apartments',
    excerpt:
      'RAJUK approval, kharij, handover history — the 12 documents you must verify before paying any booking money.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'rental-yield-playbook',
    category: 'Investment Tips',
    date: 'Aug 28, 2026',
    title: 'Rental Yields in Dhaka: 5 Zones Beating 6% Net',
    excerpt:
      'Small-format units near universities and hospitals are quietly outperforming luxury. A block-by-block breakdown.',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
  },
];
