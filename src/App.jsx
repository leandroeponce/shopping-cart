import { useState } from "react";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import Header from "./components/Header";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header isOpen={isCartOpen} onClose={toggleCart}/>
      <ProductList />
      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
}

export default App;

