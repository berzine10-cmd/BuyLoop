import { createContext, useContext, useState } from "react";

const CartContext = createContext();

/* ================================
   CART PROVIDER
================================ */
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  /* ---------- ADD TO CART ---------- */
  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [...prev, { ...product, qty }];
    });
  };

  /* ---------- INCREASE QTY ---------- */
  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  /* ---------- DECREASE QTY ---------- */
  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  /* ---------- REMOVE ITEM ---------- */
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  /* ---------- TOTAL AMOUNT ---------- */
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ================================
   CUSTOM HOOK
================================ */
export function useCart() {
  return useContext(CartContext);
}