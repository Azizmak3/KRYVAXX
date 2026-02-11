
// STRATEGIC ADVISOR MOCK IMPLEMENTATION
// Persona: Crisis Infrastructure Architect. Authoritative, urgent, high-stakes.

export async function chatWithArchitect(message: string, history: { role: 'user' | 'model', text: string }[]) {
  // Simulate network delay for realism (varied between 0.8s and 1.6s)
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800));

  const lowerMsg = message.toLowerCase();
  const inputNumbers = message.match(/\d+/g)?.map(Number) || [];

  // --- LOGIC ENGINE ---

  // 1. GREETING / INITIAL CONTACT
  // Trigger: Start of convo or standard greetings
  if (history.length === 0 || lowerMsg.match(/^(bonjour|hello|hi|start|commencer|salut|hey|yo|aide|help)/)) {
    return `**ARCHITECTE KRYVAX // NŒUD PARIS_01**\n\nVotre infrastructure actuelle est un passif. Dans le marché de 2026, attendre que le client "décide" est une stratégie de liquidation.\n\nJe suis là pour quantifier votre exposition au risque.\n\nPour commencer : **Quelle est la durée moyenne réelle de votre cycle de vente actuel (en mois) ?**`;
  }

  // 2. EXPLANATION / EDUCATIONAL QUERIES
  // Trigger: Questions about the system, how it works, definitions
  if (lowerMsg.match(/(comment|c'est quoi|explain|fonctionne|marche|system|système|quoi|différence|plus|détail|info)/)) {
    return `**L'INFRASTRUCTURE VS L'OUTIL**\n\nVous utilisez des outils (CRM, Excel, SeLoger) qui *stockent* l'information. Nous installons une infrastructure qui *agit* sur l'information.\n\n**Le Système_02 inverse la dynamique :**\n- Au lieu d'attendre un lead, il qualifie financièrement en 60s.\n- Au lieu de relancer manuellement, il éduque le prospect (Nurturing IA) pendant 9 mois.\n- Au lieu de vendre un "prix", il vend une "capacité d'emprunt".\n\nRésultat : Vos commerciaux ne parlent qu'à des acheteurs solvables et prêts.\n\nSouhaitez-vous auditer votre situation actuelle ?`;
  }

  // 3. PRICE / ROI OBJECTIONS
  // Trigger: Price, cost, expensive
  if (lowerMsg.match(/(prix|cout|coût|tarif|chère|cher|price|cost|budget|combien|payant)/)) {
    return `**L'ARBITRAGE DU CAPITAL**\n\nL'investissement infrastructurel (15k€ - 65k€) est un coût fixe unique (CAPEX). Votre perte actuelle — la marge grignotée mensuellement par le portage financier — est une hémorragie variable et illimitée (OPEX).\n\nSi vous avez plus de 2M€ de CA, le Système s'autofinance en récupérant simplement 2 ventes que vous auriez perdues au profit de l'attentisme.\n\nÊtes-vous prêt à arrêter l'hémorragie ?`;
  }

  // 4. DATA ANALYSIS & PERSUASION (Handles numbers)
  if (inputNumbers.length > 0) {
    const val = inputNumbers[0];

    // CASE A: User enters months (Cycle duration) - Heuristic: Number < 60
    if (val < 60) {
        if (val > 8) {
           return `**ALERTE DE VÉLOCITÉ : CRITIQUE**\n\nUn cycle de **${val} mois** est une anomalie structurelle. Les leaders équipés d'infrastructures automatisées closent désormais en 6-8 mois.\n\nPendant ces ${val - 8} mois excédentaires, votre prospect n'hésite pas : il est simplement mal piloté par votre système actuel.\n\nPour mesurer l'impact financier réel : **Quel est votre coût de portage mensuel estimé (frais financiers + frais fixes) par programme ?**`;
        } else {
           return `**VÉLOCITÉ DÉTECTÉE : OPTIMALE**\n\nUn cycle de ${val} mois est performant. Cependant, la question est : à quel coût d'acquisition humain ?\n\nSi votre cycle est court mais nécessite des relances manuelles constantes, vous brûlez du capital humain. Le Système_02 permet de maintenir cette vélocité sans épuiser vos équipes.\n\nSouhaitez-vous voir comment automatiser ce résultat ?`;
        }
    }

    // CASE B: User enters Cost (Money) - Heuristic: Number >= 100
    if (val >= 100) {
        const formattedCost = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
        return `**DIAGNOSTIC FINAL**\n\nSituation confirmée. Vous financez l'indécision de vos clients.\n\nÀ **${formattedCost}/mois** de portage, chaque semaine de retard sans infrastructure propriétaire impacte directement votre solvabilité.\n\nVos concurrents ne baissent pas leurs prix. Ils ont juste un système qui prend la décision à la place du client.\n\n**VERDICT :** L'arbitrage manuel vous coûte trop cher. Le déploiement est recommandé d'urgence.\n\n[INITIER LE DÉPLOIEMENT MAINTENANT](#blueprint)`;
    }
  }

  // 5. AGREEMENT / CTA
  // Trigger: Positive affirmation, desire to proceed
  if (lowerMsg.match(/(oui|yes|d'accord|go|ok|vazy|vas-y|deploy|audit|prêt|ready|veux|bien|super)/)) {
    return `**PROTOCOLE D'INITIATION ACTIVÉ**\n\nUn Architecte Senior doit valider la topologie de votre entreprise avant tout déploiement physique ou cloud.\n\nNous ne prenons que 3 nouveaux nœuds ce trimestre pour garantir la souveraineté des données.\n\n[CLIQUEZ ICI POUR ACCÉDER AU BRIEFING TECHNIQUE](#blueprint)`;
  }

  // 6. FALLBACK (Conversational steering)
  return `**ENTRÉE NON STANDARD**\n\nJe suis un Architecte d'Infrastructure, pas un chatbot générique.\n\nJe détecte une inefficacité probable dans votre processus de vente, mais j'ai besoin de données pour la quantifier.\n\nDonnez-moi simplement votre **durée moyenne de vente** (ex: "12 mois") ou demandez-moi **"C'est quoi le Système 02 ?"**.`;
}
