import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-500 text-xl font-bold hover:cursor-pointer">
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">🛒 Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Your Cart is emply.</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 mb-2 rounded">
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p>${product.price} x {product.quantity}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button onClick={() => updateQuantity(product.id, product.quantity - 1)} className="px-2 bg-gray-300 dark:bg-gray-600 rounded hover:cursor-pointer">-</button>
                <span>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className="px-2 bg-gray-300 dark:bg-gray-600 rounded hover:cursor-pointer">+</button>
                <button onClick={() => removeFromCart(product.id)} className="px-2 bg-red-500 text-white rounded hover:cursor-pointer">X</button>
              </div>
            </div>
          ))
        )}
        <div className="mt-4 text-right font-bold">
          Total: ${totalPrice}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
