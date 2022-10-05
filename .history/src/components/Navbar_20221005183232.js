import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

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
      <Nav>
        {LINKS.map(({ link, text }) => (
          <NavItem key={link}>
            <NavLink key={link}>{text}</NavLink>
          </NavItem>
        ))}
      </Nav>
      <NavbarText>
        <Link
          to="/checkout"
          className="d-flex align-items-center"
          style={{ textDecoration: "none" }}
        >
          <CartSVG width={25} />
          <div
            className="circle bg-dark text-light rounded-circle d-flex justify-context-center align-items-center mx-2"
            style={{ width: 30, height: 30 }}
          >
            {cartItemsTotal}
          </div>
        </Link>
      </NavbarText>
    </BootstrapNavbar>
  );
};

export default Navbar;
