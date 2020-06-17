import React, { useContext } from 'react';
import { MovieContext } from'./MovieContext';


const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies.lenght);

  return(
    <nav>
      <h1>Movie Buff</h1>
      <p>{movies.length} Available Movies</p>
    </nav>
  )
}

export default Nav;
