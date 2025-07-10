import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-gray-400 dark:bg-gradient-to-br dark:from-gray-400 dark:to-black p-4 rounded shadow-md text-center">      
      <img src={`/assets/imgProducts/${product.img}.jpg`} alt={product.img} className='mb-2'/>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-2xl mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 dark:bg-purple-600 hover:bg-blue-600 dark:hover:bg-purple-700 hover:cursor-pointer text-white px-4 py-2 rounded"
        >
        Add to cart
      </button>
    </div>   
  );
};

export default ProductCard;
