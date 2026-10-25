import React, { useState } from 'react';
import { MapPin, Navigation, Wifi, Zap, Coffee, HelpCircle, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { FAQ_DATA, VENUE_DETAILS } from '../data/hackathon-data';

export const VenueAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Hack4Haldia', 'Hack Day Haldia', 'Logistics'];

  const filteredFaqs = faqCategory === 'All' 
    ? FAQ_DATA 
    : FAQ_DATA.filter(f => f.category === faqCategory);

  return (
    <section id="venue-faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Venue Spotlight: Hotel Royal Harbour */}
      <div className="rounded-3xl glass-panel border-2 border-amber-500/30 p-6 md:p-10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950 to-[#0a1222]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-mono font-bold text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>OFFICIAL EVENT HARBOR</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              Hotel Royal Harbour, Haldia
            </h2>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-200 font-mono leading-relaxed">
              📍 {VENUE_DETAILS.address}
            </div>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Centrally situated at <strong>Kshudiram Square</strong> along the HPL Link Road, Hotel Royal Harbour is our premier conference venue equipped with air-conditioned build spaces, individual power banks, high-bandwidth WiFi, and hospitality dining for both October 29 and October 31 hackathons.
            </p>

            {/* Venue Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 flex items-center gap-2.5">
                <Wifi className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">High-Speed WiFi</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Power at Each Desk</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 flex items-center gap-2.5">
                <Coffee className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Full Meals & Beverages</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={VENUE_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Route in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Landmark: Near Mediland Nursing Home</span>
              </div>
            </div>
          </div>

          {/* Right: Venue Map Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-2xl relative p-6 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                  GEO NAVIGATION
                </span>
                <span className="text-xs font-mono text-slate-400">PIN: 721602</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Hotel Royal Harbour
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Near Mediland Nursing Home, Khanjanchak, Basudevpur, Kshudiram Square, Hpl Link Road, Haldia, Purba Medinipur, West Bengal 721602
                </p>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs text-slate-400 space-y-1">
                  <div><strong>From Railway Stations:</strong> Haldia Station (HLZ) ~10 mins / Mecheda Junction ~45 mins.</div>
                  <div><strong>From Bus Terminus:</strong> Direct toto / e-rickshaw from City Centre & Khanjanchak Stop.</div>
                </div>
              </div>

              <a
                href={VENUE_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get Turn-by-Turn Navigation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono font-bold text-slate-300 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>COMMUNITY INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFaqCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                faqCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-slate-100">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded bg-white/5 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
