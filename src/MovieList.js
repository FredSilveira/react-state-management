import React from 'react';

const MovieList = () => {
    const movies = ([
      {
        name: 'Harry Potter',
        price: '£10',
        id: 23124
      },
      {
        name: 'Lord of the rings',
        price: '£20',
        id: 23437
      },
      {
        name: 'Godfather',
        price: '£25',
        id: 23245
      }
    ]);
  return(
    <div>
      {movies.map(movie => (
        <li>{movie.name}</li>
      ))}
    </div>
  )
}

export default MovieList;
