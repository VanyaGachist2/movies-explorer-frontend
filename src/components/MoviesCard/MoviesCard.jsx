import './MoviesCard.css';
import photo from '../../images/pic__COLOR_pic.jpeg';
import { useLocation } from 'react-router-dom';

function MoviesCard({ name }) {
  const location = useLocation();

  return (
    <li className='cards__element'>
      <img className='cards__image' src={photo} alt={name} />
      <div className='cards__info'>
        <div className='cards__names'>
          <h2 className='cards__heading'>{name}</h2>
          <p className='cards__time'>1ч42м</p>
        </div>
        <button type='button' className={`${location.pathname === '/movies' ? 'cards__check' : 'cards__delete'}`}></button>
      </div>
    </li>
  )
}

export default MoviesCard;
