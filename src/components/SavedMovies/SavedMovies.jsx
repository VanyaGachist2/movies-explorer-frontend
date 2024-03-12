import SearchForm from "../SearchForm/SearchForm.jsx"
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx"
import './SavedMovies.css';
import { useEffect, useState } from "react";

function SavedMovies ({ savedMovies }) {
  const [ searchQuerySaved, setSearchQuerySaved ] = useState('');
  const [ showSavedMovies, setShowSavedMovies ] = useState(savedMovies);

  const handleSearch = (value) => {
    setSearchQuerySaved(value);
    const result = savedMovies.filter(m => m.nameRU.toLowerCase().includes(value.toLowerCase()));
    setShowSavedMovies(result);
  }

  console.log(savedMovies);
  useEffect(() => {
    localStorage.setItem('findSaved', searchQuerySaved);
  }, [searchQuerySaved]);

  return (
    <main className='savedmovies'>
      <SearchForm onMovie={handleSearch} />
      {savedMovies.length > 0 && 
        <MoviesCardList movies={savedMovies} savedMovies={showSavedMovies} />
      }
    </main>
  )
}

export default SavedMovies;
