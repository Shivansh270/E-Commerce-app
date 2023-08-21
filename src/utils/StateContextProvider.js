import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  // const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation();

  const handleAddToCart = (product, quantity) => {
    const items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleRemoveFromCart = () => {
    const items = [...cartItems];
    items = items?.filter((p) => p.id !== product?.id);
    setCartItems(items);
  };

  const getResults = async () => {};

  const value = {
    products,
    setProducts,
    categories,
    setCategories,
    cartItems,
    setCartItems,
    handleAddToCart,
    cartCount,
    handleRemoveFromCart,
    showCart,
    setShowCart,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
