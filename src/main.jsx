import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
      <CartProvider >
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
)