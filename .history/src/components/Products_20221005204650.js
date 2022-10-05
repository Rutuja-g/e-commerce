import React, { useCallback } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { useCartDispatch } from "../lib/cart.context";

const Products = ({ products }) => {
  const dispatchCart = useCartDispatch();
  const handleAddToCart = useCallback(
    (id, price, inStock) => {
      if (!inStock) {
        return;
      }
      dispatchCart({ type: "ADD_ONE", id, price });
    },
    [dispatchCart]
  );
};

export default Products;
