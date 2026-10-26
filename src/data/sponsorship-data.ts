export interface SponsorshipTier {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  tagline: string;
  badge: string;
  color: string;
  accentBg: string;
  popular?: boolean;
  slotsLimit?: number;
  deliverablesSummary: string[];
}

export interface PerkDeliverable {
  name: string;
  category: 'Branding & Stage' | 'Digital & Media' | 'Talent & Hiring' | 'On-Ground Engagement';
  description: string;
  tiers: {
    supporter_1500: boolean | string;
    bronze_2500: boolean | string;
    silver_3500: boolean | string;
    gold_4500: boolean | string;
    platinum_5500: boolean | string;
    diamond_6500: boolean | string;
    title_7500: boolean | string;
    stall_8000: boolean | string;
  };
}

export interface DemographicStat {
  label: string;
  value: string;
  subtext: string;
  percentage?: number;
  color: string;
}

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'supporter_1500',
    name: 'Community Supporter',
    price: 1500,
    priceFormatted: '₹1,500',
    tagline: 'Empower student hackers & open source in Eastern India',
    badge: 'ENTRY SUPPORTER',
    color: 'from-slate-400 to-zinc-500',
    accentBg: 'border-slate-500/40 bg-slate-900/40 text-slate-200',
    deliverablesSummary: [
      'Logo on Official Portal & Hack Day Website',
      'Community Discord & Telegram Sponsor Role',
      'Shared Shoutout on @grid.techhub Instagram Story',
      'Distribution of Digital Coupons / Dev Tools to Hackers'
    ]
  },
  {
    id: 'bronze_2500',
    name: 'Bronze Sponsor',
    price: 2500,
    priceFormatted: '₹2,500',
    tagline: 'Brand recognition across both MLH hackathon days',
    badge: 'BRONZE TIER',
    color: 'from-amber-700 to-amber-900',
    accentBg: 'border-amber-700/50 bg-amber-950/20 text-amber-200',
    deliverablesSummary: [
      'Small Logo on Stage Banner & Standees',
      'Dedicated Instagram Story Feature on @grid.techhub',
      'Logo in Opening Slide Deck at Hotel Royal Harbour',
      'Product Flyers / Swags in Hacker Welcome Kits'
    ]
  },
  {
    id: 'silver_3500',
    name: 'Silver Sponsor',
    price: 3500,
    priceFormatted: '₹3,500',
    tagline: 'Direct visibility & talent connection with top teams',
    badge: 'SILVER TIER',
    color: 'from-slate-300 to-slate-500',
    accentBg: 'border-slate-400/50 bg-slate-800/30 text-slate-100',
    deliverablesSummary: [
      'Medium Logo on Main Stage Flex & Backdrop',
      'Periodic Loop on Main Auditorium Projector Screen',
      'Dedicated Carousel Post on @grid.techhub Instagram',
      'Access to Opt-in Hacker GitHub & LinkedIn Directory'
    ]
  },
  {
    id: 'gold_4500',
    name: 'Gold Sponsor',
    price: 4500,
    priceFormatted: '₹4,500',
    tagline: 'Campus Media Club integration & high-frequency branding',
    badge: 'GOLD TIER',
    color: 'from-yellow-400 to-amber-600',
    accentBg: 'border-yellow-400/60 bg-yellow-950/25 text-yellow-300',
    popular: true,
    deliverablesSummary: [
      'College Official Media Club Feature (9,000+ Followers)',
      'Continuous 15-Min Main Projector Slide Loop (Both Days)',
      'Dedicated Instagram Reel + Post on @grid.techhub',
      'Resume Database Access of Finalist Hackers (1st-4th Year)',
      'Distribute Custom Branded Swag in Hacker Kits'
    ]
  },
  {
    id: 'platinum_5500',
    name: 'Platinum Sponsor',
    price: 5500,
    priceFormatted: '₹5,500',
    tagline: 'Stage speaking presence & custom problem statement challenge',
    badge: 'PLATINUM TIER',
    color: 'from-cyan-300 to-blue-500',
    accentBg: 'border-cyan-400/60 bg-cyan-950/25 text-cyan-200',
    deliverablesSummary: [
      '3-Min Keynote / Pitch Slot on Main Stage at Royal Harbour',
      'High-Frequency Continuous Projector Video/Slide Loop',
      'Official Media Club Dedicated Post + Reel (9K+ Reach)',
      'Sponsor a Custom Problem Statement / Innovation Bounty',
      'Complete Resume & Project Repositories Access',
      'Prominent Large Logo on All Banners, Passes & Badges'
    ]
  },
  {
    id: 'diamond_6500',
    name: 'Diamond Sponsor',
    price: 6500,
    priceFormatted: '₹6,500',
    tagline: 'Elite leadership presence, judging seat & premium promo',
    badge: 'DIAMOND TIER',
    color: 'from-fuchsia-400 to-pink-600',
    accentBg: 'border-pink-500/60 bg-pink-950/25 text-pink-200',
    deliverablesSummary: [
      '5-Minute Stage Address at Opening & Closing Ceremonies',
      'Official Judge / Mentor Seat on Evaluation Jury',
      'Non-Stop Projector Spotlight between Hacking Intervals',
      'Dual Media Club Feature + Co-Branded Reels on Instagram',
      'Custom Track Award Presentation & Winner Recognition',
      'VIP Reserved Table at Hotel Royal Harbour Executive Lounge'
    ]
  },
  {
    id: 'title_7500',
    name: 'Title / Flagship Partner',
    price: 7500,
    priceFormatted: '₹7,500',
    tagline: 'Co-Branded Title Sponsorship: "Hack4Haldia\'26 Presented by [Your Brand]"',
    badge: 'TITLE PARTNER',
    color: 'from-amber-400 via-rose-500 to-purple-600',
    accentBg: 'border-amber-400/80 bg-gradient-to-r from-amber-950/40 via-purple-950/40 to-slate-900 text-amber-200',
    popular: true,
    slotsLimit: 2,
    deliverablesSummary: [
      'Title Co-Branding on All MLH Materials & Live Streams',
      'Complimentary Physical Stall / Booth Space Included',
      'Non-Stop Prominent Projector Loop Throughout 20 Hours of Hacking',
      'College Media Club Mega-Campaign (9K+ Followers) + @grid.techhub',
      'Keynote Address (10 Mins) + Judge Panel Chair',
      'Full Direct Access to All 200+ Hacker Resumes & Portfolios',
      'Custom Swag & Merchandise in All Participant Gift Bags'
    ]
  }
];

