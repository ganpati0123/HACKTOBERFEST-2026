import React, { useState, useRef } from 'react';
import { X, Sparkles, ExternalLink, Download, Check, ShieldCheck, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import { validateTeamRegistration } from '../utils/hackathon-logic';

interface HackerPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventId?: string;
}

export const HackerPassModal: React.FC<HackerPassModalProps> = ({ isOpen, onClose, defaultEventId = 'hack4haldia-voyage' }) => {
  const [selectedEvent, setSelectedEvent] = useState<string>(defaultEventId);
  const [fullName, setFullName] = useState<string>('');
  const [teamName, setTeamName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [college, setCollege] = useState<string>('HIT Haldia');
  const [teamSize, setTeamSize] = useState<number>(3);
  const [role, setRole] = useState<string>('Full-Stack Engineer');
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [passGenerated, setPassGenerated] = useState<boolean>(false);
  const [passId, setPassId] = useState<string>('');

  const passCardRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateTeamRegistration({
      teamName: teamName || 'Voyage Hackers',
      leadName: fullName,
      email,
      college,
      teamSize,
      eventId: selectedEvent,
    });

    if (!validation.valid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors([]);
    const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
    const prefix = selectedEvent === 'hack4haldia-voyage' ? 'VOYAGE-H4H' : 'OCT-GRID';
    setPassId(`${prefix}-${randomTicketNum}`);
    setPassGenerated(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  const getEventName = () => {
    return selectedEvent === 'hack4haldia-voyage' 
      ? "Hack4Haldia'26 — Hack Day Haldia x Voyage ⚓" 
      : 'Hacktoberfest 26 Hack Day Haldia 💻⚡';
  };

  const getRegistrationUrl = () => {
    return selectedEvent === 'hack4haldia-voyage'
      ? 'https://events.mlh.com/events/15469-hacktoberfest-hack-day-haldia-x-voyage?_gl=1*1217az1*_ga*MTkzNDU0Njc2My4xNzkyOTY3NTAz*_ga_E5KT6TC4TK*czE3OTI5Njc1MDMkbzEkZzEkdDE3OTI5Njc1MDgkajU1JGwwJGgw'
      : 'https://events.mlh.com/events/15005-hacktoberfest-hack-day-haldia-x-grid-community?_gl=1*d9z7gh*_ga*MTkzNDU0Njc2My4xNzkyOTY3NTAz*_ga_E5KT6TC4TK*czE3OTI5Njc1MDMkbzEkZzEkdDE3OTI5Njc1NDMkajIwJGwwJGgw';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0d1322] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <h3 className="text-base font-bold text-white font-display">
              {passGenerated ? 'Your Official Hacker Pass & Credentials' : 'Get Event Pass & RSVP'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!passGenerated ? (
            <form onSubmit={handleGenerate} className="space-y-4">
              {/* Event selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Hacktoberfest Event
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEvent('hack4haldia-voyage');
                      if (teamSize < 3) setTeamSize(3);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedEvent === 'hack4haldia-voyage'
                        ? 'border-amber-400 bg-amber-500/10 text-white'
                        : 'border-white/10 bg-slate-900/40 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-amber-400">OCT 29 · 8-HR SPRINT</div>
                    <div className="text-sm font-semibold text-slate-100 mt-0.5">Hack4Haldia'26 x Voyage ⚓</div>
                    <div className="text-[11px] text-slate-400 mt-1">Mystery Repo · AI Tools · Team 3-4</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedEvent('hacktoberfest-grid')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedEvent === 'hacktoberfest-grid'
                        ? 'border-emerald-400 bg-emerald-500/10 text-white'
                        : 'border-white/10 bg-slate-900/40 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-emerald-400">OCT 31 · 12-HR FEST</div>
                    <div className="text-sm font-semibold text-slate-100 mt-0.5">Hack Day Haldia x GRID 💻⚡</div>
                    <div className="text-[11px] text-slate-400 mt-1">Hotel Royal Harbour · Open Source · Team 1-4</div>
                  </button>
                </div>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Priyanshu Sharma"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. dev@hit.ac.in"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    College / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. HIT Haldia, IIT Kharagpur, NIT Durgapur"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Team Name
                  </label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g. CyberSailors '26"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Role / Focus
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                    <option value="Frontend & UI/UX">Frontend & UI/UX</option>
                    <option value="Backend & Cloud">Backend & Cloud</option>
                    <option value="Web3 & Smart Contracts">Web3 & Smart Contracts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Team Size {selectedEvent === 'hack4haldia-voyage' ? '(3–4 Required)' : '(1–4)'}
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {selectedEvent !== 'hack4haldia-voyage' && <option value={1}>1 (Individual Solo)</option>}
                    {selectedEvent !== 'hack4haldia-voyage' && <option value={2}>2 Members</option>}
                    <option value={3}>3 Members</option>
                    <option value={4}>4 Members</option>
                  </select>
                </div>
              </div>

              {formErrors.length > 0 && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300 space-y-1">
                  {formErrors.map((err, idx) => (
                    <div key={idx}>• {err}</div>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Generate Official Hacker Pass & Unlock MLH RSVP</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {/* The Holographic Pass Card */}
              <div 
                ref={passCardRef}
                className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0a101d] border-2 border-amber-400/40 shadow-2xl overflow-hidden"
              >
                {/* Visual badge top line */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-md bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs">
                      MLH
                    </span>
                    <div>
                      <div className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                        MAJOR LEAGUE HACKING · HALDIA
                      </div>
                      <div className="text-[11px] text-slate-400">Official Participant Pass</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-slate-300 px-2 py-1 rounded bg-white/5 border border-white/10">
                      {passId}
                    </span>
                  </div>
                </div>

                {/* Event Name */}
                <div className="my-4">
                  <div className="text-xs font-semibold text-amber-400 font-mono">
                    {selectedEvent === 'hack4haldia-voyage' 
                      ? '29 OCTOBER 2026 · HOTEL ROYAL HARBOUR' 
                      : '31 OCTOBER 2026 · HOTEL ROYAL HARBOUR'}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold font-display text-white mt-0.5">
                    {getEventName()}
                  </h4>
                  <div className="text-xs text-slate-400 mt-1">
                    {selectedEvent === 'hack4haldia-voyage'
                      ? 'Ganpati Raj (Founder) & Krishan Lal (Co-Founder) · Voyage'
                      : 'Ganpati Raj (Founder) & Core Team · GRID Community'}
                  </div>
                </div>

                {/* Hacker details grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-white/10 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">HACKER NAME</span>
                    <strong className="text-slate-100 font-semibold">{fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">COLLEGE</span>
                    <strong className="text-slate-100 font-semibold">{college}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">ROLE</span>
                    <strong className="text-slate-100 font-semibold">{role}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">TEAM / SIZE</span>
                    <strong className="text-slate-100 font-semibold">
                      {teamName || 'Solo'} ({teamSize} P)
                    </strong>
                  </div>
                </div>

                {/* Pass bottom with QR placeholder and verification note */}
                <div className="flex items-center justify-between pt-4 mt-1">
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Verified RSVP Entry · Bring Laptop & Student ID</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                    <QrCode className="w-4 h-4 text-slate-300" />
                    <span>ENTRY-QR</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={getRegistrationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Complete Official Registration on MLH Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
                  <button
                    type="button"
                    onClick={() => {
                      alert('Pass saved! Please bookmark or screenshot this pass for day-of check-in at the registration desk.');
                    }}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save / Screenshot Pass</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPassGenerated(false)}
                    className="py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                  >
                    Edit Info
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
