import React from 'react';

import Movie from './components/Movie';

function App() {
  const movies = ['1', '2', '3']
  return <div>
    {movies.map(movie => (
      <h1>{movie}</h1>
    ))}
  </div>
}

export default App;