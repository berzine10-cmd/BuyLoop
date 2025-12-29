function Cart() {
  return (
    <div className="page">
      <h1>Your Cart</h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginTop: "20px"
        }}
      >
        <p>No items in cart.</p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#27ae60",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Cart;