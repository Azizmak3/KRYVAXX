
// STRATEGIC ADVISOR MOCK IMPLEMENTATION
// Persona: Crisis Infrastructure Architect. Authoritative, urgent, high-stakes.

export async function chatWithArchitect(message: string, history: { role: 'user' | 'model', text: string }[]) {
  // Simulate network delay for realism (varied between 0.8s and 1.2s)
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

  const lowerMsg = message.toLowerCase();
  const inputNumbers = message.match(/\d+/g)?.map(Number) || [];

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

  // 4. DATA INPUT HANDLER
  if (inputNumbers.length > 0) {
    const val = inputNumbers[0];

    // SCENARIO A: CYCLE LENGTH (Likely < 60)
    // Context: User inputs "12 months" or just "12"
    if (val < 60) {
       if (val > 8) {
         return `**ALERTE CRITIQUE : CYCLE LENT**\n\nVous êtes à **${val} mois**. C'est dangereux. La moyenne performante du marché est descendue à 6-8 mois grâce à l'automatisation.\n\nCela signifie que **vos concurrents encaissent leur marge 2x plus vite que vous**.\n\nCe retard grignote votre trésorerie. Pour vous donner une solution précise : **Quel est votre coût de portage mensuel estimé (frais financiers + frais fixes) ?**`;
       } else {
         return `**VÉLOCITÉ DÉTECTÉE : CORRECTE**\n\n${val} mois est un cycle standard. Mais attention : est-ce obtenu par épuisement de vos équipes ou par infrastructure ?\n\nSi vous dépendez de l'humain pour maintenir ce rythme, vous êtes vulnérable au turnover. Le Système_02 sécurise cette performance.\n\n**Quel est votre coût de portage mensuel pour maintenir ce rythme ?**`;
       }
    }

    // SCENARIO B: FINANCIAL COST (Likely >= 100)
    // Context: User inputs "10000" or "15000"
    if (val >= 60) {
      const formattedAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
      return `**DIAGNOSTIC TERMINÉ : URGENCE CONFIRMÉE**\n\nVoici la réalité crue : Vous perdez **${formattedAmount}** chaque mois par simple friction administrative.\n\nSur un cycle complet, vous brûlez l'équivalent de la marge nette de 2 appartements. C'est mathématique : votre infrastructure actuelle détruit votre profit.\n\nLe Système_02 inverse cette dynamique en 6 semaines.\n\n**Il est temps d'intervenir.**\n\n[INITIER LE DÉPLOIEMENT MAINTENANT](#blueprint)`;
    }
  }

  // 5. AGREEMENT / DEPLOYMENT ("Oui", "Go", "Je veux", "Ok")
  if (lowerMsg.match(/(oui|yes|go|ok|d'accord|vazy|super|top|intéressant|deploy|déployer|audit|voir|montre|show)/)) {
    return `**PROTOCOLE D'ACTIVATION**\n\nSage décision. L'attentisme est le seul véritable échec dans ce marché.\n\nNous allons auditer votre stack technique et valider votre éligibilité au déploiement d'un nœud privé.\n\nAttention : nous limitons les nouvelles instances pour garantir la bande passante de nos architectes.\n\n**Cliquez ci-dessous pour sécuriser votre créneau d'audit :**\n\n[ACCÉDER AU BRIEFING TECHNIQUE](#blueprint)`;
  }

  // 6. FALLBACK / CONVERSATIONAL STEERING
  return `**JE SUIS LÀ POUR VOS RÉSULTATS**\n\nJe suis un Architecte d'Infrastructure, pas un chatbot générique. Je détecte une inefficacité dans votre processus, mais j'ai besoin de données.\n\nDonnez-moi simplement votre **durée moyenne de vente** (ex: "12 mois") pour que je puisse calculer votre perte latente.\n\nOu demandez-moi : **"C'est quoi le Système 02 ?"**`;
}
