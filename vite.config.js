import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         marquee: 'marquee 20s linear infinite',
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         }
//       }
//     }
//   }
// }

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(),  tailwindcss()],
})
