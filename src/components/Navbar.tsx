import React from 'react';
import { Sparkles, Terminal, Instagram, ExternalLink, Award } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/hackathon-data';

interface NavbarProps {
  onOpenRegisterModal: (eventId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegisterModal }) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 px-4 sm:px-6 py-3 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        {/* Brand Zone (Single-line wordmark adhering to Top Bar Contract) */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            ⚡
          </span>
          <span className="font-display tracking-wide font-extrabold">
            MLH <span className="text-amber-400">×</span> GRID <span className="text-cyan-400">Haldia '26</span>
          </span>
        </a>

        {/* Clean Nav Links Zone (Single-line links with hover transitions) */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-300">
          <a 
            href="#events" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Dual Events
          </a>
          <a 
            href="#organizers" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-amber-300/90"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Organizers
          </a>
          <a 
            href="#mystery-repo" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            Mystery Repo
          </a>
          <a 
            href="#schedule" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Timeline
          </a>
          <a 
            href="#rubric" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Judging & Prizes
          </a>
          <a 
            href="#community" 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            GRID Community
          </a>
          <a 
            href="#venue-faq" 
            className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            Venue & Map
          </a>
        </nav>

        {/* Action Zone: Instagram & Register CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 hover:bg-pink-500/20 text-pink-300 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            title="Follow @grid.techhub on Instagram"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden md:inline">@grid.techhub</span>
          </a>

          <button
            onClick={() => onOpenRegisterModal()}
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
            <span className="hidden sm:inline">Register & Get Pass</span>
            <span className="sm:hidden">Get Pass</span>
          </button>
        </div>
      </div>
    </header>
  );
};
