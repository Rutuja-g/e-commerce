import React from 'react';
import ShowCard from './ShowCard';

function ShowGrid({ data }) {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard key={show.id} id={show.id} name={show.name} image={show.image ? show.image.medium :} />
      ))}
    </div>
  );
}

export default ShowGrid;
