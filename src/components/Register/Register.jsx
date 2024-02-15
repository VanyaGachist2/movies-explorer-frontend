import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="registration">
      <article className="registration__container">
        <img alt="логотип" src={logo} className="registration__logo" />
        <h1 className="registration__title">Добро пожаловать!</h1>
        <form className="registration__form">
        <label className="registration__label">Имя</label>
          <input 
            name="name"
            id="name"
            type="text"
            placeholder="Иван"
            required
            className='registration__input'
          />
          <label className='registration__label'>E-mail</label>
            <input 
              name="email"
              id="email"
              type="email"
              placeholder="pochta@yandex.ru"
              className='registration__input'
              required
            />
          <label className="registration__label">Пароль</label>
            <input 
              name="password"
              id="password"
              type="password"
              required
              className='registration__input'
              placeholder='password'
            />
          <button className="registration__button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="registration__subtitle">Уже зарегистрированы? 
          <Link to='/sign-in' className="registration__subtitle_color_blue" href="#">Войти</Link>
        </p>
      </article>
    </section>
  )
}

export default Register;
