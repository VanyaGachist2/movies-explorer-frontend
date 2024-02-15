import avatar from '../../images/avatar.jpeg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="aboutme">
      <article className="aboutme__container">
        <p className="aboutme__subtitle">Студент</p>
        <div className="aboutme__info">
          <h2 className="aboutme__name">@VanyaGachist</h2>
          <h3 className="aboutme__work">Фронтенд-разработчик, 20 лет</h3>
          <p className="aboutme__description">Я родился и живу в Симферополе, учусь
          в КФУ на прикладную математику. Увлекаюсь программированием с 9 класса, а задумываться 
          о профессиональной деятельности на 2 курсе. Очень рад что учился в Яндекс Практикуме на веб-разработчика,
          ведь я понял как люблю кодить. Из хобби занимаюсь боксом, играю в компьютерные игры, пишу музыку!</p>
        </div>
        <a href="#" className="aboutme__link">GitHub</a>
        <img alt="моя фотка" src={avatar} className="aboutme__avatar" />
      </article>
    </section>
  )
}

export default AboutMe;
