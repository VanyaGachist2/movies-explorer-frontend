import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <article className='footer__container'>
        <h2 className='footer__project'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__line'></div>
        <div className='footer__end'>
          <p className='footer__year'>© 2024</p>
          <nav className='footer__main'>
            <a href='#' className='footer__link'>Яндекс.Практикум</a>
            <a href='#' className='footer__link'>Github</a>
          </nav>
        </div>
      </article>
    </footer>
  )
}

export default Footer;
