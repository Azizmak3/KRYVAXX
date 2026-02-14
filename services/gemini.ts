
// STRATEGIC ADVISOR MOCK IMPLEMENTATION
// Persona: Crisis Infrastructure Architect. Authoritative, urgent, high-stakes.

export async function chatWithArchitect(message: string, history: { role: 'user' | 'model', text: string }[]) {
  // Simulate network delay for realism (varied between 0.8s and 1.2s)
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

  const lowerMsg = message.toLowerCase();
  // Extract numbers, handling comma or dot decimals
  const inputNumbers = message.match(/\d+([.,]\d+)?/g)?.map(n => Number(n.replace(',', '.'))) || [];
  const currentVal = inputNumbers.length > 0 ? inputNumbers[0] : null;

  // Helper for formatting currency
  const formatEUR = (num: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);

  // --- CONVERSATIONAL INTELLIGENCE ENGINE ---

  // 1. APPOINTMENT / AUDIT REQUEST DETECTION
  // Trigger: User asks for a meeting, audit, or appointment directly
  if (lowerMsg.match(/(rendez-vous|rdv|audit|appointment|meeting|contact|parler|discuter|call|appel|calendrier|réserver|book)/)) {
      return `**PROTOCOLE D'ACTIVATION**\n\nParfait. Deux options pour sécuriser votre créneau d'audit :\n\n**OPTION 1 : RÉSERVATION CALENDRIER DIRECT**\n→ Choisissez votre créneau immédiatement\n→ Audit standard 30 minutes\n[OUVRIR CALENDRIER KRYVAX →](https://cal.com/kryvax-audit)\n\n**OPTION 2 : AUDIT PERSONNALISÉ**\n→ L'Architecte prépare l'audit avec vos données spécifiques\n→ Recommandé pour sociétés CA > 20M€\n[CONTINUER LE PROTOCOLE →](#blueprint)\n\n**Quelle option préférez-vous ?**`;
  }

  // 2. INITIAL GREETING / RESTART
  if (history.length === 0 || lowerMsg.match(/^(bonjour|hello|hi|salut|commencer|start|yo|hey|re|test|reset)/)) {
    return `**ARCHITECTE KRYVAX // NŒUD PARIS_01**\n\nJe détecte une anomalie potentielle dans votre vélocité de vente. Dans le marché actuel, l'attentisme est un risque systémique.\n\nJe peux auditer votre situation en 30 secondes.\n\nDites-moi simplement : **QUELLE EST LA DURÉE MOYENNE DE VOTRE CYCLE DE VENTE ACTUEL (EN MOIS) ?**`;
  }

  // Determine context from previous system message
  const lastSystemMessage = [...history].reverse().find(m => m.role === 'model')?.text || '';
  
  const askedForCycle = lastSystemMessage.includes("CYCLE DE VENTE");
  const askedForCost = lastSystemMessage.includes("CHARGE DE PORTAGE") || lastSystemMessage.includes("COÛT DE PORTAGE");
  const askedForProjects = lastSystemMessage.includes("PIPELINE") || lastSystemMessage.includes("COMBIEN DE PROJETS");
  const askedForArbitrage = lastSystemMessage.includes("ARBITRAGE ÉCONOMIQUE") || lastSystemMessage.includes("VOULEZ-VOUS VOIR");

  if (currentVal !== null) {
      
      // 3. USER PROVIDED CYCLE -> ASK COST
      if (askedForCycle) {
          const cycleDuration = currentVal;
          return `**VÉLOCITÉ DÉTECTÉE : CRITIQUE**\n\n**${cycleDuration} MOIS = mort lente.** Vos concurrents closent en 3 MOIS et capturent les acheteurs sérieux avant vous. Vous récupérez les prospects que personne ne veut.\n\nAnalyse financière directe : "Vous avez le même produit, le même prix, mais vous prenez 100% PLUS DE TEMPS. Vous êtes un actif sous-performant."\n\n**QUELLE EST VOTRE CHARGE DE PORTAGE MENSUELLE PAR PROJET ? (EN €)**\nCombien vous coûte un programme non-vendu chaque mois : charges, financement, équipe ?`;
      }

      // 4. USER PROVIDED COST -> ASK PROJECTS
      if (askedForCost) {
          return `**COMBIEN DE PROJETS AVEZ-VOUS EN PIPELINE SIMULTANÉMENT ?**\n\nCette donnée détermine l'impact portfolio de System_02.`;
      }

      // 5. USER PROVIDED PROJECTS -> ROI CALCULATION
      if (askedForProjects) {
           // Retrieve Cycle and Cost from history
           const userMsgs = history.filter(m => m.role === 'user');
           // Assumes sequential flow: Cycle -> Cost -> Projects (current)
           // Cycle was 2 steps back, Cost was 1 step back
           const cycleMsg = userMsgs[userMsgs.length - 2];
           const costMsg = userMsgs[userMsgs.length - 1];
           
           const cycle = cycleMsg?.text.match(/\d+/)?.[0] ? Number(cycleMsg.text.match(/\d+/)?.[0]) : 12;
           const cost = costMsg?.text.match(/\d+([.,]\d+)?/)?.[0] ? Number(costMsg.text.match(/\d+([.,]\d+)?/)?.[0].replace(',', '.')) : 5000;
           const projects = currentVal;

           const lossPerCycle = cycle * cost;
           const totalFriction = lossPerCycle * projects; // Annual friction roughly eq to full cycle loss on portfolio
           
           // Competitor comparison (3 months baseline)
           const compCycle = 3;
           const compCostPerProject = compCycle * cost;
           const compTotalCost = compCostPerProject * projects;
           const advantage = totalFriction - compTotalCost;

           return `**DIAGNOSTIC TERMINÉ : URGENCE CONFIRMÉE**\n\nFaisons le calcul que personne ne fait :\n\n- Cycle actuel : **${cycle} MOIS**\n- Portage mensuel : **${formatEUR(cost)}**\n- Perte par cycle : **${formatEUR(lossPerCycle)}**\n\nSur ${projects} lots/projets, vous brûlez **${formatEUR(totalFriction)}** en friction pure.\nC'est l'équivalent de la marge nette de **${Math.max(0, Math.floor(totalFriction/150000))} APPARTEMENTS**. Vous les vendez pour financer votre propre lenteur.\n\nVos concurrents qui closent en 3 MOIS :\n- Leur portage : ${formatEUR(compCostPerProject)} par projet\n- Leur gain vs vous : ${formatEUR(lossPerCycle - compCostPerProject)} par lot\n- Sur ${projects} lots : **${formatEUR(advantage)} d'avantage structurel**\n\nL'avantage systémique bat tout. Vos concurrents ont un système. Vous avez une méthode manuelle. L'écart est mathématique, pas commercial.\n\n**IMPACT PORTFOLIO (sur ${projects} projets simultanés):**\n\n- Friction actuelle annuelle : **${formatEUR(totalFriction)}**\n- Vélocité perdue : ${projects} × 3 mois = **${projects * 3} mois** de retard cumulé\n- Opportunités manquées : Les acheteurs sérieux ne vous attendent pas\n\n**VOULEZ-VOUS VOIR L'ARBITRAGE ÉCONOMIQUE DE SYSTEM_02 ?**`;
      }
  }

  // 6. AGREEMENT -> SYSTEM PRESENTATION
  if (lowerMsg.match(/(oui|yes|go|ok|d'accord|vazy|super|top|intéressant|deploy|déployer|audit|voir|montre|show|arbitrage)/)) {
      return `**L'INFRASTRUCTURE D'ACCÉLÉRATION**\n\nLe SYSTÈME_02 n'est pas un "outil", c'est une arme de marché.\n\nPendant que votre commercial rappelle pour la 4ème fois un prospect qui ne répond pas :\n\n**IL QUALIFIE** la capacité financière en 60 secondes.\n**IL ÉDUQUE** le prospect automatiquement (Nurturing IA) sur 9 mois.\n**IL DÉCLENCHE** l'urgence au moment précis où la liquidité est disponible.\n\nVos concurrents l'utilisent pour closer en 6-8 mois. Et vous ?\n\n**DÉPLOIEMENT : 6 semaines**\n**IMPACT : Votre prochain cycle passe de 6 mois à 3 mois**\n**VÉLOCITÉ : 2x dès le premier projet post-déploiement**\n\n**COMBIEN DE TEMPS ALLEZ-VOUS FINANCER VOS CONCURRENTS ?**`;
  }

  // 7. URGENCY & CTA (Triggered after System Presentation)
  if (lastSystemMessage.includes("FINANCER VOS CONCURRENTS")) {
       return `**RÉALITÉ DU MARCHÉ**\n\nVos concurrents n'attendent pas. Pendant que vous réfléchissez, ils closent.\n\nChaque mois que vous attendez = **18 000 € par projet** perdu, définitivement.\n\nCe n'est pas une question de "si" vous devez automatiser.\nC'est : "Combien de projets allez-vous perdre avant de le faire ?"\n\n**PROTOCOLE D'ACTIVATION**\n\nSage décision. L'attentisme est le seul véritable échec dans ce marché.\n\nNous allons auditer votre stack technique et valider votre éligibilité au déploiement d'un nœud privé.\n\nAttention : nous limitons les nouvelles instances pour garantir la bande passante de nos architectes.\n\n[SÉCURISER VOTRE CRÉNEAU D'AUDIT →](#blueprint)`;
  }

  // Fallback / Guidance
  return `**JE SUIS LÀ POUR VOS RÉSULTATS**\n\nJe détecte une inefficacité. Donnez-moi votre **cycle de vente moyen** (en mois) pour commencer le diagnostic.\n\nOu tapez "Rendez-vous" pour voir les disponibilités.`;
}
