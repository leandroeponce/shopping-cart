import { createContext, useState, useContext } from "react";

const CartUIContext = createContext();

export const CartModalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartUIContext.Provider value={{ isCartOpen, toggleCart, openCart, closeCart }}>
      {children}
    </CartUIContext.Provider>
  );
};

// Custom hook para facilitar el uso
export const useCartModal = () => useContext(CartUIContext);
