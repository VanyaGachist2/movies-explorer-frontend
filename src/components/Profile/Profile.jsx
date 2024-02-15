import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <article className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <input 
            className="profile__input" 
            placeholder='Имя'
          />
          <p className="profile__acount profile__acount_name">Имя</p>
          <input
            className="profile__input"
            placeholder='E-mail'
          />
          <p className="profile__acount profile__acount_email">E-mail</p>
        </form>
        <button type='button' className='profile__edit'>Редактировать</button>
        <button type='button' className='profile__out'>Выйти из аккаунта</button>
      </article>
    </section>
  )
}

export default Profile;
