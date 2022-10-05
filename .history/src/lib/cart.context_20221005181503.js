import React, { createContext, useContext, useEffect, useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "RESET":
      return [];

    case "ADD_ONE": {
      const isInCart = state.some((item) => item.id === action.id);

      return isInCart
        ? state.map((item) =>
            item.id === action.id
              ? { ...item, quantify: item.quantify + 1 }
              : item
          )
        : state.concat({ id: action.id, quantify: 1, price: action.price });
    }
    case "REMOVE_ONE": {
      const isInCart = state.some((item) => item.id === action.id);

      return isInCart
        ? state.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  quantify:
                    item.quantify > 1 ? item.quantify - 1 : item.quantify,
                }
              : item
          )
        : state;
    }

    case "REMOVE": {
      return state.filter((item) => item.id !== action.id);
    }
  }
}

const CartContext = createContext();
const DispatchCartContext = createContext();

const LS_KEY = "shopping_cart";

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
