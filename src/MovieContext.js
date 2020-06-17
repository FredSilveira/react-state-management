import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
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

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
