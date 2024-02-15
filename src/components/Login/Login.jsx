import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="login">
      <article className="login__container">
      <img alt="логотип" src={logo} className="login__logo" />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <label className='login__label'>E-mail</label>
            <input 
              name="email"
              id="email"
              type="email"
              placeholder="pochta@yandex.ru"
              className='login__input'
              required
            />
          <label className="login__label">Пароль</label>
            <input 
              name="password"
              id="password"
              type="password"
              required
              className='login__input'
              placeholder='password'
            />
          <button className="login__button" type="submit">Войти</button>
        </form>
        <p className="login__subtitle">Ещё не зарегистрированы? 
          <Link to='/sign-up' className="login__subtitle_color_blue" href="#">Регистрация</Link>
        </p>
      </article>
    </section>
  )
}

export default Login;
