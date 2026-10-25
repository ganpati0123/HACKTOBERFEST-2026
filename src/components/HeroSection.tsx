import React from 'react';
import { Anchor, Sparkles, ArrowRight, Terminal, Trophy, MapPin, Users } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface HeroSectionProps {
  onOpenRegisterModal: (eventId?: string) => void;
  onSelectEventTab: (eventId: 'hack4haldia-voyage' | 'hacktoberfest-grid') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenRegisterModal,
  onSelectEventTab 
}) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cyber-grid">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Top Community & League Pill Tagline (Clean inline metadata with dot separators) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs text-slate-300 mb-6 shadow-inner">
          <span className="font-bold text-amber-400">MLH Hacktoberfest Season</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>GRID Community HIT Haldia</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-cyan-400 font-medium">In Partnership with Voyage</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white max-w-4xl mx-auto leading-[1.1] text-balance">
          Haldia Hacktoberfest <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Hack Days 2026
          </span>
        </h1>

        {/* Descriptive Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Open Source. Autonomous AI. Collaborative Innovation. Two back-to-back flagship hackathons in Haldia bringing together 2000+ builders from IITs, NITs, and top engineering institutions.
        </p>

        {/* Dual Quick Event Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
          {/* Card 1: Voyage */}
          <div 
            onClick={() => {
              onSelectEventTab('hack4haldia-voyage');
              const el = document.getElementById('events');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-5 rounded-2xl glass-panel-gold border border-amber-500/30 hover:border-amber-400 transition-all hover:scale-[1.01] cursor-pointer group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                29 OCT 2026 · HOTEL ROYAL HARBOUR
              </span>
              <Anchor className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
            </div>
            <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
              Hack4Haldia'26 — Hack Day Haldia x Voyage ⚓
            </h3>
            <div className="text-[11px] text-amber-300 font-semibold mt-1">
              Lead Organizers: Ganpati Raj (Founder) & Krishan Lal (Co-Founder @ GRID)
            </div>
            <p className="text-xs text-slate-300 mt-1.5 line-clamp-2">
              8-Hour AI-powered Hackathon. Receive a mystery open-source starter repo + Markdown challenge brief. Transform it into a live working solution with AI coding tools.
            </p>
            <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>Team: 3–4 Members · Exclusive MLH Rewards</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: GRID Community Hack Day */}
          <div 
            onClick={() => {
              onSelectEventTab('hacktoberfest-grid');
              const el = document.getElementById('events');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-5 rounded-2xl glass-panel-cyan border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-[1.01] cursor-pointer group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                31 OCT 2026 · HOTEL ROYAL HARBOUR
              </span>
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
              Hacktoberfest 26 Hack Day Haldia 💻⚡
            </h3>
            <div className="text-[11px] text-cyan-300 font-semibold mt-1">
              Lead Organizer: Ganpati Raj · GRID Community
            </div>
            <p className="text-xs text-slate-300 mt-1.5 line-clamp-2">
              12-Hour Open Source & AI Festival at Hotel Royal Harbour, Haldia. Master git pull requests, build collaborative projects, and hoist Hacktoberfest badges.
            </p>
            <div className="mt-4 pt-3 border-t border-cyan-500/20 flex items-center justify-between text-xs font-semibold text-cyan-400">
              <span>Presented by GRID Community · Team 1–4</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="mt-10">
          <CountdownTimer />
        </div>

        {/* Stats Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">5M+</div>
            <div className="text-xs text-slate-400 mt-0.5">Global MLH Hackers</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 tabular-nums">2,000+</div>
            <div className="text-xs text-slate-400 mt-0.5">GRID Tech Members</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 tabular-nums">7+</div>
            <div className="text-xs text-slate-400 mt-0.5">Grand Events Hosted</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">20 Hrs</div>
            <div className="text-xs text-slate-400 mt-0.5">AI & Open Source Coding</div>
          </div>
        </div>
      </div>
    </section>
  );
};
