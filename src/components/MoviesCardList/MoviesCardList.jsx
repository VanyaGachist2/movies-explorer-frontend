import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

// 33 слова о дизайне

function MoviesCardList() {
  const cards = Array.from({ length: 16 }, (i) => <MoviesCard key={i} name='33 слова о дизайне' />)
  return (
    <section className='cards'>
      <article className='cards__container'>
      <ul className='cards__list'>
        {cards}
      </ul>
      <div className="cards__another">
        <button className="cards__button" type="button">Еще</button>
      </div>
      </article>
    </section>
  )
}


export default MoviesCardList;
