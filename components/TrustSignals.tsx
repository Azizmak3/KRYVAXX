
import React from 'react';
import { Shield, Lock, FileCheck, Award, Users, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TrustSignals: React.FC = () => {
  const { language } = useLanguage();

  const signals = [
    { icon: <Shield className="w-6 h-6" />, label: "SOC2 TYPE II COMPLIANT" },
    { icon: <Lock className="w-6 h-6" />, label: "ISO 27001 ARCHITECTURE" },
    { icon: <FileCheck className="w-6 h-6" />, label: "GDPR JURISDICTIONAL DATA" },
    { icon: <Award className="w-6 h-6" />, label: "INDUSTRIAL-GRADE VALIDATION" }
  ];

  const metrics = [
    { label: language === 'en' ? "Total Capital Deployed" : "Capital Total Déployé", value: "€2.4M+" },
    { label: language === 'en' ? "Avg. ROI Timeline" : "Temps ROI Moyen", value: "19 MONTHS" },
    { label: language === 'en' ? "Active Pipelines" : "Pipelines Actifs", value: "32 NODE_CLUSTER" }
  ];

  return (
    <section id="trust" className="py-24 px-6 bg-slate-50 border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 flex-1">
            {signals.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-700 group-hover:border-blue-700 transition-all">
                  {s.icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 leading-tight max-w-[120px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="h-px lg:h-20 w-full lg:w-px bg-slate-200" />

          <div className="flex flex-wrap justify-center lg:justify-end gap-12 lg:gap-24 flex-1">
            {metrics.map((m, i) => (
              <div key={i} className="text-center lg:text-right">
                <div className="text-4xl font-black text-slate-900 tracking-tighter uppercase">{m.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 pt-16 border-t-2 border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center space-x-6 text-slate-400">
             <Users className="w-6 h-6" />
             <span className="text-xs font-bold uppercase tracking-widest">
               {language === 'en' ? 'Architect Credentials: Capital Asset Specialists & Private Cloud Lead' : 'Équipe d\'Architectes : Spécialistes Actifs Capital & Cloud Privé'}
             </span>
          </div>
          <div className="flex items-center space-x-10">
             <div className="flex items-center space-x-3 text-slate-900 font-black text-[10px] uppercase tracking-widest">
                <Globe className="w-4 h-4 text-blue-700" />
                <span>Paris Jurisdiction</span>
             </div>
             <div className="flex items-center space-x-3 text-slate-900 font-black text-[10px] uppercase tracking-widest">
                <Globe className="w-4 h-4 text-blue-700" />
                <span>Lyon Operations</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
