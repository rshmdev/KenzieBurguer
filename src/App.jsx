import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilteredProducts, setIsFilteredProducts] = useState(false);

  function handleClick(id) {
    if (isCartEmpty) {
      setIsCartEmpty(!isCartEmpty);
    }

    if (!currentSale.find((product) => Number(id) === product.id)) {
      setCurrentSale([
        products.find((product) => product.id === Number(id)),
        ...currentSale,
      ]);
    }
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <div className="App">
      <Header
        setIsFilteredProducts={setIsFilteredProducts}
        isFilteredProducts={isFilteredProducts}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <main>
        <ProductsList
          products={products}
          handleClick={handleClick}
          isFilteredProducts={isFilteredProducts}
          filteredProducts={filteredProducts}
        />

        <Cart
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          isCartEmpty={isCartEmpty}
          setIsCartEmpty={setIsCartEmpty}
        />
      </main>
    </div>
  );
}

export default App;
