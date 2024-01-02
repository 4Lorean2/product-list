import ProductCard from "./ProductCard";
import "./Products.scss";

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
