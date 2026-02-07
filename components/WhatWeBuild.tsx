
import React from 'react';
import { Cpu, Database, Fingerprint, Zap, Bot, ShieldAlert, Scale, Radio, Box } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhatWeBuild: React.FC = () => {
  const { t, language } = useLanguage();

  const getMechanismData = (index: number) => {
    const dataEn = [
      {
        title: 'Regulatory Intelligence Pipeline',
        description: 'Convert complex compliance and regulatory shifts (EPC ratings, urban planning delta) into motivated-seller pipelines. 14-30 day lead time advantage.',
        id: "MECH-01",
        icon: <Scale className="w-8 h-8" />
      },
      {
        title: 'Executive Sentiment Analysis',
        description: 'Detect subtle capital shifts and liquidity movements through tonal dissonance analysis of earnings calls and CEO briefings. Predict alpha before news breaks.',
        id: "MECH-02",
        icon: <Radio className="w-8 h-8" />
      }
    ];

    const dataFr = [
      {
        title: 'Pipeline d\'Intelligence Réglementaire',
        description: 'Transformez les changements réglementaires complexes (DPE, delta urbanisme) en pipelines de vendeurs motivés. Avantage de 14-30 jours.',
        id: "MECH-01",
        icon: <Scale className="w-8 h-8" />
      },
      {
        title: 'Analyse de Sentiment Exécutif',
        description: 'Détectez les mouvements subtils de capital et de liquidité via l\'analyse de dissonance tonale des appels de résultats. Prédisez l\'alpha avant les médias.',
        id: "MECH-02",
        icon: <Radio className="w-8 h-8" />
      }
    ];

    return language === 'en' ? dataEn[index] : dataFr[index];
  };

  const getProductData = (index: number) => {
    const productsEn = [
      {
        title: "Your Private AI Core",
        description: "Replace ChatGPT, Jasper, and Copy.ai with one system trained on YOUR business. Your documents, your tone, your processes. Zero monthly fees after deployment.",
        icon: <Fingerprint className="w-8 h-8" />
      },
      {
        title: "Flexible Compute Layers",
        description: "Don't want to manage hardware? We deploy on isolated private cloud infrastructure. Want complete air-gapping? We architect on-premise clusters.",
        icon: <Cpu className="w-8 h-8" />
      },
      {
        title: "Intelligence Pipelines",
        description: "Connect your CRM, ERP, and document repositories. Your AI learns from every customer interaction and every internal decision automatically.",
        icon: <Database className="w-8 h-8" />
      }
    ];

    const productsFr = [
      {
        title: "Votre Cœur IA Privé",
        description: "Remplacez ChatGPT, Jasper et Copy.ai par un système unique entraîné sur VOTRE entreprise. Vos documents, votre ton, vos processus.",
        icon: <Fingerprint className="w-8 h-8" />
      },
      {
        title: "Couches de Calcul Flexibles",
        description: "Pas envie de gérer du matériel ? Nous déployons sur une infrastructure cloud privée isolée. Besoin d'un air-gap total ? Nous architecturons sur site.",
        icon: <Cpu className="w-8 h-8" />
      },
      {
        title: "Pipelines d'Intelligence",
        description: "Connectez votre CRM, ERP et dépôts de documents. Votre IA apprend de chaque interaction client et chaque décision interne automatiquement.",
        icon: <Database className="w-8 h-8" />
      }
    ];

    return language === 'en' ? productsEn[index] : productsFr[index];
  };

  return (
    <section id="infrastructure" className="py-48 px-6 bg-slate-50 border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mb-32 space-y-10">
          <div className="text-blue-600 font-black uppercase tracking-[0.5em] text-sm">
            {language === 'en' ? 'The Architecture of Ownership' : 'L\'Architecture de la Propriété'}
          </div>
          <h3 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
            {language === 'en' ? 'Build Your ' : 'Bâtissez Votre '} <br />
            <span className="text-blue-700">{language === 'en' ? 'Private Core.' : 'Cœur Privé.'}</span>
          </h3>
          <p className="text-3xl text-slate-500 font-medium leading-relaxed">
            {language === 'en' 
              ? "We don't sell subscriptions. We architect Intelligence Infrastructure as a capital asset—built for sub-second performance and absolute data sovereignty."
              : "Nous ne vendons pas d'abonnements. Nous architecturons l'Infrastructure d'Intelligence comme un actif capital — conçu pour la performance et la souveraineté."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Products */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1, 2].map((idx) => {
              const data = getProductData(idx);
              return (
                <div key={idx} className="bg-white p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-blue-700/10 transition-all group">
                  <div className="w-16 h-16 border-4 border-black flex items-center justify-center mb-10 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                    {data.icon}
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">{data.title}</h4>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    {data.description}
                  </p>
                </div>
              );
            })}
            
            {/* Mechanisms (Merged from InfrastructureGrid) */}
            {[0, 1].map((idx) => {
              const mech = getMechanismData(idx);
              return (
                <div key={idx} className="bg-slate-100/50 p-12 border-4 border-black border-dashed group">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 border-4 border-black flex items-center justify-center text-slate-900 bg-white group-hover:bg-blue-700 group-hover:text-white transition-all">
                      {mech.icon}
                    </div>
                    <div className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">{mech.id}</div>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">{mech.title}</h4>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                    {mech.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Economics Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 p-12 border-4 border-black flex flex-col h-full justify-between text-white shadow-[12px_12px_0px_0px_rgba(0,51,255,0.2)]">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-blue-400">
                  <ShieldAlert className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">{t.build.opex}</span>
                </div>
                <h4 className="text-4xl font-black uppercase leading-[0.9]">{t.build.growth}</h4>
                <div className="space-y-8 pt-6">
                  <div className="space-y-1">
                    <div className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.build.minInv}</div>
                    <div className="text-3xl font-black text-white">€75K – €150K</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.build.roi}</div>
                    <div className="text-2xl font-black text-blue-400">{t.build.payback}</div>
                  </div>
                  <div className="pt-4 space-y-3 text-sm text-slate-400 font-bold uppercase tracking-widest">
                    <p>• {t.build.timeline}</p>
                    <p>• {t.build.opt}</p>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-slate-800">
                <div className="text-xs font-mono font-black text-slate-500 uppercase mb-2">{t.build.avgSave}</div>
                <div className="text-2xl font-black text-green-400">€43,000 / YEAR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
