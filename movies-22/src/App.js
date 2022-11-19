import React, { useEffect, useState } from 'react';

import Movie from './components/Movie';

// Shouldn't have API key in API. This is for test puposes only.
// API from https://developers.themoviedb.org/3
// My Movie DB API Key: 49247a8180475872d16c9bea956e9598
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=49247a8180475872d16c9bea956e9598&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=49247a8180475872d16c9bea956e9598&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)

    setSearchTerm(" ");
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search" 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleOnChange}
            />
        </form>
      </header>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>

    </div>
  )
  
}

export default App;