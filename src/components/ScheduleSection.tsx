import React, { useState } from 'react';
import { Calendar, Clock, Anchor, Terminal, Coffee, Trophy, Presentation, Code2 } from 'lucide-react';
import { VOYAGE_SCHEDULE, GRID_SCHEDULE } from '../data/hackathon-data';
import { ScheduleItem } from '../types/hackathon';

export const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'oct29' | 'oct31'>('oct29');

  const currentSchedule = activeDay === 'oct29' ? VOYAGE_SCHEDULE : GRID_SCHEDULE;

  const getCategoryIcon = (cat: ScheduleItem['category']) => {
    switch (cat) {
      case 'Food':
        return <Coffee className="w-3.5 h-3.5 text-amber-400" />;
      case 'Hacking':
        return <Code2 className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Keynote':
      case 'Workshop':
        return <Presentation className="w-3.5 h-3.5 text-purple-400" />;
      case 'Judging':
      case 'Awards':
        return <Trophy className="w-3.5 h-3.5 text-yellow-400" />;
      default:
        return <Clock className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  const getCategoryBadgeClass = (cat: ScheduleItem['category']) => {
    switch (cat) {
      case 'Food':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'Hacking':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
      case 'Keynote':
      case 'Workshop':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      case 'Judging':
      case 'Awards':
        return 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-white/10';
    }
  };

  return (
    <section id="schedule" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono font-bold text-slate-300 mb-3">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>OFFICIAL MLH HACKATHON TIMELINE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Event Agendas & Milestones
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300">
          From morning check-in to project showcase and award hoisting. Plan your hackathon strategy around key milestone checkpoints.
        </p>

        {/* Day Selector Buttons */}
        <div className="mt-6 inline-flex p-1.5 bg-slate-900 rounded-2xl border border-white/15 shadow-xl">
          <button
            onClick={() => setActiveDay('oct29')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeDay === 'oct29'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Anchor className="w-4 h-4" />
            <span>29 Oct · Hack4Haldia x Voyage (8 Hours)</span>
          </button>

          <button
            onClick={() => setActiveDay('oct31')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeDay === 'oct31'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>31 Oct · Hack Day Haldia (12 Hours)</span>
          </button>
        </div>
      </div>

      {/* Schedule Items List */}
      <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative">
        <div className="space-y-4">
          {currentSchedule.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-white/15 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              {/* Left: Time and category */}
              <div className="md:w-64 shrink-0 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(item.category)}
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-slate-200 tabular-nums">
                    {item.time}
                  </div>
                  <span className={`inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md border mt-1 ${getCategoryBadgeClass(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Right: Title and description */}
              <div className="flex-1 md:border-l md:border-white/10 md:pl-6">
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
