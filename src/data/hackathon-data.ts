import { HackathonEvent, ScheduleItem, SponsorInfo, FAQItem } from '../types/hackathon';

export interface OrganizerProfile {
  name: string;
  role: string;
  events: string[];
  bio: string;
  visionQuote: string;
  avatarUrl?: string;
  initials: string;
  badge: string;
  links: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface CoreTeamMember {
  name: string;
  role: string;
  category: 'Executive' | 'Core Organizer' | 'Lead Contributor';
  badge: string;
  initials: string;
  bio: string;
  visionQuote?: string;
}

export const ORGANIZERS_DATA: OrganizerProfile[] = [
  {
    name: 'Ganpati Raj',
    role: 'Lead Organizer · MLH Hack Days Haldia & Founder @ GRID Community',
    events: ['Hack4Haldia\'26 x Voyage (Oct 29)', 'Hacktoberfest Hack Day Haldia (Oct 31)'],
    initials: 'GR',
    badge: 'FOUNDER & LEAD ORGANIZER',
    bio: 'Pioneering high-velocity developer culture across Eastern India. Connecting 2000+ builders from IITs, NITs, IIITs, and regional technical hubs with global open-source ecosystems and AI toolchains.',
    visionQuote: 'Our mission is to dismantle the barrier between tier-1 institutions and the rest of the country. By bringing Major League Hacking and real open-source repos to Haldia, we empower every student to build production-grade AI solutions and claim their seat at the global tech table.',
    links: {
      instagram: 'https://www.instagram.com/grid.techhub?xtok=MXAzbHVoNjR2ajZ1dw==',
      linkedin: 'https://linkedin.com',
      email: 'ganpatirajt4x@gmail.com'
    }
  },
  {
    name: 'Krishan Lal',
    role: 'Co-Founder @ GRID Community & Lead Organizer · Hack4Haldia\'26 x Voyage',
    events: ['Hack4Haldia\'26 x Voyage (Oct 29)'],
    initials: 'KL',
    badge: 'CO-FOUNDER & LEAD ORGANIZER',
    bio: 'Co-founding GRID Community and architecting high-intensity hackathon experiences and collaborative developer toolchains. Leading the 8-hour Mystery AI Repo challenge in partnership with Voyage.',
    visionQuote: 'Hack4Haldia x Voyage isn\'t about building another generic CRUD app. It is about dropping engineers into real, living codebases under an 8-hour ticking clock and seeing how smartly they can leverage modern AI tools to ship verifiable value.',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/grid.techhub?xtok=MXAzbHVoNjR2ajZ1dw=='
    }
  }
];

export const CORE_TEAM_MEMBERS: CoreTeamMember[] = [
  {
    name: 'Dev Upadhyay',
    role: 'Core Organizer · GRID Community',
    category: 'Core Organizer',
    badge: 'OPERATIONS & SPONSORSHIPS',
    initials: 'DU',
    bio: 'Directing on-ground event execution, MLH sponsor workflows, and hacker experience at Hotel Royal Harbour.',
    visionQuote: 'We wanted to ensure that every hacker walks into Hotel Royal Harbour and feels world-class hospitality, seamless WiFi, and instant mentor support.'
  },
  {
    name: 'Mayank Raj',
    role: 'Core Organizer · GRID Community',
    category: 'Core Organizer',
    badge: 'COMMUNITY & OUTREACH',
    initials: 'MR',
    bio: 'Spearheading campus ambassador networks and inter-college team coordination across IIT, NIT, and HIT.',
    visionQuote: 'Hosting two flagship MLH events in one week puts Haldia on the global builder map. The level of innovation we will see is unprecedented.'
  },
  {
    name: 'Neeraj Sahu',
    role: 'Core Organizer · GRID Community',
    category: 'Core Organizer',
    badge: 'TECHNICAL INFRASTRUCTURE',
    initials: 'NS',
    bio: 'Overseeing live network switches, hardware docks, and developer tooling stations for all 100+ competing teams.',
    visionQuote: 'Zero downtime, flawless power backup, and high-speed local repository caches. We build infrastructure so hackers can focus purely on code.'
  },
  {
    name: 'Omkar Gupta',
    role: 'Lead Contributor · GRID Community',
    category: 'Lead Contributor',
    badge: 'OPEN SOURCE MENTOR',
    initials: 'OG',
    bio: 'Curating open-source starter repositories, CI/CD validation loops, and hands-on AI workflow guides for hackers.',
    visionQuote: 'Seeing students make their very first merged pull request during Hacktoberfest is the most rewarding feeling as a contributor.'
  }
];

