import { useState,useEffect } from 'react'

import MovieCard from './MovieCard'
import './App.css'

//cc11fe65

const API_URL = 'http://www.omdbapi.com?apikey=cc11fe65'

const movie1 = {
  "Title": "On the Set: The Incredibles",
  "Year": "2004",
  "imdbID": "tt0433611",
  "Type": "movie",
  "Poster": "N/A"
}
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title }`);
    const data = await response.json();

    setMovies(data.Search);
  }
 
  useEffect(() => {
    searchMovies('The Incredibles');
  }, []);
  return (
    <div className='app'> 
      <h1>MovieLand</h1>

      <div className ="search">
        <input
           placeholder="Search For Movies"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img className='image'
         src="search.svg" alt="search"
        
        
        />
      </div>
      {

        movies?.length > 0
         ? (
             <div className="container">
               {
                movies.map((movie) => (
                  <MovieCard movie={movie}/>
                ))
               }
             </div>
           ) :
           (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
           )


      }
       
    </div>
  );
}

export default App
