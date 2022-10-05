import React from "react";
import {
    Navbar as BootstrapNavbar,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

import { useCart } from "../lib/cart.context";

const Navbar = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantify, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantify,
    0
  );

  return (
    <BootstrapNavbar color="light" light classname="px-0 border-bottom mb-3">
<Nav
    </BootstrapNavbar>
  )
};

export default Navbar;
