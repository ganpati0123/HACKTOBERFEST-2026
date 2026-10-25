import React, { useState } from 'react';
import { Terminal, Dices, GitBranch, Star, Copy, Check, Sparkles, ExternalLink, Shield, Cpu, Code2 } from 'lucide-react';
import { SAMPLE_CHALLENGES, MysteryRepoChallenge, getMysteryRepoChallenge } from '../utils/hackathon-logic';

export const MysteryRepoSimulator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentChallenge, setCurrentChallenge] = useState<MysteryRepoChallenge>(() => 
    getMysteryRepoChallenge('All', 0)
  );
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const categories = ['All', 'AI Agents', 'Developer Tools', 'Web3 & Identity', 'Distributed Systems', 'Open Cloud'];

  const handleDrawRandom = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const nextChallenge = getMysteryRepoChallenge(
        selectedCategory, 
        Math.floor(Math.random() * 100)
      );
      setCurrentChallenge(nextChallenge);
      setIsSpinning(false);
    }, 400);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const nextChallenge = getMysteryRepoChallenge(cat, 0);
    setCurrentChallenge(nextChallenge);
  };

  const handleCopyClone = () => {
    const cmd = `git clone ${currentChallenge.starterRepoUrl}.git && cd starter && npm install`;
    navigator.clipboard?.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="mystery-repo" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-400 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>HACK4HALDIA x VOYAGE SIMULATOR</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          The Mystery Repo & AI Brief Sandbox
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300">
          Experience what happens at 10:00 AM on October 29. Test real challenge prompts, inspect open-source starters, and explore AI workflow strategies before the 8-hour clock starts!
        </p>
      </div>

      <div className="glass-panel-gold rounded-3xl border border-amber-500/30 p-6 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Top Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-black/60 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Random Draw Button */}
          <button
            onClick={handleDrawRandom}
            disabled={isSpinning}
            className={`px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs md:text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isSpinning ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            <Dices className={`w-4 h-4 text-slate-950 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>Draw Mystery Challenge Repo</span>
          </button>
        </div>

        {/* Challenge Interactive Panel */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Repository details and brief */}
          <div className="lg:col-span-8 space-y-5">
            {/* Repo Header */}
            <div className="p-4 rounded-2xl bg-black/70 border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                  ASSIGNED REPO: {currentChallenge.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{currentChallenge.stars.toLocaleString()}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentChallenge.forks} forks</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                    {currentChallenge.license}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {currentChallenge.title}
              </h3>
              <div className="text-xs font-mono text-cyan-300 mt-1 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>github.com/{currentChallenge.repoName}</span>
              </div>
            </div>

            {/* Markdown Challenge Brief Simulation */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-200">CHALLENGE_BRIEF.md</span>
                </div>
                <span className="text-[11px] text-amber-400 font-mono">8-HOUR TIMEFRAME</span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Problem & Mission Statement
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {currentChallenge.challengeBrief}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Expected Working Prototype Deliverable
                </h4>
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200 leading-relaxed">
                  {currentChallenge.sampleDeliverable}
                </div>
              </div>

              {/* Starter clone command */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span>Quick Clone Starter Command:</span>
                  {copied && <span className="text-emerald-400 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Copied</span>}
                </div>
                <div className="p-2.5 rounded-xl bg-black border border-white/15 font-mono text-xs text-slate-200 flex items-center justify-between">
                  <span className="truncate">git clone {currentChallenge.starterRepoUrl}.git</span>
                  <button
                    onClick={handleCopyClone}
                    className="p-1 rounded hover:bg-white/10 text-amber-400 transition-colors shrink-0 ml-2 cursor-pointer"
                    title="Copy command"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Dev Tools and Tech Stack recommendations */}
          <div className="lg:col-span-4 space-y-4">
            {/* AI Tools Box */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Recommended AI Toolchain
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                Hackers are encouraged to combine AI code generation, architectural reasoning, and automated tests:
              </p>
              <div className="space-y-2">
                {currentChallenge.recommendedAiTools.map((tool, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-xs text-slate-200 flex items-center gap-2 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Box */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Baseline Starter Tech Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentChallenge.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-cyan-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team Roles reminder */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-amber-400">⚔️ Team Strategy Tip:</div>
              <div>Assign 1 member on AI Prompt & Architecture, 2 on Core Logic & Integration, and 1 on UI/Pitch Demo for highest judging efficiency!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
