import "./style.css";

export function CartTotal({
  setCurrentSale,
  isCartEmpty,
  setIsCartEmpty,
  currentSale,
}) {
  function roundToTwoDecimals(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function formatPrice(productPrice) {
    productPrice = roundToTwoDecimals(productPrice);
    const priceString = String(productPrice);

    return `R$${priceString.replace(".", ",")}`;
  }

  return (
    <section className="cartTotal">
      <div className="separator"></div>
      <div className="cartTotal__price">
        <span className="carTotal__price-text">Total:</span>
        <span className="carTotal__price-total">
          {formatPrice(currentSale.reduce((acc, curr) => acc + curr.price, 0))}
        </span>
      </div>
      <button
        onClick={() => {
          setCurrentSale([]);
          setIsCartEmpty(!isCartEmpty);
        }}
        className="cartTotal__removeAllbutton"
      >
        Remover todos
      </button>
    </section>
  );
}
