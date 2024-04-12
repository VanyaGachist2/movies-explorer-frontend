import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { renderCardsForScreen, addNewLoadCards } from '../../utils/DekstopMobileCards.js';
import Preloader from '../Preloader/Preloader.jsx';

function MoviesCardList({ movies, onLike, onDelete, savedMovies, textError, isOpen, isCard, isFirst, textFirst}) {
  const location = useLocation();
  const [ visibleCard, setVisibleCard ] = useState(0);
  const [ cards, setCards ] = useState(0);

  const handleResize = () => {
    renderCardsForScreen(setCards);
    setVisibleCard(cards);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [cards]);

  const handleShowMore = () => {
    addNewLoadCards(setVisibleCard, visibleCard);
  }

  // Начните поиск фильма
  return (
    <section className='cards'>
      <article className='cards__container'>
        <h2 className={`cards__header ${isFirst ? 'cards__header_open' : ''}`}>{textFirst}</h2> 
        <Preloader isOpen={isOpen} isCard={isCard} />
        <ul className='cards__list'>
        {location.pathname === '/saved-movies' ? (
            movies.map((m) => {
              return (
                <MoviesCard 
                key={m.id || m._id}
                movie={m}
                savedMovies={savedMovies}
                onDelete={onDelete}
              />
              )
            })
        ) : ( 
          !textError ? (
            movies.slice(0, visibleCard).map(m => (
              <MoviesCard 
                key={m.id || m._id}
                movie={m}
                onLike={onLike}
                savedMovies={savedMovies}
                onDelete={onDelete}
              />
            ))
          ) : (
            <h2 className='cards__error'>Таких фильмов нет</h2>
          )
        )}
      </ul>
      {movies.length > visibleCard && location.pathname !== '/saved-movies' ? (
        <div className="cards__another">
          <button onClick={handleShowMore} className="cards__button" type="button">Еще</button>
        </div>
      ) : (
        null
      )}
      </article>
    </section>
  )
}


export default MoviesCardList;
