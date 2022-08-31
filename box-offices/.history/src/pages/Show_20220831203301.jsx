import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

function Show() {
  const { id } = useParams();
  useEffect(() => {
    console.log('use effect run');

    apiGet('https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast');
  }, []);
  //   console.log('params', params);OO
  return <div>This is Show Page</div>;
}

export default Show;
