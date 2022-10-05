import React, { useCallback, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import fakeProducts from '../db/products.json';
import categories from '../db/categories.json';
import { useFilters } from '../lib/useFilters';
import FilterCheckbox from '../components/FilterCheckbox';
import Products from '../components/Products';
const Category = ({category}) => {

  const [products]=useState(
    fakeProducts.filter(p=>p.categoryId === category.id)   
  );

  const [filter,dispatchFilter] = useFilters({
    delivery:false,
    inStock:false,
    expensive:false,
  });
  const filteredProducts = getComputedProducts(products,filter);

  const onCheckboxChange = useCallback(
    ev=>{
        const checkbox=ev.target;

        dispatchFilter({
            type:'SET',
            filterName:checkbox.name,
            value:checkbox.checked,
        });
    },[dispatchFilter]
  );

  return (
    <Row
  )
};

export default Category;
