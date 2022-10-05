import React, { createContext, useEffect, useReducer } from "react";

const CartContext = createContext();
const DispatchCartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, [], (initialValue) => {
    const persistedValue = localStorage.getItem(LS_KEY);
    return persistedValue ? JSON.parse(persistedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <DispatchCartContext.Provider value={dispatchCart}>
      <createContext.Provider value={cart}>{children} </createContext.Provider>
    </DispatchCartContext.Provider>
  );
};

export default createContext;
