import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Anchor, Terminal } from 'lucide-react';
import { getTimeRemaining } from '../utils/hackathon-logic';

export const CountdownTimer: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<'oct29' | 'oct31'>('oct29');

  const targets = {
    oct29: {
      name: "Hack4Haldia'26 x Voyage ⚓",
      dateStr: '2026-10-29T09:00:00+05:30',
      label: 'Oct 29, 2026 · 09:00 AM IST',
      color: 'amber'
    },
    oct31: {
      name: 'Hacktoberfest Hack Day Haldia 💻⚡',
      dateStr: '2026-10-31T08:00:00+05:30',
      label: 'Oct 31, 2026 · 08:00 AM IST',
      color: 'emerald'
    }
  };

  const currentConfig = targets[selectedTarget];

  const [timeLeft, setTimeLeft] = useState(() => 
    getTimeRemaining(currentConfig.dateStr)
  );

  useEffect(() => {
    setTimeLeft(getTimeRemaining(currentConfig.dateStr));
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(currentConfig.dateStr));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentConfig.dateStr]);

  return (
    <div className="w-full max-w-3xl mx-auto glass-panel rounded-2xl p-4 md:p-6 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div 
        className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          selectedTarget === 'oct29' ? 'bg-amber-500/15' : 'bg-emerald-500/15'
        }`} 
      />
      <div 
        className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          selectedTarget === 'oct29' ? 'bg-amber-600/10' : 'bg-cyan-500/15'
        }`} 
      />

      {/* Target Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
          <Clock className={`w-4 h-4 ${selectedTarget === 'oct29' ? 'text-amber-400' : 'text-emerald-400'}`} />
          <span className="font-semibold text-slate-100">Live Hackathon Countdown</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400">{currentConfig.label}</span>
        </div>

        {/* Segmented Control */}
        <div className="flex items-center p-1 bg-slate-900/80 rounded-xl border border-white/10">
          <button
            onClick={() => setSelectedTarget('oct29')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              selectedTarget === 'oct29'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>Voyage (Oct 29)</span>
          </button>
          <button
            onClick={() => setSelectedTarget('oct31')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              selectedTarget === 'oct31'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Hack Day (Oct 31)</span>
          </button>
        </div>
      </div>

      {/* Digital Flip Clock Counter */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
        {[
          { label: 'DAYS', val: timeLeft.days },
          { label: 'HOURS', val: timeLeft.hours },
          { label: 'MINUTES', val: timeLeft.minutes },
          { label: 'SECONDS', val: timeLeft.seconds },
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center justify-center p-3 md:p-4 rounded-xl bg-slate-950/60 border border-white/5 relative group hover:border-white/20 transition-colors"
          >
            <span className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold tracking-tight text-white tabular-nums">
              {String(item.val).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs font-semibold tracking-wider text-slate-400 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
        <Calendar className="w-3.5 h-3.5 text-slate-400" />
        <span>Target Event: <strong className="text-slate-200">{currentConfig.name}</strong></span>
      </div>
    </div>
  );
};
