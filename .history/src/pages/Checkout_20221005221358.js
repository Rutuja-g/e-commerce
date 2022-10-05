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

  const handleAdd = useCallback(
    (id) => {
      dispatchCart({ type: "REMOVE_ONE", id });
    },
    [dispatchCart]
  );

  const handleRemove = useCallback(
    (id) => {
      dispatchCart({ type: "REMOVE", id });
    },
    [dispatchCart]
  );

  return (
    <div>
      <h1 className="h3 mb-4">Checkout</h1>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th style={{ borderTop: 0 }}></th>
              <th style={{ borderTop: 0 }}>Name</th>
              <th style={{ borderTop: 0 }}>Price</th>
              <th style={{ borderTop: 0 }}>Quantity</th>
              <th style={{ borderTop: 0 }}></th>
            </tr>
          </thead>
          <tbody>
            {checkoutItems.map((el) => (
              <tr>
                <td>
                  <img />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Checkout;
