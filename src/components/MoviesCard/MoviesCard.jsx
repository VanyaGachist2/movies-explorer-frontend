import './MoviesCard.css';
import photo from '../../images/pic__COLOR_pic.jpeg';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  const location = useLocation();

  return (
    <li className='cards__element'>
      <img className='cards__image' src={photo} alt='фото фильма' />
      <div className='cards__info'>
        <div className='cards__names'>
          <p className='cards__heading'>33 слова о дизайне</p>
          <p className='cards__time'>1ч42м</p>
        </div>
        <button type='button' className={`${location.pathname === '/movies' ? 'cards__check' : 'cards__delete'}`}></button>
      </div>
    </li>
  )
}

export default MoviesCard;
