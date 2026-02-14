
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenScan: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenScan }) => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-white text-black px-6 py-16 lg:py-32 border-b-4 border-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Content: Typography Impact */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-8">
            
            {/* Target Badge */}
            <div className="inline-block bg-[#0066FF] text-white px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-[1px] mb-8 lg:mb-12 self-start font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t.hero.overline}
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black tracking-tighter leading-[0.9] lg:leading-[0.85] uppercase text-black mb-8 lg:mb-[50px] whitespace-pre-line break-words">
              {t.hero.headline}
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.2] lg:leading-[1.1] text-black uppercase mb-8 lg:mb-[40px] whitespace-pre-line max-w-4xl">
              {t.hero.subheadline}
            </h2>

            {/* Body Copy */}
            <p className="text-base sm:text-[20px] font-medium leading-[1.6] text-slate-600 max-w-[600px] mb-8 lg:mb-[50px] whitespace-pre-line">
              {t.hero.body}
            </p>

            {/* CTA Button */}
            <div className="">
              <button 
                onClick={() => document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#0066FF] border-[3px] border-black px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-[18px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all rounded-none flex items-center gap-3 w-full sm:w-auto justify-center group shadow-[8px_8px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Right Content: Comparison Data Card */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="bg-white border-[4px] border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] relative z-10 max-w-[500px] mx-auto lg:ml-auto transition-transform hover:-translate-y-1 duration-300">
                 
                 {/* Eyebrow */}
                 <div className="flex justify-between items-center mb-6 sm:mb-8">
                    <div className="text-[#0066FF] font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] font-mono">
                        {language === 'en' ? 'VELOCITY_INDEX_LIVE' : 'INDICE_VÉLOCITÉ_LIVE'}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="animate-pulse w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest">LIVE</span>
                    </div>
                 </div>

                 {/* Headline */}
                 <h3 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase mb-8 sm:mb-12 leading-[0.9]">
                    {language === 'en' ? <>REVENUE<br/>AT RISK.</> : <>REVENU<br/>À RISQUE.</>}
                 </h3>

                 {/* Comparison List */}
                 <div className="space-y-8 sm:space-y-10">
                    
                    {/* Item 01 - Market Leader */}
                    <div className="group">
                        <div className="flex justify-between items-end mb-3">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <span className="text-slate-300 font-black text-xl tracking-tighter leading-none">01</span>
                                <span className="text-black font-black uppercase tracking-tight text-base sm:text-lg leading-none">
                                    {language === 'en' ? 'MARKET LEADER' : 'LEADER MARCHÉ'}
                                </span>
                            </div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                6 {language === 'en' ? 'MO' : 'MOIS'}
                            </span>
                        </div>
                        {/* Visual Bar - Benchmark */}
                        <div className="h-3 w-full bg-slate-100 rounded-sm overflow-hidden flex relative">
                            <div className="h-full bg-black w-[43%] relative"></div>
                            {/* Dotted line extending */}
                            <div className="absolute top-1/2 left-[43%] right-0 border-t-2 border-dashed border-slate-200 -mt-px"></div>
                        </div>
                        <div className="mt-2 text-[9px] font-black uppercase tracking-widest text-slate-400">
                            {language === 'en' ? 'BENCHMARK' : 'RÉFÉRENCE'}
                        </div>
                    </div>

                    {/* Item 02 - Your Cycle */}
                    <div className="group">
                        <div className="flex justify-between items-end mb-3">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <span className="text-slate-300 font-black text-xl tracking-tighter leading-none">02</span>
                                <span className="text-black font-black uppercase tracking-tight text-base sm:text-lg leading-none">
                                    {language === 'en' ? 'YOUR CYCLE' : 'VOTRE CYCLE'}
                                </span>
                            </div>
                            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                                14 {language === 'en' ? 'MO' : 'MOIS'}
                            </span>
                        </div>
                        {/* Visual Bar - Delay */}
                        <div className="h-6 w-full bg-slate-100 rounded-sm overflow-hidden flex relative shadow-inner">
                            {/* Efficient part */}
                            <div className="h-full bg-slate-300 w-[43%] border-r border-white/50"></div>
                            {/* Waste/Delay part */}
                            <div className="h-full bg-red-500 flex-1 relative flex items-center justify-center overflow-hidden">
                                {/* Diagonal stripes pattern */}
                                <div className="absolute inset-0 w-full h-full opacity-30" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 8px)'}}></div>
                                <span className="relative z-10 text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap px-2">
                                    {language === 'en' ? 'Delay' : 'Retard'}
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-wrap justify-between items-center gap-2">
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                                {language === 'en' ? 'CURRENT STATE' : 'ÉTAT ACTUEL'}
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-2 py-0.5 rounded-sm whitespace-nowrap">
                                {language === 'en' ? '8 MO DELAY DETECTED' : 'RETARD DÉTECTÉ 8 MOIS'}
                            </span>
                        </div>
                    </div>

                    {/* Item 03 - Velocity Gap */}
                    <div className="pt-8 border-t border-dashed border-slate-300">
                        <div className="flex items-start gap-4">
                            <span className="text-slate-300 font-black text-xl tracking-tighter mt-1 leading-none">03</span>
                            <div className="w-full">
                                <div className="text-black font-black uppercase tracking-tight text-base sm:text-lg leading-none mb-6">
                                    {language === 'en' ? 'VELOCITY GAP' : 'ÉCART VÉLOCITÉ'}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border-l-2 border-black pl-4">
                                        <div className="text-2xl sm:text-3xl font-black text-black tracking-tighter leading-none">-57%</div>
                                        <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-2">
                                            {language === 'en' ? 'EFFICIENCY' : 'EFFICACITÉ'}
                                        </div>
                                    </div>
                                    <div className="border-l-2 border-red-500 pl-4 bg-red-50 py-2 -my-2 pr-2">
                                        <div className="text-2xl sm:text-3xl font-black text-red-600 tracking-tighter leading-none">€65K</div>
                                        <div className="text-[9px] font-bold uppercase tracking-widest text-red-400 mt-2">
                                            {language === 'en' ? '/u COST OF DELAY' : '/u COÛT DU RETARD'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                 </div>

                 {/* Divider */}
                 <div className="w-full h-px bg-slate-200 my-8"></div>

                 {/* Footer */}
                 <div className="flex items-center gap-3 text-[#0066FF]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-bold text-[9px] uppercase tracking-[0.15em]">
                       {language === 'en' ? 'System Analysis • Paris Region • Q1 2026' : 'Analyse Système • Région Paris • T1 2026'}
                    </span>
                 </div>

              </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
