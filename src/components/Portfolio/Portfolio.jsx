import './Portfolio.css';
import link from '../../images/text__COLOR_font-main.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <article className='portfolio__container'>
        <h2 className='portfolio__heading'>Портфолио</h2>
        <nav className='portfolio__links'>
          <a href='#' className='portfolio__link'>
            <p className='portfolio__link-header'>Статичный сайт</p>
            <img 
              alt='стрелка в правую диагональ как ссылка'
              src={link}
              className='portfolio__link-svg'
             />
          </a>
          <div className='portfolio__line'></div>
          <a href='https://vanyagachist2.github.io/project__russia/' className='portfolio__link'>
            <p className='portfolio__link-header'>Адаптивный сайт</p>
            <img 
              alt='стрелка в правую диагональ как ссылка'
              src={link}
              className='portfolio__link-svg'
             />
          </a>
          <div className='portfolio__line'></div>
          <a href='https://github.com/VanyaGachist2/react-mesto-auth' className='portfolio__link'>
            <p className='portfolio__link-header'>Одностраничное приложение</p>
            <img 
              alt='стрелка в правую диагональ как ссылка'
              src={link}
              className='portfolio__link-svg'
             />
          </a>
        </nav>
      </article>
    </section>
  )
}

export default Portfolio;
