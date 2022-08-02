import logo from "./logo.png";
import { useState } from "react";
import "./style.css";

function Header({
  products,
  setFilteredProducts,
  isFilteredProducts,
  setIsFilteredProducts,
}) {
  const [input, setInput] = useState("");
  return (
    <header className="appHeader">
      <img src={logo} alt="logoHeader" />

      <form className="header__inputForm">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="header__inputForm__input"
          type="text"
          placeholder="Digitar pesquisa"
        />
        <button
          onClick={() => {
            if (!isFilteredProducts) {
              setIsFilteredProducts(true);
            } else if (!input) {
              setIsFilteredProducts(false);
            }

            setFilteredProducts(
              products.filter(
                (product) =>
                  product.name.toLowerCase().includes(input.toLowerCase()) ||
                  product.category.toLowerCase().includes(input.toLowerCase())
              )
            );
          }}
          className="header__inputForm__button"
          type="button"
        >
          Pesquisar
        </button>
      </form>
    </header>
  );
}

export default Header;
