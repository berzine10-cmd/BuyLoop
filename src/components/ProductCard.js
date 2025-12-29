function Products() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 2999 },
    { id: 2, name: "Smart Watch", price: 4999 },
    { id: 3, name: "Bluetooth Speaker", price: 1999 },
    { id: 4, name: "Gaming Mouse", price: 1499 },
    { id: 5, name: "Mechanical Keyboard", price: 3499 },
    { id: 6, name: "USB-C Hub", price: 1299 }
  ];

  return (
    <div className="page">
      <h1>Products</h1>
      <p>Browse our latest products</p>

      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;