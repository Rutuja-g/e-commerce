import React, { useCallback, useState } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import { useCart, useCartDispatch } from "../lib/cart.context";
import PRODUCTS from "../db/products.json";

function getComputedCheckoutItems(products, cartItems) {
  const productsInCart = products.filter((p) =>
    cartItems.some((item) => item.id === p.id)
  );
  return productsInCart.map((product) => {
    return {
      ...product,
      quantity: cartItems.find((item) => item.id === product.id).quantity,
    };
  });
}

const Checkout = () => {
  const cart = useCart();
  const dispatchCart = useCartDispatch();
  const [products] = useState(PRODUCTS);

  const checkoutItems = getComputedCheckoutItems(products, cart);

  const cartPriceTotal = checkoutItems.reduce(
    (total, item) => total + total.price * item.quantity,
    0
  );
};

export default Checkout;
