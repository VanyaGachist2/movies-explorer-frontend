import avatar from '../../images/avatar.jpeg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="aboutme">
      <article className="aboutme__container">
        <p className="aboutme__subtitle">Студент</p>
        <div className="aboutme__info">
          <h2 className="aboutme__name">Виталий</h2>
          <h3 className="aboutme__work">Фронтенд-разработчик, 30 лет</h3>
          <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет 
          экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь 
          бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
          После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
           и ушёл с постоянной работы.</p>
        </div>
        <a target='_blank' href="https://github.com/VanyaGachist2" className="aboutme__link">GitHub</a>
        <img alt="аватарка пользователя данной страницы" src={avatar} className="aboutme__avatar" />
      </article>
    </section>
  )
}

export default AboutMe;
