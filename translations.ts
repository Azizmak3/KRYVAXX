
export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      menu: 'MENU',
      whatWeBuild: 'SYSTEMS',
      pricing: 'CONFIGURATIONS',
      caseStudies: 'CASE STUDIES',
      calculateRoi: 'DIAGNOSTIC',
      initiate: 'QUALIFICATION AUDIT',
    },
    hero: {
      overline: 'TARGET: NEW REAL ESTATE DEVELOPERS • €2M-€20M REV • ON SELOGER',
      headline: 'YOUR\nCOMPETITORS\nSELL 40%\nFASTER.',
      subheadline: 'THEY DIDN\'T LOWER PRICES.\nTHEY AUTOMATED THE DECISION.',
      body: 'Right now, a developer on SeLoger Neuf closes in 6-8 months.\nYou\'re waiting 12-14 months. Same product. Same platform.\n\nThis isn\'t a price problem. It\'s a speed problem.',
      cta: 'CALCULATE MY COMPETITIVE GAP'
    },
    diagnostic: {
      title: 'THE SELOGER NEUF TRAP',
      main: 'You are all in the same place. You offer the same T2-T3 units between €250K-€450K. The client compares 40 programs before deciding. Your listing has 3 photos, a description, a plan. Like your 20 competitors.',
      context_title: 'THE DECISION PARALYSIS:',
      context: 'The client cannot decide. So they wait. Meanwhile, your financial costs rise by €12,000/month.',
      list: [
        'SeLoger Listing: January 2026',
        'First visits: 40-60 days',
        'Purchase offers: 120-180 days',
        'Signing: 270-420 days (if lucky)'
      ],
      scenario_title: 'SCENARIO_TYPICAL:',
      scenario_cost: 'Delay Cost: €144K-€200K in carrying costs',
      competitor_note: 'YOUR COMPETITORS SELLING IN 180 DAYS: They don\'t advertise more. They help the client DECIDE faster.',
      quote: '"The real problem: Your qualification process is manual, slow, and yields the same result as your 20 competitors."',
      calc: {
        header: 'CRISIS_IMPACT_SIMULATOR',
        price: 'Avg Price / Unit (€)',
        lots: 'Lots in Portfolio',
        cycle: 'Current Sales Cycle (Months)',
        cost: 'Monthly Carrying Cost (€)',
        run: 'RUN SIMULATION',
        results: {
          delay: '12-MONTH DELAY COST',
          savings: 'SAVINGS (30% FASTER)',
          velocity: 'ADDITIONAL UNITS SOLD'
        }
      }
    },
    arbitrage: {
      title: 'THE SELOGER NEUF ARBITRAGE',
      subtitle: 'All your competitors are in the same place. With the same product. The winner is not the one with the best T3. It\'s the one who helps the client DECIDE fastest.',
      left_title: 'CURRENT_MARKET_STATE:',
      left_items: [
        '150-200 active new programs on SeLoger',
        'Avg client visits 8-12 programs',
        'Reflection cycle: 6-14 months',
        '60% of leads lost in comparison',
        '20% eventually buy existing property'
      ],
      right_title: 'THE OPPORTUNITY:',
      right_intro: 'Your competitor selling in 6 months vs your 12 months:',
      right_not: 'THEY DO NOT DO:',
      right_not_items: ['More advertising', 'Lower prices', 'Better locations'],
      right_do: 'THEY DO:',
      right_do_items: ['Instant qualification (60s)', 'Automated comparison', 'Real-time financial aid', 'Intelligent nurturing'],
      calc_title: 'ARBITRAGE_CALCULATION:',
      calc_items: [
        'Your cycle: 12 months',
        'Their cycle: 6-8 months',
        'Differential: 4-6 months × Carrying Cost',
        'Advantage: €480K-€720K per 10 lots'
      ]
    },
    case: {
      badge: 'LIVE_DEPLOYMENT_2026',
      header: 'HOW TO SELL MORE THAN COMPETITORS DURING A CRISIS?',
      sub: 'Not a theoretical case study. A live deployment. Real client, real crisis, real-time results.',
      client: 'CLIENT: CONFIDENTIAL_DEVELOPER',
      context: 'SECTOR: New Real Estate Promotion • CONTEXT: All competitors on SeLoger with similar offers',
      status: 'STATUS: In production for 4 weeks',
      quote: '"We are victims of a real estate crisis. If I can sell faster than my competitors in new development programs, I will come out winning. But how when we all offer the same products?"',
      systems: {
        title: 'DEPLOYED SYSTEMS:',
        s1: { t: '01 INSTANT_QUALIFICATION', d: 'Real-time financing simulator. Lead captured in 60s vs 2 weeks.' },
        s2: { t: '02 AUTOMATED_COMPARISON', d: '"Why this unit vs 5 competitors." Automated sales argument generation.' },
        s3: { t: '03 LONG_CYCLE_NURTURING', d: 'Automation during 9-month reflection. Intelligent follow-up replacing 40h/mo manual work.' }
      },
      metrics: {
        title: 'OBJECTIVE:',
        m1: 'Reduce sales cycle: 12mo → 6-8mo',
        m2: 'Increase conversion rate: +25%',
        m3: 'Free 80% sales time for closing',
        roi: 'PROJECTED_ROI: 2-3 extra units sold = €200K-€400K net margin'
      },
      cta: 'VIEW TECHNICAL ARCHITECTURE'
    },
    thesis: {
      title: 'WHY WINNERS INVEST DURING CRISES.',
      context: 'In 2008, developers who automated prospecting during the crisis captured 3x more market share afterwards. Today is the same.',
      comp: {
        title: 'COMPETITORS DO:',
        items: ['Wait for market recovery', 'Lower prices by 5-10%', 'Fire sales staff', 'Cut marketing budget']
      },
      surv: {
        title: 'SURVIVORS DO:',
        items: ['Automate qualification', 'Accelerate decision making', 'Capture rare buyers BEFORE', 'Build structural advantage']
      },
      quote: '"He who sells 30% faster doesn\'t just survive the crisis. He becomes the market leader exiting it."',
      data: 'PROJECTION_BASED_ON_2008_2010_CYCLE: +180% market share for automated developers.'
    },
    systems: {
      s1: {
        name: 'SYSTEM_01: INSTANT_QUALIFICATION',
        config: 'INVESTMENT: €15K-€20K • TIMELINE: 4 WEEKS',
        target: 'TARGET: €2M-€5M REV',
        modules: ['Real-time finance simulator', 'Auto-scoring (serious vs curious)', 'Prioritization dashboard', 'CRM Integration'],
        results: ['70% reduction in wasted time', 'Lead-to-visit in 48h', 'Eliminate 60% unqualified leads'],
        crisis_case: {
          title: 'CRISIS_USE_CASE',
          scenario: 'Scenario: 15-30 lots in portfolio. Current cycle 12+ months. Cost: €8K-€15K/mo.',
          action: 'Action: Eliminates 60% unqualified leads, accelerates remaining 40% to visit in 48h.',
          impact: 'Impact: Save 40-60 sales hours/mo, sell 2-3 extra lots = €150K-€300K margin.'
        },
        roi: 'PAYBACK: 8-12 MONTHS',
        cta: 'CHECK VOLUME ELIGIBILITY'
      },
      s2: {
        name: 'SYSTEM_02: DECISION_ACCELERATION',
        badge: 'RECOMMENDED_2026',
        config: 'INVESTMENT: €25K-€35K • TIMELINE: 6 WEEKS',
        target: 'TARGET: €5M-€15M REV',
        modules: ['System_01 +', 'Auto-comparator vs SeLoger', 'Custom finance scenarios', '9-12mo Nurturing AI', 'Critical moment alerts'],
        results: ['Sales cycle reduced 30-40%', 'Conversion +25%', 'Capture decision-phase buyers', '3-5 extra sales/year'],
        crisis_case: {
          title: 'CRISIS_USE_CASE',
          scenario: 'Scenario: 50+ lots. Direct competition on SeLoger. Prospects hesitant.',
          action: 'Action: Automated comparison ("Why us vs them") + plans de financement personnalisés générés instantanément.',
          impact: 'Impact: Reduces hesitation time by 3 months. Captures buyers before they visit competitors.'
        },
        roi: 'PAYBACK: 6-10 MONTHS',
        cta: 'REQUEST AUDIT'
      },
      s3: {
        name: 'SYSTEM_03: TERRITORIAL_DOMINANCE',
        config: 'INVESTMENT: €45K-€65K • TIMELINE: 8 WEEKS',
        target: 'TARGET: €15M+ REV',
        modules: ['System_02 +', 'Multi-channel capture', 'Cross-program retargeting', 'Predictive analytics', 'War room dashboard'],
        results: ['Capture active buyers before top 3 competitors', '#1 Positioning in zone', '40-50% cycle reduction'],
        crisis_case: {
          title: 'CRISIS_USE_CASE',
          scenario: 'Scenario: Multiple active programs. Need to dominate a specific geographic zone.',
          action: 'Action: Analytics prédictifs pour intercepter l\'intention avant la recherche SeLoger.',
          impact: 'Impact: Become the primary option in the zone. Absorb competitor market share.'
        },
        roi: 'PAYBACK: 4-8 MONTHS',
        cta: 'STRATEGY SESSION'
      }
    },
    filter: {
      not_title: 'WHO WE DO NOT ACCEPT:',
      not_list: [
        { t: 'DEVELOPERS < €2M REV', d: 'Reason: The system costs €15K-€65K. If you don\'t have the budget, you don\'t have the problem.' },
        { t: 'SEEKING "MORE TRAFFIC"', d: 'Reason: You are already on SeLoger. Traffic isn\'t the issue. Decision speed is.' },
        { t: 'WANT TO "TRY" FOR 2 MONTHS', d: 'Reason: We build infrastructure, not ads. Minimum deployment: 4 weeks.' },
        { t: 'NO COMPETITION MARKETS', d: 'Reason: If you are alone, you don\'t need a competitive advantage.' },
        { t: 'THINK IT\'S A "PRICE PROBLEM"', d: 'Reason: If you think lowering price 5% solves a 14-month cycle, we can\'t help you.' }
      ],
      for_title: 'WHO THIS IS EXACTLY FOR:',
      for_list: [
        'Developers €2M-€20M in new programs',
        'Present on SeLoger Neuf with 3+ direct competitors',
        'Current sales cycle > 9 months (Market avg: 12-14mo)',
        'Monthly carrying cost > €5K',
        'Need to sell faster to SURVIVE 2026-2027',
        'Understand that speed is an automated process'
      ],
      cta: 'VERIFY ELIGIBILITY →'
    },
    method: {
      title: 'WHY 8_WEEKS DURING A CRISIS?',
      intro: 'The 2026 crisis will last 18-24 months. Your competitors will react in 6-9 months. If you deploy now, you lead. If you wait, you play catch-up.',
      phases: [
        { t: 'PHASE_01: DIAGNOSTIC', w: 'Week 1-2', d: 'Complete audit of current sales cycle. Deliverable: Sovereignty Blueprint.' },
        { t: 'PHASE_02: INSTALLATION', w: 'Week 3-6', d: 'Core simulator dev, CRM integration, Automation config.' },
        { t: 'PHASE_03: ACTIVATION', w: 'Week 7-8', d: 'Team training, Soft launch, Optimization based on real data.' }
      ],
      result: 'RESULT: In 8 weeks, your system is operational. In 6 months, you are 30-40% faster than competitors.'
    },
    terminal: {
      status: 'TERMINAL: CYCLE_AUDIT_2026',
      auth: 'Verify Credentials',
      placeholder: 'Inquire about owned infrastructure ROI...',
      disclaimer: 'Authorized Personnel Only'
    },
    final: {
      title: 'YOUR_DECISION_NOW:',
      calc_label: 'CALCULATE_COMPETITIVE_GAP:',
      calc_inputs: ['Competitor Cycle', 'Your Cycle', 'Carrying Cost'],
      optA: { t: 'PATH_A: WAIT', items: ['Hope market recovers', 'Pay €8K-€15K/mo carrying costs', 'Lower prices (margin loss)', 'Survive (maybe)'], cost: 'Cost: Market Position + €150K/lot' },
      optB: { t: 'PATH_B: DEPLOY_NOW', items: ['System live in 8 weeks', '30-40% cycle reduction', 'Competitive advantage', 'Leader position in 2027'], cost: 'Invest: €15K-€65K, recovered in 4-12mo' },
      center: 'Developers who build during crises don\'t just survive. They dominate the exit.',
      cta_primary: 'BOOK QUALIFICATION AUDIT →',
      cta_secondary: 'Calculate Competitive Gap',
      fine: 'Limited availability: 3 deployments per quarter. Next cycle: Q1 2026.'
    },
    build: {
       opex: 'OPEX_REDUCTION',
       growth: 'EQUITY GROWTH',
       minInv: 'MINIMUM INVESTMENT',
       roi: 'ROI TIMELINE',
       payback: '6-12 MONTHS',
       timeline: '8 WEEK BUILD',
       opt: 'TAX OPTIMIZED',
       avgSave: 'AVG. 12-MONTH SAVINGS'
    },
    compare: {
       label: 'FINANCIAL COMPARISON',
       title: 'THE COST OF RENTING VS OWNING.',
       description: 'Most developers are renting their intelligence from US tech giants. We build owned infrastructure.',
       save: 'SAVING',
       years5: 'OVER 5 YEARS',
       table: {
          cost: 'SaaS Rental Cost (5yr)',
          advantage: 'Advantage',
          rent: 'SaaS Rental',
          own: 'KRYVAX',
          ownership: 'Asset Ownership',
          rental: '0% (You Rent)',
          asset: '100% (You Own)',
          privacy: 'Data Privacy',
          trainsVendor: 'Trains Vendor AI',
          trainsYours: 'Trains YOUR AI',
          accounting: 'Accounting',
          opex: '100% OpEx (Lost)',
          capex: 'CapEx (Amortized)',
          capexSubtitle: 'Can be capitalized',
          future: 'Future Cost',
          rising: 'Rising (Inflation)',
          fixed: 'Fixed (Deflationary)'
       }
    },
    faq: {
       label: 'FREQUENTLY ASKED QUESTIONS',
       title: 'CAPITAL ALLOCATION QUESTIONS.',
       description: 'Deploying infrastructure is a capital decision, not a software purchase.',
    },
    problem: {
       label: 'THE SUBSCRIPTION TRAP',
       title: 'THE HIDDEN COST OF THE "MODERN STACK".',
       description: 'You are likely paying €2,000–€5,000/month for disconnected tools that don\'t talk to each other.',
       marketing: 'MARKETING STACK',
       leadership: 'LEADERSHIP STACK',
       totalSpend: 'TOTAL FRAGMENTED SPEND:',
       yearlySpend: '€43,000 / YEAR',
       conclusion: 'And you own none of it.',
       trapTitle: 'THE 3-YEAR TRAP',
       year1: 'YEAR 1',
       year2: 'YEAR 2 (+30%)',
       year3: 'YEAR 3 (+30%)',
       totalLoss: 'TOTAL CASH DRAIN',
       whatIf: 'What if you invested this in your own system?'
    },
    signals: {
       tableHeaders: {
          jurisdiction: 'Jurisdiction',
          trigger: 'Trigger Event',
          potential: 'Alpha Potential',
          sector: 'Target Sector'
       }
    },
    portfolio: {
      title: 'OPERATIONAL ALPHA GENERATION',
      req: 'MINIMUM REQUIREMENTS',
      reqItems: ['REVENUE > €2M', 'ESTABLISHED PRODUCT', 'CAPITAL READY'],
      blueprint: {
         label: 'INFRASTRUCTURE BLUEPRINT',
         title: 'CLAIM YOUR SOVEREIGNTY.',
         description: 'The first step is a technical audit of your current information pipeline.',
         initiate: 'INITIATE PROTOCOL',
         form: {
            protocol: 'QUALIFICATION PROTOCOL',
            sub: 'VERIFY ENTITY STATUS',
            revBand: 'ANNUAL REVENUE BAND',
            sel: 'Select Band...',
            under: '< €100K (Too Early)',
            monthly: 'MONTHLY AI/SAAS SPEND',
            cap: 'CAPITAL READY TO DEPLOY?',
            notYet: 'No / Not Yet',
            maybe: 'Maybe / Depends',
            ready: 'Yes, Capital Allocated',
            role: 'YOUR ROLE',
            selRole: 'Select Role...',
            verify: 'VERIFY ELIGIBILITY'
         },
         unqualified: {
            title: 'PROTOCOL TERMINATED.',
            desc: 'Based on current parameters, KRYVAX infrastructure would be over-engineered for your needs. We recommend standard SaaS solutions.',
            btn: 'RETURN TO HOME'
         },
         success: {
            title: 'ÉLIGIBILITÉ CONFIRMÉE.',
            desc: 'Les paramètres de votre entité correspondent à nos critères de déploiement. Un Architecte Senior a été notifié.',
            next: 'ÉTAPE SUIVANTE',
            step: 'AUDIT TECHNIQUE',
            timeline: 'DÉLAI',
            time: '24-48 HEURES'
         }
      }
    }
  },
  fr: {
    nav: {
      menu: 'MENU',
      whatWeBuild: 'SYSTÈMES',
      pricing: 'CONFIGURATIONS',
      caseStudies: 'ÉTUDES DE CAS',
      calculateRoi: 'DIAGNOSTIC',
      initiate: 'AUDIT DE QUALIFICATION',
    },
    hero: {
      overline: 'CIBLE: PROMOTEURS IMMOBILIER NEUF • 2M€-20M€ CA • PRÉSENTS SUR SELOGER',
      headline: 'VOS\nCONCURRENTS\nVENDENT 40%\nPLUS VITE.',
      subheadline: 'ILS N\'ONT PAS BAISSÉ LES PRIX.\nILS ONT AUTOMATISÉ LA DÉCISION.',
      body: 'En ce moment, un promoteur sur SeLoger Neuf vend en 6-8 mois.\nVous attendez 12-14 mois. Même produit. Même plateforme.\n\nCe n\'est pas un problème de prix. C\'est un problème de vitesse.',
      cta: 'CALCULER MON RETARD COMPÉTITIF'
    },
    diagnostic: {
      title: 'LE PIÈGE SELOGER NEUF',
      main: 'Vous êtes tous au même endroit. Vous proposez tous des T2-T3 entre 250K€-450K€. Le client compare 40 programmes avant de décider. Votre listing a 3 photos, a description, un plan. Comme vos 20 concurrents.',
      context_title: 'LA PARALYSIE DÉCISIONNELLE:',
      context: 'Le client ne peut pas décider. Alors il attend. Pendant ce temps, vos frais financiers augmentent de 12 000€/mois.',
      list: [
        'Mise en ligne SeLoger: Janvier 2026',
        'Premières visites: 40-60 jours',
        'Propositions d\'achat: 120-180 jours',
        'Signature: 270-420 jours (si vous êtes chanceux)'
      ],
      scenario_title: 'SCENARIO_TYPIQUE:',
      scenario_cost: 'Coût du retard: 144 000€-200 000€ en frais de portage',
      competitor_note: 'VOS CONCURRENTS QUI VENDENT EN 180 JOURS: Ils ne font pas plus de publicité. Ils aident le client à DÉCIDER plus vite.',
      quote: '"Le vrai problème: Votre processus de qualification est manuel, lent, et donne le même résultat que vos 20 concurrents."',
      calc: {
        header: 'SIMULATEUR_IMPACT_CRISE',
        price: 'Prix Moyen / Lot (€)',
        lots: 'Nombre de Lots en Portefeuille',
        cycle: 'Cycle de Vente Actuel (Mois)',
        cost: 'Coût de Portage Mensuel (€)',
        run: 'LANCER SIMULATION',
        results: {
          delay: 'COÛT TOTAL DU RETARD (12 MOIS)',
          savings: 'ÉCONOMIE (30% PLUS VITE)',
          velocity: 'LOTS SUPPLÉMENTAIRES VENDUS'
        }
      }
    },
    arbitrage: {
      title: 'L\'ARBITRAGE SELOGER NEUF',
      subtitle: 'Tous vos concurrents sont au même endroit. Avec le même produit. Le gagnant n\'est pas celui qui a le meilleur T3. C\'est celui qui aide le client à DÉCIDER le plus vite.',
      left_title: 'ÉTAT ACTUEL_DU_MARCHÉ:',
      left_items: [
        '150-200 programmes neufs actifs sur SeLoger Neuf Île-de-France',
        'Client moyen visite 8-12 programmes avant de décider',
        'Cycle de réflexion: 6-14 mois',
        '60% des prospects se perdent dans la comparaison',
        '20% achètent finalement dans l\'ancien'
      ],
      right_title: 'L\'OPPORTUNITÉ:',
      right_intro: 'Votre concurrent qui vend en 6 mois vs. votre 12 mois:',
      right_not: 'IL NE FAIT PAS:',
      right_not_items: ['Plus de publicité (vous êtes tous sur SeLoger)', 'Des prix plus bas (ses marges sont meilleures)', 'De meilleurs emplacements'],
      right_do: 'IL FAIT:',
      right_do_items: ['Qualification instantanée (sérieux vs. curieux)', 'Comparaison automatisée ("Pourquoi moi vs. les 5 autres")', 'Aide à la décision financière (temps réel)', 'Nurturing intelligent pendant les 9 mois'],
      calc_title: 'CALCUL_ARBITRAGE:',
      calc_items: [
        'Votre cycle actuel: 12 mois',
        'Leur cycle: 6-8 mois',
        'Différentiel: 4-6 mois × 12K€ (Coût portage)',
        'Avantage: 480K€-720K€ sur 10 lots'
      ]
    },
    case: {
      badge: 'DÉPLOIEMENT_LIVE_2026',
      header: '"COMMENT VENDRE PLUS QUE MES CONCURRENTS EN PLEINE CRISE?"',
      sub: 'Ce n\'est pas une case study théorique. C\'est un déploiement en cours. Client réel, crise réelle, résultats en temps réel.',
      client: 'CLIENT: PROMOTEUR_CONFIDENTIEL',
      context: 'SECTEUR: Promotion immobilier neuf • CONTEXTE: Tous les concurrents sur SeLoger Neuf avec offres similaires',
      status: 'STATUT: En production depuis 4 semaines',
      quote: '"Nous sommes victime d\'une crise immobilière. Si j\'arrive à vendre plus rapidement que mes concurrents en programmes neufs, alors je sortirai gagnant. Mais comment faire quand nous proposons tous les mêmes produits sur la même plateforme?"',
      systems: {
        title: 'SYSTÈMES INSTALLÉS:',
        s1: { t: '01 QUALIFICATION_INSTANTANÉE', d: 'Simulateur de financement temps réel. Lead capturé en 60s vs 2 semaines.' },
        s2: { t: '02 COMPARATEUR_AUTOMATISÉ', d: '"Pourquoi ce programme vs 5 concurrents". Génération auto des arguments.' },
        s3: { t: '03 NURTURING_IA_CYCLE_LONG', d: 'Automatisation pendant les 9 mois de réflexion. Relances intelligentes.' }
      },
      metrics: {
        title: 'OBJECTIF:',
        m1: 'Réduire cycle de vente: 12 mois → 6-8 mois',
        m2: 'Augmenter taux de conversion: +25%',
        m3: 'Libérer 80% du temps commercial pour closing',
        roi: 'ROI_PROJETÉ: 2-3 lots supplémentaires = 200K€-400K€ marge nette'
      },
      cta: 'VOIR L\'ARCHITECTURE TECHNIQUE'
    },
    thesis: {
      title: 'POURQUOI LES GAGNANTS INVESTISSENT PENDANT LES CRISES.',
      context: 'En 2008, les promoteurs qui ont automatisé leur prospection pendant la crise ont capté 3x plus de parts de marché à la sortie. Aujourd\'hui, c\'est pareil.',
      comp: {
        title: 'VOS CONCURRENTS FONT:',
        items: ['Attendre que le marché remonte', 'Baisser les prix de 5-10%', 'Virer leurs commerciaux', 'Réduire le budget marketing']
      },
      surv: {
        title: 'LES SURVIVANTS FONT:',
        items: ['Automatiser la qualification', 'Accélérer la décision', 'Capter les rares acheteurs AVANT', 'Construire un avantage structurel']
      },
      quote: '"Celui qui vend 30% plus vite ne survit pas juste à la crise. Il devient le leader de marché à la sortie."',
      data: 'PROJECTION_BASÉE_SUR_CYCLE_2008_2010: +180% parts de marché pour les promoteurs automatisés.'
    },
    systems: {
      s1: {
        name: 'SYSTÈME_01: QUALIFICATION_INSTANTANÉE',
        config: 'INVESTISSEMENT: 15K€-20K€ • DÉLAI: 4 SEMAINES',
        target: 'CIBLE: CA 2M€-5M€',
        modules: ['Simulateur de financement temps réel', 'Scoring auto (sérieux vs curieux)', 'Dashboard de priorisation', 'Intégration CRM'],
        results: ['70% réduction temps perdu', 'Lead-to-visite en 48h', 'Élimination 60% leads non qualifiés'],
        crisis_case: {
          title: 'CRISIS_USE_CASE',
          scenario: 'Scenario: Vous avez 15-30 lots en portefeuille. Cycle actuel 12+ mois. Coût portage: 8K€-15K€/mois.',
          action: 'Action: Ce système élimine 60% des leads non qualifiés et accélère les 40% restants de 2 semaines à 48h pour première visite.',
          impact: 'Impact: Sur 12 mois, vous économisez 40-60 heures commerciales/mois et vendez 2-3 lots supplémentaires = 150K€-300K€ marge nette.'
        },
        roi: 'RÉCUPÉRATION: 8-12 MOIS',
        cta: 'VOIR SI J\'AI LE VOLUME'
      },
      s2: {
        name: 'SYSTÈME_02: ACCÉLÉRATION_DÉCISIONNELLE',
        badge: 'RECOMMANDÉ_CRISE_2026',
        config: 'INVESTISSEMENT: 25K€-35K€ • DÉLAI: 6 SEMAINES',
        target: 'CIBLE: CA 5M€-15M€',
        modules: ['Système_01 +', 'Comparateur auto vs SeLoger', 'Scénarios financement personnalisés', 'Nurturing IA 9-12 mois', 'Alertes moments critiques'],
        results: ['Cycle de vente réduit de 30-40%', 'Conversion augmentée de 25%', 'Capture acheteurs phase décision', '3-5 ventes supp. par an'],
        crisis_case: {
          title: 'CRISIS_USE_CASE',
          scenario: 'Scenario: 50+ lots. Concurrence directe sur SeLoger. Prospects hésitants.',
          action: 'Action: Comparateur automatisé ("Pourquoi nous vs eux") + plans de financement personnalisés générés instantanément.',
          impact: 'Impact: Réduit le temps d\'hésitation de 3 mois. Capture les acheteurs avant qu\'ils ne visitent la concurrence.'
        },
        roi: 'RÉCUPÉRATION: 6-10 MOIS',
        cta: 'DEMANDER AUDIT'
      },
      s3: {
        name: 'SYSTÈME_03: DOMINANCE_TERRITORIALE',
        config: 'INVESTISSEMENT: 45K€-65K€ • DÉLAI: 8 SEMAINES',
        target: 'CIBLE: CA 15M€+',
        modules: ['Système_02 +', 'Captation multi-canal', 'Retargeting cross-programme', 'Predictive analytics', 'War room dashboard'],
        results: ['Capture acheteurs actifs avant top 3 concurrents', 'Positionnement #1 sur zone', '40-50% réduction cycle'],
        crisis_case: {
          title: 'CRISIS_USE_CASE',
          scenario: 'Scenario: Programmes multiples actifs. Besoin de dominer une zone géographique spécifique.',
          action: 'Action: Analytics prédictifs pour intercepter l\'intention avant la recherche SeLoger.',
          impact: 'Impact: Devenir l\'option primaire dans la zone. Absorber la part de marché des concurrents.'
        },
        roi: 'RÉCUPÉRATION: 4-8 MOIS',
        cta: 'RÉSERVER SESSION'
      }
    },
    filter: {
      not_title: 'QUI NOUS NE PRENONS PAS:',
      not_list: [
        { t: 'DÉVELOPPEURS < 2M€ CA', d: 'Raison: Le système coûte 15K€-65K€. Si vous n\'avez pas ce budget, vous n\'avez pas le problème que nous résolvons.' },
        { t: 'CEUX QUI CHERCHENT "PLUS DE TRAFIC"', d: 'Raison: Vous êtes déjà sur SeLoger. Le problème n\'est pas le trafic. C\'est la vitesse de décision.' },
        { t: 'VEULENT "ESSAYER" 2 MOIS', d: 'Raison: Nous construisons de l\'infrastructure propriétaire, pas des pubs. Déploiement minimum: 4 semaines.' },
        { t: 'MARCHÉS SANS CONCURRENCE', d: 'Raison: Si vous êtes seul, vous n\'avez pas besoin d\'avantage compétitif.' },
        { t: 'PENSENT QUE C\'EST UN "PROBLÈME DE PRIX"', d: 'Raison: Si vous croyez que baisser de 5-10% va résoudre un cycle de 14 mois, on ne peut pas vous aider.' }
      ],
      for_title: 'POUR QUI C\'EST EXACTEMENT CONÇU:',
      for_list: [
        'Promoteurs 2M€-20M€ CA en programmes neufs',
        'Présents sur SeLoger Neuf avec 3+ concurrents directs',
        'Cycle de vente actuel > 9 mois (moyenne: 12-14 mois)',
        'Coût de portage mensuel > 5K€',
        'Besoin de vendre plus vite pour SURVIVRE à la crise 2026-2027',
        'Comprennent que la vitesse est un processus automatisé'
      ],
      cta: 'VÉRIFIER MON ÉLIGIBILITÉ →'
    },
    method: {
      title: 'POURQUOI 8_SEMAINES PENDANT UNE CRISE?',
      intro: 'La crise immobilière 2026 va durer 18-24 mois. Vos concurrents vont réagir dans 6-9 mois. Si vous déployez maintenant, vous menez. Si vous attendez, vous subissez.',
      phases: [
        { t: 'PHASE_01: DIAGNOSTIC', w: 'Semaine 1-2', d: 'Audit complet du cycle de vente. Livrable : Blueprint de Souveraineté.' },
        { t: 'PHASE_02: INSTALLATION', w: 'Semaine 3-6', d: 'Dév simulateurs core, intégration CRM, config automatisations.' },
        { t: 'PHASE_03: ACTIVATION', w: 'Semaine 7-8', d: 'Formation équipe, Soft launch, Optimisation sur données réelles.' }
      ],
      result: 'RÉSULTAT: En 8 semaines, votre système est opérationnel. Dans 6 mois, vous êtes 30-40% plus rapide que vos concurrents.'
    },
    terminal: {
      status: 'TERMINAL: CYCLE_AUDIT_2026',
      auth: 'Vérifier les identifiants',
      placeholder: 'Interroger sur le ROI de l\'infrastructure...',
      disclaimer: 'Personnel autorisé uniquement'
    },
    final: {
      title: 'VOTRE_DÉCISION_MAINTENANT:',
      calc_label: 'CALCULER_ÉCART_COMPÉTITIF:',
      calc_inputs: ['Cycle Concurrent (Mois)', 'Votre Cycle (Mois)', 'Coût Portage (€/mois)'],
      optA: { t: 'CHEMIN_A: ATTENDRE', items: ['Espérer que le marché remonte', 'Payer 8K€-15K€/mois de portage', 'Baisser les prix (perte marge)', 'Survivre peut-être'], cost: 'Coût: Position Marché + 150K€/lot' },
      optB: { t: 'CHEMIN_B: DÉPLOYER', items: ['Système live en 8 semaines', 'Réduction cycle 30-40%', 'Avantage compétitif', 'Position leader en 2027'], cost: 'Invest: 15K€-65K€, récupéré en 4-12 mois' },
      center: 'Les promoteurs qui construisent pendant les crises ne survivent pas juste. Ils dominent la sortie.',
      cta_primary: 'RÉSERVER AUDIT DE QUALIFICATION →',
      cta_secondary: 'Calculer mon retard compétitif',
      fine: 'Disponibilités limitées: 3 déploiements par trimestre. Prochain cycle: Q1 2026.'
    },
    build: {
       opex: 'RÉDUCTION OPEX',
       growth: 'CROISSANCE CAPITAL',
       minInv: 'INVESTISSEMENT MINIMUM',
       roi: 'DÉLAI ROI',
       payback: '6-12 MOIS',
       timeline: 'BUILD 8 SEMAINES',
       opt: 'OPTIMISÉ FISCALEMENT',
       avgSave: 'ÉCO. MOYENNE 12 MOIS'
    },
    compare: {
       label: 'COMPARAISON FINANCIÈRE',
       title: 'LE COÛT DE LA LOCATION VS LA PROPRIÉTÉ.',
       description: 'La plupart des promoteurs louent leur intelligence aux géants US. Nous construisons une infrastructure possédée.',
       save: 'ÉCONOMIE',
       years5: 'SUR 5 ANS',
       table: {
          cost: 'Coût Location SaaS (5 ans)',
          advantage: 'Avantage',
          rent: 'Location SaaS',
          own: 'KRYVAX',
          ownership: 'Propriété de l\'Actif',
          rental: '0% (Vous Louez)',
          asset: '100% (Vous Possédez)',
          privacy: 'Confidentialité',
          trainsVendor: 'Entraîne l\'IA Vendeur',
          trainsYours: 'Entraîne VOTRE IA',
          accounting: 'Comptabilité',
          opex: '100% OpEx (Perdu)',
          capex: 'CapEx (Amortissable)',
          capexSubtitle: 'Peut être capitalisé',
          future: 'Coût Futur',
          rising: 'Hausse (Inflation)',
          fixed: 'Fixed (Deflationary)'
       }
    },
    faq: {
       label: 'QUESTIONS FRÉQUENTES',
       title: 'QUESTIONS D\'ALLOCATION DE CAPITAL.',
       description: 'Déployer une infrastructure est une décision de capital, pas un achat logiciel.',
    },
    problem: {
       label: 'LE PIÈGE DE L\'ABONNEMENT',
       title: 'LE COÛT CACHÉ DU "STACK MODERNE".',
       description: 'Vous payez probablement 2 000€-5 000€/mois pour des outils déconnectés qui ne se parlent pas.',
       marketing: 'STACK MARKETING',
       leadership: 'STACK DIRECTION',
       totalSpend: 'DÉPENSE FRAGMENTÉE TOTALE :',
       yearlySpend: '43 000€ / AN',
       conclusion: 'Et vous ne possédez rien.',
       trapTitle: 'LE PIÈGE DE 3 ANS',
       year1: 'ANNÉE 1',
       year2: 'ANNÉE 2 (+30%)',
       year3: 'ANNÉE 3 (+30%)',
       totalLoss: 'FUITE DE TRÉSORERIE',
       whatIf: 'Et si vous investissiez cela dans votre propre système ?'
    },
    signals: {
       tableHeaders: {
          jurisdiction: 'Juridiction',
          trigger: 'Événement Déclencheur',
          potential: 'Potentiel Alpha',
          sector: 'Secteur Cible'
       }
    },
    portfolio: {
      title: 'GÉNÉRATION D\'ALPHA OPÉRATIONNEL',
      req: 'EXIGENCES MINIMALES',
      reqItems: ['CA > 2M€', 'PRODUIT ÉTABLI', 'CAPITAL PRÊT'],
      blueprint: {
         label: 'BLUEPRINT INFRASTRUCTURE',
         title: 'RÉCLAMEZ VOTRE SOUVERAINETÉ.',
         description: 'La première étape est un audit technique de votre pipeline d\'information actuel.',
         initiate: 'INITIER PROTOCOLE',
         form: {
            protocol: 'PROTOCOLE DE QUALIFICATION',
            sub: 'VÉRIFIER STATUT ENTITÉ',
            revBand: 'TRANCHE CA ANNUEL',
            sel: 'Sélectionner Tranche...',
            under: '< 100K€ (Trop Tôt)',
            monthly: 'DÉPENSE IA/SAAS MENSUELLE',
            cap: 'CAPITAL PRÊT À DÉPLOYER ?',
            notYet: 'Non / Pas Encore',
            maybe: 'Peut-être / Dépend',
            ready: 'Oui, Capital Alloué',
            role: 'VOTRE RÔLE',
            selRole: 'Sélectionner Rôle...',
            verify: 'VÉRIFIER ÉLIGIBILITÉ'
         },
         unqualified: {
            title: 'PROTOCOLE TERMINÉ.',
            desc: 'Selon les paramètres actuels, l\'infrastructure KRYVAX serait surdimensionnée pour vos besoins. Nous recommandons des solutions SaaS standards.',
            btn: 'RETOUR ACCUEIL'
         },
         success: {
            title: 'ÉLIGIBILITÉ CONFIRMÉE.',
            desc: 'Les paramètres de votre entité correspondent à nos critères de déploiement. Un Architecte Senior a été notifié.',
            next: 'ÉTAPE SUIVANTE',
            step: 'AUDIT TECHNIQUE',
            timeline: 'DÉLAI',
            time: '24-48 HEURES'
         }
      }
    }
  }
};
