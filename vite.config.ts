
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');
  
  // FIX: Netlify injects environment variables into the Node process.env.
  // We search for multiple common naming conventions to ensure we catch the key.
  const apiKey = process.env.API_KEY || 
                 process.env.VITE_API_KEY || 
                 process.env.GOOGLE_API_KEY || 
                 process.env.GEMINI_API_KEY || 
                 env.API_KEY || 
                 env.VITE_API_KEY || 
                 env.GOOGLE_API_KEY ||
                 env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("⚠️  WARNING: API_KEY is missing in the build environment. The chat feature will not work.");
  } else {
    console.log("✅ API_KEY detected in build environment.");
  }

  return {
    plugins: [react()],
    define: {
      // Replaces 'process.env.API_KEY' in the client code with the string value of the key at build time.
      'process.env.API_KEY': JSON.stringify(apiKey)
    }
  }
})
