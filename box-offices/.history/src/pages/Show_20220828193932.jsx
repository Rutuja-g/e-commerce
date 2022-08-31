import React from 'react';
import { useParams } from 'react-router-dom';

function Show() {
  const params = useParams();
  console.log('params', params);
  return <div>This is Show Page</div>;
}

export default Show;
