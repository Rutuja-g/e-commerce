import React from "react";
import { useCart } from "../lib/cart.context";

const Navbar = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantify, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantify,
    0
  );
};

export default Navbar;
