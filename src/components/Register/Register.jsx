import './Register.css';
import logo from '../../images/logo.svg';
import FormForAuth from '../FormForAuth/FormForAuth.jsx';

function Register() {
  return (
    <FormForAuth 
    logo={logo} 
    title='Добро пожаловать!'
    subtitle='Уже зарегистрированы?'
    link='/sign-in'
    auth='Войти'
    >
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
        </FormForAuth>
  )
}

export default Register;
