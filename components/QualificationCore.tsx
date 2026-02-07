
import React, { useState, useEffect } from 'react';
import { XCircle, Calculator, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const QualificationCore: React.FC = () => {
  const { t } = useLanguage();
  
  // Calculator State
  const [price, setPrice] = useState(350000);
  const [lots, setLots] = useState(45);
  const [cycle, setCycle] = useState(14);
  const [cost, setCost] = useState(12000);
  
  const [results, setResults] = useState({
    delayCost: 0,
    savings: 0,
    velocity: 0
  });

  const calculate = () => {
    const delayCost = cost * 12;
    const savings = cost * (cycle * 0.30);
    const velocity = Math.ceil(lots * 0.25);

    setResults({ delayCost, savings, velocity });
  };

  useEffect(() => {
    calculate();
  }, [price, lots, cycle, cost]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="diagnostic" className="py-32 px-6 bg-white border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left: The Trap Text */}
        <div className="lg:col-span-5 space-y-12">
          <div className="inline-flex items-center space-x-3 text-red-600 font-mono font-black uppercase tracking-widest text-sm">
            <AlertTriangle className="w-5 h-5" />
            <span>DIAGNOSTIC_01</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black text-black tracking-tighter uppercase leading-[0.9]">
            {t.diagnostic.title}
          </h2>

          <div className="text-xl text-slate-800 font-medium leading-relaxed space-y-8">
            <p>{t.diagnostic.main}</p>

            <div className="bg-slate-50 border-l-4 border-red-600 p-6 space-y-4">
               <h4 className="font-black uppercase tracking-widest text-red-600 text-sm">{t.diagnostic.context_title}</h4>
               <p className="text-slate-700">{t.diagnostic.context}</p>
            </div>
            
            <ul className="space-y-4 font-mono text-sm sm:text-base border-4 border-black p-6 bg-slate-50">
               <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.diagnostic.scenario_title}</div>
              {t.diagnostic.list.map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="text-slate-400">├─</span>
                  <span className="font-bold uppercase text-slate-900">{item}</span>
                </li>
              ))}
              <li className="flex items-start space-x-4 pt-2 text-red-600">
                  <span className="">└─</span>
                  <span className="font-black uppercase">{t.diagnostic.scenario_cost}</span>
              </li>
            </ul>

            <div className="p-6 bg-black text-white italic font-serif text-xl leading-tight border-l-8 border-blue-600">
              {t.diagnostic.quote}
            </div>
          </div>
        </div>

        {/* Right: The Calculator */}
        <div className="lg:col-span-7">
          <div className="bg-black text-green-500 font-mono p-8 sm:p-12 border-4 border-slate-900 shadow-[24px_24px_0px_0px_rgba(255,0,0,0.1)]">
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-green-500/30">
              <span className="text-xl font-black uppercase tracking-widest">{t.diagnostic.calc.header}</span>
              <Calculator className="w-8 h-8 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-green-700">{t.diagnostic.calc.price}</label>
                <input 
                  type="number" 
                  value={price} 
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full bg-black border-b-2 border-green-900 text-white text-2xl focus:border-green-500 outline-none py-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-green-700">{t.diagnostic.calc.lots}</label>
                <input 
                  type="number" 
                  value={lots} 
                  onChange={(e) => setLots(Number(e.target.value))}
                  className="w-full bg-black border-b-2 border-green-900 text-white text-2xl focus:border-green-500 outline-none py-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-green-700">{t.diagnostic.calc.cycle}</label>
                <input 
                  type="number" 
                  value={cycle} 
                  onChange={(e) => setCycle(Number(e.target.value))}
                  className="w-full bg-black border-b-2 border-green-900 text-white text-2xl focus:border-green-500 outline-none py-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-green-700">{t.diagnostic.calc.cost}</label>
                <input 
                  type="number" 
                  value={cost} 
                  onChange={(e) => setCost(Number(e.target.value))}
                  className="w-full bg-black border-b-2 border-green-900 text-white text-2xl focus:border-green-500 outline-none py-2"
                />
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-dashed border-green-900/50">
              <div className="flex justify-between items-center text-red-500">
                <span className="text-sm font-bold uppercase">{t.diagnostic.calc.results.delay}</span>
                <span className="text-3xl sm:text-4xl font-black">{formatCurrency(results.delayCost)}</span>
              </div>
              <div className="flex justify-between items-center text-white">
                <span className="text-sm font-bold uppercase">{t.diagnostic.calc.results.savings}</span>
                <span className="text-3xl sm:text-4xl font-black">{formatCurrency(results.savings)}</span>
              </div>
              <div className="flex justify-between items-center text-blue-500">
                <span className="text-sm font-bold uppercase">{t.diagnostic.calc.results.velocity}</span>
                <span className="text-3xl sm:text-4xl font-black">+{results.velocity} UNITS</span>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-green-900/30 text-xs font-bold uppercase text-green-700">
              {t.diagnostic.competitor_note}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualificationCore;
