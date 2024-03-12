import './Header.css';
import logo from '../../images/logo.svg';
import humanLogo from '../../images/humanlogo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({ openBurger, loggedIn }) {
  const location = useLocation();

  return (
    <header className={`header 
      ${location.pathname === '/movies' 
      || location.pathname === '/profile'
      || location.pathname === '/saved-movies'
      ? 'header_color_dark' : ''}`}>
        {loggedIn ? (
          <section 
            className={`header__container ${location.pathname === '/' ? '' : 'header__container_color_dark'}`}>
            <Link to='/' className='header__img'><img alt='логотип' src={logo} className='header__logo' /></Link>
            <div className='header__links'>
              <Link to="/movies" className='header__film'>Фильмы</Link>
              <Link to='/saved-movies' className='header__film'>Сохранённые фильмы</Link>
            </div>
            <Link 
              to='/profile' 
              className={`header__main ${location.pathname === '/movies' 
              || location.pathname === '/profile'
              || location.pathname === '/saved-movies' ? '' : 'header__main_color_green'} `}>
              Аккаунт
              <button className='header__color' type='button'>
                <img className='header__human' src={humanLogo} alt='лого аккаунта' />  
              </button>
            </Link>
            <button onClick={openBurger} type='button' className='header__burger'></button>
          </section>
        ) : (
          <section className='header__container'>
            <img alt='логотип' src={logo} className='header__logo' />
            <nav className='header__auth'>
              <Link to='/signup' className='header__link header__signup'>Регистрация</Link>
              <Link to='/signin' className='header__link header__signin'>Войти</Link>
            </nav>
          </section>
        )}
    </header>
  )
}

export default Header;
