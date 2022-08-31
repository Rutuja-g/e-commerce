import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Show() {
  const { id } = useParams();

  //   console.log('params', params);OO
  return <div>This is Show Page</div>;
}

export default Show;
