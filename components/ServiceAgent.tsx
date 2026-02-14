
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Calculator, AlertTriangle } from 'lucide-react';
import { chatWithArchitect } from '../services/gemini';
import { useLanguage } from '../context/LanguageContext';
import ReactMarkdown from 'react-markdown';

const ServiceAgent: React.FC = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Add a small delay to ensure DOM update is complete
    const timeoutId = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [messages, hasInteracted, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setLoading(true);
    setHasInteracted(true);
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    try {
      const response = await chatWithArchitect(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response || "System offline." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "CONNECTION_ERROR\n\nUplink unstable. Please verify your capital deployment capacity manually." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Function to extract data from history and initiate audit
  const initiateAudit = () => {
    // Basic extraction logic based on expected conversation flow
    const userMsgs = messages.filter(m => m.role === 'user');
    const extractNumber = (text: string) => text.match(/\d+([.,]\d+)?/)?.[0]?.replace(',', '.') || '0';

    const cycle = userMsgs.length > 0 ? extractNumber(userMsgs[0].text) : '0';
    const cost = userMsgs.length > 1 ? extractNumber(userMsgs[1].text) : '0';
    const projects = userMsgs.length > 2 ? extractNumber(userMsgs[2].text) : '0';
    
    // Calculate derived metrics for the form
    const cycleNum = Number(cycle);
    const costNum = Number(cost);
    const projectsNum = Number(projects);
    const friction = cycleNum * costNum * projectsNum;
    
    // Store in session storage
    sessionStorage.setItem('terminalData', JSON.stringify({
      cycleDuration: cycle,
      carryingCost: cost,
      numberOfProjects: projects,
      calculatedFriction: friction
    }));

    // Navigate to form
    const element = document.getElementById('blueprint');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="terminal" className="py-16 lg:py-48 px-6 bg-white border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Copy */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="flex items-center space-x-4 text-blue-600 font-black uppercase tracking-[0.3em] text-xs sm:text-sm bg-blue-50 w-fit px-4 py-2 border border-blue-100">
              <Calculator className="w-5 h-5" />
              <span>{language === 'en' ? 'Deployment Consultation Node' : 'Nœud de Consultation Déploiement'}</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl lg:text-[100px] font-black text-slate-900 tracking-tighter uppercase leading-[0.9] lg:leading-[0.8]">
              {language === 'en' ? 'Audit Your ' : 'Auditez Votre '}<br />
              <span className="text-blue-600">{language === 'en' ? 'Sales Cycle.' : 'Cycle de Vente.'}</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
              {language === 'en' 
                ? "Reserved for established developers. We help you quantify the arbitrage of automated decision making versus manual waiting."
                : "Réservé aux promoteurs établis. Nous vous aidons à quantifier l'arbitrage de la prise de décision automatisée versus l'attente manuelle."}
            </p>

            <div className="pt-12 border-t-4 border-black space-y-6">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Infrastructure Faculty</div>
              <div className="space-y-4">
                 <div className="flex items-center space-x-3 text-slate-900 font-bold text-sm uppercase tracking-widest">
                   <div className="w-3 h-3 bg-blue-600 rounded-none" />
                   <span>{language === 'en' ? 'Map Current Sales Velocity' : 'Cartographier Vélocité de Vente'}</span>
                 </div>
                 <div className="flex items-center space-x-3 text-slate-900 font-bold text-sm uppercase tracking-widest">
                   <div className="w-3 h-3 bg-blue-600 rounded-none" />
                   <span>{language === 'en' ? 'Project 12-Month Carrying Costs' : 'Projeter Coûts de Portage 12 Mois'}</span>
                 </div>
                 <div className="flex items-center space-x-3 text-slate-900 font-bold text-sm uppercase tracking-widest">
                   <div className="w-3 h-3 bg-blue-600 rounded-none" />
                   <span>{language === 'en' ? 'Calculate Automation ROI' : 'Calculer ROI Automatisation'}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10 relative">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b-4 border-black bg-white">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-xs font-mono font-black uppercase tracking-widest text-slate-900">
                    TERMINAL: CYCLE_AUDIT_2026
                  </span>
                </div>
                <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full border-2 border-slate-300"></div>
                   <div className="w-3 h-3 rounded-full border-2 border-slate-300"></div>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="h-[400px] sm:h-[500px] flex flex-col relative overflow-hidden bg-slate-50 max-h-[80vh]">
                {!hasInteracted ? (
                  /* Initial Protocol State */
                  <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-center animate-in fade-in duration-500">
                    <div className="border-4 border-black bg-white p-6 sm:p-10 space-y-6 sm:space-y-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                      <div className="flex items-center space-x-3 text-blue-600 border-b-2 border-blue-100 pb-4">
                        <AlertTriangle className="w-6 h-6" />
                        <h3 className="text-lg sm:text-xl font-black uppercase tracking-widest">
                          {language === 'en' ? 'QUALIFICATION PROTOCOL' : 'PROTOCOLE DE QUALIFICATION'}
                        </h3>
                      </div>
                      <div className="space-y-6 text-sm sm:text-base font-bold text-slate-700 leading-relaxed font-mono">
                        <p>
                          {language === 'en' 
                            ? "At KRYVAX, we do not sell leads. We engineer Intelligence Infrastructure."
                            : "Chez KRYVAX, nous ne vendons pas de leads. Nous ingénions une Infrastructure d'Intelligence."}
                        </p>
                        <p>
                          {language === 'en'
                            ? "I require two data points to proceed:"
                            : "J'ai besoin de deux points de données :"}
                        </p>
                        <ul className="space-y-3 pl-4 border-l-4 border-slate-200">
                          <li>1. {language === 'en' ? 'Current Sales Cycle Length' : 'Durée Cycle de Vente'}</li>
                          <li>2. {language === 'en' ? 'Monthly Carrying Cost' : 'Coût Mensuel de Portage'}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Chat History State */
                  <div 
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 scrollbar-hide"
                  >
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-4 sm:p-5 border-2 text-sm font-mono font-bold leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] ${
                          msg.role === 'user' 
                            ? 'bg-blue-600 text-white border-blue-800' 
                            : 'bg-white text-black border-black'
                        }`}>
                          {msg.role === 'model' ? (
                            <ReactMarkdown 
                              components={{
                                strong: ({node, ...props}) => <span className="font-black uppercase bg-yellow-200 px-1 text-black" {...props} />,
                                ul: ({node, ...props}) => <ul className="list-disc pl-4 space-y-1 mt-2" {...props} />,
                                li: ({node, ...props}) => <li className="" {...props} />,
                                p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                a: ({node, ...props}) => (
                                  <a 
                                    {...props} 
                                    className="text-blue-600 underline decoration-2 underline-offset-4 hover:text-blue-800 transition-colors cursor-pointer bg-white px-1"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (props.href === '#blueprint') {
                                        initiateAudit();
                                      } else {
                                        // Standard link handling
                                        const href = props.href;
                                        if (href && href.startsWith('#')) {
                                          const element = document.getElementById(href.substring(1));
                                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        } else if (href) {
                                          window.open(href, '_blank');
                                        }
                                      }
                                    }}
                                  />
                                )
                              }}
                            >
                              {msg.text}
                            </ReactMarkdown>
                          ) : (
                            msg.text
                          )}
                        </div>
                      </div>
                    ))}
                    {loading && (
                       <div className="flex justify-start">
                         <div className="bg-white border-2 border-black p-4 flex items-center space-x-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                           <Loader2 className="w-4 h-4 animate-spin text-black" />
                           <span className="text-xs font-black uppercase text-slate-500 tracking-widest">COMPUTING...</span>
                         </div>
                       </div>
                    )}
                  </div>
                )}
                
                {/* Input Area */}
                <div className="mt-auto p-4 sm:p-6 bg-white border-t-4 border-black">
                  <div className="flex items-stretch space-x-0 shadow-[4px_4px_0px_0px_rgba(0,51,255,0.1)]">
                    <div className="flex-1 relative">
                       <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={t.terminal.placeholder}
                        className="w-full h-full bg-white border-2 border-r-0 border-blue-600 p-3 sm:p-4 pl-4 sm:pl-6 text-blue-900 font-mono text-sm font-bold focus:bg-blue-50 focus:outline-none placeholder:text-blue-300 transition-colors rounded-none"
                      />
                    </div>
                    <button 
                      onClick={handleSend}
                      disabled={loading || !input.trim()}
                      className="bg-blue-600 text-white px-4 sm:px-6 hover:bg-black transition-colors disabled:opacity-50 disabled:hover:bg-blue-600 border-2 border-blue-600"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-black bg-transparent -z-10" />
            <div className="hidden lg:block absolute -bottom-12 -left-12 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAgent;