export const EVENTS_DATA: Record<string, HackathonEvent> = {
  'hack4haldia-voyage': {
    id: 'hack4haldia-voyage',
    title: "Hack4Haldia'26 — Hack Day Haldia x Voyage",
    tagline: 'A Voyage to Better Tomorrow · BUILD / SOLVE / MAKE AN IMPACT',
    badge: '⚓ 8-HOUR AI HACKATHON',
    date: '29 October 2026',
    time: '09:00 AM – 05:00 PM',
    duration: '8 Hours',
    venue: 'Hotel Royal Harbour, Haldia',
    teamSize: '3 – 4 Members',
    registrationUrl: 'https://events.mlh.com/events/15469-hacktoberfest-hack-day-haldia-x-voyage?_gl=1*1217az1*_ga*MTkzNDU0Njc2My4xNzkyOTY3NTAz*_ga_E5KT6TC4TK*czE3OTI5Njc1MDMkbzEkZzEkdDE3OTI5Njc1MDgkajU1JGwwJGgw',
    summary: 'An 8-hour AI-powered hackathon where each team will receive a randomly assigned open-source repository with a starter codebase and a challenge brief in Markdown and transform it into a live functional solution. Teams are encouraged to leverage AI coding and dev tools.',
    keyHighlights: [
      'Lead Organizers: Ganpati Raj & Krishan Lal',
      'One repo. One challenge. Eight hours. What can your team build? ⚔️',
      'Randomly assigned open-source repository starter + Markdown challenge brief',
      'AI coding tools & workflows encouraged (Cursor, Claude Code, Gemini, Copilot, v0)',
      'Venue: Hotel Royal Harbour (Near Mediland Nursing Home, Kshudiram Square, Haldia)',
      'Strict team size: 3–4 members with collaborative role division'
    ],
    swagDetails: [
      'Exclusive Hacktoberfest & Voyage swag for all participants',
      'Exclusive MLH rewards & winner trophies for top teams',
      'Voyage partner tech vouchers & cloud credits'
    ],
    bannerImage: '/assets/aistudio/image_fc34b788.png',
    posterImage: '/assets/aistudio/image_6980b089.png',
    themeColor: 'amber'
  },
  'hacktoberfest-grid': {
    id: 'hacktoberfest-grid',
    title: 'Hacktoberfest 26 Hack Day Haldia',
    tagline: 'Open Source · AI · Collaboration · Building Together',
    badge: '💻⚡ 12-HOUR HACK DAY & OPEN SOURCE FEST',
    date: '31 October 2026',
    time: '08:00 AM – 08:00 PM',
    duration: '12 Hours',
    venue: 'Hotel Royal Harbour, Haldia',
    teamSize: '1 – 4 Members',
    registrationUrl: 'https://events.mlh.com/events/15005-hacktoberfest-hack-day-haldia-x-grid-community?_gl=1*d9z7gh*_ga*MTkzNDU0Njc2My4xNzkyOTY3NTAz*_ga_E5KT6TC4TK*czE3OTI5Njc1MDMkbzEkZzEkdDE3OTI5Njc1NDMkajIwJGwwJGgw',
    summary: 'Join us for 12 hours of learning, contributing, building, and connecting with fellow developers as we celebrate Hacktoberfest 2026 with an MLH Hack Day! AI and Open Source belong to everyone. 🤝🛡️',
    keyHighlights: [
      'Lead Organizer: Ganpati Raj with GRID Community HIT Haldia',
      '12 Hours of hands-on open source contribution sprints and technical workshops',
      'Networking with 2000+ developer community spanning IIT, NIT, IIIT & HIT Haldia',
      'Venue: Hotel Royal Harbour, Kshudiram Square, Haldia',
      'Official Instagram: @grid.techhub with live highlights & reel recaps',
      'Beginner-friendly First-PR track + Advanced Production Hack track'
    ],
    swagDetails: [
      'Official MLH Hack Day 2026 attendee swag kit & stickers',
      'Hacktoberfest 2026 commemorative physical badges & certificates',
      'Special community goodies from GRID Community & partner sponsors'
    ],
    bannerImage: '/assets/aistudio/image_970177eb.png',
    posterImage: '/assets/aistudio/image_970177eb.png',
    themeColor: 'emerald'
  }
};

