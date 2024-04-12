import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onLike, onDelete, savedMovies}) {
  const location = useLocation();
  const isLiked = savedMovies.some((m) => {
    return m.movieId === movie.id;
  })
  const moviesInSavePage = savedMovies.find(i => i.movieId === movie.id);
  const formatFilm = (dur) => {
    const h = Math.floor(dur / 60);
    const m = dur % 60;
    if(h === 0) {
      return `${m}м`;
    } else if (m === 0) {
      return `${h}ч`;
    }
    return `${h}ч${m}м`;
  }
  const duration = formatFilm(movie.duration);

  const handleLike = () => {
    if(isLiked) {
      onDelete(moviesInSavePage)
    } else {
      onLike({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      })
    }
  }

  const handleCardDelete = () => {
    onDelete(movie)
  }

  return (
    <li className='cards__element'>
      <a href={movie.trailerLink} target='_blank'>
        <img className='cards__image'
        src={
          location.pathname === '/movies' ?
          `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU || movie.nameEN} />
      </a>
      <div className='cards__info'>
        <div className='cards__names'>
          <h2 className='cards__heading'>{movie.nameRU || movie.nameEN}</h2>
          <p className='cards__time'>{duration}</p>
        </div>
        {location.pathname === '/movies' ? (
          <button type='button' onClick={handleLike}
          className={`cards__check_not ${isLiked ? 'cards__check_color_dark' : ''}`}></button>
          ) : (
          <button onClick={handleCardDelete} type='button' className='cards__delete'></button>
        )}
      </div>
    </li>
  )
}

export default MoviesCard;
