import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Nav({ burger, closeBurgerMenu }) {

  const location = useLocation();

  const handleOpenClick = () => {
    closeBurgerMenu();
  };

  return (
    <section className={`nav ${burger ? 'nav_opened' : ''}`}>
      <div className='nav__links'>
        <Link onClick={burger ? handleOpenClick : ''} className={`nav__link 
        ${location.pathname === '/' ? 'nav__link_active' : ''}`} to='/'>Главная</Link>
        <Link onClick={burger ? handleOpenClick : ''} className={`nav__link 
        ${location.pathname === '/movies' ? 'nav__link_active' : ''}`} to='/movies'>Фильмы</Link>
        <Link onClick={burger ? handleOpenClick : ''} className={`nav__link 
        ${location.pathname === '/movies' ? 'nav__link_active' : ''}`} to='/movies'>Сохранённые фильмы</Link>
      </div>
      <button onClick={handleOpenClick} type='button' className='nav__close'></button>
    </section>
  )
}

export default Nav;
