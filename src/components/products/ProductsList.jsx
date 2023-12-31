import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className="card-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} /> */}

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
