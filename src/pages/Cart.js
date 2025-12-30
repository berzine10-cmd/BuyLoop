import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, totalAmount } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map(item => (
        <div key={item.id} style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px"
        }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "60px", marginRight: "15px" }}
          />
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>₹{item.price} × {item.qty}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{totalAmount}</h2>
    </div>
  );
}