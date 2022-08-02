import Product from "../Product";
import "./style.css";

function ProductsList({
  products,
  handleClick,
  isFilteredProducts,
  filteredProducts,
}) {
  return (
    <div className="div-ListItens">
      {!isFilteredProducts
        ? products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))
        : filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))}
    </div>
  );
}

export default ProductsList;
