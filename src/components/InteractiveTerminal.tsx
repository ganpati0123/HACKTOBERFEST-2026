import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, Sparkles, ExternalLink } from 'lucide-react';
import { VENUE_DETAILS, SOCIAL_LINKS } from '../data/hackathon-data';

interface LogEntry {
  type: 'system' | 'user' | 'success' | 'info' | 'error';
  text: string;
  link?: string;
  linkText?: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'system', text: 'INIT: MLH × GRID Haldia \'26 Developer Kernel v2.4 booted.' },
    { type: 'info', text: 'OCT 29: Hack4Haldia\'26 x Voyage (Lead Organizers: Ganpati Raj & Krishan Lal)' },
    { type: 'info', text: 'OCT 31: Hacktoberfest Hack Day Haldia (Lead Organizer: Ganpati Raj · GRID)' },
    { type: 'success', text: 'VENUE: Hotel Royal Harbour, Kshudiram Square, Haldia (Maps route active).' },
    { type: 'system', text: 'Type "help" or click any preset chip below to inspect event protocols.' }
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const newLogs: LogEntry[] = [...logs, { type: 'user', text: `$ ${raw}` }];

    if (lower === 'clear' || lower === 'cls') {
      setLogs([{ type: 'system', text: 'Terminal cleared. Type "help" for options.' }]);
      setInputVal('');
      return;
    }

    if (lower === 'help') {
      newLogs.push({
        type: 'info',
        text: 'AVAILABLE COMMANDS:\n  • status       -> Check dates, countdown & slot metrics\n  • venue        -> Hotel Royal Harbour address & Google Maps route\n  • organizers   -> Profiles for Ganpati Raj & Krishan Lal\n  • register-29  -> Direct MLH registration for Oct 29 Voyage\n  • register-31  -> Direct MLH registration for Oct 31 Hack Day\n  • instagram    -> View @grid.techhub official community channel\n  • swag         -> View Hacktoberfest 2026 swag breakdown\n  • clear        -> Clear screen'
      });
    } else if (lower === 'status') {
      newLogs.push({
        type: 'success',
        text: 'STATUS: DUAL HACKATHON CONFIRMED\n• Oct 29: Hack4Haldia x Voyage (8 Hours, 3-4 Members)\n• Oct 31: Hack Day Haldia x GRID (12 Hours, 1-4 Members)\n• Registration: LIVE on official MLH portals (Limited Spots)'
      });
    } else if (lower === 'venue') {
      newLogs.push({
        type: 'success',
        text: `VENUE CONFIRMED: ${VENUE_DETAILS.name}\n${VENUE_DETAILS.address}`,
        link: VENUE_DETAILS.mapUrl,
        linkText: 'Open Hotel Royal Harbour in Google Maps'
      });
    } else if (lower === 'organizers') {
      newLogs.push({
        type: 'info',
        text: 'LEADERSHIP & ORGANIZING COMMITTEE:\n• Ganpati Raj (Dual Summit Lead & Founder @ GRID Community)\n• Krishan Lal (Co-Founder @ GRID Community & Lead Organizer · Hack4Haldia x Voyage)\n• Dev Upadhyay, Mayank Raj, Neeraj Sahu (Core Organizers)\n• Omkar Gupta (Lead Contributor)\nOfficial Instagram: @grid.techhub'
      });
    } else if (lower === 'register-29' || lower === 'register 29') {
      newLogs.push({
        type: 'success',
        text: 'Routing to official MLH Portal for Hack4Haldia x Voyage (Event #15469)...',
        link: SOCIAL_LINKS.voyageRegisterUrl,
        linkText: 'Click here to Open MLH Voyage Registration'
      });
    } else if (lower === 'register-31' || lower === 'register 31') {
      newLogs.push({
        type: 'success',
        text: 'Routing to official MLH Portal for Hack Day Haldia x GRID (Event #15005)...',
        link: SOCIAL_LINKS.gridRegisterUrl,
        linkText: 'Click here to Open MLH GRID Registration'
      });
    } else if (lower === 'instagram' || lower === 'insta') {
      newLogs.push({
        type: 'success',
        text: 'GRID Community Official Instagram: @grid.techhub',
        link: SOCIAL_LINKS.instagram,
        linkText: 'Open @grid.techhub on Instagram'
      });
    } else if (lower === 'swag') {
      newLogs.push({
        type: 'info',
        text: 'SWAG MANIFEST 2026:\n• Official Hacktoberfest 2026 T-shirts, stickers & badges\n• MLH participant credentials & winner trophies\n• Voyage travel kit & cloud vouchers ($200 DigitalOcean, Google Cloud)'
      });
    } else {
      newLogs.push({
        type: 'error',
        text: `Command not recognized: "${raw}". Type "help" to view valid commands.`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const presetChips = [
    { label: 'venue', cmd: 'venue' },
    { label: 'organizers', cmd: 'organizers' },
    { label: 'register-29', cmd: 'register-29' },
    { label: 'register-31', cmd: 'register-31' },
    { label: 'instagram', cmd: 'instagram' },
    { label: 'swag', cmd: 'swag' }
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="rounded-2xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl bg-[#080d1a]">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-slate-400 font-mono ml-2 font-semibold">
              hacker-terminal@haldia-mlh: ~
            </span>
          </div>

          <div className="flex items-center gap-2 text-cyan-400 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>LIVE INTERACTIVE SHELL</span>
          </div>
        </div>

        {/* Logs Output Screen */}
        <div className="p-4 sm:p-5 h-64 overflow-y-auto font-mono text-xs space-y-2 bg-slate-950/70">
          {logs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              {log.type === 'user' && (
                <div className="text-amber-400 font-bold">{log.text}</div>
              )}
              {log.type === 'system' && (
                <div className="text-slate-400">{log.text}</div>
              )}
              {log.type === 'info' && (
                <div className="text-cyan-300 whitespace-pre-wrap">{log.text}</div>
              )}
              {log.type === 'success' && (
                <div className="text-emerald-400 whitespace-pre-wrap font-medium">
                  {log.text}
                  {log.link && (
                    <div className="mt-1">
                      <a
                        href={log.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors font-bold"
                      >
                        <span>{log.linkText || 'Open link'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}
              {log.type === 'error' && (
                <div className="text-red-400">{log.text}</div>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Preset Command Chips */}
        <div className="px-4 py-2 bg-slate-950 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="text-slate-500 font-mono">Presets:</span>
          {presetChips.map((chip) => (
            <button
              key={chip.label}
              onClick={() => handleCommand(chip.cmd)}
              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 font-mono transition-colors cursor-pointer"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Command Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2 p-3 bg-black border-t border-white/10"
        >
          <span className="text-amber-400 font-mono font-bold text-sm pl-1">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'venue', 'organizers', 'register-29'..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