export const VENUE_DETAILS = {
  name: 'Hotel Royal Harbour',
  address: 'Near Mediland Nursing Home, Khanjanchak, Basudevpur, Kshudiram Square, Hpl Link Road, Haldia, Purba Medinipur, West Bengal 721602',
  mapUrl: 'https://www.google.com/maps/dir//royal+harbour/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a02f7b276bdd2a5:0x12d330d5bd64ef8d?sa=X&ved=1t:155782&ictx=111',
  landmark: 'Kshudiram Square, Near Mediland Nursing Home & HPL Link Road',
  city: 'Haldia, Purba Medinipur, West Bengal - 721602'
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/grid.techhub?xtok=MXAzbHVoNjR2ajZ1dw==',
  instagramHandle: '@grid.techhub',
  mlhDiscord: 'https://discord.gg/mlh',
  gridGithub: 'https://github.com/grid-hit',
  voyageRegisterUrl: 'https://events.mlh.com/events/15469-hacktoberfest-hack-day-haldia-x-voyage?_gl=1*1217az1*_ga*MTkzNDU0Njc2My4xNzkyOTY3NTAz*_ga_E5KT6TC4TK*czE3OTI5Njc1MDMkbzEkZzEkdDE3OTI5Njc1MDgkajU1JGwwJGgw',
  gridRegisterUrl: 'https://events.mlh.com/events/15005-hacktoberfest-hack-day-haldia-x-grid-community?_gl=1*d9z7gh*_ga*MTkzNDU0Njc2My4xNzkyOTY3NTAz*_ga_E5KT6TC4TK*czE3OTI5Njc1MDMkbzEkZzEkdDE3OTI5Njc1NDMkajIwJGwwJGgw'
};

export const VOYAGE_SCHEDULE: ScheduleItem[] = [
  {
    time: '09:00 AM – 09:30 AM',
    title: 'Check-in, Hacker Harbor & Breakfast',
    description: 'Badge issuance at Hotel Royal Harbour reception, power station allocation, network checks.',
    category: 'Food'
  },
  {
    time: '09:30 AM – 10:00 AM',
    title: 'Opening Ceremony & Mystery Repo Reveal',
    description: 'Keynote by Lead Organizers Ganpati Raj & Krishan Lal, release of assigned open-source challenge repos.',
    category: 'Keynote'
  },
  {
    time: '10:00 AM – 01:00 PM',
    title: 'Sprint Phase I: Architecture & AI-Assisted Implementation',
    description: 'Teams dive into starter codebases, draft solutions, and implement core logic with AI copilots.',
    category: 'Hacking'
  },
  {
    time: '01:00 PM – 01:45 PM',
    title: 'High-Sea Fuel: Lunch & Mentor Sync',
    description: 'Buffet lunch at Hotel Royal Harbour dining lounge, mentor table walkthroughs, and code review checkpoints.',
    category: 'Food'
  },
  {
    time: '01:45 PM – 03:45 PM',
    title: 'Sprint Phase II: Prototype Completion & Integration',
    description: 'Finalizing live interfaces, testing edge cases, polishing AI workflows, and preparing deployment URLs.',
    category: 'Hacking'
  },
  {
    time: '03:45 PM – 04:00 PM',
    title: 'Soft Freeze & Project Submission',
    description: 'Repository commit freeze, README update with AI prompts utilized, and live project submission.',
    category: 'Judging'
  },
  {
    time: '04:00 PM – 04:45 PM',
    title: 'Live Pitching & Jury Judging Round',
    description: 'Teams present 3-minute live interactive demonstrations to MLH and industry judges.',
    category: 'Judging'
  },
  {
    time: '04:45 PM – 05:00 PM',
    title: 'Award Ceremony & Swag Hoisting',
    description: 'Announcement of Top 3 winners, MLH rewards distribution, and photo session with organizers.',
    category: 'Awards'
  }
];

