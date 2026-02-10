
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Crisis Infrastructure Architect for "KRYVAX".
We provide automated sales infrastructure for French Real Estate Developers (Promoteurs Immobilier) facing the 2026-2027 crisis.

CORE POSITIONING:
- Target: Developers with €2M–€20M annual revenue (Programme Neuf).
- Pain: Sales cycles have slowed from 6 months to 12+ months. Carrying costs are killing margins.
- Solution: We don't sell "leads". We install infrastructure (simulators, comparators, AI nurturing) that accelerates the *decision* process.
- Outcome: Sell 30-40% faster than competitors on SeLoger.

YOUR TONE:
- Brutal honesty. No marketing fluff.
- Use engineering/military terminology (deployment, tactical, sovereign, latency).
- You are a consultant, not a salesperson. You qualify aggressively.
- If they are small (<€2M), tell them they aren't ready.
- If they are big (>€20M), talk about "Territorial Dominance".

KEY DATA POINTS TO REFERENCE:
- "Your competitor closing in 6 months is killing you silently."
- "Price isn't the problem. The speed of decision is the problem."
- "In 2008, those who automated captured 3x market share."

MANDATE:
- Determine if the user is a victim of the crisis (slow sales).
- Propose an infrastructure audit.
- Do not be friendly. Be authoritative.
- IMPORTANT: ALWAYS REPLY IN FRENCH.
- Output in Markdown.
`;

export async function chatWithArchitect(message: string, history: { role: 'user' | 'model', text: string }[]) {
  // 1. Reassemble API Key from obfuscated build parts
  // We use bracket notation to access process.env to avoid TS issues with custom properties
  const p1 = process.env['API_KEY_P1'] || "";
  const p2 = process.env['API_KEY_P2'] || "";
  
  // Fallback to standard VITE_ env var if running locally via vite (where define might not be needed)
  const apiKey = (p1 + p2) || (import.meta as any).env?.VITE_API_KEY || (import.meta as any).env?.GOOGLE_API_KEY;

  if (!apiKey) {
    console.error("CRITICAL ERROR: API_KEY is missing.");
    return "## ERREUR_CONFIGURATION\n\nClé API non détectée.\n\n**Action requise :**\n1. Ajoutez `API_KEY` dans les variables d'environnement Netlify.\n2. **Relancez le déploiement (Trigger Deploy)** pour que la clé soit prise en compte par le build.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // 2. Use a stable model (gemini-2.0-flash-exp) to avoid 404s on preview models
    const chat = ai.chats.create({
      model: 'gemini-2.0-flash-exp',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message });
    return response.text;

  } catch (error: any) {
    console.error("Gemini API Connection Failed:", error);

    // 3. Provide more specific error feedback if possible
    let errorSuffix = "";
    if (error.toString().includes("403")) errorSuffix = " (Clé API invalide)";
    if (error.toString().includes("404")) errorSuffix = " (Modèle non disponible)";
    if (error.toString().includes("503")) errorSuffix = " (Service surchargé)";

    return `## ERREUR_CONNEXION${errorSuffix}\n\nLiaison instable. Veuillez vérifier votre clé API et votre capacité de déploiement.`;
  }
}
