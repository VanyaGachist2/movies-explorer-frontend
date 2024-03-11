import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, onLike, onDelete, savedMovies }) {
  const location = useLocation();
  const [ visible, setVisible ] = useState(8);

  const handleShowMore = () => {
    setVisible(prev => prev + 2);
  }

  const isLiked = (savedMovies, movie) => {
    return savedMovies.some((i) => i.movieId === movie.id || i.movieId === movie.movieId);
  }

  return (
    <section className='cards'>
      <article className='cards__container'>
      <ul className='cards__list'>
        {location.pathname === '/saved-movies' ? (
          movies.map(m => (
            <MoviesCard 
              key={m.id || m._id}
              movie={m}
              onLike={onLike}
              onDelete={onDelete}
              isLiked={isLiked(savedMovies, m)}
            />
          ))
        ) : (
          movies.slice(0, visible).map(m => (
            <MoviesCard 
              key={m.id || m._id}
              movie={m}
              onLike={onLike}
              onDelete={onDelete}
              isLiked={isLiked(savedMovies, m)}
            />
          ))
        )}
      </ul>
      {movies.length <= 8 ? (
        ''
      ) : (
        <div className="cards__another">
          <button onClick={handleShowMore} className="cards__button" type="button">Еще</button>
        </div>
      )}
      </article>
    </section>
  )
}


export default MoviesCardList;
