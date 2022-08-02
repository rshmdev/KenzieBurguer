import "./style.css";

function Product({ product, handleClick }) {
  return (
    <>
      <div id={product.id} className="product">
        <figure className="product__figure">
          <img src={product.img} alt="products" />
          <figcaption hidden>products</figcaption>
        </figure>
        <div className="product__info">
          <h3 className="product__info__title">{product.name}</h3>
          <span className="product__info__category">{product.category}</span>
          <span className="product__info__price">
            R$ {String(product.price.toFixed(2)).replace(".", ",")}
          </span>
          <button
            onClick={(e) =>
              handleClick(e.target.parentElement.parentElement.id)
            }
            className="product__info__button"
          >
            Adicionar
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
