
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FinalUltimatum: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="ultimatum" className="py-16 lg:py-32 px-6 bg-black text-white border-t-8 border-blue-600">
      <div className="max-w-[1440px] mx-auto space-y-12 lg:space-y-20">
        
        {/* Two Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
          
          {/* Option A - Wait */}
          <div className="space-y-8 lg:space-y-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-400 border-b-4 border-slate-700 pb-6">
              {t.final.optA.t}
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              {t.final.optA.items.map((item, i) => (
                 <li key={i} className="flex items-center space-x-4 text-base sm:text-xl font-bold uppercase text-slate-500">
                   <span>→</span>
                   <span>{item}</span>
                 </li>
              ))}
            </ul>
            <div className="pt-8 text-xl sm:text-2xl font-black uppercase text-red-500">
              {t.final.optA.cost}
            </div>
          </div>

          {/* Option B - Build */}
          <div className="space-y-8 lg:space-y-10">
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-blue-500 border-b-4 border-blue-600 pb-6">
              {t.final.optB.t}
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              {t.final.optB.items.map((item, i) => (
                 <li key={i} className="flex items-center space-x-4 text-base sm:text-xl font-bold uppercase text-white">
                   <span className="text-blue-500">→</span>
                   <span>{item}</span>
                 </li>
              ))}
            </ul>
            <div className="pt-8 text-xl sm:text-2xl font-black uppercase text-green-500">
              {t.final.optB.cost}
            </div>
          </div>

        </div>

        <div className="pt-16 lg:pt-24 border-t border-zinc-800 text-center space-y-12 lg:space-y-16">
          <p className="text-2xl sm:text-4xl font-black uppercase leading-tight max-w-5xl mx-auto">
            {t.final.center}
          </p>
          
          <div className="flex flex-col items-center space-y-6">
            <button 
              onClick={() => document.getElementById('blueprint')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 sm:px-24 py-6 sm:py-8 text-lg sm:text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all border-4 border-blue-600 flex items-center space-x-4 shadow-[0_0_50px_rgba(37,99,235,0.3)] w-full sm:w-auto justify-center"
            >
              <span>{t.final.cta_primary}</span>
            </button>
            <p className="text-slate-600 font-mono text-xs uppercase tracking-widest pt-4 lg:pt-8">
              {t.final.fine}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalUltimatum;
