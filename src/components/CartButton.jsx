import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = ({ onClick }) => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-3 rounded hover:cursor-pointer"
    >
      <div className="relative">
        <LuShoppingCart size={18} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </button>
  );
};

export default CartButton;

