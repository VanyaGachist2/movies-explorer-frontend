import './Promo.css';
import logotip from '../../images/text__COLOR_landing-logo.svg';

function Promo({ scrollButton }) {
  return (
    <section className="promo">
      <article className="promo__container">
        <div className='promo__info'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <h1 className='promo__title promo__title_min_width'>Учебный проект студента&nbsp;факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <button onClick={scrollButton} className='promo__button' type='button'>Узнать больше</button>
        <img className='promo__image' alt='логотип веб-разработка' src={logotip} />
      </article>
    </section>
  )
}

export default Promo;
