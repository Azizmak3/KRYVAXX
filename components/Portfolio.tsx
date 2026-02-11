
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Loader2, UserCheck, Activity, ShieldAlert, XCircle } from 'lucide-react';
import UseCaseExplorer from './UseCaseExplorer';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioProps {
  onOpenScan: () => void;
  onSuccess?: () => void;
}

const signals = [
  {
    id: "FND-001",
    source: "CONSTRUCTION / PARIS",
    trigger: "Proposal Generation Automation",
    alpha: "€33.6K SAVINGS",
    window: "12–18 month window",
    sector: "CONSTRUCTION"
  },
  {
    id: "FND-002",
    source: "LEGAL PRACTICE / LYON",
    trigger: "Document Intelligence",
    alpha: "€50.4K SAVINGS",
    window: "18–24 month window",
    sector: "LEGAL SERVICES"
  },
  {
    id: "FND-003",
    source: "E-COMMERCE / MARSEILLE",
    trigger: "Customer Sentiment Analysis",
    alpha: "€85.2K SAVINGS",
    window: "24–36 month window",
    sector: "E-COMMERCE"
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ onOpenScan, onSuccess }) => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qualificationStatus, setQualificationStatus] = useState<'IDLE' | 'QUALIFYING' | 'UNQUALIFIED' | 'SUCCESS'>('IDLE');
  
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    company: '',
    revenue: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQualify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Basic qualification check (can be expanded)
      const isQualified = formData.revenue !== '€2M-€5M' && formData.revenue !== '' && formData.company.length > 2;
      
      if (onSuccess) {
        onSuccess();
      } else {
         setQualificationStatus('SUCCESS');
      }
    }, 1500);
  };

  return (
    <section id="verticals" className="py-56 px-6 bg-white border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center space-x-5 text-blue-700 font-black uppercase tracking-[0.6em] text-sm">
              <UserCheck className="w-7 h-7" />
              <span>{language === 'en' ? 'Operational Benchmarks' : 'Indicateurs Opérationnels'}</span>
            </div>
            <h3 className="text-7xl sm:text-9xl font-black text-slate-900 tracking-tighter uppercase leading-[0.8]">
              {t.portfolio.title.split(' ').map((word, i) => i === t.portfolio.title.split(' ').length - 1 ? <><br key={i} /><span className="text-blue-700">{word}</span></> : word + ' ')}
            </h3>
            <p className="text-3xl text-slate-500 font-medium leading-relaxed max-w-5xl">
              {language === 'en' 
                ? "NEURAL-FABRIC infrastructure is reserved for entities where €100K in capital assets creates €300K+ in 5-year savings."
                : "L'infrastructure NEURAL-FABRIC est réservée aux entités où 100K€ d'actifs créent +300K€ d'économies sur 5 ans."}
            </p>
          </div>
          <div className="lg:col-span-4 pt-10">
            <div className="border-4 border-black p-12 bg-slate-50 space-y-8">
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">{t.portfolio.req}</div>
              <div className="space-y-4">
                {t.portfolio.reqItems.map((item, i) => (
                  <div key={i} className="text-xl font-black uppercase tracking-tight leading-none">• {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Unified social proof block */}
        <div className="mb-40 space-y-20">
          <div className="space-y-6">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
              {language === 'en' 
                ? "“These outcomes are not projections. They are audited post-deployment results.”"
                : "« Ces résultats ne sont pas des projections. Ce sont des résultats audités après déploiement. »"}
            </div>
            
            {/* Signal Feed Table */}
            <div className="border-4 border-black overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,51,255,0.05)]">
              <div className="p-8 bg-slate-900 text-white flex justify-between items-center border-b-4 border-black">
                <div className="flex items-center space-x-4">
                  <Activity className="w-6 h-6 text-blue-400" />
                  <span className="text-sm font-black uppercase tracking-widest">{language === 'en' ? 'Live Outcome Stream' : 'Flux de Résultats en Direct'}</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">VERIFIED_NODE_OUTPUT // JURISDICTION: FRANCE</div>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table w-full">
                  <thead className="bg-slate-50">
                    <tr className="text-left">
                      <th className="p-6 text-xs font-black uppercase tracking-widest">{t.signals.tableHeaders.jurisdiction}</th>
                      <th className="p-6 text-xs font-black uppercase tracking-widest">{t.signals.tableHeaders.trigger}</th>
                      <th className="p-6 text-xs font-black uppercase tracking-widest text-center">{t.signals.tableHeaders.potential}</th>
                      <th className="p-6 text-xs font-black uppercase tracking-widest text-right">{t.signals.tableHeaders.sector}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-slate-100 font-mono">
                    {signals.map((signal, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-6 font-black text-slate-900 uppercase">{signal.source}</td>
                        <td className="p-6 text-slate-500 font-bold">{signal.trigger}</td>
                        <td className="p-6 text-center">
                          <div className="text-blue-700 font-black text-2xl leading-tight">{signal.alpha}</div>
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{signal.window}</div>
                        </td>
                        <td className="p-6 text-right">
                          <span className="text-[10px] font-black px-4 py-2 bg-black text-white uppercase">{signal.sector}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div id="blueprint" className="bg-slate-900 text-white p-32 lg:p-48 relative overflow-hidden border-t-[16px] border-blue-700 shadow-3xl">
          <div className="max-w-6xl mx-auto">
            {qualificationStatus === 'IDLE' ? (
              <div className="space-y-24">
                <div className="space-y-12">
                  <div className="text-blue-400 font-black uppercase tracking-[0.6em] text-sm">{t.portfolio.blueprint.label}</div>
                  <h2 className="text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.75] mb-12">
                    {t.portfolio.blueprint.title.split(' ').map((word, i) => i === t.portfolio.blueprint.title.split(' ').length - 1 ? <><br key={i} />{word}</> : word + ' ')}
                  </h2>
                  <p className="text-slate-400 text-4xl font-light leading-snug max-w-4xl">
                    {t.portfolio.blueprint.description}
                  </p>
                </div>
                <button 
                  onClick={() => setQualificationStatus('QUALIFYING')}
                  className="bg-blue-600 text-white px-24 py-12 text-2xl font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]"
                >
                  {t.portfolio.blueprint.initiate}
                </button>
              </div>
            ) : qualificationStatus === 'QUALIFYING' ? (
              <div className="space-y-20 animate-in slide-in-from-bottom-12 duration-700">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-blue-400">
                    <ShieldAlert className="w-8 h-8" />
                    <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">
                      {language === 'en' ? 'LEAD CAPTURE PROTOCOL' : 'PROTOCOLE D\'ENREGISTREMENT'}
                    </h2>
                  </div>
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-[0.5em] font-black">{t.portfolio.blueprint.form.sub}</p>
                </div>
                <form onSubmit={handleQualify} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{language === 'en' ? 'Last Name' : 'Nom'}</label>
                    <input required name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black" placeholder="EX: DUPONT" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{language === 'en' ? 'First Name' : 'Prénom'}</label>
                    <input required name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black" placeholder="EX: JEAN" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{language === 'en' ? 'Professional Email' : 'Email Professionnel'}</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black" placeholder="jean.dupont@societe.com" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{language === 'en' ? 'Phone' : 'Téléphone'}</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black" placeholder="06 12 34 56 78" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{language === 'en' ? 'Company' : 'Société'}</label>
                    <input required name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black" placeholder="EX: KRYVAX IMMOBILIER" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{language === 'en' ? 'Annual Revenue' : 'CA Annuel'}</label>
                    <select required name="revenue" value={formData.revenue} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black">
                      <option value="">{t.portfolio.blueprint.form.sel}</option>
                      <option value="€2M-€5M">€2M – €5M</option>
                      <option value="€5M-€10M">€5M – €10M</option>
                      <option value="€10M-€20M">€10M – €20M</option>
                      <option value="€20M+">€20M+</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 pt-10">
                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full bg-white text-black py-14 text-2xl font-black uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center space-x-10 shadow-[24px_24px_0px_0px_rgba(0,0,0,0.4)]"
                    >
                      {isSubmitting ? <Loader2 className="w-12 h-12 animate-spin" /> : <span>{language === 'en' ? 'BOOK TECHNICAL AUDIT (30 MIN)' : 'RÉSERVER AUDIT TECHNIQUE (30 MIN)'}</span>}
                      {!isSubmitting && <ArrowRight className="w-12 h-12" />}
                    </button>
                  </div>
                </form>
              </div>
            ) : qualificationStatus === 'UNQUALIFIED' ? (
              <div className="text-center py-24 space-y-12 animate-in zoom-in duration-500">
                <XCircle className="w-32 h-32 text-red-500 mx-auto" />
                <h2 className="text-7xl font-black tracking-tighter uppercase leading-none">{t.portfolio.blueprint.unqualified.title}</h2>
                <p className="text-slate-400 text-3xl max-w-2xl mx-auto leading-relaxed">
                  {t.portfolio.blueprint.unqualified.desc}
                </p>
                <div className="flex justify-center gap-8">
                  <button onClick={() => setQualificationStatus('IDLE')} className="bg-blue-600 px-16 py-8 text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">{t.portfolio.blueprint.unqualified.btn}</button>
                </div>
              </div>
            ) : (
              // Success state is now handled by parent App.tsx showing ThankYou component, 
              // but keeping this as fallback or if onPage behavior is preferred.
              <div className="text-center py-24 space-y-12 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-32 h-32 text-green-500 mx-auto" />
                <h2 className="text-7xl font-black tracking-tighter uppercase leading-none">{t.portfolio.blueprint.success.title}</h2>
                <p className="text-slate-400 text-3xl max-w-2xl mx-auto">{t.portfolio.blueprint.success.desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
