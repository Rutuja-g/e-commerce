import React, { createContext, useReducer } from "react";

export const CartProvider = ({ children }) => {
  const [cart,dispatchCart]=useReducer(cartReducer),[],initialValue=>{
    const persistedValue = localStorage.getItem(LS_KEY);
    
  }
};

export default createContext;
