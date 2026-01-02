import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalAmount
  } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px"
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "60px", marginRight: "15px" }}
          />

          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>₹{item.price} × {item.qty}</p>
          </div>

          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>

          <button
            style={{ marginLeft: "15px" }}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* ✅ TOTAL + BUY SECTION (THIS FIXES WARNING) */}
      {cartItems.length > 0 && (
        <>
          <hr />
          <h3>Total: ₹{totalAmount}</h3>
          <button style={{ marginTop: "10px" }}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}