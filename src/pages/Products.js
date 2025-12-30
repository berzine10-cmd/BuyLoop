import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Products</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}