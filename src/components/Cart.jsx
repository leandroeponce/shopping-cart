import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuatity, totalPrice } = useContext(CartContext);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 mb-2 rounded shadow">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p>${product.price} x {product.quantity}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={() => updateQuatity(product.id, product.quantity - 1)} className="px-2 bg-gray-200 dark:bg-gray-600 rounded">-</button>
              <span>{product.quantity}</span>
              <button onClick={() => updateQuatity(product.id, product.quantity + 1)} className="px-2 bg-gray-200 dark:bg-gray-600 rounded">+</button>
              <button onClick={() => removeFromCart(product.id)} className="px-2 bg-red-500 text-white rounded">X</button>
            </div>
          </div>
        ))
      )}
      <div className="mt-4 text-right font-bold">
        Total: ${totalPrice}
      </div>
    </div>
  );
};

export default Cart;
