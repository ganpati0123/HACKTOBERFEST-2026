import React from 'react';
import { Shield, Sparkles, Instagram, Linkedin, Mail, Github, Quote, Award, Users, Terminal, Code2 } from 'lucide-react';
import { ORGANIZERS_DATA, CORE_TEAM_MEMBERS, SOCIAL_LINKS } from '../data/hackathon-data';

export const OrganizersSection: React.FC = () => {
  return (
    <section id="organizers" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-mono font-bold text-amber-400 mb-3 shadow-lg shadow-amber-500/10">
          <Award className="w-3.5 h-3.5" />
          <span>LEADERSHIP & ORGANIZING COMMITTEE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Meet the Lead Organizers & Core Team
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300">
          The builders driving Major League Hacking, Voyage, and GRID Community to host Haldia's premier Hacktoberfest summit at Hotel Royal Harbour.
        </p>
      </div>

      {/* Executive Leadership Grid (Ganpati Raj & Krishan Lal) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {ORGANIZERS_DATA.map((org, idx) => {
          const isGold = idx === 0;
          return (
            <div
              key={org.name}
              className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-2xl ${
                isGold 
                  ? 'glass-panel-gold border-2 border-amber-500/40 glow-gold' 
                  : 'glass-panel-cyan border-2 border-cyan-500/40 glow-cyan'
              }`}
            >
              {/* Ambient backdrop */}
              <div 
                className={`absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl pointer-events-none ${
                  isGold ? 'bg-amber-500/15' : 'bg-cyan-500/15'
                }`}
              />

              <div className="space-y-6 relative z-10">
                {/* Header Profile Lockup */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar Initials Badge */}
                    <div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-extrabold font-mono shadow-xl border-2 shrink-0 ${
                        isGold
                          ? 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 border-amber-300'
                          : 'bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-700 text-slate-950 border-cyan-300'
                      }`}
                    >
                      {org.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                          {org.name}
                        </h3>
                        <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400" title="Verified MLH Organizer">
                          <Shield className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div className={`text-xs font-semibold mt-0.5 ${isGold ? 'text-amber-300' : 'text-cyan-300'}`}>
                        {org.role}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg border self-start sm:self-auto ${
                    isGold
                      ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                      : 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30'
                  }`}>
                    {org.badge}
                  </span>
                </div>

                {/* Event Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {org.events.map((ev, eIdx) => (
                    <span 
                      key={eIdx}
                      className="px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {ev}
                    </span>
                  ))}
                </div>

                {/* Organizer Vision Thought Quote */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 relative">
                  <Quote className={`w-6 h-6 absolute top-3 right-3 opacity-30 ${isGold ? 'text-amber-400' : 'text-cyan-400'}`} />
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                    ORGANIZER'S VISION & THOUGHT
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    "{org.visionQuote}"
                  </p>
                </div>

                {/* Bio paragraph */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {org.bio}
                </p>
              </div>

              {/* Bottom Social Bar */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
                <span className="text-slate-400 text-[11px]">Connect directly:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:border-pink-500/40 hover:text-pink-400 text-slate-300 transition-all flex items-center gap-1.5"
                    title="Follow on Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span className="text-[11px] font-medium hidden sm:inline">@grid.techhub</span>
                  </a>

                  {org.links.email && (
                    <a
                      href={`mailto:${org.links.email}`}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-amber-500/20 hover:border-amber-500/40 hover:text-amber-300 text-slate-300 transition-all flex items-center gap-1.5"
                      title="Email Organizer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium hidden sm:inline">Email</span>
                    </a>
                  )}

                  {org.links.github && (
                    <a
                      href={org.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 transition-all"
                      title="GitHub Profile"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={org.links.linkedin || "https://linkedin.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400 text-slate-300 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Organizing Committee & Lead Contributors Grid */}
      <div className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold font-display text-white">
              Core Organizing Committee & Lead Contributors
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Dedicated student leads driving operations, sponsorships, technical tooling, and mentorship.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/30 self-start sm:self-auto">
            GRID COMMUNITY · HIT HALDIA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold font-mono text-sm group-hover:scale-105 transition-transform">
                      {member.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {member.name}
                      </h4>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>

                <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-400">
                  {member.badge}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {member.visionQuote && (
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-[11px] text-slate-300 italic leading-relaxed">
                  "{member.visionQuote}"
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
