import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { movieApi } from '../../utils/MoviesApi';
import { checkBoxMovie, allSearchFilteredMovies } from '../../utils/searchFilter'; 
import { useLocation } from 'react-router-dom';

function Movies({ onLike, onDelete, savedMovies }) {
  const location = useLocation();
  const [ allFindMovies, setAllFindMovies ] = useState([]);
  const [ filteredMovies, setfilteredMovies ] = useState([]);

  const [ isShort, setIsShort ] = useState(false);
  const [ search, setSearch ] = useState('');

  const [ textError, setTextError ] = useState(false);
  const [ preloader, setPreloader ] = useState(false);
  const [ firstText, setFirstText ] = useState(true);

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  }

  const handleChangeCheck = (short) => {
    setIsShort(!short);
  }

  console.log(isShort);

  const filterFindMovies = (movie, searchQuery, short) => {
    const result = allSearchFilteredMovies(movie, searchQuery, short);
    setAllFindMovies(result);
    if (result.length === 0) {
      setTextError(true);
    } else {
      setTextError(false);
    }
    if (short) {
      setfilteredMovies(checkBoxMovie(result));
    } else {
      setfilteredMovies(result);
    }
    localStorage.setItem('movies', JSON.stringify(result));
    localStorage.setItem('allMovies', JSON.stringify(movie));
  }

  const handleChangeCheckBox = () => {
    handleChangeCheck(isShort)
    if(!isShort) {
      setfilteredMovies(checkBoxMovie(allFindMovies))
      localStorage.setItem('isShort', JSON.parse(true));
    } else {
      setfilteredMovies(allFindMovies);
      localStorage.setItem('isShort', JSON.parse(false));
    }
    localStorage.setItem('isShort', JSON.stringify(!isShort));
  }

  const handleSubmitWithCheckBox = () => {
    localStorage.setItem('searchQuery', JSON.stringify(search));
    localStorage.setItem('isShort', JSON.stringify(isShort));
    if (localStorage.getItem('allMovies')) {
      filterFindMovies(JSON.parse(localStorage.getItem('allMovies')), search, isShort);
    } else {
      setPreloader(true);
      setFirstText(false)
      movieApi.getMovies()
        .then(data => {
          filterFindMovies(data, search, isShort);
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setPreloader(false);
        })
    }
  }

  const handleSubmit = () => {
    handleSubmitWithCheckBox();
  }
  
  useEffect(() => {
    const storedSearchQuery = localStorage.getItem('searchQuery');
    if (storedSearchQuery !== null && location.pathname === '/movies') {
      setSearch(JSON.parse(storedSearchQuery));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies') && localStorage.getItem('isShort')) {
      const movie = JSON.parse(localStorage.getItem('movies'));
      const short = JSON.parse(localStorage.getItem('isShort'));
      setFirstText(false)
      if (short === true) {
        setfilteredMovies(checkBoxMovie(movie));
      } else {
        setfilteredMovies(movie);
      }
    }
  }, [])

  return (
    <main className='movies'>
      <section className='movies__container'>
        <SearchForm handleChange={handleChange} search={search} onMovie={handleSubmit} isShort={handleChangeCheckBox} short={isShort} />
        <MoviesCardList isFirst={firstText} isCard={true} isOpen={preloader} textError={textError} movies={filteredMovies} onLike={onLike} onDelete={onDelete} savedMovies={savedMovies} />
      </section>
    </main>
  )
}

export default Movies;
