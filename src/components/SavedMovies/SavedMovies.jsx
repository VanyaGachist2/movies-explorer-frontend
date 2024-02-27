import SearchForm from "../SearchForm/SearchForm.jsx"
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx"
import './SavedMovies.css';

function SavedMovies () {
  return (
    <main className='savedmovies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default SavedMovies;
