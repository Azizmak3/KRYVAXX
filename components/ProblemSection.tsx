
import React from 'react';
import { XCircle, TrendingDown, DollarSign, Layers, PieChart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-48 px-6 bg-white border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7 space-y-12">
            <div className="inline-flex items-center space-x-3 text-red-600 font-black uppercase tracking-[0.4em] text-sm">
              <XCircle className="w-6 h-6" />
              <span>{t.problem.label}</span>
            </div>
            <h2 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              {t.problem.title.split(' ').map((word, i) => word === 'Trap' || word === 'Piège' ? <><br key={i} /><span className="text-red-600">{word} </span></> : word + ' ')}
            </h2>
            <div className="space-y-10 text-xl text-slate-600 font-medium leading-relaxed">
              <p className="text-2xl">{t.problem.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-50 p-12 border-4 border-black font-mono">
                <div className="space-y-4">
                  <div className="text-xs font-black uppercase text-slate-400 flex justify-between">
                    <span>{t.problem.marketing}</span>
                    <span>€1,500–€3,200/mo</span>
                  </div>
                  <div className="text-sm space-y-2 text-slate-500">
                    <p>• Jasper Enterprise: €299/mo</p>
                    <p>• ChatGPT Teams (12 seats): €300/mo</p>
                    <p>• Outreach/Clay/Apollo AI: €800+/mo</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-black uppercase text-slate-400 flex justify-between">
                    <span>{t.problem.leadership}</span>
                    <span>€1,000–€2,500/mo</span>
                  </div>
                  <div className="text-sm space-y-2 text-slate-500">
                    <p>• GitHub Copilot (8 seats): €152/mo</p>
                    <p>• Claude/GPT Plus: €200/mo</p>
                    <p>• Perplexity Pro: €100/mo</p>
                  </div>
                </div>
              </div>
              
              <div className="text-3xl font-black text-slate-900 leading-tight border-b-4 border-slate-100 pb-10">
                {t.problem.totalSpend} <br />
                <span className="text-red-600">{t.problem.yearlySpend}</span>
              </div>
              
              <p>{t.problem.conclusion}</p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="border-4 border-black p-12 bg-slate-900 text-white space-y-8 shadow-[24px_24px_0px_0px_rgba(239,68,68,0.1)] sticky top-48">
              <PieChart className="w-16 h-16 text-red-500" />
              <h4 className="text-3xl font-black uppercase tracking-tight">{t.problem.trapTitle}</h4>
              <div className="space-y-6 text-slate-400 font-bold uppercase tracking-widest text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span>{t.problem.year1}</span>
                  <span className="text-white">€54K</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span>{t.problem.year2}</span>
                  <span className="text-white">€70K</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span>{t.problem.year3}</span>
                  <span className="text-white">€91K</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-red-500 font-black">
                  <span>{t.problem.totalLoss}</span>
                  <span className="text-2xl">€215,000</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm italic border-t border-slate-800 pt-6">"{t.problem.whatIf}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
