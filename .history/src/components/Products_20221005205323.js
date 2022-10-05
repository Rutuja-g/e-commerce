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
  if (products.length === 0) {
    return <div>No products found</div>;
  }
  return products.map(
    ({
      currency,
      delivery,
      inStock,
      name,
      price,
      thumbnail,
      ...restOfProduct
    }) => (
      <Card key={restOfProduct.id} className="mb-3">
        <CardImg top width="100%" src={thumbnail} alt={name} className="h-50" />
        <CardBody className="font-weight">
          <CardTitle className="h5">{name}</CardTitle>
          <CardSubtitle className="h5 mb-2">${name}</CardSubtitle>
          <CardText> </CardText>
        </CardBody>
      </Card>
    )
  );
};

export default Products;
