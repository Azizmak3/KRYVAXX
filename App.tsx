
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QualificationCore from './components/QualificationCore'; // Diagnostic
import UseCaseExplorer from './components/UseCaseExplorer'; // Case Study
import TierSection from './components/TierSection'; // Pricing
import WhoThisIsFor from './components/WhoThisIsFor'; // Disqualification
import ServiceAgent from './components/ServiceAgent'; // AI Audit Terminal (Chatbot)
import FinalUltimatum from './components/FinalUltimatum'; // Final CTA
import Footer from './components/Footer';
import MarketScanModal from './components/MarketScanModal';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  const openScan = () => setIsScanModalOpen(true);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-blue-600 selection:text-white font-sans">
      <Header onOpenScan={openScan} />
      
      <main>
        {/* 1. Hero: Competitive Threat */}
        <Hero onOpenScan={openScan} />

        {/* 2. Diagnostic: SeLoger Trap */}
        <QualificationCore />

        {/* 3. Case Study: Live Deployment */}
        <UseCaseExplorer />

        {/* 4. Systems: Crisis Configurations */}
        <TierSection />

        {/* 5. Filter: Brutal Disqualification */}
        <WhoThisIsFor />

        {/* 6. Audit Terminal: AI Architect Chatbot */}
        <ServiceAgent />

        {/* 7. Ultimatum: Two Paths */}
        <FinalUltimatum />
      </main>

      <Footer />
      
      <MarketScanModal isOpen={isScanModalOpen} onClose={() => setIsScanModalOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