export const STALL_PACKAGE = {
  id: 'stall_8000',
  name: '2-Day Physical Exhibition Stall / Booth',
  price: 8000,
  priceFormatted: '₹8,000',
  duration: 'Full 2 Days (October 29 & 31, 2026)',
  location: 'Hotel Royal Harbour, Durgachak / Kshudiram Square, Haldia',
  badge: 'PHYSICAL EXHIBITOR',
  description: 'Setup an exclusive physical booth at Hotel Royal Harbour for both hackathon days. Directly engage with 200+ curated developers, demo developer products, conduct on-spot interviews, and distribute company swag.',
  features: [
    { title: 'Dedicated Booth Space', desc: 'Prime table & backdrop setup right outside the main hackathon arena' },
    { title: 'Guaranteed Uninterrupted Electricity', desc: 'Dedicated 230V power sockets with venue generator backup' },
    { title: 'Venue Security & Access', desc: 'Secure round-the-clock venue monitoring for your equipment & displays' },
    { title: 'High-Speed Dedicated Wi-Fi', desc: 'Priority low-latency network connection for real-time demos' },
    { title: 'Direct Hacker Footfall', desc: '100 hand-picked hackers each day (200 total) visiting your stall' },
    { title: 'On-Spot Hiring & Lead Gen', desc: 'Collect resume submissions and signups directly in person' },
    { title: 'Projector & Stage Announcements', desc: 'Auditorium MC announcements directing attendees to your booth' }
  ]
};

export const PERKS_TABLE_PART1: PerkDeliverable[] = [
  {
    name: 'Logo on Official MLH & Hackathon Website',
    category: 'Branding & Stage',
    description: 'Featured on the live portal visited by thousands of developers.',
    tiers: {
      supporter_1500: true,
      bronze_2500: true,
      silver_3500: true,
      gold_4500: true,
      platinum_5500: true,
      diamond_6500: true,
      title_7500: 'Top Title Logo',
      stall_8000: 'Exhibitor Logo'
    }
  },
  {
    name: 'Stage Flex, Banners & Standees at Venue',
    category: 'Branding & Stage',
    description: 'Physical branding inside Hotel Royal Harbour conference hall.',
    tiers: {
      supporter_1500: false,
      bronze_2500: 'Small',
      silver_3500: 'Medium',
      gold_4500: 'Large',
      platinum_5500: 'Prominent',
      diamond_6500: 'Premium',
      title_7500: 'Co-Branded Title',
      stall_8000: 'At Stall + Banner'
    }
  },
  {
    name: 'Continuous Non-Stop Main Projector Display',
    category: 'Branding & Stage',
    description: 'Your brand, video loop, or slides running continuously on the main auditorium projector screen throughout the hackathon.',
    tiers: {
      supporter_1500: false,
      bronze_2500: 'Opening Deck',
      silver_3500: 'Hourly Loop',
      gold_4500: '15-Min Loop',
      platinum_5500: 'High Frequency Loop',
      diamond_6500: 'Spotlight Non-Stop',
      title_7500: 'Non-Stop Headline',
      stall_8000: 'Periodic Feature'
    }
  },
  {
    name: 'Stage Speaking / Pitch Slot',
    category: 'Branding & Stage',
    description: 'Direct speaking time from the main stage at Hotel Royal Harbour.',
    tiers: {
      supporter_1500: false,
      bronze_2500: false,
      silver_3500: false,
      gold_4500: false,
      platinum_5500: '3 Minutes',
      diamond_6500: '5 Minutes',
      title_7500: '10 Mins Keynote',
      stall_8000: '1-Min Pitch'
    }
  },
  {
    name: 'Judge / Evaluation Panel Seat',
    category: 'Branding & Stage',
    description: 'Representative sitting on the official hackathon evaluation jury.',
    tiers: {
      supporter_1500: false,
      bronze_2500: false,
      silver_3500: false,
      gold_4500: false,
      platinum_5500: 'Track Judge',
      diamond_6500: 'Official Judge',
      title_7500: 'Chief Jury Chair',
      stall_8000: false
    }
  }
];

