/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BusinessesSection } from './components/BusinessesSection';
import { TechnologySection } from './components/TechnologySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const handleJumpToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header onPartnerAction={handleJumpToContact} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <BusinessesSection />
        <TechnologySection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
