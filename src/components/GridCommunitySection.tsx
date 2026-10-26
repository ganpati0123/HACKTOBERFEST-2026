import React from 'react';
import { Network, Users, Award, ExternalLink, Instagram, MessageSquare, Heart, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/hackathon-data';

export const GridCommunitySection: React.FC = () => {
  const testimonials = [
    {
      quote: "From managing high-speed networking and power docks at Hotel Royal Harbour to coordinating MLH sponsor perks, our goal is to give every hacker an unforgettable, tier-1 hackathon experience right here in Haldia.",
      author: "Dev Upadhyay",
      role: "Lead Organizer at Voyage & Hack Day Haldia",
      track: "Operations & Hacker Experience"
    },
    {
      quote: "Hosting two flagship MLH events in one week puts Haldia on the global builder map. Connecting 2000+ builders across IITs, NITs, and HIT creates unmatched peer energy.",
      author: "Mayank Raj",
      role: "Core Organizer · GRID Community",
      track: "Community & Outreach"
    },
    {
      quote: "Zero downtime, reliable power backup, and high-speed local repository caches. We build infrastructure so hackers can focus purely on solving the challenges.",
      author: "Neeraj Sahu",
      role: "Core Organizer · GRID Community",
      track: "Technical Infrastructure"
    },
    {
      quote: "The 8-hour Mystery Repo challenge pushes hackers to write real code with AI coding tools rather than static slides. Contributing to open-source starters under time pressure is where real engineering skills are forged.",
      author: "Omkar Gupta",
      role: "Lead Contributor · GRID Community",
      track: "Open Source Mentorship"
    }
  ];

  return (
    <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold text-cyan-400 mb-3 shadow-lg shadow-cyan-500/10">
          <Network className="w-3.5 h-3.5" />
          <span>HOST TECHNICAL COMMUNITY</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Powered by GRID Community
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300">
          Where tech minds connect. Founded at HIT Haldia by Ganpati Raj, uniting 2,000+ ambitious developers, open-source contributors, and founders from IITs, NITs, and top institutions.
        </p>
      </div>

      {/* Main Feature Showcase Container */}
      <div className="rounded-3xl glass-panel-cyan border-2 border-cyan-500/30 p-6 md:p-10 shadow-2xl relative overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: The Official GRID Logo with Cybernetic Glow */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group p-4 rounded-3xl bg-black/80 border-2 border-cyan-500/50 shadow-2xl glow-cyan max-w-sm">
              <img 
                src="/assets/aistudio/image_7d405a6b.png" 
                alt="GRID Community Official Logo - Where Tech Minds Connect"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-2xl object-contain"
              />
              <div className="mt-3 py-2 px-4 rounded-xl bg-slate-950 border border-cyan-500/20 text-xs font-mono font-bold text-cyan-400 tracking-wider">
                WHERE TECH MINDS CONNECT
              </div>
            </div>

            {/* Instagram Follow Badge */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-pink-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow {SOCIAL_LINKS.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Community Story & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>LEADERSHIP: GANPATI RAJ, KRISHAN LAL, DEV UPADHYAY & CORE BUILDERS</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold font-display text-white mt-1">
                Cultivating India's Next Generation of Tech Leaders
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed font-medium">
                GRID Community was established to turn passion into production-grade execution. We organize hands-on hackathons, open-source bootcamps, and AI hack days that bring together builders from IITs, NITs, IIITs, and regional powerhouses. Over 7 major technical events hosted with 2000+ active student contributors.
              </p>
            </div>

            {/* 3 Pillar Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/20">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 tabular-nums">
                  2,000+
                </div>
                <div className="text-xs font-semibold text-white mt-1">Active Members</div>
                <div className="text-[11px] text-slate-400 mt-0.5">IITs, NITs, IIITs & HIT</div>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/20">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 tabular-nums">
                  7+
                </div>
                <div className="text-xs font-semibold text-white mt-1">Major Events Hosted</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Hackathons & Summits</div>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/20">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                  500+
                </div>
                <div className="text-xs font-semibold text-white mt-1">Merged Pull Requests</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Global Open Source</div>
              </div>
            </div>

            {/* Community Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-xs md:text-sm shadow-lg shadow-pink-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @grid.techhub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={SOCIAL_LINKS.gridRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-xs md:text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Register for Oct 31 Hack Day</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Community Thoughts / Testimonial Cards */}
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            COMMUNITY VOICES & THOUGHTS
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
            Perspectives from Haldia's Builder Ecosystem
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-3xl text-cyan-400 font-serif leading-none">“</span>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-xs">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <strong className="text-xs font-semibold text-white block">
                    {item.author}
                  </strong>
                  <span className="text-[11px] text-slate-400 block">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
