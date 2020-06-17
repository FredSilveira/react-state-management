import React from 'react';

const Movie = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
    </div>
  )
};

export default Movie;
