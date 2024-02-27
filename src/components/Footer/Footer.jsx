import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <article className='footer__container'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__credit'>
          <p className='footer__year'>© 2024</p>
          <div className='footer__links'>
            <a target='_blank' href='https://practicum.yandex.ru' className='footer__link'>Яндекс.Практикум</a>
            <a target='_blank' href='https://github.com' className='footer__link'>Github</a>
          </div>
        </div>
      </article>
    </footer>
  )
}

export default Footer;
