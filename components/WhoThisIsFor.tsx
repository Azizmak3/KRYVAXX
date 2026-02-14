
import React from 'react';
import { X, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhoThisIsFor: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="qualification" className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black">
      
      {/* Disqualification (Red) */}
      <div className="bg-red-600 text-white p-8 lg:p-24 space-y-12">
        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight bg-black inline-block px-4 py-2">
          {t.filter.not_title}
        </h3>
        <div className="space-y-10">
          {t.filter.not_list.map((item, i) => (
            <div key={i} className="group">
              <div className="flex items-center space-x-4 mb-2">
                <X className="w-8 h-8 text-black shrink-0" />
                <span className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight">{item.t}</span>
              </div>
              <p className="pl-12 text-red-100 font-bold uppercase text-xs sm:text-sm">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Qualification (White) */}
      <div className="bg-white text-black p-8 lg:p-24 space-y-12 flex flex-col justify-center">
        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-blue-600">
          {t.filter.for_title}
        </h3>
        <div className="space-y-6">
          {t.filter.for_list.map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <Check className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <span className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-900 leading-tight">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t-2 border-slate-100 mt-auto">
           <button className="text-lg sm:text-xl font-black uppercase tracking-widest border-b-4 border-black pb-2 hover:text-blue-600 hover:border-blue-600 transition-all">
             {t.filter.cta}
           </button>
        </div>
      </div>

    </section>
  );
};

export default WhoThisIsFor;
