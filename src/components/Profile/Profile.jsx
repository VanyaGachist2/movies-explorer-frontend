import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <article className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className='profile__label'>Имя
            <input 
              className='profile__input'
              type='text'
              name='name'
              id='name'
              required
              placeholder='Виталий'
            />
          </label>
          <label className='profile__label'>E-mail
            <input 
              className='profile__input'
              type='email'
              name='email'
              id='email'
              required
              placeholder='pochta@yandex.ru'
            />
          </label>
        </form>
        <button type='button' className='profile__edit'>Редактировать</button>
        <Link to='/' type='button' className='profile__out'>Выйти из аккаунта</Link>
      </article>
    </section>
  )
}

export default Profile;
