import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>BuyLoop</h1>
        <p>Your one-stop ecommerce platform</p>
        <Link to="/products" className="shop-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
}