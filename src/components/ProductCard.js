import { useCart } from "../context/CartContext";
import "./ProductCard.css";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        className={`add-btn ${added ? "added" : ""}`}
        onClick={handleAdd}
        disabled={added}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}