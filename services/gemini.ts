
// STRATEGIC ADVISOR MOCK IMPLEMENTATION
// Persona: Crisis Infrastructure Architect. Authoritative, urgent, high-stakes.

export async function chatWithArchitect(message: string, history: { role: 'user' | 'model', text: string }[]) {
  // Simulate network delay for realism (varied between 0.8s and 1.2s)
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

  const lowerMsg = message.toLowerCase();
  const inputNumbers = message.match(/\d+/g)?.map(Number) || [];
  const currentVal = inputNumbers.length > 0 ? inputNumbers[0] : null;

  // Helper for formatting currency
  const formatEUR = (num: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);

  // --- CONVERSATIONAL INTELLIGENCE ENGINE ---

  // 1. INITIAL GREETING / RESTART
  // Trigger: Empty history or greeting keywords
  if (history.length === 0 || lowerMsg.match(/^(bonjour|hello|hi|salut|commencer|start|yo|hey|re|test)/)) {
    return `**ARCHITECTE KRYVAX // NŒUD PARIS_01**\n\nJe détecte une anomalie potentielle dans votre vélocité de vente. Dans le marché actuel, l'attente est un risque systémique.\n\nJe peux auditer votre situation en 30 secondes.\n\nDites-moi simplement : **Quelle est la durée moyenne de votre cycle de vente actuel (en mois) ?**`;
  }

  // 2. EXPLANATION / CURIOSITY ("C'est quoi ?", "Comment ça marche ?")
  // Trigger: Questions about the system
  if (lowerMsg.match(/(c'est quoi|comment|explain|explication|fonctionne|système 02|system 02|détail|plus d'info|différence)/)) {
    return `**L'INFRASTRUCTURE D'ACCÉLÉRATION**\n\nLe **Système_02** n'est pas un "outil", c'est une arme de marché.\n\nPendant que vos équipes relancent manuellement des prospects froids :\n1. **Il qualifie** la capacité financière en 60 secondes.\n2. **Il éduque** le prospect automatiquement (Nurturing IA) sur 9 mois.\n3. **Il déclenche** l'urgence au moment précis où la liquidité est disponible.\n\nVos concurrents l'utilisent pour closer en 6-8 mois. Et vous ?\n\n**Voulez-vous voir l'impact sur vos marges ?**`;
  }

  // 3. OBJECTIONS / SKEPTICISM ("Cher", "Risque", "Pourquoi")
  // Trigger: Money words, doubt
  if (lowerMsg.match(/(cher|coût|prix|price|expensive|trop|budget|argent|investir|risk|risque|arnaque|sure)/)) {
    return `**LE COÛT DE L'INACTION**\n\nVous regardez l'investissement (CAPEX) alors que vous devriez regarder l'hémorragie (OPEX).\n\nChaque mois où votre stock ne tourne pas vous coûte entre 8 000 € et 15 000 € de frais de portage par programme. Le Système_02 coûte une fraction de ce que vous perdez *déjà* en attendant.\n\nLa question n'est pas "combien ça coûte", mais **"combien de temps pouvez-vous encore vous permettre d'attendre ?"**\n\nOn continue l'audit ?`;
  }

  // 4. DATA INPUT HANDLER & DYNAMIC CALCULATION
  // Determine context from history to know which step we are in
  const lastSystemMessage = [...history].reverse().find(m => m.role === 'model')?.text || '';

  // Context A: User just answered Cycle Duration?
  // Previous system msg asked for "cycle de vente" or "durée moyenne"
  // And it was NOT "Response 1" (which asks for Cost)
  const askedForCycle = (lastSystemMessage.includes("durée moyenne") || lastSystemMessage.includes("cycle de vente")) && !lastSystemMessage.includes("COÛT DE PORTAGE");

  // Context B: User just answered Monthly Cost?
  // Previous system msg asked for "COÛT DE PORTAGE" or "coût"
  const askedForCost = lastSystemMessage.includes("COÛT DE PORTAGE") || lastSystemMessage.includes("Quel est votre coût");

  if (currentVal !== null) {
      
      // CASE: RESPONSE 2 (FINAL CALCULATION)
      if (askedForCost) {
          const monthlyCost = currentVal;
          
          // Retrieve cycle duration from history (It was the user message BEFORE the last system message)
          const userMessages = history.filter(m => m.role === 'user');
          const lastUserMsg = userMessages[userMessages.length - 1]; // The message that answered the cycle question
          const cycleDuration = lastUserMsg?.text.match(/\d+/)?.[0] ? Number(lastUserMsg.text.match(/\d+/)?.[0]) : 12; // Fallback to 12 if parse fails

          const lossPerCycle = cycleDuration * monthlyCost;
          const equivalentUnits = Math.floor(lossPerCycle / 150000); // 150k margin assumption
          const tenLotsLoss = lossPerCycle * 10;
          const savingStart = lossPerCycle * 6; // Logic from prompt

          return `**DIAGNOSTIC TERMINÉ : URGENCE CONFIRMÉE**\n\nFaisons le calcul que personne ne fait :\n\n- Cycle actuel : **${cycleDuration} MOIS**\n- Portage mensuel : **${formatEUR(monthlyCost)}**\n- Perte par cycle : **${formatEUR(lossPerCycle)}**\n\nSur 10 lots, vous brûlez **${formatEUR(tenLotsLoss)}** en friction pure. C'est l'équivalent de la marge nette de **${equivalentUnits} appartements**. Vous les vendez pour financer votre lenteur.\n\nJim Simons a prouvé que l'avantage systémique bat tout. Vos concurrents ont un système. Vous avez une méthode manuelle. C'est comme trader contre Renaissance avec Excel.\n\nLe Système_02 inverse cette dynamique en 6 semaines.\n\n**Coût : 28 000 €**\n**ROI : Économie de ${formatEUR(savingStart)} sur les 6 prochains lots**\n\nJamie Dimon appellerait ça un "no-brainer". George Soros vous dirait : "Le marché perçoit votre lenteur. Cette perception DEVIENT la réalité. Les acheteurs sérieux vont voir vos concurrents d'abord."\n\n**IL EST TEMPS D'INTERVENIR.**\n\n[INITIER LE DÉPLOIEMENT →](#blueprint)`;
      }

      // CASE: RESPONSE 1 (VELOCITY CHECK)
      // If we asked for cycle, or if it's the first number provided in a conversational flow
      if (askedForCycle || history.length <= 2) {
          const cycleDuration = currentVal;
          const competitorCycle = Math.floor(cycleDuration * 0.6); // 40% faster
          const percentSlower = competitorCycle > 0 ? Math.round(((cycleDuration / competitorCycle) - 1) * 100) : 100;

          const status = cycleDuration <= 6 ? 'STANDARD' : cycleDuration <= 9 ? 'PROBLÉMATIQUE' : 'CRITIQUE';
          const verdict = cycleDuration <= 6 ? 'correct' : 'lent';
          const reality = cycleDuration <= 6 ? '"correct" = mort lente' : 'vous êtes déjà mort';

          return `**VÉLOCITÉ DÉTECTÉE : ${status}**\n\n**${cycleDuration} mois** est ${verdict}. Mais écoutez : dans le marché actuel, ${reality}.\n\nVos concurrents qui closent en **${competitorCycle} mois** capturent les acheteurs sérieux. Vous récupérez ce qui reste.\n\nLarry Fink dirait : "Où est votre alpha? Vous avez le même produit, le même prix, mais vous prenez **${percentSlower}% plus de temps**. Vous êtes un actif sous-performant."\n\n**QUEL EST VOTRE COÛT DE PORTAGE MENSUEL ? (en €)**\nCombien vous coûte un programme non-vendu chaque mois : charges, financement, équipe ?`;
      }
  }

  // 5. AGREEMENT / DEPLOYMENT ("Oui", "Go", "Je veux", "Ok")
  if (lowerMsg.match(/(oui|yes|go|ok|d'accord|vazy|super|top|intéressant|deploy|déployer|audit|voir|montre|show)/)) {
    return `**PROTOCOLE D'ACTIVATION**\n\nSage décision. L'attentisme est le seul véritable échec dans ce marché.\n\nNous allons auditer votre stack technique et valider votre éligibilité au déploiement d'un nœud privé.\n\nAttention : nous limitons les nouvelles instances pour garantir la bande passante de nos architectes.\n\n**Cliquez ci-dessous pour sécuriser votre créneau d'audit :**\n\n[ACCÉDER AU BRIEFING TECHNIQUE](#blueprint)`;
  }

  // 6. FALLBACK / CONVERSATIONAL STEERING
  return `**JE SUIS LÀ POUR VOS RÉSULTATS**\n\nJe suis un Architecte d'Infrastructure, pas un chatbot générique. Je détecte une inefficacité dans votre processus, mais j'ai besoin de données.\n\nDonnez-moi simplement votre **durée moyenne de vente** (ex: "12 mois") pour que je puisse calculer votre perte latente.\n\nOu demandez-moi : **"C'est quoi le Système 02 ?"**`;
}
