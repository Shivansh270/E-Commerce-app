import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  // const [searchTerm, setSearchTerm] = useState('')

  const getResults = async () => {};

  const value = {
    categories,
    setCategories,
    products,
    setProducts,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
