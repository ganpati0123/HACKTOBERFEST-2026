import React from 'react';
import { ExternalLink, Github, Instagram, MessageSquare, Shield, Heart, MapPin } from 'lucide-react';
import { SOCIAL_LINKS, VENUE_DETAILS } from '../data/hackathon-data';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 pt-14 pb-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-white font-display">
              <span className="w-6 h-6 rounded bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">
                ⚡
              </span>
              <span>MLH × GRID Haldia '26</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Official Hacktoberfest 2026 Hack Days in Haldia. Powered by Major League Hacking, GRID Community, and Voyage.
            </p>
            <div className="flex items-center gap-2.5 pt-1 text-slate-300">
              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 transition-colors flex items-center gap-1"
                aria-label="GRID Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-[11px] font-semibold">{SOCIAL_LINKS.instagramHandle}</span>
              </a>
              <a 
                href={SOCIAL_LINKS.gridGithub} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:text-white transition-colors"
                aria-label="GRID Community GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Registration Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official MLH Registration
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={SOCIAL_LINKS.voyageRegisterUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
                >
                  <span>Hack4Haldia'26 x Voyage (Oct 29)</span>
                  <ExternalLink className="w-3 h-3 text-amber-400 shrink-0" />
                </a>
              </li>
              <li>
                <a 
                  href={SOCIAL_LINKS.gridRegisterUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
                >
                  <span>Hack Day Haldia x GRID (Oct 31)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400 shrink-0" />
                </a>
              </li>
              <li>
                <a 
                  href={VENUE_DETAILS.mapUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
                >
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>Hotel Royal Harbour Directions</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400 shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Guidelines */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Leadership & Guides
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#organizers" className="hover:text-amber-300 transition-colors">
                  Lead Organizers: Ganpati Raj, Krishan Lal & Dev Upadhyay
                </a>
              </li>
              <li>
                <a 
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors flex items-center gap-1"
                >
                  <Shield className="w-3 h-3 text-amber-400" />
                  <span>MLH Code of Conduct</span>
                </a>
              </li>
              <li>
                <a href="#rubric" className="hover:text-slate-200 transition-colors">
                  Official Scoring Rubric (100 Pts)
                </a>
              </li>
              <li>
                <a href="#mystery-repo" className="hover:text-slate-200 transition-colors">
                  Mystery Repo Brief Sandbox
                </a>
              </li>
            </ul>
          </div>

          {/* About Organizers */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Venue
            </h4>
            <p className="text-slate-300 leading-relaxed font-medium">
              <strong>{VENUE_DETAILS.name}</strong>
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              {VENUE_DETAILS.address}
            </p>
            <div className="text-[11px] text-amber-400 font-semibold pt-1">
              "AI and Open Source belong to everyone." 🤝🛡️
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
          <div>
            © 2026 Major League Hacking & GRID Community. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-300">
            <span>Organized with passion by Ganpati Raj, Krishan Lal & Dev Upadhyay · GRID Community HIT Haldia</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
