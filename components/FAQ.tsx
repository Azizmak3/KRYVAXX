
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getFaqs = () => {
    const faqsEn = [
      {
        question: "We're only at €200K revenue. Is this really for us?",
        answer: "It depends on your trajectory. If you're spending €15K+ annually on AI tools and have capital to deploy (€75K–€100K), the math works. The infrastructure scales with you: as you grow from €200K to €2M revenue, your NEURAL-FABRIC costs stay fixed while subscription costs would have quintupled. Book a diagnostic and we'll tell you honestly if the timing is right."
      },
      {
        question: "Can we finance the deployment investment?",
        answer: "Yes. We work with revenue-based financing partners who fund infrastructure for established firms with €500K+ revenue. Typical terms range from 24–36 months with revenue-based repayments. This often means paying similar monthly amounts to your current subscriptions while building equity in an owned asset."
      },
      {
        question: "What happens if our team grows significantly after deployment?",
        answer: "That's where ownership wins. In a subscription model, adding 10 employees adds €3K–€5K/month in variable cost. With NEURAL-FABRIC, adding users to your own private cluster adds zero marginal cost beyond minor compute scaling. Your infrastructure is an asset that gets more efficient as you scale."
      },
      {
        question: "How do you verify revenue and firm entity status?",
        answer: "For the diagnostic call, we take you at your word. For the paid audit (€15K–€25K), we require basic verification: bank statements, tax returns, or board documentation. This ensures we are only deploying for companies that are truly ready for institutional-grade infrastructure."
      },
      {
        question: "What's the difference between this and just using ChatGPT Enterprise?",
        answer: "Enterprise subscriptions are still high-OpEx rentals. You don't own the weights, the infrastructure, or the future roadmap. NEURAL-FABRIC gives you an air-gapped or private cloud environment where you own every bit. It's the difference between leasing a high-performance office and owning the entire building."
      }
    ];

    const faqsFr = [
      {
        question: "Nous ne sommes qu'à 200K€ de CA. Est-ce vraiment pour nous ?",
        answer: "Cela dépend de votre trajectoire. Si vous dépensez +15K€ par an en outils IA et avez du capital à déployer (75K€-100K€), le calcul fonctionne. L'infrastructure évolue avec vous : si vous passez de 200K€ à 2M€ de CA, vos coûts NEURAL-FABRIC restent fixes alors que vos abonnements auraient quintuplé. Réservez un diagnostic pour une réponse honnête."
      },
      {
        question: "Pouvons-nous financer l'investissement de déploiement ?",
        answer: "Oui. Nous travaillons avec des partenaires de financement basés sur les revenus (RBF) pour les entreprises de +500K€ de CA. Les durées types sont de 24 à 36 mois. Cela revient souvent à payer des mensualités similaires à vos abonnements actuels tout en bâtissant du capital dans un actif possédé."
      },
      {
        question: "Que se passe-t-il si notre équipe grandit après le déploiement ?",
        answer: "C'est là que la propriété gagne. Dans un modèle d'abonnement, ajouter 10 employés ajoute 3K€-5K€/mois de coût variable. Avec NEURAL-FABRIC, ajouter des utilisateurs à votre propre cluster privé n'ajoute aucun coût marginal au-delà d'une mise à l'échelle mineure du calcul. Votre infrastructure est un actif qui devient plus efficace avec l'échelle."
      },
      {
        question: "Comment vérifiez-vous le revenu et le statut de l'entité ?",
        answer: "Pour l'appel de diagnostic, nous vous croyons sur parole. Pour l'audit payant (15K€-25K€), nous exigeons une vérification de base : relevés bancaires, déclarations fiscales ou documents du conseil d'administration. Cela garantit que nous ne déployons que pour les entreprises réellement prêtes."
      },
      {
        question: "Quelle différence avec ChatGPT Enterprise ?",
        answer: "Les abonnements Enterprise sont toujours des locations à OpEx élevé. Vous ne possédez ni les poids, ni l'infrastructure, ni la feuille de route future. NEURAL-FABRIC vous donne un environnement cloud privé ou air-gapped dont vous possédez chaque bit. C'est la différence entre louer un bureau performant et posséder l'immeuble entier."
      }
    ];

    return language === 'en' ? faqsEn : faqsFr;
  };

  const faqs = getFaqs();

  return (
    <section className="py-48 px-6 bg-slate-50 border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="text-blue-600 font-black uppercase tracking-[0.5em] text-sm">{t.faq.label}</div>
            <h3 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              {t.faq.title.split(' ').map((word, i) => i === t.faq.title.split(' ').length - 1 ? <><br key={i} /><span className="text-blue-700">{word}</span></> : word + ' ')}
            </h3>
            <p className="text-xl text-slate-500 font-medium">
              {t.faq.description}
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-4 border-black bg-white overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-10 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-2xl font-black uppercase tracking-tight pr-8">{faq.question}</span>
                  {openIndex === idx ? <Minus className="w-8 h-8 shrink-0" /> : <Plus className="w-8 h-8 shrink-0" />}
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <div className="p-10 pt-0 text-xl text-slate-600 font-medium leading-relaxed border-t-2 border-slate-100 mt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
