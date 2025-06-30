import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-lg shadow-md flex justify-between items-center mb-4 bg-white dark:bg-gray-800">
      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
