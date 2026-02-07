
import React from 'react';
import { ArrowLeftRight, Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SeLogerArbitrage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 bg-slate-50 border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto space-y-20">
        
        <div className="space-y-8 max-w-5xl">
          <div className="inline-flex items-center space-x-3 text-blue-700 font-black uppercase tracking-widest text-sm">
            <ArrowLeftRight className="w-5 h-5" />
            <span>MARKET ANALYSIS</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
            {t.arbitrage.title}
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-slate-600 leading-relaxed max-w-4xl">
            {t.arbitrage.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Current State */}
          <div className="bg-white border-4 border-black p-10 sm:p-14 space-y-10">
            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-400 border-b-4 border-slate-100 pb-6">
              {t.arbitrage.left_title}
            </h3>
            <ul className="space-y-6">
              {t.arbitrage.left_items.map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="font-mono font-bold text-slate-300">0{i+1}</span>
                  <span className="text-lg font-bold text-slate-600 uppercase leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: The Opportunity */}
          <div className="bg-blue-900 text-white border-4 border-black p-10 sm:p-14 space-y-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white border-b-4 border-blue-700 pb-6">
              {t.arbitrage.right_title}
            </h3>
            <p className="text-blue-200 font-bold uppercase tracking-wide">{t.arbitrage.right_intro}</p>
            
            <div className="space-y-8">
              <div className="space-y-4 opacity-50">
                 <div className="text-xs font-black uppercase tracking-widest">{t.arbitrage.right_not}</div>
                 {t.arbitrage.right_not_items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <X className="w-5 h-5" />
                      <span className="font-bold uppercase line-through decoration-2">{item}</span>
                    </div>
                 ))}
              </div>
              
              <div className="space-y-4">
                 <div className="text-xs font-black uppercase tracking-widest text-green-400">{t.arbitrage.right_do}</div>
                 {t.arbitrage.right_do_items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="font-bold uppercase text-white">{item}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>

        </div>

        {/* Calculation Footer */}
        <div className="bg-black text-green-500 font-mono p-8 sm:p-12 border-4 border-slate-900">
           <div className="text-sm font-black uppercase tracking-widest mb-6 border-b border-green-900 pb-2">{t.arbitrage.calc_title}</div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.arbitrage.calc_items.map((item, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <span className="text-xs text-green-800 uppercase tracking-widest">INPUT_0{i+1}</span>
                  <span className="font-bold uppercase">{item}</span>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default SeLogerArbitrage;