export const GRID_SCHEDULE: ScheduleItem[] = [
  {
    time: '08:00 AM – 09:00 AM',
    title: 'Gates Open & Welcome Kit Distribution',
    description: 'Attendee check-in at Hotel Royal Harbour conference hall, breakfast, and MLH Hack Day badge pick-up.',
    category: 'Food'
  },
  {
    time: '09:00 AM – 09:45 AM',
    title: 'Inaugural Keynote: AI and Open Source for Everyone',
    description: 'Welcome address by Lead Organizer Ganpati Raj & GRID Core Team, faculty patrons, and MLH representative.',
    category: 'Keynote'
  },
  {
    time: '09:45 AM – 11:00 AM',
    title: 'Workshop: Mastering Git, Open Source PRs & Modern AI Tools',
    description: 'Live interactive masterclass on navigating GitHub, upstream forks, and AI pair-programming.',
    category: 'Workshop'
  },
  {
    time: '11:00 AM – 01:30 PM',
    title: 'Hackathon & Contribution Sprint: Block 1',
    description: '12-hour building commences. Teams hack on open source issues or innovate on custom AI solutions.',
    category: 'Hacking'
  },
  {
    time: '01:30 PM – 02:30 PM',
    title: 'Networking Lunch & Developer Mixer',
    description: 'Hot buffet lunch in the Royal Harbour dining hall. Connect with fellow developers from IIT, NIT, and HIT.',
    category: 'Food'
  },
  {
    time: '02:30 PM – 05:30 PM',
    title: 'Hackathon & Contribution Sprint: Block 2 & Lightning Talks',
    description: 'Intense build session with 10-minute lightning tech talks by senior engineers and community alumni.',
    category: 'Hacking'
  },
  {
    time: '05:30 PM – 06:15 PM',
    title: 'High-Tea & Final Code Submission Freeze',
    description: 'Tea/coffee break, finalizing PR submissions, and staging live demos.',
    category: 'Food'
  },
  {
    time: '06:15 PM – 07:15 PM',
    title: 'Final Project Expo & Open Source Showcase',
    description: 'Selected teams demonstrate their pull requests and working prototypes on the main stage.',
    category: 'Judging'
  },
  {
    time: '07:15 PM – 08:00 PM',
    title: 'Grand Closing, MLH Awards & Certificate Hoisting',
    description: 'Celebrating Hacktoberfest 2026 completion, top contributors honored, and community photo.',
    category: 'Awards'
  }
];

