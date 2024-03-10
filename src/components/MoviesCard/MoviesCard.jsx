import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onLike, isLiked }) {
  const location = useLocation();
  const imageUrl = movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : '';

  const formatFilm = (minute) => {
    const h = Math.floor(minute / 60);
    const m = minute % 60;

    return `${h}ч${m}м`;
  }
  const duration = formatFilm(movie.duration);

  const handleLike = () => {
    onLike({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: movie.thumbnail,
      movieId: movie.movieId,
    })
  }

  return (
    <li className='cards__element'>
      <img className='cards__image' src={imageUrl} alt={movie.nameRU || movie.nameEN} />
      <div className='cards__info'>
        <div className='cards__names'>
          <h2 className='cards__heading'>{movie.nameRU || movie.nameEN}</h2>
          <p className='cards__time'>{duration}</p>
        </div>
        {location.pathname === '/movies' ? (
          <button type='button' onClick={handleLike}
          className={`cards__check_not ${isLiked ? 'cards__check' : ''}`}></button>
        ) : (
          <button type='button' className='cards__delete'></button>
        )}
      </div>
    </li>
  )
}

export default MoviesCard;
