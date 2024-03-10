import SearchForm from "../SearchForm/SearchForm.jsx"
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx"
import './SavedMovies.css';

function SavedMovies ({ savedMovies }) {
  return (
    <main className='savedmovies'>
      <SearchForm />
      <MoviesCardList savedMovies={savedMovies} />
    </main>
  )
}

export default SavedMovies;