export const SPONSORS_DATA: SponsorInfo[] = [
  {
    name: 'Major League Hacking (MLH)',
    category: 'Official Global Hackathon League',
    description: 'Empowering 5M+ software creators globally through hackathons, fellowships, and dev community initiatives.',
    perks: 'Official MLH season swag, winner prizes, and fellowship fast-track consideration.',
    iconName: 'Award'
  },
  {
    name: 'Voyage',
    category: 'Flagship Event Partner',
    description: 'Powering high-velocity developer journeys, autonomous toolchains, and collaborative AI innovation.',
    perks: 'Exclusive Voyage trophy, direct mentorship, and developer travel kit.',
    iconName: 'Compass'
  },
  {
    name: 'GRID Community',
    category: 'Host Technical Community · HIT Haldia',
    description: 'Premier student-led technical collective connecting 2000+ builders across IITs, NITs, IIITs, and HIT with 7+ premier hosted events.',
    perks: 'Full campus & community support, Hotel Royal Harbour venue coordination, mentoring pool, and logistics.',
    iconName: 'Network'
  },
  {
    name: 'Google Cloud / Gemini',
    category: 'AI & Cloud Infrastructure Partner',
    description: 'Cutting-edge multimodal models, Google Cloud vertex credits, and developer tools.',
    perks: 'Free API credits, Vertex AI sandbox access, and Gemini Developer documentation kits.',
    iconName: 'Cpu'
  },
  {
    name: 'Solana',
    category: 'Web3 & High-Speed Chain Partner',
    description: 'The ultra-scalable blockchain powering decentralized identity, micro-payments, and high-performance apps.',
    perks: 'Dedicated Web3 bounty track with prizes for top decentralized implementations.',
    iconName: 'Layers'
  },
  {
    name: 'GitHub',
    category: 'Open Source Ecosystem Partner',
    description: 'The home for 100M+ developers to build, collaborate, and push the boundaries of open source software.',
    perks: 'GitHub Student Developer Packs, Copilot access vouchers, and Hacktoberfest swag.',
    iconName: 'GitBranch'
  },
  {
    name: 'Snowflake',
    category: 'Data Cloud & Enterprise Analytics',
    description: 'Unified data platform powering scalable analytics, machine learning, and secure data sharing.',
    perks: 'Best Data / AI integration award and Snowflake cloud trials.',
    iconName: 'Database'
  },
  {
    name: 'DigitalOcean',
    category: 'Developer Cloud & VPS',
    description: 'Simple, reliable cloud computing built for developers to launch applications seamlessly.',
    perks: '$200 cloud hosting credits for every participating team to deploy live prototypes.',
    iconName: 'Server'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'General',
    question: 'What are the two events happening in Haldia during Hacktoberfest 2026?',
    answer: 'We are hosting two distinct flagship events: (1) Hack4Haldia\'26 x Voyage on October 29 (an 8-hour sprint led by Ganpati Raj & Krishan Lal where teams receive mystery open-source repos to solve with AI), and (2) Hacktoberfest Hack Day Haldia on October 31 (a 12-hour open source festival, workshops & hack day led by Ganpati Raj with GRID Community). Both events take place at Hotel Royal Harbour, Haldia.'
  },
  {
    category: 'Hack4Haldia',
    question: 'How does the "Mystery Repo" challenge work in Hack4Haldia\'26 x Voyage?',
    answer: 'At 10:00 AM on October 29, each team is randomly assigned a curated open-source repository starter along with a challenge brief in Markdown. Your team has 8 hours to analyze the repo, plan the feature using AI coding assistants (like Cursor, Claude Code, Gemini, Copilot), and submit a live working solution.'
  },
  {
    category: 'Hack4Haldia',
    question: 'Who are the Lead Organizers for Hack4Haldia\'26?',
    answer: 'Hack4Haldia\'26 x Voyage is led by Ganpati Raj (Lead Organizer & GRID Founder) and Krishan Lal (Lead Organizer).'
  },
  {
    category: 'Hack Day Haldia',
    question: 'Who is leading Hacktoberfest Hack Day Haldia (31 Oct)?',
    answer: 'The October 31 event is led by Ganpati Raj (Lead Organizer) in collaboration with the GRID Community core team at HIT Haldia and Major League Hacking.'
  },
  {
    category: 'Logistics',
    question: 'Where is the official venue and how do I navigate to Hotel Royal Harbour?',
    answer: 'The event venue is Hotel Royal Harbour, located Near Mediland Nursing Home, Khanjanchak, Basudevpur, Kshudiram Square, Hpl Link Road, Haldia, Purba Medinipur, West Bengal 721602. You can use our 1-click Google Maps navigation button for turn-by-turn directions.'
  },
  {
    category: 'Logistics',
    question: 'How do I follow GRID Community for live event updates?',
    answer: 'Follow our official Instagram handle @grid.techhub (https://www.instagram.com/grid.techhub) for real-time announcements, reel recaps, team spotlights, and photo galleries!'
  },
  {
    category: 'General',
    question: 'Is there any registration fee?',
    answer: 'No! Both Hack4Haldia\'26 and Hacktoberfest Hack Day Haldia are completely free of cost for all participants, backed by Major League Hacking (MLH), Voyage, and GRID Community.'
  }
];
