import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Nav({ burger, closeBurgerMenu }) {

  const location = useLocation();

  const handleOpenClick = () => {
    closeBurgerMenu();
  };

  const closeAndToLink = burger ? handleOpenClick : '';

  return (
    <section className={`nav ${burger ? 'nav_opened' : ''}`}>
      <div className='nav__links'>
        <Link onClick={closeAndToLink} className={`nav__link 
        ${location.pathname === '/' ? 'nav__link_active' : ''}`} to='/'>Главная</Link>
        <Link onClick={closeAndToLink} className={`nav__link 
        ${location.pathname === '/movies' ? 'nav__link_active' : ''}`} to='/movies'>Фильмы</Link>
        <Link onClick={closeAndToLink} className={`nav__link 
        ${location.pathname === '/saved-movies' ? 'nav__link_active' : ''}`} to='/movies'>Сохранённые фильмы</Link>
        <Link to='/profile' className='nav__acount'>
          Аккаунт
          <button className='nav__color' type='button'></button>  
        </Link>
      </div>
      <button onClick={handleOpenClick} type='button' className='nav__close'></button>
    </section>
  )
}

export default Nav;
