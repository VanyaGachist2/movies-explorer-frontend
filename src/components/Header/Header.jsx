import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/movies' 
      || location.pathname === '/profile'
      ? 'header_color_dark' : ''}`}>
        {location.pathname === '/movies' || location.pathname === '/profile' ? (
          <section className='header__container header__container_color_dark'>
            <img alt='логотип' src={logo} className='header__logo' />
            <div className='header__links'>
              <Link to="/movies" className='header__film'>Фильмы</Link>
              <Link to='/movies' className='header__film'>Сохранённые фильмы</Link>
            </div>
            <div className='header__acc'>
              <Link to='/profile' className='header__main'>Аккаунт</Link>
              <button className='header__color' type='button'></button>
            </div>
          </section>
        ) : (
          <section className='header__container'>
            <img alt='логотип' src={logo} className='header__logo' />
            <nav className='header__auth'>
              <Link to='/sign-up' className='header__link header__signup'>Регистрация</Link>
              <Link to='/sign-in' className='header__link header__signin'>Войти</Link>
            </nav>
          </section>
        )}
    </header>
  )
}

export default Header;
