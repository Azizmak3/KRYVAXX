
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Loader2, UserCheck, Calculator, ShieldAlert, XCircle, FileText, Lock, Activity } from 'lucide-react';
import UseCaseExplorer from './UseCaseExplorer';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioProps {onOpenScan: () => void;}

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

const Portfolio: React.FC<PortfolioProps> = ({ onOpenScan }) => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qualificationStatus, setQualificationStatus] = useState<'IDLE' | 'QUALIFYING' | 'UNQUALIFIED' | 'SUCCESS'>('IDLE');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    spend: '',
    role: '',
    capital: 'No',
    timeline: 'Exploring'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQualify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      const isRevenueQualified = formData.revenue !== '' && formData.revenue !== '<€100K';
      const isCapitalQualified = ['Yes', 'Maybe'].includes(formData.capital);
      const isDecisionMaker = ['Founder/CEO', 'CFO', 'CTO/COO', 'C-Suite'].includes(formData.role);

      if (isRevenueQualified && isCapitalQualified && isDecisionMaker) {
        setQualificationStatus('SUCCESS');
      } else {
        setQualificationStatus('UNQUALIFIED');
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
          <UseCaseExplorer />
          
          <div className="space-y-6">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
              {language === 'en' 
                ? "“These outcomes are not projections. They are audited post-deployment results.”"
                : "« Ces résultats ne sont pas des projections. Ce sont des résultats audités après déploiement. »"}
            </div>
            
            {/* Signal Feed Table (Merged) */}
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
                    <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">{t.portfolio.blueprint.form.protocol}</h2>
                  </div>
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-[0.5em] font-black">{t.portfolio.blueprint.form.sub}</p>
                </div>
                <form onSubmit={handleQualify} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{t.portfolio.blueprint.form.revBand}</label>
                    <select required name="revenue" value={formData.revenue} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black">
                      <option value="">{t.portfolio.blueprint.form.sel}</option>
                      <option value="<€100K">{t.portfolio.blueprint.form.under}</option>
                      <option value="€100K-€500K">€100K–€500K</option>
                      <option value="€500K-€2M">€500K–€2M</option>
                      <option value="€2M-€10M">€2M–€10M</option>
                      <option value="€10M+">€10M+</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{t.portfolio.blueprint.form.monthly}</label>
                    <input required name="spend" placeholder="e.g. €3,000" value={formData.spend} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{t.portfolio.blueprint.form.cap}</label>
                    <select required name="capital" value={formData.capital} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black">
                      <option value="No">{t.portfolio.blueprint.form.notYet}</option>
                      <option value="Maybe">{t.portfolio.blueprint.form.maybe}</option>
                      <option value="Yes">{t.portfolio.blueprint.form.ready}</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase">{t.portfolio.blueprint.form.role}</label>
                    <select required name="role" value={formData.role} onChange={handleInputChange} className="w-full bg-slate-800 border-4 border-slate-700 p-8 text-white text-xl font-black">
                      <option value="">{t.portfolio.blueprint.form.selRole}</option>
                      <option value="Founder/CEO">Founder / CEO</option>
                      <option value="CFO">CFO</option>
                      <option value="CTO/COO">CTO / COO</option>
                      <option value="C-Suite">Other C-Suite</option>
                      <option value="DeptHead">Department Head</option>
                      <option value="Other">Other (Audit Required)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 pt-10">
                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full bg-white text-black py-14 text-2xl font-black uppercase tracking-[0.5em] hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center space-x-10 shadow-[24px_24px_0px_0px_rgba(0,0,0,0.4)]"
                    >
                      {isSubmitting ? <Loader2 className="w-12 h-12 animate-spin" /> : <span>{t.portfolio.blueprint.form.verify}</span>}
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
              <div className="text-center py-24 space-y-12 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-32 h-32 text-green-500 mx-auto" />
                <h2 className="text-7xl font-black tracking-tighter uppercase leading-none">{t.portfolio.blueprint.success.title}</h2>
                <p className="text-slate-400 text-3xl max-w-2xl mx-auto">{t.portfolio.blueprint.success.desc}</p>
                <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                  <div className="bg-slate-800 p-8 border-4 border-slate-700">
                    <div className="text-[10px] font-black uppercase text-blue-400 mb-2">{t.portfolio.blueprint.success.next}</div>
                    <div className="text-xl font-black uppercase">{t.portfolio.blueprint.success.step}</div>
                  </div>
                  <div className="bg-slate-800 p-8 border-4 border-slate-700">
                    <div className="text-[10px] font-black uppercase text-blue-400 mb-2">{t.portfolio.blueprint.success.timeline}</div>
                    <div className="text-xl font-black uppercase">{t.portfolio.blueprint.success.time}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
