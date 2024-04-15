import avatar from '../../images/avatar.jpeg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="aboutme">
      <article className="aboutme__container">
        <p className="aboutme__subtitle">Студент</p>
        <div className="aboutme__info">
          <h2 className="aboutme__name">@VanyaGachist2</h2>
          <h3 className="aboutme__work">Фронтенд-разработчик, ?? лет</h3>
          <p className="aboutme__description">Я родился в Крыму, городе Симферополь. Учусь на 3 курсе, направлении
          Прикладная математика. В детстве когда у нас в семье появился компьютер а в нем компьютерные игры, я погрузился
          в мир ноликов и едениц. Но с кодингом я познакомился только в 9 классе, когда готовился к экзаменам и для меня этот виртуальный мир
          стал еще шире и прикольнее. Люблю кодить, люблю web, люблю когда все надо фиксить, люблю когда все ломается. I LOVE THIS WORLD!</p>
        </div>
        <a target='_blank' href="https://github.com/VanyaGachist2" className="aboutme__link">GitHub</a>
        <img alt="аватарка пользователя данной страницы" src={avatar} className="aboutme__avatar" />
      </article>
    </section>
  )
}

export default AboutMe;
