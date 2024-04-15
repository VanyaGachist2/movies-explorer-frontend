import SearchForm from "../SearchForm/SearchForm.jsx"
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx"
import './SavedMovies.css';
import { useEffect, useState } from "react";
import { allSearchFilteredMovies, checkBoxMovie } from "../../utils/searchFilter.js";

function SavedMovies ({ savedMovies, onDelete }) {
  const [ showSavedMovies, setShowSavedMovies ] = useState(savedMovies);
  const [ filteredMovies, setfilteredMovies ] = useState(showSavedMovies);

  const [ isShort, setIsShort ] = useState(false);
  const [ searchQuerySaved, setSearchQuerySaved ] = useState('');

  const [ error, setError ] = useState(false);
  const [ textError, setTextError ] = useState('');
  const [ firstText, setFirstText ] = useState(false);
  const [ firstTextMessage, setFirstTextMessage ] = useState('');

  const [ validError, setValidError ] = useState(false);
  const [ validButton, setValidButton ] = useState(searchQuerySaved.length < 1);

  useEffect(() => {
    setShowSavedMovies(savedMovies);
    setfilteredMovies(savedMovies);
    if (savedMovies.length === 0) {
      setFirstText(true);
      setFirstTextMessage('Таких фильмов нет!');
    } else {
      setFirstText(false);
    }
  }, [savedMovies]);

  useEffect(() => {
    if (isShort) {
      const updateMovies = checkBoxMovie(filteredMovies);
      setShowSavedMovies(updateMovies);
    } else {
      setShowSavedMovies(filteredMovies);
    }

    localStorage.setItem('isShortSaved', JSON.stringify(isShort));
  }, [isShort, filteredMovies]);

  const handleChange = (evt) => {
    const inputSaved = evt.target.value;
    setSearchQuerySaved(inputSaved);

    if (inputSaved.length < 1) {
      setValidError(true);
      setValidButton(true);
    } else {
      setValidError(false);
      setValidButton(false);
    }
  }

  const handleChangeCheck = () => {
    setIsShort(!isShort)
    const updateMovies = isShort ? filteredMovies : checkBoxMovie(filteredMovies);
    if(updateMovies.length === 0) {
      setError(true);
      setTextError('Фильмы по данному фильтру не найдены');  
    } else {
      setError(false);
      setTextError('');
      setShowSavedMovies(updateMovies);
    }

    if (!isShort) {
      localStorage.setItem('isShortSaved', true);
    } else {
      localStorage.setItem('isShortSaved', false);
    }
  }

  const handleSubmit = () => {
    const result = allSearchFilteredMovies(savedMovies, searchQuerySaved, isShort);
    if (result.length === 0) {
      setError(true);
      setTextError('Таких фильмов нет');
    } else {
      setError(false);
      setFirstText(false);
      const filteredResult = isShort ? checkBoxMovie(result) : result;
      setfilteredMovies(filteredResult);
      setShowSavedMovies(result);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('isShortSaved') === 'true') {
      setIsShort(true);
      setShowSavedMovies(checkBoxMovie(savedMovies));
    } else {
      setIsShort(false);
      setShowSavedMovies(savedMovies);
    }
  }, [savedMovies]);

  useEffect(() => {
    if (showSavedMovies.length === 0) {
      setFirstText(true);
      setFirstTextMessage('Фильмы по данному фильтру не найдены');
    } else {
      setError(false);
      setTextError('');
      setFirstText(false);
    }
  }, [showSavedMovies]);

  return (
    <main className='savedmovies'>
      <section className="savedmovies__container">
      <SearchForm errorValid={validError} errorButton={validButton} error={error} errorText={textError} onMovie={handleSubmit} handleChange={handleChange} short={isShort} isShort={handleChangeCheck} />
      {savedMovies.length > 0 ? (
        <MoviesCardList isFirst={firstText} textFirst={firstTextMessage} movies={showSavedMovies} onDelete={onDelete} savedMovies={savedMovies} />
      ) : (
        <div className="savedmovies__block">
          <h1 className="savedmovies__nothing">Сохраненных карточек нет</h1>
        </div>
      )
      }
      </section>
    </main>
  )
}

export default SavedMovies;
