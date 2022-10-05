import React, { useCallback, useState } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import { useCart, useCartDispatch } from "../lib/cart.context";
import PRODUCTS from "../db/products.json";

function getComputedCheckoutItems(products,cartItems){
    const productsInCart=products.filter(p=>cartItems.some(item=>item.id === p.id)
}

const Checkout = () => {
  return <div>Checkout</div>;
};

export default Checkout;
