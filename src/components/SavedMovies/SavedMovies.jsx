import SearchForm from "../SearchForm/SearchForm.jsx"
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx"
import './SavedMovies.css';
import { useEffect, useState } from "react";
import { allSearchFilteredMovies, checkBoxMovie } from "../../utils/searchFilter.js";

function SavedMovies ({ savedMovies, onDelete }) {
  const [ searchQuerySaved, setSearchQuerySaved ] = useState('');
  const [ showSavedMovies, setShowSavedMovies ] = useState(savedMovies);
  const [ isShort, setIsShort ] = useState(false);

  const handleChange = (evt) => {
    setSearchQuerySaved(evt.target.value);
  }

  const handleChangeCheckBox = () => {
    setIsShort(!isShort);
  }

  const handleSearch = () => {
    const result = allSearchFilteredMovies(savedMovies, searchQuerySaved);
    if (!isShort) {
      setShowSavedMovies(result);
    } else {
      setShowSavedMovies(checkBoxMovie(result));
    }
  }

  return (
    <main className='savedmovies'>
      <section className="savedmovies__container">
      <SearchForm onMovie={handleSearch} handleChange={handleChange} short={isShort} isShort={handleChangeCheckBox} />
      {savedMovies.length > 0 ? (
        <MoviesCardList movies={showSavedMovies} onDelete={onDelete} savedMovies={savedMovies} />
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
