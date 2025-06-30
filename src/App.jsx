import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import ThemeButton from "./components/ThemeButton"
import { LuShoppingCart } from "react-icons/lu";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <ThemeButton />
      <ProductList />
      <div className="fixed top-4 right-4"><LuShoppingCart /></div>
      <Cart />
    </div>
  )
}

export default App
