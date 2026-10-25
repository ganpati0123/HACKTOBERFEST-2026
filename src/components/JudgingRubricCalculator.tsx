import React, { useState } from 'react';
import { Award, Trophy, Sparkles, CheckCircle2, Shield, Gift } from 'lucide-react';
import { calculateJudgingScore, JudgingCriteriaScores } from '../utils/hackathon-logic';

export const JudgingRubricCalculator: React.FC = () => {
  const [scores, setScores] = useState<JudgingCriteriaScores>({
    technicalExecution: 22,
    innovation: 18,
    aiUsage: 19,
    workingPrototype: 18,
    problemSolving: 13,
  });

  const evaluation = calculateJudgingScore(scores);

  const criteriaConfig = [
    {
      key: 'technicalExecution' as keyof JudgingCriteriaScores,
      label: 'Technical Execution',
      weight: '25%',
      max: 25,
      description: 'System architecture, code cleanliness, test coverage, and reliability under load.'
    },
    {
      key: 'innovation' as keyof JudgingCriteriaScores,
      label: 'Innovation & Novelty',
      weight: '20%',
      max: 20,
      description: 'Originality of thought, creative angle, and unique application of open source tech.'
    },
    {
      key: 'aiUsage' as keyof JudgingCriteriaScores,
      label: 'AI Tool Usage & Workflow',
      weight: '20%',
      max: 20,
      description: 'Strategic use of modern AI copilots (Claude, Gemini, Cursor) to multiply build speed.'
    },
    {
      key: 'workingPrototype' as keyof JudgingCriteriaScores,
      label: 'Final Working Prototype',
      weight: '20%',
      max: 20,
      description: 'Live deployable solution or CLI demo that actually functions end-to-end.'
    },
    {
      key: 'problemSolving' as keyof JudgingCriteriaScores,
      label: 'Problem-Solving & Impact',
      weight: '15%',
      max: 15,
      description: 'Address real developer pain points with clear user empathy and direct utility.'
    }
  ];

  return (
    <section id="rubric" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono font-bold text-amber-400 mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>OFFICIAL JUDGING & REWARD RUBRIC</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          How Your Hack Will Be Evaluated
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300">
          Transparent, merit-based scoring designed to celebrate technical depth and AI-augmented craft. Test your project readiness below:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Sliders */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl space-y-6">
          <h3 className="text-base font-bold text-white font-display flex items-center justify-between">
            <span>Interactive Score Simulator</span>
            <span className="text-xs font-mono text-amber-400 font-semibold">100 TOTAL POINTS</span>
          </h3>

          <div className="space-y-5">
            {criteriaConfig.map((item) => (
              <div key={item.key} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-100">{item.label}</strong>
                    <span className="text-amber-400 font-mono ml-2">({item.weight})</span>
                  </div>
                  <span className="font-mono font-bold text-white tabular-nums px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {scores[item.key]} / {item.max}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max={item.max}
                  value={scores[item.key]}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setScores((prev) => ({ ...prev, [item.key]: val }));
                  }}
                  className="w-full accent-amber-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />

                <p className="text-[11px] text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Score Breakdown Card & Reward Tiers */}
        <div className="lg:col-span-5 space-y-5">
          {/* Total Score Display */}
          <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 border-2 border-amber-500/40 shadow-2xl space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">ESTIMATED SCORE</span>
              <span className="px-2 py-1 rounded bg-amber-400/10 text-amber-400 font-mono text-xs font-bold border border-amber-400/20">
                {evaluation.percentage}% RATING
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-extrabold font-mono text-white tabular-nums">
                {evaluation.total}
              </span>
              <span className="text-slate-400 text-lg font-mono">/ 100</span>
            </div>

            {/* Tier Badge */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300">
                  ESTIMATED PODIUM STANDING
                </div>
                <div className="text-base font-bold text-white">
                  {evaluation.grade}
                </div>
              </div>
            </div>

            {/* Rewards Breakdown list */}
            <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="font-semibold text-slate-200 mb-1">Rewards at this level:</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Exclusive MLH Winner Medals & Digital Credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Voyage Developer Swag Kit & Cloud Host Credit Vouchers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Fast-track interview recommendations for partner fellowships</span>
              </div>
            </div>
          </div>

          {/* Participant Swag Guarantee */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <Gift className="w-7 h-7 text-amber-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <strong className="text-white block font-semibold">Every Participant Receives Swag:</strong>
              Official Hacktoberfest 2026 stickers, developer kits, MLH badges, and verified completion certificates!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
