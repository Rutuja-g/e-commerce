import React, { createContext, useEffect, useReducer } from "react";

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, [], (initialValue) => {
    const persistedValue = localStorage.getItem(LS_KEY);
    return persistedValue ? JSON.parse(persistedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(cart));
  }, [cart]);
};

export default createContext;
