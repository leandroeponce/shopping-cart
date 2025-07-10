import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { CartModalProvider } from './Context/CartModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
      <CartProvider >
        <CartModalProvider >
          <App />
        </CartModalProvider >
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
)