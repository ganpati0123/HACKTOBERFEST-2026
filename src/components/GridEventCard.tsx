import React, { useState } from 'react';
import { Terminal, Clock, Users, MapPin, ExternalLink, Sparkles, GitPullRequest, GitFork, GitCommit, Check } from 'lucide-react';
import { EVENTS_DATA } from '../data/hackathon-data';

interface GridEventCardProps {
  onOpenRegisterModal: (eventId: string) => void;
}

export const GridEventCard: React.FC<GridEventCardProps> = ({ onOpenRegisterModal }) => {
  const event = EVENTS_DATA['hacktoberfest-grid'];
  const [activeStep, setActiveStep] = useState<number>(1);

  const prSteps = [
    {
      step: 1,
      title: 'Fork & Discover Issue',
      command: 'gh repo fork grid-hit/hacktoberfest-starter-26 --clone',
      desc: 'Browse beginner-friendly tagged issues or select an open source project to contribute.'
    },
    {
      step: 2,
      title: 'Branch & Implement Fix with AI',
      command: 'git checkout -b fix/issue-prompt-enhancer',
      desc: 'Write clean code, add tests, and utilize Gemini / Cursor for rapid debugging.'
    },
    {
      step: 3,
      title: 'Commit with Semantic Msg',
      command: 'git commit -m "feat(ai): optimize streaming tool latency"',
      desc: 'Ensure conventional commit message format and passes continuous integration tests.'
    },
    {
      step: 4,
      title: 'Open Pull Request & Hoist Swag',
      command: 'gh pr create --title "feat: Hacktoberfest 26 PR" --body "Closes #42"',
      desc: 'Get reviewed by GRID mentors, merge your PR, and unlock verified Hacktoberfest badges!'
    }
  ];

  return (
    <div className="rounded-3xl glass-panel-cyan border-2 border-emerald-500/30 p-6 md:p-10 relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Poster showcase & GRID Community Badge */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl relative group bg-black">
            <img 
              src="/assets/aistudio/image_970177eb.png" 
              alt="Hacktoberfest 26 Hack Day Haldia Poster"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-3 bg-slate-950/90 border-t border-emerald-500/30 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">Hotel Royal Harbour · Haldia</span>
              <span className="font-mono text-emerald-400 font-bold">EVENT #15005</span>
            </div>
          </div>

          {/* GRID Community Official Lockup */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center gap-3">
            <img 
              src="/assets/aistudio/image_7d405a6b.png" 
              alt="GRID Community Logo"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-lg object-contain bg-black border border-cyan-500/40 p-0.5"
            />
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 tracking-wide uppercase">
                HOST TECHNICAL COMMUNITY
              </div>
              <div className="text-sm font-bold text-white">
                GRID Community — HIT Haldia
              </div>
              <div className="text-xs text-slate-400">
                Connecting 2,000+ tech minds from IIT, NIT, IIIT & top institutions
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Event Overview, Specs, and Interactive PR Workflow */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-300 mb-2 font-mono">
              <span className="font-semibold">{event.date}</span>
              <span>·</span>
              <span>{event.time}</span>
              <span>·</span>
              <span className="text-white font-bold">Hotel Royal Harbour, Haldia</span>
            </div>

            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-200 mb-3 font-semibold">
              <span>Lead Organizers:</span>
              <strong className="text-white">Ganpati Raj</strong>
              <span className="text-slate-400 font-normal">(Founder @ GRID)</span>
              <span>&</span>
              <strong className="text-white">Dev Upadhyay</strong>
              <span className="text-slate-400 font-normal">(Lead Organizer)</span>
              <span>with GRID Core Team</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              Hacktoberfest 26 Hack Day Haldia 💻⚡
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed font-medium">
              Open Source. AI. Collaboration. Building Together. Join us for 12 hours of learning, contributing, building, and connecting with fellow developers as we celebrate Hacktoberfest 2026 with an MLH Hack Day!
            </p>
          </div>

          {/* Slogan highlight box */}
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 tracking-wide uppercase">
                COMMUNITY CREED
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                "AI and Open Source belong to everyone. 🤝🛡️"
              </div>
              <div className="text-xs text-emerald-200/80 mt-0.5">
                Learn Git · Solve Real Issues · Ship Production Code · Earn MLH Credentials
              </div>
            </div>
          </div>

          {/* Quick Specs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Time Frame</span>
              </div>
              <strong className="text-sm font-semibold text-white block mt-1">12 Hours (8AM–8PM)</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Venue</span>
              </div>
              <strong className="text-sm font-semibold text-white block mt-1">Hotel Royal Harbour</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Participation</span>
              </div>
              <strong className="text-sm font-semibold text-white block mt-1">Solo or Team (1–4)</strong>
            </div>
          </div>

          {/* Interactive Hacktoberfest PR Sprint Walkthrough */}
          <div className="p-4 rounded-2xl bg-black/50 border border-emerald-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GitPullRequest className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Open Source PR Sprint Guide
                </span>
              </div>
              <span className="text-[11px] text-emerald-300 font-mono">Step {activeStep} of 4</span>
            </div>

            {/* Steps tabs */}
            <div className="grid grid-cols-4 gap-1.5">
              {prSteps.map((s) => (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-medium text-center transition-all cursor-pointer ${
                    activeStep === s.step
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  Step {s.step}
                </button>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 space-y-2">
              <div className="text-xs font-bold text-slate-100">
                {prSteps[activeStep - 1].title}
              </div>
              <p className="text-xs text-slate-300">
                {prSteps[activeStep - 1].desc}
              </p>
              <div className="p-2 rounded bg-black border border-emerald-500/30 font-mono text-xs text-emerald-400 flex items-center justify-between">
                <span>{prSteps[activeStep - 1].command}</span>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(prSteps[activeStep - 1].command);
                  }}
                  className="text-[10px] uppercase font-bold text-slate-400 hover:text-emerald-300 ml-2"
                  title="Copy command"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://events.mlh.com/events/15005-hacktoberfest-hack-day-haldia-x-grid-community"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Register on Official MLH Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenRegisterModal('hacktoberfest-grid')}
              className="px-5 py-3 rounded-xl glass-panel border border-emerald-400/40 text-emerald-300 hover:text-white hover:bg-emerald-500/10 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Get Hack Day Pass</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
