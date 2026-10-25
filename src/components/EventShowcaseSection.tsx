import React, { useState } from 'react';
import { Anchor, Terminal, Layers } from 'lucide-react';
import { VoyageEventCard } from './VoyageEventCard';
import { GridEventCard } from './GridEventCard';
import { EventType } from '../types/hackathon';

interface EventShowcaseSectionProps {
  onOpenRegisterModal: (eventId: string) => void;
  selectedEventTab: EventType | 'both';
  onTabChange: (tab: EventType | 'both') => void;
}

export const EventShowcaseSection: React.FC<EventShowcaseSectionProps> = ({
  onOpenRegisterModal,
  selectedEventTab,
  onTabChange,
}) => {
  return (
    <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono font-bold text-slate-300 mb-3">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>FLAGSHIP EVENT SPOTLIGHTS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Two Unmissable Hackathon Experiences
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300">
          Whether you want to battle it out in an 8-hour mystery AI repo challenge or immerse in a 12-hour open source festival at Hotel Royal Harbour, Haldia has you covered.
        </p>

        {/* Tab Controls (Functional Buttons with click handlers) */}
        <div className="mt-6 inline-flex p-1.5 bg-slate-950 rounded-2xl border border-white/15 shadow-xl flex-wrap justify-center gap-1">
          <button
            onClick={() => onTabChange('both')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedEventTab === 'both'
                ? 'bg-white text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>View Both Events</span>
          </button>

          <button
            onClick={() => onTabChange('hack4haldia-voyage')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedEventTab === 'hack4haldia-voyage'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Anchor className="w-4 h-4" />
            <span>Hack4Haldia x Voyage (Oct 29)</span>
          </button>

          <button
            onClick={() => onTabChange('hacktoberfest-grid')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedEventTab === 'hacktoberfest-grid'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Hack Day Haldia x GRID (Oct 31)</span>
          </button>
        </div>
      </div>

      {/* Event Cards Rendering */}
      <div className="space-y-12">
        {(selectedEventTab === 'both' || selectedEventTab === 'hack4haldia-voyage') && (
          <div id="event-voyage">
            <VoyageEventCard onOpenRegisterModal={onOpenRegisterModal} />
          </div>
        )}

        {(selectedEventTab === 'both' || selectedEventTab === 'hacktoberfest-grid') && (
          <div id="event-grid">
            <GridEventCard onOpenRegisterModal={onOpenRegisterModal} />
          </div>
        )}
      </div>
    </section>
  );
};
