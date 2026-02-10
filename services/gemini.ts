
// EMERGENCY MOCK IMPLEMENTATION
// Removed @google/genai import to prevent build/runtime issues with keys

export async function chatWithArchitect(message: string, history: { role: 'user' | 'model', text: string }[]) {
  // Simulate network delay for realism (1.2 seconds)
  await new Promise(resolve => setTimeout(resolve, 1200));

  const lowerMsg = message.toLowerCase();
  // Extract numbers from input
  const inputNumbers = message.match(/\d+/g)?.map(Number) || [];

  console.log("Mock Agent Input:", message);

  // 1. Initial Context / Greeting
  // If it's the first message or contains greeting keywords
  if (history.length === 0 || lowerMsg.match(/^(hi|hello|bonjour|start|commencer|salut|aide|help)/)) {
    return `## INITIALISATION DU PROTOCOLE\n\n**STATUT : EN LIGNE**\n**NŒUD : PARIS_01**\n\nJe suis l'Architecte d'Infrastructure KRYVAX.\n\nPour calculer votre perte de capital actuelle, j'ai besoin de deux variables :\n\n1. Durée moyenne de votre cycle de vente (ex: 12 mois)\n2. Coût de portage mensuel total (ex: 15000)\n\n*En attente de données...*`;
  }

  // 2. Data Analysis (if numbers are detected)
  // Heuristic: If we see numbers, assume user is providing the requested data
  if (inputNumbers.length > 0) {
    // Try to guess which is which based on magnitude
    const months = inputNumbers.find(n => n < 60) || 12; // Assume smaller number is months (e.g. 12)
    const cost = inputNumbers.find(n => n > 100) || 12000; // Assume larger number is cost (e.g. 12000)

    const annualLoss = cost * months;
    const formattedLoss = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(annualLoss);
    const potentialSavings = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(annualLoss * 0.4);

    return `## ANALYSE TERMINÉE\n\nParamètres détectés :\n- Cycle : **${months} mois**\n- Coût de portage : **${cost} €/mois**\n\n### DIAGNOSTIC\nVotre architecture de vente actuelle génère une perte de capital brute de **${formattedLoss}** par cycle.\n\nEn automatisant la qualification et le nurturing (Système_02), vous pourriez récupérer **${potentialSavings}** de marge nette par lot.\n\n**VERDICT :**\nVotre infrastructure est critique. L'arbitrage manuel vous coûte trop cher.\n\nTapez **"ARCHITECTURE"** pour voir la solution recommandée.`;
  }

  // 3. Solution Presentation
  if (lowerMsg.includes('architecture') || lowerMsg.includes('solution') || lowerMsg.includes('system') || lowerMsg.includes('système') || lowerMsg.includes('oui') || lowerMsg.includes('yes')) {
    return `## RECOMMANDATION : SYSTÈME_02\n\n**Infrastructure d'Accélération Décisionnelle**\n\n- **Cœur IA :** Qualification en 60 secondes\n- **Comparateur :** Analyse temps réel vs SeLoger\n- **Nurturing :** Suivi automatisé sur 12 mois\n\n**DÉPLOIEMENT :** 6 Semaines\n**ROI ESTIMÉ :** 8 Mois\n\n**PROCHAINE ÉTAPE :**\n[INITIER LE DÉPLOIEMENT](#blueprint)`;
  }

  // 4. Fallback for unrecognized input
  return `## ENTRÉE NON VALIDE\n\nJe suis un système d'analyse financière, pas un assistant conversationnel.\n\nVeuillez entrer vos données chiffrées (ex: "14 mois, 20000 euros") pour lancer la simulation.`;
}
