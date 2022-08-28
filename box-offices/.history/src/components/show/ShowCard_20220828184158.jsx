import React from 'react';
import { Link } from 'react-router-dom';
// import { SearchCard } from '../styled';
import { StyledShowCard } from './ShowCard.styled';

function ShowCard({ id, image, name, summary }) {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </StyledShowCard>
  );
}

export default ShowCard;
