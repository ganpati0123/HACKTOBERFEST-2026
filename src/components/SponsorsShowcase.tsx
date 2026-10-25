import React from 'react';
import { Award, Compass, Network, Cpu, Layers, GitBranch, Database, Server, Gift } from 'lucide-react';
import { SPONSORS_DATA } from '../data/hackathon-data';

export const SponsorsShowcase: React.FC = () => {
  const getSponsorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-slate-100" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-300" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-300" />;
      default:
        return <Gift className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono font-bold text-slate-300 mb-3">
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>CONNECTING THE TECH ECOSYSTEM</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Supported by World-Class Tech Leaders
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300">
          Discover the developer tools, cloud platforms, and AI sandboxes provided to all hackers during the Haldia Hacktoberfest season.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SPONSORS_DATA.map((s, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getSponsorIcon(s.iconName)}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  OFFICIAL PARTNER
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                {s.name}
              </h3>
              <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                {s.category}
              </div>
              <p className="text-xs text-slate-300 mt-2 line-clamp-3">
                {s.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-300">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Hacker Perk</span>
              <span className="text-slate-200 mt-0.5 block leading-relaxed">{s.perks}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
