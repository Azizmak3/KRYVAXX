
import React from 'react';
import { Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ComparisonTable: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="compare" className="py-48 px-6 bg-white border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24 space-y-8">
          <div className="inline-flex items-center space-x-3 text-blue-700 font-black uppercase tracking-widest text-sm">
            <Calculator className="w-5 h-5" />
            <span>{t.compare.label}</span>
          </div>
          <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{t.compare.title}</h3>
          <p className="text-2xl text-slate-500 font-medium max-w-3xl mx-auto">
            {t.compare.description}
          </p>
          <div className="text-xl font-black uppercase tracking-widest text-blue-700 italic pt-4">
            {language === 'en' 
              ? "Every operator reaches this conclusion. The only variable is when." 
              : "Chaque opérateur parvient à cette conclusion. La seule variable est le moment."}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="p-12 border-4 border-black bg-slate-50 space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
            <div className="text-xs font-black uppercase text-slate-400">Band: €100K–€1M Revenue</div>
            <div className="space-y-6">
              <div className="flex justify-between text-sm font-bold uppercase border-b border-slate-200 pb-2">
                <span>{t.compare.table.cost}</span>
                <span className="text-slate-600">€110K</span>
              </div>
              <div className="flex justify-between text-sm font-bold uppercase border-b border-slate-200 pb-2">
                <span>3-Year Neural Path</span>
                <span className="text-green-700 font-black">€99K</span>
              </div>
              <div className="pt-4 text-3xl font-black uppercase text-slate-900 leading-none">
                {t.compare.save} €72K <br />
                <span className="text-lg text-slate-400 font-bold">{t.compare.years5}</span>
              </div>
            </div>
          </div>

          <div className="p-12 border-4 border-black bg-blue-50 space-y-8 shadow-[12px_12px_0px_0px_rgba(0,51,255,0.08)] scale-105 z-10">
            <div className="text-xs font-black uppercase text-blue-700">Band: €1M–€5M Revenue</div>
            <div className="space-y-6">
              <div className="flex justify-between text-sm font-bold uppercase border-b border-blue-200 pb-2">
                <span>{t.compare.table.cost}</span>
                <span className="text-slate-600">€175K</span>
              </div>
              <div className="flex justify-between text-sm font-bold uppercase border-b border-blue-200 pb-2">
                <span>3-Year Neural Path</span>
                <span className="text-green-700 font-black">€149K</span>
              </div>
              <div className="pt-4 text-3xl font-black uppercase text-slate-900 leading-none">
                {t.compare.save} €113K <br />
                <span className="text-lg text-slate-400 font-bold">{t.compare.years5}</span>
              </div>
            </div>
          </div>

          <div className="p-12 border-4 border-black bg-slate-50 space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
            <div className="text-xs font-black uppercase text-slate-400">Band: €5M+ Revenue</div>
            <div className="space-y-6">
              <div className="flex justify-between text-sm font-bold uppercase border-b border-slate-200 pb-2">
                <span>{t.compare.table.cost}</span>
                <span className="text-slate-600">€280K</span>
              </div>
              <div className="flex justify-between text-sm font-bold uppercase border-b border-slate-200 pb-2">
                <span>3-Year Neural Path</span>
                <span className="text-green-700 font-black">€186K</span>
              </div>
              <div className="pt-4 text-3xl font-black uppercase text-slate-900 leading-none">
                {t.compare.save} €237K <br />
                <span className="text-lg text-slate-400 font-bold">{t.compare.years5}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto border-8 border-black shadow-[32px_32px_0px_0px_rgba(0,0,0,0.05)]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-10 text-xl font-black uppercase border-b-4 border-black">{t.compare.table.advantage}</th>
                <th className="p-10 text-xl font-black uppercase border-b-4 border-black border-l-4">{t.compare.table.rent}</th>
                <th className="p-10 text-xl font-black uppercase border-b-4 border-black border-l-4 bg-blue-600">{t.compare.table.own}</th>
              </tr>
            </thead>
            <tbody className="text-lg font-mono">
              <tr className="border-b-2 border-slate-100">
                <td className="p-10 font-bold uppercase text-slate-500 font-sans">{t.compare.table.ownership}</td>
                <td className="p-10 border-l-4 border-slate-100 italic text-slate-400 font-sans">{t.compare.table.rental}</td>
                <td className="p-10 border-l-4 border-slate-100 bg-blue-50/30 font-black font-sans">{t.compare.table.asset}</td>
              </tr>
              <tr className="border-b-2 border-slate-100">
                <td className="p-10 font-bold uppercase text-slate-500 font-sans">{t.compare.table.privacy}</td>
                <td className="p-10 border-l-4 border-slate-100 italic text-slate-400 font-sans">{t.compare.table.trainsVendor}</td>
                <td className="p-10 border-l-4 border-slate-100 bg-blue-50/30 font-black font-sans text-blue-700">{t.compare.table.trainsYours}</td>
              </tr>
              <tr className="border-b-2 border-slate-100">
                <td className="p-10 font-bold uppercase text-slate-500 font-sans">{t.compare.table.accounting}</td>
                <td className="p-10 border-l-4 border-slate-100 italic text-slate-400 font-sans">{t.compare.table.opex}</td>
                <td className="p-10 border-l-4 border-slate-100 bg-blue-50/30 font-sans">
                  <div className="font-black text-blue-700">{t.compare.table.capex}</div>
                  <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-2 leading-snug">
                    {t.compare.table.capexSubtitle}
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-slate-100">
                <td className="p-10 font-bold uppercase text-slate-500 font-sans">{t.compare.table.future}</td>
                <td className="p-10 border-l-4 border-slate-100 text-amber-600/80 font-sans font-bold">{t.compare.table.rising}</td>
                <td className="p-10 border-l-4 border-slate-100 bg-blue-50/30 font-black font-sans text-green-700">{t.compare.table.fixed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
