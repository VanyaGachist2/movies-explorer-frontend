import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { movieApi } from '../../utils/MoviesApi.js';

function Movies({ onLike, savedMovies }) {
  const [ movies, setResultMovies ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ shortFilm, setShortFilm ] = useState(false);

  const handleSearch = (value, isShort) => {
    setSearchQuery(value);
    setShortFilm(isShort);
  }

  const getFindMovies = () => {
    movieApi.getMovies()
      .then((data) => {
        const result = data.filter(m => m.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
        if (shortFilm) {
          result = result.filter(m => m.duration <= 30);
        }
        setResultMovies(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (searchQuery) {
      getFindMovies()
    }
  }, [searchQuery]);

  useEffect(() => {
    localStorage.setItem('movies', movies);
  })


  return (
    <main className='movies'>
      <SearchForm  onMovie={handleSearch} />
      <MoviesCardList movies={movies} onLike={onLike} savedMovies={savedMovies} />
    </main>
  )
}

export default Movies;
