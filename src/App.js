import React, {useEffect, useState} from 'react'
import Movie from './components/Movies';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ce213564fafb74b60d0dca1fde29d2f&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=4ce213564fafb74b60d0dca1fde29d2f&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  } 

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm(" ");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const refreshPage = ()=>{
     window.location.reload();
  }

  return (
    <>
      <header>
        <button className="btn" onClick={refreshPage}>Moviness</button>
        <form onSubmit={ handleOnSubmit }>
          <input className="search" type="text" placeholder="Search..." value={ searchTerm } onChange={ handleOnChange } />
        </form>
    </header>
    <div className="movie-container">
      { movies.length > 0 && movies.map((movie) =>
        <Movie key={movie.id} {...movie}/>)}
      </div>
      </>
  );
}

export default App;