export const PERKS_TABLE_PART2: PerkDeliverable[] = [
  {
    name: 'Official College Media Club Campaign (9,000+ Followers)',
    category: 'Digital & Media',
    description: 'Collaborative promotional post/story through HIT Haldia official inside media club with enormous campus influence and reach.',
    tiers: {
      supporter_1500: false,
      bronze_2500: false,
      silver_3500: 'Story Mention',
      gold_4500: 'Dedicated Post',
      platinum_5500: 'Post + Reel',
      diamond_6500: 'Mega Promo Post',
      title_7500: 'Comprehensive Campaign',
      stall_8000: 'Story + Stall Feature'
    }
  },
  {
    name: 'Dedicated Instagram Reel on @grid.techhub',
    category: 'Digital & Media',
    description: 'High-production reel showcasing your product, brand, or booth.',
    tiers: {
      supporter_1500: false,
      bronze_2500: false,
      silver_3500: false,
      gold_4500: '1 Dedicated Reel',
      platinum_5500: '1 Dedicated Reel',
      diamond_6500: '2 Dedicated Reels',
      title_7500: 'Collaborative Reels Series',
      stall_8000: '1 Booth Video Reel'
    }
  },
  {
    name: 'Dedicated Instagram Post on @grid.techhub',
    category: 'Digital & Media',
    description: 'Permanent grid showcase celebrating your brand as an official sponsor.',
    tiers: {
      supporter_1500: 'Story Shoutout',
      bronze_2500: 'Story Feature',
      silver_3500: 'Carousel Post',
      gold_4500: 'Dedicated Post',
      platinum_5500: 'Dedicated Post',
      diamond_6500: 'Pinned Grid Post',
      title_7500: 'Co-Branded Series',
      stall_8000: 'Exhibitor Spotlight Post'
    }
  },
  {
    name: 'Curated Resume Database & GitHub Repositories',
    category: 'Talent & Hiring',
    description: 'Direct pipeline of engineering talent across 1st, 2nd, 3rd, and 4th years from top colleges.',
    tiers: {
      supporter_1500: false,
      bronze_2500: false,
      silver_3500: 'Opt-in Directory',
      gold_4500: 'Finalists Directory',
      platinum_5500: 'Full Database',
      diamond_6500: 'Full Database + Portfolios',
      title_7500: 'Priority Hiring Access',
      stall_8000: 'On-Spot Submissions'
    }
  },
  {
    name: 'Swag Distribution in Hacker Kits',
    category: 'On-Ground Engagement',
    description: 'T-shirts, stickers, notebooks, coupons, and brochures given to all 200 attendees.',
    tiers: {
      supporter_1500: 'Coupons only',
      bronze_2500: 'Stickers / Flyers',
      silver_3500: 'Stickers + Swag',
      gold_4500: 'Custom Items',
      platinum_5500: 'Custom Items',
      diamond_6500: 'VIP Hacker Gift',
      title_7500: 'Title Branded Bag',
      stall_8000: 'Direct from Stall'
    }
  },
  {
    name: '2-Day Physical Stall / Exhibition Booth at Venue',
    category: 'On-Ground Engagement',
    description: 'Physical presence with table, security, electricity, and WiFi at Hotel Royal Harbour.',
    tiers: {
      supporter_1500: false,
      bronze_2500: false,
      silver_3500: false,
      gold_4500: 'Discounted Add-on',
      platinum_5500: '50% Off Add-on',
      diamond_6500: 'Free 1-Day Booth',
      title_7500: 'Included (Full 2-Days)',
      stall_8000: 'Full 2-Days Dedicated'
    }
  }
];

