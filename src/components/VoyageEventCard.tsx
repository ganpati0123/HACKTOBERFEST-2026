import React from 'react';
import { Anchor, Clock, Users, Gift, Trophy, ExternalLink, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { EVENTS_DATA } from '../data/hackathon-data';

interface VoyageEventCardProps {
  onOpenRegisterModal: (eventId: string) => void;
}

export const VoyageEventCard: React.FC<VoyageEventCardProps> = ({ onOpenRegisterModal }) => {
  const event = EVENTS_DATA['hack4haldia-voyage'];

  return (
    <div className="rounded-3xl glass-panel-gold border-2 border-amber-500/30 p-6 md:p-10 relative overflow-hidden shadow-2xl">
      {/* Decorative compass accent */}
      <div className="absolute top-4 right-4 text-amber-500/10 pointer-events-none hidden sm:block">
        <Compass className="w-48 h-48 -rotate-12" />
      </div>

      {/* Top Banner Image with rounded cutout styling */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 mb-8 max-h-72 shadow-lg">
        <img 
          src="/assets/aistudio/image_fc34b788.png" 
          alt="Hack4Haldia'26 Banner - A Voyage to Better Tomorrow"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 md:p-6">
          <div>
            <div className="inline-block text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-amber-400/30">
              OFFICIAL MLH HACK DAY
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold font-display text-white mt-1">
              Hack4Haldia'26 — Hack Day Haldia x Voyage ⚓
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Event details, core pitch, and key specs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 mb-2 font-mono">
              <span className="font-semibold">{event.date}</span>
              <span>·</span>
              <span>{event.time}</span>
              <span>·</span>
              <span className="text-white font-bold">Hotel Royal Harbour, Haldia</span>
            </div>

            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-xs text-amber-200 mb-3 font-semibold">
              <span>Lead Organizers:</span>
              <strong className="text-white">Ganpati Raj</strong>
              <span className="text-slate-400 font-normal">(Founder @ GRID)</span>
              <span>&</span>
              <strong className="text-white">Krishan Lal</strong>
              <span className="text-slate-400 font-normal">(Co-Founder @ GRID)</span>
            </div>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-medium">
              An 8-hour AI-powered hackathon where each team will receive a randomly assigned open-source repository with a starter codebase and a challenge brief in Markdown and transform it into a live functional solution. Teams are encouraged to leverage modern AI coding and dev tools.
            </p>
          </div>

          {/* Slogan highlight box */}
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-3">
            <Anchor className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 tracking-wide uppercase">
                THE SPRINT CODE
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                "One repo. One challenge. Eight hours. What can your team build? ⚔️"
              </div>
              <div className="text-xs text-amber-200/80 mt-0.5">
                Register · Build · Contribute · Compete · Hoist Your Sail
              </div>
            </div>
          </div>

          {/* Spec Pills Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Team Size</span>
              </div>
              <strong className="text-sm font-semibold text-white block mt-1">3–4 Members</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Duration</span>
              </div>
              <strong className="text-sm font-semibold text-white block mt-1">8 Hours Intensive</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Gift className="w-3.5 h-3.5 text-amber-400" />
                <span>Swag & Rewards</span>
              </div>
              <strong className="text-sm font-semibold text-white block mt-1">Exclusive MLH Swag</strong>
            </div>
          </div>

          {/* Judging breakdown highlights */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-2">
              OFFICIAL JUDGING CRITERIA
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>Technical Execution (25%)</strong>: Clean code & stability</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>Innovation (20%)</strong>: Novelty & creativity of solution</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>AI Tool Usage (20%)</strong>: Prompt & workflow strategy</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>Working Prototype (20%)</strong>: Live demonstrable deployment</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://events.mlh.com/events/15469-hacktoberfest-hack-day-haldia-x-voyage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Register on Official MLH Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenRegisterModal('hack4haldia-voyage')}
              className="px-5 py-3 rounded-xl glass-panel border border-amber-400/40 text-amber-300 hover:text-white hover:bg-amber-500/10 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Get Hack4Haldia Pass</span>
            </button>
          </div>
        </div>

        {/* Right Column: Poster showcase & Tech Stack logos */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl relative group bg-black">
            <img 
              src="/assets/aistudio/image_6980b089.png" 
              alt="Hack4Haldia'26 Poster - Hack Day Haldia x Voyage"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-3 bg-slate-950/90 border-t border-amber-500/30 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">Limited Spots Available</span>
              <span className="font-mono text-amber-400 font-bold">EVENT #15469</span>
            </div>
          </div>

          {/* Partner Tech Row */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-center">
            <div className="text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-2">
              FEATURED VOYAGE & MLH TECH PARTNERS
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
              <span className="hover:text-amber-400 transition-colors">Google Cloud</span>
              <span className="text-slate-600">·</span>
              <span className="hover:text-amber-400 transition-colors">Solana</span>
              <span className="text-slate-600">·</span>
              <span className="hover:text-amber-400 transition-colors">GitHub</span>
              <span className="text-slate-600">·</span>
              <span className="hover:text-amber-400 transition-colors">Snowflake</span>
              <span className="text-slate-600">·</span>
              <span className="hover:text-amber-400 transition-colors">DigitalOcean</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
