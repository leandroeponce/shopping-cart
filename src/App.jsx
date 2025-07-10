import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import Header from "./components/Header";

function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header/>
      <ProductList />
      <CartModal />
    </div>
  );
}

export default App;

