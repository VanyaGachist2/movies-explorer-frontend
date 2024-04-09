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
  const [ allMoviesFromServer, setAllMoviesFromServer ] = useState([]);

  const [ isShort, setIsShort ] = useState(false);
  const [ search, setSearch ] = useState('');

  const [ textError, setTextError ] = useState(localStorage.getItem('textError') !== null ? JSON.parse(localStorage.getItem('textError'))
  : false);
  const [ preloader, setPreloader ] = useState(false);
  const [ firstText, setFirstText ] = useState(
    localStorage.getItem('firstText') !== null ? JSON.parse(localStorage.getItem('firstText'))
  : true);
  const [ firstTextMessage, setFirstTextMessage ] = useState('Начните поиск фильма');
  const [ error, setError ] = useState(false);
  const [ text, setText ] = useState('');
  
  const [ validError, setValidError ] = useState(false);
  const [ buttonValid, setButtonValid ] = useState(search.length < 1);

  const handleChange = (evt) => {
    const input = evt.target.value;
    setSearch(input);
    if (input.length < 1) {
      setValidError(true);
      setButtonValid(true);
    } else {
      setValidError(false);
      setButtonValid(false);
    }
  }

  const filterFindMovies = (movie, searchQuery, short) => {
    const result = allSearchFilteredMovies(movie, searchQuery, short);
    setAllFindMovies(result);
    if (result.length === 0) {
      setTextError(true);
      localStorage.setItem('textError', JSON.stringify(true));
    } else {
      setTextError(false);
      localStorage.setItem('textError', JSON.stringify(false));
    }
    if (short) {
      setfilteredMovies(checkBoxMovie(result));
    } else {
      setfilteredMovies(result);
    }
    localStorage.setItem('movies', JSON.stringify(result));
  }

  const handleChangeCheckBox = () => {
    setIsShort(!isShort)
    const updateMovies = isShort ? allFindMovies : checkBoxMovie(allFindMovies);
    if (updateMovies.length === 0) {
      setTextError(true);
      localStorage.setItem('textError', JSON.stringify(true));
    } else {
      setTextError(false);
      localStorage.setItem('textError', JSON.stringify(false));
      setfilteredMovies(updateMovies);
    }

    localStorage.setItem('isShort', JSON.stringify(!isShort));
  }

  const handleSubmitWithCheckBox = () => {
    localStorage.setItem('searchQuery', JSON.stringify(search));
    localStorage.setItem('isShort', JSON.stringify(isShort));
    if (allMoviesFromServer.length !== 0) {
      filterFindMovies(allMoviesFromServer, search, isShort);
    } else {
      setPreloader(true);
      setFirstText(false)
      setFirstTextMessage('');
      movieApi.getMovies()
        .then(data => {
          setAllMoviesFromServer(data)
          filterFindMovies(data, search, isShort);
        })
        .catch(err => {
          console.log(err)
          setError(true);
          setText('Произошла ошибка поиска, посмотрите в консоли!');
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
    if (localStorage.getItem('isShort') === 'true') {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setAllFindMovies(movies);
      
      if (localStorage.getItem('isShort') === 'true') {
        setfilteredMovies(checkBoxMovie(movies));
      } else {
        setfilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('firstText', JSON.stringify(firstText));
  }, [firstText]);

  return (
    <main className='movies'>
      <section className='movies__container'>
        <SearchForm errorButton={buttonValid} errorValid={validError} error={error} errorText={text} handleChange={handleChange} search={search} onMovie={handleSubmit} isShort={handleChangeCheckBox} short={isShort} />
        <MoviesCardList textFirst={firstTextMessage} isFirst={firstText} isCard={true} isOpen={preloader} textError={textError} movies={filteredMovies} onLike={onLike} onDelete={onDelete} savedMovies={savedMovies} />
      </section>
    </main>
  )
}

export default Movies;
