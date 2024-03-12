import { useContext, useEffect } from 'react';
import { useFormValid, validation } from '../../hooks/useFormValid';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onOut, updateInfo }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    value,
    handleChange,
    setValue,
  } = useFormValid(validation);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    updateInfo({
      name: value.name,
      email: value.email,
    })
  }

  useEffect(() => {
    setValue({
      email: currentUser.email || '',
      name: currentUser.name || '',
    })
  }, [currentUser]);

  return (
    <section className="profile">
      <article className="profile__container">
        <h1 className="profile__title">{`Привет, ${currentUser.name || ''}!`}</h1>
        <form 
          className="profile__form"
          noValidate
          onSubmit={handleSubmit}
          >
          <label className='profile__label'>Имя
            <input 
              className='profile__input'
              type='text'
              name='name'
              id='name'
              required
              onChange={handleChange}
              value={value.name || ''}
              placeholder='Виталий'
            />
          </label>
          <label className='profile__label'>E-mail
            <input 
              className='profile__input'
              type='email'
              name='email'
              id='email'
              value={value.email || ''}
              onChange={handleChange}
              required
              placeholder='pochta@yandex.ru'
            />
          </label>
          <button type='submit' className='profile__edit'>Редактировать</button>
        </form>
        <p onClick={onOut} className='profile__out'>Выйти из аккаунта</p>
      </article>
    </section>
  )
}

export default Profile;
