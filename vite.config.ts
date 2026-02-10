
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Defining empty globals just in case they are referenced somewhere else, 
    // although we removed them from the active code.
    '__KEY_PART_1__': JSON.stringify(""),
    '__KEY_PART_2__': JSON.stringify("")
  }
})
