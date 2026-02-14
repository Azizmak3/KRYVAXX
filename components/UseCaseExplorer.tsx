
import React, { useState } from 'react';
import { 
  ArrowRight, Layers, Activity 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const UseCaseExplorer: React.FC = () => {
  const { t } = useLanguage();
  const [showTech, setShowTech] = useState(false);

  return (
    <section id="cases" className="py-16 lg:py-32 px-6 bg-black text-white border-b-4 border-blue-600">
      <div className="max-w-[1440px] mx-auto space-y-12 lg:space-y-16">
        
        <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-800 px-4 py-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-mono font-black text-green-500 uppercase tracking-widest">
             {t.case.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-white">
          {/* Header Block */}
          <div className="lg:col-span-12 p-6 sm:p-10 lg:p-16 border-b-4 border-white bg-zinc-900">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
              {t.case.header}
            </h2>
            <div className="space-y-4 text-base sm:text-xl font-medium text-gray-300 max-w-4xl">
              <p className="text-blue-500 font-bold uppercase tracking-widest text-sm">{t.case.sub}</p>
              <div className="pt-4 space-y-1 font-mono text-sm text-gray-400 border-l-2 border-gray-700 pl-4">
                <p>{t.case.client}</p>
                <p>{t.case.context}</p>
                <p className="text-green-500">{t.case.status}</p>
              </div>
              <div className="pt-8 text-lg sm:text-2xl text-white italic font-serif leading-relaxed">
                {t.case.quote}
              </div>
            </div>
          </div>

          {/* Systems Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-white bg-black">
            <div className="space-y-12">
              <div className="flex items-center space-x-4 text-blue-500">
                <Layers className="w-8 h-8" />
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-widest">{t.case.systems.title}</h3>
              </div>
              
              <div className="space-y-10 font-mono">
                {[t.case.systems.s1, t.case.systems.s2, t.case.systems.s3].map((sys, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-base sm:text-lg font-bold text-white uppercase border-l-4 border-blue-600 pl-4">{sys.t}</div>
                    <p className="text-gray-400 text-sm pl-5 leading-relaxed">{sys.d}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setShowTech(!showTech)}
                className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 hover:text-white transition-colors flex items-center space-x-2"
              >
                <span>{showTech ? '[-] HIDE_ARCH' : '[+] SHOW_TECH_ARCHITECTURE'}</span>
              </button>
              
              {showTech && (
                <div className="p-6 border border-zinc-800 bg-zinc-900/50 font-mono text-xs text-green-500 space-y-2 animate-in fade-in">
                  <div>&gt; STACK: NODE_JS / PYTHON_LLM</div>
                  <div>&gt; INTEGRATION: ZAPIER / HUBSPOT</div>
                  <div>&gt; LATENCY: 400MS</div>
                  <div>&gt; COMPLIANCE: GDPR_EU</div>
                </div>
              )}
            </div>
          </div>

          {/* Metrics Column */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-16 bg-zinc-900 flex flex-col justify-between">
            <div className="space-y-12">
               <div className="flex items-center space-x-4 text-green-500">
                <Activity className="w-8 h-8" />
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-widest">{t.case.metrics.title}</h3>
              </div>

              <div className="space-y-6 font-mono text-sm sm:text-base">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500">├─</span>
                  <span>{t.case.metrics.m1}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500">├─</span>
                  <span>{t.case.metrics.m2}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500">└─</span>
                  <span>{t.case.metrics.m3}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-zinc-700">
              <div className="text-xl sm:text-2xl font-black text-white uppercase leading-tight tracking-tight">
                {t.case.metrics.roi}
              </div>
              <div className="mt-8">
                 <button className="flex items-center space-x-3 text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">
                   <span>{t.case.cta}</span>
                   <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCaseExplorer;
