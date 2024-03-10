import './Login.css';
import logo from '../../images/logo.svg';
import FormForAuth from '../FormForAuth/FormForAuth.jsx';
import { useFormValid, validation } from '../../hooks/useFormValid.js';

function Login({ handleLogin }) {
  const {
    handleChange,
    value,
    error,
  } = useFormValid(validation);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    handleLogin(value.email, value.password);
  }

  return (
    <FormForAuth
      logo={logo}
      title='Рады видеть!'
      subtitle='Ещё не зарегистрированы?'
      link='/signup'
      auth='Регистрация'
      submit={handleSubmit}
    >
    <label className='login__label'>E-mail</label>
      <input 
        name="email"
        id="email"
        type="email"
        placeholder="pochta@yandex.ru"
        className='login__input'
        value={value.email || ''}
        onChange={handleChange}
        required
      />
      {error.email && (
        <span className='login__error'>{error.email}</span>
      )}
    <label className="login__label">Пароль</label>
      <input 
        name="password"
        id="password"
        type="password"
        required
        value={value.password || ''}
        onChange={handleChange}
        className='login__input'
        placeholder='password'
      />
      {error.password && (
        <span className='login__error'>{error.password}</span>
      )}
      <button className="login__button" type="submit">Войти</button>
    </FormForAuth>
  )
}

export default Login;
