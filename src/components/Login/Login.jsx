import './Login.css';
import logo from '../../images/logo.svg';
import FormForAuth from '../FormForAuth/FormForAuth.jsx';

function Login() {
  return (
    <FormForAuth
      logo={logo}
      title='Рады видеть!'
      subtitle='Ещё не зарегистрированы?'
      link='/signup'
      auth='Регистрация'
    >
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
    </FormForAuth>
  )
}

export default Login;
