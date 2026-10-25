/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EventShowcaseSection } from './components/EventShowcaseSection';
import { OrganizersSection } from './components/OrganizersSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { MysteryRepoSimulator } from './components/MysteryRepoSimulator';
import { ScheduleSection } from './components/ScheduleSection';
import { JudgingRubricCalculator } from './components/JudgingRubricCalculator';
import { GridCommunitySection } from './components/GridCommunitySection';
import { SponsorsShowcase } from './components/SponsorsShowcase';
import { VenueAndFaqSection } from './components/VenueAndFaqSection';
import { Footer } from './components/Footer';
import { HackerPassModal } from './components/HackerPassModal';
import { EventType } from './types/hackathon';

export default function App() {
  const [selectedEventTab, setSelectedEventTab] = useState<EventType | 'both'>('both');
  const [isPassModalOpen, setIsPassModalOpen] = useState<boolean>(false);
  const [modalDefaultEvent, setModalDefaultEvent] = useState<string>('hack4haldia-voyage');

  const handleOpenRegisterModal = (eventId: string = 'hack4haldia-voyage') => {
    setModalDefaultEvent(eventId);
    setIsPassModalOpen(true);
  };

  const handleSelectEventTab = (eventId: EventType) => {
    setSelectedEventTab(eventId);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-300">
      {/* Top Navigation */}
      <Navbar 
        onOpenRegisterModal={handleOpenRegisterModal} 
        activeSection="home"
      />

      <main className="flex-1">
        {/* Hero Section with Dual Quick Selectors and Countdown */}
        <HeroSection 
          onOpenRegisterModal={handleOpenRegisterModal}
          onSelectEventTab={handleSelectEventTab}
        />

        {/* Live Interactive Hacker Terminal */}
        <InteractiveTerminal />

        {/* Flagship Events Section */}
        <EventShowcaseSection 
          onOpenRegisterModal={handleOpenRegisterModal}
          selectedEventTab={selectedEventTab}
          onTabChange={setSelectedEventTab}
        />

        {/* Lead Organizers & Vision Section (Ganpati Raj & Krishan Lal) */}
        <OrganizersSection />

        {/* Interactive Mystery Repo & AI Brief Simulator */}
        <MysteryRepoSimulator />

        {/* Hour-by-Hour Event Timelines */}
        <ScheduleSection />

        {/* Judging Rubric and Reward Tiers Calculator */}
        <JudgingRubricCalculator />

        {/* GRID Community HIT Haldia Spotlight & Instagram */}
        <GridCommunitySection />

        {/* Tech Ecosystem Sponsors & Tool Perks */}
        <SponsorsShowcase />

        {/* Official Venue: Hotel Royal Harbour & FAQ Section */}
        <VenueAndFaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Hacker Pass and RSVP Modal */}
      <HackerPassModal 
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        defaultEventId={modalDefaultEvent}
      />
    </div>
  );
}
