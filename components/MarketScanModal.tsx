
import React, { useState, useEffect } from 'react';
import { X, Search, Loader2, Target, Clock, ArrowRight, Shield, CheckCircle2, BarChart2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ScanStep = 'INPUT' | 'SCANNING' | 'RESULTS' | 'SUCCESS';

interface MarketScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MarketScanModal: React.FC<MarketScanModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [step, setStep] = useState<ScanStep>('INPUT');
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    city: 'Paris',
    assetType: 'Finance',
    email: ''
  });

  const scanLogsEn = [
    "Establishing encrypted node connection...",
    "Querying liquidation registries (BODACC/HM Land)...",
    "Fetching Energy Performance data for jurisdiction...",
    "Correlating probate timelines with asset addresses...",
    "Synthesizing information asymmetry score...",
    "Compiling preliminary infrastructure audit..."
  ];

  const scanLogsFr = [
    "Établissement d'une connexion sécurisée...",
    "Interrogation des registres de liquidation (BODACC)...",
    "Récupération des données DPE pour la zone...",
    "Corrélation des délais de succession...",
    "Synthèse du score d'asymétrie d'information...",
    "Compilation de l'audit d'infrastructure préliminaire..."
  ];

  const scanLogs = language === 'en' ? scanLogsEn : scanLogsFr;

  useEffect(() => {
    if (step === 'SCANNING') {
      let logIndex = 0;
      const logInterval = setInterval(() => {
        if (logIndex < scanLogs.length) {
          setLogs(prev => [...prev, scanLogs[logIndex]]);
          logIndex++;
          setProgress((logIndex / scanLogs.length) * 100);
        } else {
          clearInterval(logInterval);
          setTimeout(() => setStep('RESULTS'), 800);
        }
      }, 700);
      return () => clearInterval(logInterval);
    }
  }, [step]);

  const handleRunScan = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('SCANNING');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-3xl bg-white border border-gray-300 shadow-2xl animate-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-black transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="p-12 md:p-16">
          {step === 'INPUT' && (
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-700">
                  <BarChart2 className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{language === 'en' ? 'Sovereignty Verification Audit' : 'Audit de Vérification de Souveraineté'}</span>
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tighter uppercase">{language === 'en' ? 'Infrastructure Audit' : 'Audit d\'Infrastructure'}</h2>
                <p className="text-slate-500 text-sm font-light">{language === 'en' ? 'Quantify the efficiency gains and information asymmetries missing from your pipeline.' : 'Quantifiez les gains d\'efficacité et les asymétries d\'information manquantes dans votre pipeline.'}</p>
              </div>

              <form onSubmit={handleRunScan} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{language === 'en' ? 'Jurisdiction' : 'Juridiction'}</label>
                  <select value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-gray-50 border border-gray-200 p-4 text-black outline-none focus:border-blue-600 appearance-none text-sm font-bold">
                    <option value="Paris">Paris, FR</option>
                    <option value="Lyon">Lyon, FR</option>
                    <option value="London">London, UK</option>
                    <option value="NYC">New York, US</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{language === 'en' ? 'Industrial Sector' : 'Secteur Industriel'}</label>
                  <select value={formData.assetType} onChange={e => setFormData({...formData, assetType: e.target.value})} className="w-full bg-gray-50 border border-gray-200 p-4 text-black outline-none focus:border-blue-600 appearance-none text-sm font-bold">
                    <option value="Finance">{language === 'en' ? 'Institutional Finance' : 'Finance Institutionnelle'}</option>
                    <option value="RealEstate">{language === 'en' ? 'Industrial Real Estate' : 'Immobilier Industriel'}</option>
                    <option value="Logistics">{language === 'en' ? 'Global Logistics' : 'Logistique Mondiale'}</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{language === 'en' ? 'Firm Email Address' : 'Adresse Email Professionnelle'}</label>
                  <input required type="email" placeholder="principal@firm.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 p-4 text-black outline-none focus:border-blue-600 text-sm font-bold" />
                </div>
                <button type="submit" className="sm:col-span-2 btn-institutional py-6 flex items-center justify-center space-x-3">
                  <span>{language === 'en' ? 'Initiate Briefing Scan' : 'Lancer le Scan de Briefing'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {step === 'SCANNING' && (
            <div className="space-y-12 py-10">
              <div className="flex flex-col items-center justify-center text-center space-y-8">
                <Loader2 className="w-12 h-12 text-blue-700 animate-spin" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-slate-900 uppercase">{language === 'en' ? 'Auditing' : 'Audit du Nœud'} {formData.city}</h2>
                  <p className="text-slate-400 font-mono tracking-widest text-[9px] uppercase">{language === 'en' ? 'Encrypted Infrastructure Mapping in Progress' : 'Cartographie d\'Infrastructure Chiffrée en Cours'}</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-100 h-px">
                <div className="h-full bg-blue-700 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 font-mono text-[10px] text-slate-500 h-48 overflow-y-auto space-y-2">
                {logs.map((log, i) => (
                  <div key={i} className="flex space-x-3">
                    <span className="opacity-40">[{new Date().toLocaleTimeString()}]</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'RESULTS' && (
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 border border-gray-200 p-10">
                <div className="shrink-0 text-center md:text-left">
                  <div className="text-black font-mono text-7xl font-bold leading-none">92%</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mt-2">{language === 'en' ? 'Information Gap' : 'Fossé d\'Information'}</div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">{language === 'en' ? 'Systemic Dependency Alert' : 'Alerte de Dépendance Systémique'}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    {language === 'en' 
                      ? <>Our initial audit identifies <span className="text-black font-bold">significant information asymmetry</span> in the {formData.city} sector. You are currently aware of less than 8% of the liquidity signals we track.</>
                      : <>Notre audit identifie une <span className="text-black font-bold">asymétrie d\'information significative</span> dans le secteur de {formData.city}. Vous ne voyez actuellement que 8% des signaux que nous suivons.</>
                    }
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setStep('SUCCESS')}
                className="btn-institutional w-full py-6"
              >
                {language === 'en' ? 'Access Technical Report' : 'Accéder au Rapport Technique'}
              </button>
            </div>
          )}

          {step === 'SUCCESS' && (
            <div className="text-center py-10 space-y-10 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tighter uppercase">{language === 'en' ? 'Audit Compiled' : 'Audit Compilé'}</h2>
                <p className="text-slate-500 text-sm font-light max-w-sm mx-auto leading-relaxed">
                  {language === 'en' 
                    ? 'The infrastructure coverage audit is ready. Verification of firm entity required to establish secure briefing uplink.'
                    : 'L\'audit de couverture est prêt. La vérification de l\'entité est requise pour établir un lien de briefing sécurisé.'
                  }
                </p>
              </div>
              <button 
                onClick={() => {
                  onClose();
                  window.location.href='#blueprint';
                }} 
                className="btn-institutional px-12 py-5"
              >
                {language === 'en' ? 'Schedule Technical Briefing' : 'Planifier le Briefing Technique'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketScanModal;