export const DEMOGRAPHICS_DATA = {
  totalHackers: '200+ Curated Builders',
  dailyBreakdown: '100 Hackers / Day (Oct 29 & Oct 31)',
  communityReach: '2,000+ Active GRID Community Members',
  mediaClubReach: '9,000+ Instagram Followers (Inside College Media Club)',
  geoDiversity: [
    { label: 'West Bengal (HIT Haldia, IIT Kharagpur, Jadavpur Univ, Heritage)', percentage: 65, color: 'bg-emerald-500' },
    { label: 'Bihar, Jharkhand & Odisha', percentage: 20, color: 'bg-amber-500' },
    { label: 'Interstate (Delhi, Mumbai, Karnataka, UP, and others)', percentage: 15, color: 'bg-cyan-500' }
  ],
  academicYears: [
    { year: '1st Year', share: '18%', desc: 'Enthusiastic builders eager to adopt their first developer tools & APIs.' },
    { year: '2nd Year', share: '32%', desc: 'Proven open-source contributors and active competitive coders.' },
    { year: '3rd Year', share: '35%', desc: 'Advanced full-stack & AI engineers seeking internships and toolchains.' },
    { year: '4th Year', share: '15%', desc: 'Graduating seniors ready for immediate job placements & fellowships.' }
  ],
  skillsBreakdown: [
    { label: 'AI, LLM Agents & Machine Learning', percentage: 42, color: 'bg-purple-500' },
    { label: 'Full-Stack & Cloud Architecture', percentage: 38, color: 'bg-blue-500' },
    { label: 'Systems, DevOps & Web3', percentage: 12, color: 'bg-amber-500' },
    { label: 'UI/UX & Product Design', percentage: 8, color: 'bg-pink-500' }
  ]
};

export const ORGANIZER_CONTACTS = [
  {
    name: 'Ganpati Raj',
    role: 'Founder @ GRID Community & Lead Organizer',
    events: 'MLH Hack Days Haldia (Oct 29 & Oct 31)',
    phone: '+91 82103 40228',
    email: 'ganpatirajt4x@gmail.com',
    initials: 'GR',
    accent: 'amber'
  },
  {
    name: 'Krishan Lal',
    role: 'Co-Founder @ GRID Community & Lead Organizer',
    events: 'Hack4Haldia\'26 x Voyage (Oct 29)',
    phone: '+91 70041 85934',
    email: 'krishanlal.grid@gmail.com',
    initials: 'KL',
    accent: 'cyan'
  },
  {
    name: 'Dev Upadhyay',
    role: 'Core Organizer · Operations & Venue Logistics',
    events: 'Hotel Royal Harbour Coordination',
    phone: '+91 94715 28410',
    email: 'operations@gridcommunity.tech',
    initials: 'DU',
    accent: 'emerald'
  },
  {
    name: 'Mayank Raj',
    role: 'Core Organizer · Sponsorships & Community Outreach',
    events: 'Sponsor Relations & Campus Partnerships',
    phone: '+91 88251 79213',
    email: 'sponsors@gridcommunity.tech',
    initials: 'MR',
    accent: 'purple'
  },
  {
    name: 'Neeraj Sahu',
    role: 'Core Organizer · Technical Infrastructure & Network',
    events: 'Venue Power, Wi-Fi & AV Stations',
    phone: '+91 74883 19462',
    email: 'tech@gridcommunity.tech',
    initials: 'NS',
    accent: 'rose'
  },
  {
    name: 'Omkar Gupta',
    role: 'Lead Contributor · Open Source & Hackathons',
    events: 'Mentorship & Repository Tracks',
    phone: '+91 81024 93751',
    email: 'mentors@gridcommunity.tech',
    initials: 'OG',
    accent: 'blue'
  }
];

export const BROCHURE_PAGES = [
  { id: 1, title: 'Cover Page', subtitle: 'Haldia Hacktoberfest Summit 2026' },
  { id: 2, title: 'About Summit & Venue', subtitle: 'Historic First Hackathon in Haldia' },
  { id: 3, title: 'Why Sponsor Us?', subtitle: 'High Impact Value Proposition' },
  { id: 4, title: 'Attendee Demographics', subtitle: '200+ Hackers & Pan-India Reach' },
  { id: 5, title: 'Sponsorship Perks 01', subtitle: 'Stage, Branding & Projector' },
  { id: 6, title: 'Sponsorship Perks 02', subtitle: 'Media Club, Reels & Stalls' },
  { id: 7, title: '2-Day Physical Stall', subtitle: 'Exclusive ₹8,000 Exhibition Booth' },
  { id: 8, title: 'Venue Arena & Glimpses', subtitle: 'Hotel Royal Harbour Facilities' },
  { id: 9, title: 'GRID Community Reach', subtitle: '2,000+ Members & Media Influence' },
  { id: 10, title: 'Contact Organizing Team', subtitle: 'Lock Your Tier & Partnership' }
];
