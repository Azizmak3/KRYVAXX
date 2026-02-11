
import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ThankYouProps {
  onBack: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [terminalData, setTerminalData] = useState<{
    cycleDuration: string;
    calculatedFriction: number;
    // We can infer ROI from friction (simplified)
  } | null>(null);

  useEffect(() => {
    // 1. Simulate URL change for tracking/aesthetics
    window.history.pushState({}, '', '/audit-confirme');
    window.scrollTo(0, 0);

    // 2. Fire Backup Google Ads Conversion (Page View based)
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXX',
            'value': 1000.0,
            'currency': 'EUR'
        });
    }

    // 3. Retrieve session data
    const storedData = sessionStorage.getItem('terminalData');
    if (storedData) {
      setTerminalData(JSON.parse(storedData));
    }
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-6 animate-in slide-in-from-bottom-10 duration-500 overflow-y-auto">
      <div className="max-w-4xl w-full space-y-16 py-12">
        
        <div className="text-center space-y-8">
            <CheckCircle2 className="w-24 h-24 text-green-600 mx-auto" />
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
                {language === 'en' ? 'AUDIT REGISTERED' : '✓ AUDIT ENREGISTRÉ'}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                {language === 'en' 
                ? 'A Senior Architect has been notified. You will be contacted within 24 hours to schedule the technical uplink.'
                : 'Un Architecte Senior a été notifié de votre demande. Vous serez contacté sous 24 heures pour établir la liaison technique.'}
            </p>
        </div>

        {/* Terminal Data Recap */}
        {terminalData && (
             <div className="bg-slate-900 border-l-4 border-blue-500 p-8 font-mono space-y-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2">
                   VOTRE DIAGNOSTIC
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-slate-300">
                   <div>Cycle actuel: <span className="text-white">{terminalData.cycleDuration} mois</span></div>
                   <div>Friction calculée: <span className="text-red-500">{formatCurrency(terminalData.calculatedFriction)}</span></div>
                   <div>ROI System_02: <span className="text-green-400">{formatCurrency(terminalData.calculatedFriction * 0.6)} (Est.)</span></div>
                </div>
             </div>
        )}

        <div className="bg-slate-50 border-4 border-black p-10 sm:p-14 space-y-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)]">
          <div className="flex items-center space-x-3 text-blue-700 border-b-2 border-slate-200 pb-4">
             <ArrowRight className="w-6 h-6" />
             <span className="text-sm font-black uppercase tracking-[0.2em]">PROCHAINES ÉTAPES</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                  <div className="text-6xl font-black text-slate-200 leading-none">01</div>
                  <h3 className="text-lg font-black uppercase tracking-tight">COMPTES DE RÉSULTAT</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-mono">
                      Préparez le P&L des 12 derniers mois. Focus sur coûts de portage et charges commerciales. Identifiez vos 3 postes de coûts fixes majeurs.
                  </p>
              </div>
              <div className="space-y-4">
                  <div className="text-6xl font-black text-slate-200 leading-none">02</div>
                  <h3 className="text-lg font-black uppercase tracking-tight">INVENTAIRE SAAS</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-mono">
                      Listez tous les outils utilisés (CRM, permis, financement). Notez les coûts mensuels par outil et les points de friction.
                  </p>
              </div>
              <div className="space-y-4">
                  <div className="text-6xl font-black text-slate-200 leading-none">03</div>
                  <h3 className="text-lg font-black uppercase tracking-tight">STRUCTURE DÉCISIONNELLE</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-mono">
                      Qui valide les prospects ? Combien de touches avant closing ? Où se produisent les ralentissements exacts ?
                  </p>
              </div>
          </div>
          
          <div className="pt-6 border-t-2 border-slate-200 text-center">
             <a href="https://cal.com/kryvax-audit" target="_blank" rel="noopener noreferrer" className="btn-institutional bg-blue-600 text-white border-blue-600 hover:bg-black hover:text-white hover:border-black w-full md:w-auto py-4">
                ACCÉDER AU CALENDRIER KRYVAX →
             </a>
             <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic mt-4">
                 Si vous avez besoin d'un créneau immédiat.
             </p>
          </div>
        </div>

        <div className="text-center space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">PENDANT CE TEMPS</p>
            <div className="flex flex-wrap justify-center gap-6">
                <button onClick={() => { onBack(); window.history.pushState({}, '', '/'); window.location.hash = '#cases'; }} className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                    VOIR ÉTUDES DE CAS
                </button>
                <button onClick={() => { onBack(); window.history.pushState({}, '', '/'); window.location.hash = '#systems'; }} className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                    COMPRENDRE L'ARCHITECTURE
                </button>
            </div>
            <div className="pt-10">
                <button 
                onClick={() => { onBack(); window.history.pushState({}, '', '/'); }}
                className="inline-flex items-center space-x-3 text-lg font-black uppercase tracking-widest bg-black text-white px-8 py-4 hover:bg-blue-600 transition-colors"
                >
                <ArrowLeft className="w-5 h-5" />
                <span>RETOUR AUX SYSTÈMES</span>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;
