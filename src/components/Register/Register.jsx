import './Register.css';
import logo from '../../images/logo.svg';
import FormForAuth from '../FormForAuth/FormForAuth.jsx';
import { useFormValid, validation } from '../../hooks/useFormValid.js';

function Register({ handleRegister }) {
  const {
    handleChange,
    error,
    value,
    isValid,
  } = useFormValid(validation, 'register');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleRegister(value.name, value.email, value.password);
  }

  return (
    <FormForAuth 
    logo={logo} 
    title='Добро пожаловать!'
    subtitle='Уже зарегистрированы?'
    link='/signin'
    auth='Войти'
    submit={handleSubmit}
    >
      <label className="registration__label">Имя</label>
          <input 
            name="name"
            id="name"
            type="text"
            placeholder="Иван"
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            required
            className={`registration__input ${error.name ? 'registration__input_error' : ''}`}
            value={value.name || ''}
          />
          {error.name && (
            <span className='registration__error'>{error.name}</span>
          )}
          <label className='registration__label'>E-mail</label>
            <input 
              name="email"
              id="email"
              type="email"
              placeholder="pochta@yandex.ru"
              className={`registration__input ${error.email && 'registration__input_error'}`}
              value={value.email || ''}
              onChange={handleChange}
              required
            />
            {error.email && (
              <span className='registration__error'>{error.email}</span>
            )}
          <label className="registration__label">Пароль</label>
            <input 
              name="password"
              id="password"
              type="password"
              minLength='8'
              maxLength='30'
              required
              className={`registration__input ${error.passowrd && 'registration__input_error'}`}
              onChange={handleChange}
              value={value.password || ''}
              placeholder='password'
            />
            {error.password && (
              <span className='registration__error'>{error.password}</span>
            )}
          <button disabled={!isValid} className={`registration__button ${!isValid ? 'registration__button_disabled' : ''}`} type="submit">Зарегистрироваться</button>
        </FormForAuth>
  )
}

export default Register;
