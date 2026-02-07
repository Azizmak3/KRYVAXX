
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ArchitectureOfOwnership: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 bg-white text-black border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto space-y-20">
        
        <div className="border-b border-black pb-12 space-y-6">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
            {t.method.title.split(' ').map((part, i) => i === 2 ? <span key={i} className="text-blue-700">{part} </span> : <span key={i} className="text-black">{part} </span>)}
          </h2>
          <p className="text-2xl font-bold text-slate-600 max-w-4xl leading-tight">
            {t.method.intro}
          </p>
        </div>

        <div className="space-y-0 border-l-4 border-blue-600 ml-4 sm:ml-0">
          {t.method.phases.map((phase, i) => (
            <div key={i} className="relative pl-12 sm:pl-24 pb-20 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute left-[-14px] top-2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full" />
              
              <div className="space-y-4">
                <div className="inline-block bg-blue-50 text-blue-700 font-mono text-xs font-black uppercase tracking-widest px-3 py-1">
                  {phase.w}
                </div>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">{phase.t}</h3>
                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 font-mono text-sm sm:text-base text-slate-600 max-w-4xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                  {`> ${phase.d}`}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white p-10 sm:p-16 border-4 border-black mt-12 shadow-[16px_16px_0px_0px_rgba(0,51,255,0.2)]">
           <p className="text-xl sm:text-3xl font-black uppercase leading-tight max-w-4xl">
             {t.method.result}
           </p>
        </div>

      </div>
    </section>
  );
};

export default ArchitectureOfOwnership;
