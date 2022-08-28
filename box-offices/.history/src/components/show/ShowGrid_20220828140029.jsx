import React from 'react';
import ShowCard from './ShowCard';

function ShowGrid({ data }) {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard key={show.id} id={show.id} name={show.name} image={} />
      ))}
    </div>
  );
}

export default ShowGrid;
