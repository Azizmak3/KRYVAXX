
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');
  
  // FIX: Netlify injects environment variables into the Node process.env.
  // loadEnv() only reads from local .env files (which are usually gitignored).
  // We must check process.env.API_KEY to capture the value set in the Netlify Dashboard.
  const apiKey = process.env.API_KEY || env.API_KEY;

  if (!apiKey) {
    console.warn("⚠️  WARNING: API_KEY is missing in the build environment. The chat feature will not work.");
  }

  return {
    plugins: [react()],
    define: {
      // Replaces 'process.env.API_KEY' in the client code with the string value of the key at build time.
      'process.env.API_KEY': JSON.stringify(apiKey)
    }
  }
})
