
import React from 'react';
import { X, Check, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MoatSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="thesis" className="py-32 px-6 bg-white border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="mb-24 space-y-12 max-w-5xl">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-black">
            {t.thesis.title}
          </h2>
          <div className="flex items-start space-x-6 border-l-8 border-black pl-8 py-2">
            <TrendingUp className="w-12 h-12 text-black shrink-0" />
            <p className="text-xl sm:text-2xl font-medium text-slate-600 leading-relaxed">
              {t.thesis.context}
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black border-4 border-black">
          
          {/* Competitors (Left) */}
          <div className="bg-slate-100 p-12 sm:p-16 space-y-10">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-400">
              {t.thesis.comp.title}
            </h3>
            <ul className="space-y-6">
              {t.thesis.comp.items.map((item, i) => (
                <li key={i} className="flex items-center space-x-4 opacity-60">
                  <X className="w-8 h-8 text-slate-400 shrink-0" />
                  <span className="text-lg font-bold uppercase text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Survivors (Right) */}
          <div className="bg-blue-600 text-white p-12 sm:p-16 space-y-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              {t.thesis.surv.title}
            </h3>
            <ul className="space-y-6">
              {t.thesis.surv.items.map((item, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="bg-white text-blue-600 rounded-full p-1">
                    <Check className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-xl font-black uppercase tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote Footer */}
        <div className="mt-24 text-center space-y-12">
           <blockquote className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight max-w-5xl mx-auto text-black">
             {t.thesis.quote}
           </blockquote>
           <div className="inline-block bg-black text-green-500 font-mono p-4 text-xs sm:text-sm font-bold uppercase tracking-widest border border-green-900">
             {t.thesis.data}
           </div>
        </div>

      </div>
    </section>
  );
};

export default MoatSection;
