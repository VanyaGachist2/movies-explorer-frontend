import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onLike, onDelete, isLiked }) {
  const location = useLocation();

  const formatFilm = (minute) => {
    const h = Math.floor(minute / 60);
    const m = minute % 60;

    if(h === 0) {
      return `${m}м`;
    } else if (m === 0) {
      return `${h}ч`;
    }
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
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    })
  }

  const handleDelete = () => {
    onDelete(movie)
  }

  const handleLikeOrDeleteLike = () => {
    if(!isLiked) {
      handleLike()
    } else {
      handleDelete()
    }
  }

  return (
    <li className='cards__element'>
      <img className='cards__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU || movie.nameEN} />
      <div className='cards__info'>
        <div className='cards__names'>
          <h2 className='cards__heading'>{movie.nameRU || movie.nameEN}</h2>
          <p className='cards__time'>{duration}</p>
        </div>
        {location.pathname === '/movies' ? (
          <button type='button' onClick={handleLikeOrDeleteLike}
          className={`cards__check_not ${isLiked ? 'cards__check' : ''}`}></button>
        ) : (
          <button onClick={handleDelete} type='button' className='cards__delete'></button>
        )}
      </div>
    </li>
  )
}

export default MoviesCard;
