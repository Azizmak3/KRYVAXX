
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenScan: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenScan }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Update URL without reload
    window.history.pushState({}, '', path);

    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'AI TERMINAL', id: 'terminal', path: '/AI-terminal' },
    { label: language === 'en' ? 'LEAD FORM' : 'FORMULAIRE', id: 'blueprint', path: '/audit' },
    { label: t.nav.calculateRoi, id: 'diagnostic', path: '/diagnostic' },
    { label: t.nav.caseStudies, id: 'cases', path: '/cases' },
    { label: t.nav.whatWeBuild, id: 'pricing', path: '/systems' },
  ];

  const mobileNavLinks = [
    { label: language === 'en' ? 'HOME' : 'ACCUEIL', id: 'home', path: '/' },
    ...navLinks,
    { label: language === 'en' ? 'QUALIFICATION' : 'QUALIFICATION', id: 'qualification', path: '/qualification' },
    { label: language === 'en' ? 'YOUR DECISION' : 'VOTRE DÉCISION', id: 'ultimatum', path: '/decision' },
  ];

  const handleInitiateClick = () => {
    // Direct to the Lead Form (Blueprint section)
    window.history.pushState({}, '', '/audit');
    const el = document.getElementById('blueprint');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-slate-900 border-b-4 border-black py-4' : 'bg-white py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <a href="/" onClick={(e) => handleLinkClick(e, 'home', '/')} className="flex items-center shrink-0">
          <span className={`text-3xl font-black tracking-tight uppercase leading-none transition-colors ${isScrolled ? 'text-white' : 'text-black'}`}>KRYVAX</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.id, link.path)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-black'}`}
            >
              {link.label}
            </a>
          ))}

          {/* Lang Toggle */}
          <div className={`flex items-center border-2 divide-x-2 overflow-hidden h-10 transition-colors ${isScrolled ? 'border-slate-700 divide-slate-700' : 'border-black divide-black'}`}>
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-3 text-[10px] font-black h-full transition-colors ${language === 'en' ? (isScrolled ? 'bg-white text-black' : 'bg-black text-white') : (isScrolled ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-white text-black hover:bg-slate-100')}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('fr')} 
              className={`px-3 text-[10px] font-black h-full transition-colors ${language === 'fr' ? (isScrolled ? 'bg-white text-black' : 'bg-black text-white') : (isScrolled ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-white text-black hover:bg-slate-100')}`}
            >
              FR
            </button>
          </div>

          <button 
            onClick={handleInitiateClick}
            className={`btn-institutional h-10 px-6 py-0 flex items-center transition-all ${isScrolled ? 'bg-blue-700 border-blue-700 hover:bg-white hover:text-blue-700' : ''}`}
          >
            {t.nav.initiate}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center lg:hidden">
          <button className={`${isScrolled ? 'text-white' : 'text-black'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full h-screen z-[90] overflow-y-auto animate-in fade-in slide-in-from-right duration-300 border-t-4 border-black ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
          <div className="p-8 space-y-4 pb-32">
            {mobileNavLinks.map((link, i) => (
              <div key={i} className={`border-b ${isScrolled ? 'border-slate-700/20' : 'border-slate-100'} pb-4`}>
                <a
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.id, link.path)}
                  className="block w-full py-4 text-left text-xl font-black uppercase tracking-widest"
                >
                  {link.label}
                </a>
              </div>
            ))}

            <div className="pt-8 space-y-6">
              <div className="flex items-center space-x-6">
                <button onClick={() => setLanguage('en')} className={`text-lg font-black uppercase tracking-widest ${language === 'en' ? 'text-blue-500' : 'text-slate-400'}`}>English</button>
                <button onClick={() => setLanguage('fr')} className={`text-lg font-black uppercase tracking-widest ${language === 'fr' ? 'text-blue-500' : 'text-slate-400'}`}>Français</button>
              </div>
              <button 
                onClick={handleInitiateClick}
                className="btn-institutional w-full py-6 bg-blue-700 border-blue-700"
              >
                {t.nav.initiate}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
