
import React, { useEffect } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ThankYouProps {
  onBack: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-6 animate-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-2xl w-full space-y-12 text-center">
        <CheckCircle2 className="w-32 h-32 text-green-600 mx-auto" />
        
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
            {language === 'en' ? 'AUDIT REGISTERED' : 'AUDIT ENREGISTRÉ'}
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed">
            {language === 'en' 
              ? 'A Senior Architect has been notified of your request. You will be contacted within 24 hours to schedule the technical uplink.'
              : 'Un Architecte Senior a été notifié de votre demande. Vous serez contacté sous 24 heures pour établir la liaison technique.'}
          </p>
        </div>

        <div className="bg-slate-50 border-4 border-black p-8 text-left space-y-4 max-w-lg mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-slate-400">
            {language === 'en' ? 'NEXT STEPS' : 'PROCHAINES ÉTAPES'}
          </div>
          <ul className="space-y-3 font-mono text-sm font-bold text-slate-800">
             <li className="flex items-start space-x-3">
               <span className="text-blue-600">01</span>
               <span>{language === 'en' ? 'Prepare P&L statements' : 'Préparer comptes de résultat'}</span>
             </li>
             <li className="flex items-start space-x-3">
               <span className="text-blue-600">02</span>
               <span>{language === 'en' ? 'List current SaaS subscriptions' : 'Lister abonnements SaaS actuels'}</span>
             </li>
             <li className="flex items-start space-x-3">
               <span className="text-blue-600">03</span>
               <span>{language === 'en' ? 'Identify carrying cost/unit' : 'Identifier coût portage/lot'}</span>
             </li>
          </ul>
        </div>

        <button 
          onClick={onBack}
          className="inline-flex items-center space-x-3 text-lg font-black uppercase tracking-widest hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'en' ? 'RETURN TO SYSTEMS' : 'RETOUR AUX SYSTÈMES'}</span>
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
