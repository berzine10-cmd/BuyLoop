function Home() {
  return (
    <div className="page">
      <h1>Welcome to ShopEase</h1>
      <p>Your one-stop ecommerce platform.</p>

      <div
        style={{
          marginTop: "40px",
          padding: "40px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <h2>Why ShopEase?</h2>
        <ul>
          <li>✔ Best prices</li>
          <li>✔ Fast delivery</li>
          <li>✔ Trusted products</li>
          <li>✔ Easy checkout</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;