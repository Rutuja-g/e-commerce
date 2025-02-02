import React, { useCallback, useState } from "react";
import { Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import fakeProducts from "../db/products.json";
import categories from "../db/categories.json";
import { useFilters } from "../lib/useFilters";
import FilterCheckbox from "../components/FilterCheckbox";
import Products from "../components/Products";

function getComputedProducts(products, filters) {
  let result = [...products];

  if (filters.delivery) {
    result = result.filter((p) => p.delivery === true);
  }
}

const Category = ({ category }) => {
  const [products] = useState(
    fakeProducts.filter((p) => p.categoryId === category.id)
  );

  const [filter, dispatchFilter] = useFilters({
    delivery: false,
    inStock: false,
    expensive: false,
  });
  const filteredProducts = getComputedProducts(products, filter);

  const onCheckboxChange = useCallback(
    (ev) => {
      const checkbox = ev.target;

      dispatchFilter({
        type: "SET",
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
  );

  return (
    <Row>
      <Col xs={12} md={6} className="position-relative">
        <div className="fixed-md">
          <h2 className="h3">Filters</h2>
          <FilterCheckbox
            id="delivery"
            name="delivery"
            checked={filter.delivery}
            onChange={onCheckboxChange}
            label="Delivery"
          />
          <FilterCheckbox
            id="inStock"
            name="inStock"
            checked={filter.inStock}
            onChange={onCheckboxChange}
            label="In stock only"
          />
          <FilterCheckbox
            id="expensive"
            name="expensive"
            checked={filter.expensive}
            onChange={onCheckboxChange}
            label="Expensive (100+USD)"
          />
          <div className="mt-">
            Showing {filteredProducts.length}out of {products.length}
          </div>
        </div>
      </Col>
      <Col xs={12} md={6} className="mt-3 mt-md-0">
        <h1 className="h3">{category.name}</h1>
        <div>
          <Products products={filteredProducts} />
        </div>
      </Col>
    </Row>
  );
};

export default Category;
