export type EventType = 'hack4haldia-voyage' | 'hacktoberfest-grid';

export interface HackathonEvent {
  id: EventType;
  title: string;
  tagline: string;
  badge: string;
  date: string;
  time: string;
  duration: string;
  venue: string;
  teamSize: string;
  registrationUrl: string;
  summary: string;
  keyHighlights: string[];
  swagDetails: string[];
  bannerImage: string;
  posterImage?: string;
  themeColor: 'amber' | 'emerald';
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  category: 'Keynote' | 'Hacking' | 'Workshop' | 'Food' | 'Judging' | 'Awards';
}

export interface SponsorInfo {
  name: string;
  category: string;
  description: string;
  perks: string;
  iconName: string;
}

export interface CommunityStat {
  label: string;
  value: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Hack4Haldia' | 'Hack Day Haldia' | 'Logistics';
}
