import SearchForm from "../SearchForm/SearchForm.jsx"
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx"

function SavedMovies () {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  )
}

export default SavedMovies;
