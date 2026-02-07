
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-32 px-6 border-t-8 border-black bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-5 space-y-10">
            <div className="flex items-center">
              <span className="text-4xl font-black tracking-tight text-black uppercase">KRYVAX</span>
            </div>
            <div className="space-y-6">
              <p className="max-w-md text-slate-900 text-xl font-black uppercase leading-tight">
                {language === 'en' ? 'AI Infrastructure for €2M-€20M Real Estate Developers.' : 'Infrastructure IA pour Promoteurs Immobiliers (2M€-20M€).'}
              </p>
              <p className="max-w-sm text-slate-500 text-lg font-medium leading-relaxed">
                {language === 'en' ? 'Stop renting tools. Start building survival infrastructure.' : 'Arrêtez de louer des outils. Construisez votre infrastructure de survie.'}
              </p>
            </div>
          </div>
          
          {/* Column 2: Resources */}
          <div className="md:col-span-3 space-y-10">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Resources</h4>
            <ul className="space-y-4 text-slate-900 text-sm font-black uppercase tracking-widest">
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-blue-700 transition-colors">{t.nav.whatWeBuild}</a></li>
              <li><a href="#cases" onClick={(e) => handleLinkClick(e, '#cases')} className="hover:text-blue-700 transition-colors">{t.nav.caseStudies}</a></li>
              <li><a href="#diagnostic" onClick={(e) => handleLinkClick(e, '#diagnostic')} className="hover:text-blue-700 transition-colors">{t.nav.calculateRoi}</a></li>
            </ul>
          </div>
          
          {/* Column 3: Get Started */}
          <div className="md:col-span-4 space-y-10">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Actions</h4>
            <ul className="space-y-4 text-slate-900 text-sm font-black uppercase tracking-widest">
              <li>
                <a 
                  href="#diagnostic" 
                  onClick={(e) => handleLinkClick(e, '#diagnostic')} 
                  className="flex items-center space-x-2 text-blue-700 hover:text-black transition-colors"
                >
                  <span>{t.nav.calculateRoi}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#ultimatum" 
                  onClick={(e) => handleLinkClick(e, '#ultimatum')} 
                  className="hover:text-blue-700 transition-colors"
                >
                  {t.nav.initiate}
                </a>
              </li>
              <li>
                <a href="#qualification" onClick={(e) => handleLinkClick(e, '#qualification')} className="text-slate-400 hover:text-black transition-colors">
                  {t.filter.cta}
                </a>
              </li>
            </ul>
            <div className="pt-6 border-t-2 border-slate-50">
               <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Primary Node</div>
               <div className="text-xs font-mono font-bold text-slate-900">UPLINK_01 // PARIS_JURISDICTION</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-16 border-t-4 border-slate-100 gap-8">
          <div className="space-y-2">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} KRYVAX Systems. All rights reserved.
            </p>
            <p className="text-slate-900 text-[10px] font-black uppercase tracking-[0.1em]">
              Reserved for established operators with €2M+ annual revenue.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-10">
             <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] font-mono font-black text-slate-500 uppercase">SYSTEM_STATUS: ROI_NOMINAL</span>
             </div>
             <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(0,51,255,0.4)]" />
                <span className="text-[10px] font-mono font-black text-slate-500 uppercase">NODE_01: ACTIVE</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
