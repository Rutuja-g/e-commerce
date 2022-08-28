import React from 'react';
import ActorCard from './ActorCard';

function ActorGrid({ data }) {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country}
        />
      ))}
    </div>
  );
}

export default ActorGrid;
