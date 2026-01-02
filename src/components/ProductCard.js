import React from "react";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();

  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {!cartItem ? (
        <button onClick={() => addToCart(product, 1)}>
          Add to Cart
        </button>
      ) : (
        <>
          <div className="qty-controls">
            <button
              className="qty-btn"
              onClick={() => decreaseQty(product.id)}
            >
              -
            </button>

            <span>{cartItem.qty}</span>

            <button
              className="qty-btn"
              onClick={() => increaseQty(product.id)}
            >
              +
            </button>
          </div>

          <p style={{ color: "green", fontWeight: "600" }}>
            Added
          </p>
        </>
      )}
    </div>
  );
}

export default ProductCard;