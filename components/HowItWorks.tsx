
import React from 'react';
import { Search, Server, BrainCircuit, Cable, TrendingUp, Cpu, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t, language } = useLanguage();

  const getStepData = (index: number) => {
    const stepsEn = [
      {
        title: "Intelligence Audit",
        subtitle: "PHASE 01",
        description: "We map your current AI tool spend and identify consolidation opportunities. Deliverable: Your AI Sovereignty Blueprint (90-page technical report).",
      },
      {
        title: "Infrastructure Setup",
        subtitle: "PHASE 02",
        description: "We deploy your private AI core—typically private cloud (AWS/GCP VPC)—isolated from public networks. Zero shared infrastructure with other tenants.",
      },
      {
        title: "Proprietary Training",
        subtitle: "PHASE 03",
        description: "Custom models are fine-tuned on your internal documents, email history, and SOPs. Your system learns how your specific business operates.",
      },
      {
        title: "Pipeline Integration",
        subtitle: "PHASE 04",
        description: "Connect the core to your CRM (Salesforce/Hubspot) and ERP. Automated ingestion begins, turning daily operations into proprietary intelligence.",
      },
      {
        title: "Continuous Evolution",
        subtitle: "PHASE 05",
        description: "Unlike SaaS tools that improve for everyone, your system gets smarter specifically for YOUR business. Your moat widens with every interaction.",
      }
    ];

    const stepsFr = [
      {
        title: "Audit d'Intelligence",
        subtitle: "PHASE 01",
        description: "Nous cartographions vos dépenses en outils IA et identifions les opportunités de consolidation. Livrable : Blueprint de Souveraineté IA.",
      },
      {
        title: "Mise en place Infra",
        subtitle: "PHASE 02",
        description: "Nous déployons votre cœur IA privé — généralement sur un VPC cloud privé (AWS/GCP) — isolé des réseaux publics. Zéro infrastructure partagée.",
      },
      {
        title: "Entraînement Propriétaire",
        subtitle: "PHASE 03",
        description: "Des modèles personnalisés sont affinés sur vos documents internes, historiques d'emails et processus. Votre système apprend comment VOTRE entreprise opère.",
      },
      {
        title: "Intégration de Pipeline",
        subtitle: "PHASE 04",
        description: "Connectez le cœur à votre CRM et ERP. L'ingestion automatisée commence, transformant les opérations quotidiennes en intelligence propriétaire.",
      },
      {
        title: "Évolution Continue",
        subtitle: "PHASE 05",
        description: "Contrairement aux outils SaaS qui s'améliorent pour tout le monde, votre système devient plus intelligent spécifiquement pour VOTRE entreprise.",
      }
    ];

    return language === 'en' ? stepsEn[index] : stepsFr[index];
  };

  const icons = [<FileText className="w-10 h-10" />, <Cpu className="w-10 h-10" />, <BrainCircuit className="w-10 h-10" />, <Cable className="w-10 h-10" />, <TrendingUp className="w-10 h-10" />];

  return (
    <section className="py-48 px-6 bg-white border-b-4 border-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl space-y-10">
            <div className="text-blue-600 font-black uppercase tracking-[0.5em] text-sm">{language === 'en' ? 'Deployment Lifecycle' : 'Cycle de Déploiement'}</div>
            <h3 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              {language === 'en' ? 'The Lifecycle ' : 'Le Cycle de '} <br />
              <span className="text-blue-700">{language === 'en' ? 'of Ownership.' : 'la Propriété.'}</span>
            </h3>
          </div>
          <p className="text-2xl text-slate-500 font-medium max-w-xl pb-4">
            {language === 'en' 
              ? <>A surgical transformation from rented third-party services to <span className="text-black font-black">owned capital assets</span>.</>
              : <>Une transformation chirurgicale des services tiers loués vers des <span className="text-black font-black">actifs capitalisés possédés</span>.</>
            }
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {[0, 1, 2, 3, 4].map((idx) => {
              const data = getStepData(idx);
              return (
                <div key={idx} className="relative space-y-8 group">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 border-4 border-black flex items-center justify-center bg-white text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                      {icons[idx]}
                    </div>
                    <div className="lg:hidden text-2xl font-black text-slate-200 font-mono">{data.subtitle}</div>
                  </div>
                  <div className="space-y-4">
                    <div className="hidden lg:block text-sm font-black text-blue-600 font-mono">{data.subtitle}</div>
                    <h4 className="text-2xl font-black uppercase tracking-tight leading-none">{data.title}</h4>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
