
import React from 'react';
import { Target, Zap, Shield, ArrowRight, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Tier {
  name: string;
  config: string;
  target: string;
  modules: string[];
  results: string[];
  crisis_case: {
    title: string;
    scenario: string;
    action: string;
    impact: string;
  };
  roi: string;
  cta: string;
  badge?: string;
  icon: React.ReactNode;
  style: string;
}

const TierSection: React.FC = () => {
  const { t } = useLanguage();

  const systems: Tier[] = [
    { ...t.systems.s1, icon: <Target className="w-10 h-10" />, style: 'bg-white text-black border-black' },
    { ...t.systems.s2, icon: <Zap className="w-10 h-10" />, style: 'bg-blue-50 text-black border-blue-600' },
    { ...t.systems.s3, icon: <Shield className="w-10 h-10" />, style: 'bg-black text-white border-black' }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-32 px-6 bg-slate-50 border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systems.map((sys, idx) => (
            <div key={idx} className={`border-4 p-6 sm:p-8 lg:p-12 flex flex-col h-full relative ${sys.style} transition-transform hover:-translate-y-2`}>
              
              {sys.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2">
                  {sys.badge}
                </div>
              )}

              <div className="mb-10">{sys.icon}</div>
              
              {/* HEADER: Title */}
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-none mb-6 min-h-[72px] flex items-end">
                {sys.name}
              </h3>

              {/* HEADER: Config & Target */}
              <div className="space-y-4 mb-8 font-mono text-sm sm:text-base font-bold opacity-80 border-b-2 border-current pb-8 min-h-[120px] flex flex-col justify-start">
                 <div>{sys.config}</div>
                 <div>{sys.target}</div>
              </div>

              {/* MODULES Section */}
              <div className="space-y-4 mb-10 min-h-[260px]">
                <div className="text-xs font-black uppercase tracking-[0.2em] opacity-50 mb-4">MODULES:</div>
                {sys.modules.map((mod: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3 text-base font-bold uppercase leading-snug">
                    <span className="opacity-50 mt-1">□</span>
                    <span>{mod}</span>
                  </div>
                ))}
              </div>

              {/* CRISIS USE CASE Section */}
              {sys.crisis_case && (
                <div className="mb-10 bg-current/5 p-6 border-l-4 border-current min-h-[280px] flex flex-col justify-center">
                   <div className="flex items-center space-x-2 mb-2 text-xs font-black uppercase tracking-widest opacity-70">
                     <AlertTriangle className="w-3 h-3" />
                     <span>{sys.crisis_case.title}</span>
                   </div>
                   <div className="space-y-3 text-sm sm:text-base font-medium opacity-90 leading-relaxed">
                     <p><strong>{sys.crisis_case.scenario}</strong></p>
                     <p>{sys.crisis_case.action}</p>
                     <p className="font-bold underline">{sys.crisis_case.impact}</p>
                   </div>
                </div>
              )}

              {/* RESULTS Section */}
              <div className="space-y-4 mb-10 pt-4 border-t-2 border-current/20 min-h-[180px]">
                <div className="text-xs font-black uppercase tracking-[0.2em] opacity-50 mb-2">RESULTS:</div>
                {sys.results.map((res: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3 text-base font-bold uppercase leading-snug">
                     <span className="text-green-500 font-black mt-1">├─</span>
                     <span>{res}</span>
                  </div>
                ))}
              </div>

              {/* FOOTER: ROI + CTA */}
              <div className="mt-auto pt-8 border-t-4 border-current">
                 <div className="text-sm font-black uppercase tracking-widest mb-6 min-h-[24px] flex items-center">{sys.roi}</div>
                 <button className={`w-full py-5 text-base font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-2 transition-colors ${idx === 2 ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-blue-600'}`}>
                   <span>{sys.cta}</span>
                   <ArrowRight className="w-5 h-5" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TierSection;
