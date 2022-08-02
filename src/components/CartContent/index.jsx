import "./style.css";
import { CartTotal } from "../CartTotal";
import { useEffect } from "react";

export function CartContent({
  currentSale,
  setCurrentSale,
  isCartEmpty,
  setIsCartEmpty,
}) {
  function formatCartContentName(name) {
    if (name.length > 14) {
      return name.slice(0, 14) + "...";
    }
    return name;
  }

  useEffect(() => {
    if (!currentSale.length) setIsCartEmpty(!isCartEmpty);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSale]);

  return (
    <>
      <div className="cart__content">
        {currentSale.map((product) => {
          return (
            <div id={product.id} key={product.id} className="cartItem">
              <div className="cartItem__imgAndTitleDiv">
                <figure className="cartItem__figure">
                  <img src={product.img} alt={product.name} />
                  <figcaption hidden>{product.name}</figcaption>
                </figure>
                <div className="cartItem__info">
                  <h3 className="cartItem__info--h3">
                    {formatCartContentName(product.name)}
                  </h3>
                  <span className="cartItem__info--span">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="cartItem__buttonDiv">
                <button
                  onClick={(e) => {
                    setCurrentSale(
                      currentSale.filter(
                        (product) =>
                          product.id !==
                          Number(e.target.parentElement.parentElement.id)
                      )
                    );
                  }}
                  className="cartItem__buttonDiv--button"
                >
                  remover
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <CartTotal
        setIsCartEmpty={setIsCartEmpty}
        isCartEmpty={isCartEmpty}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
      />
    </>
  );
}
