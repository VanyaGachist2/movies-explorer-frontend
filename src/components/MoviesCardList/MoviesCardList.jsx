import './MoviesCardList.css';
import photo from '../../images/pic__COLOR_pic.jpeg';

function MoviesCardList() {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        <li className='cards__element'>
          <img className='cards__image' src={photo} alt='фото фильма' />
          <div className='cards__info'>
            <div className='cards__names'>
              <p className='cards__heading'>33 слова о дизайне</p>
              <p className='cards__time'>1ч42м</p>
            </div>
            <button type='button' className='cards__check'></button>
          </div>
        </li>
        <li className='cards__element'>
          <img className='cards__image' src={photo} alt='фото фильма' />
          <div className='cards__info'>
            <div className='cards__names'>
              <p className='cards__heading'>33 слова о дизайне</p>
              <p className='cards__time'>1ч42м</p>
            </div>
            <button type='button' className='cards__check'></button>
          </div>
        </li>
        <li className='cards__element'>
          <img className='cards__image' src={photo} alt='фото фильма' />
          <div className='cards__info'>
            <div className='cards__names'>
              <p className='cards__heading'>33 слова о дизайне</p>
              <p className='cards__time'>1ч42м</p>
            </div>
            <button type='button' className='cards__check'></button>
          </div>
        </li>
        <li className='cards__element'>
          <img className='cards__image' src={photo} alt='фото фильма' />
          <div className='cards__info'>
            <div className='cards__names'>
              <p className='cards__heading'>33 слова о дизайне</p>
              <p className='cards__time'>1ч42м</p>
            </div>
            <button type='button' className='cards__check'></button>
          </div>
        </li>
        <li className='cards__element'>
          <img className='cards__image' src={photo} alt='фото фильма' />
          <div className='cards__info'>
            <div className='cards__names'>
              <p className='cards__heading'>33 слова о дизайне</p>
              <p className='cards__time'>1ч42м</p>
            </div>
            <button type='button' className='cards__check'></button>
          </div>
        </li>
        <li className='cards__element'>
          <img className='cards__image' src={photo} alt='фото фильма' />
          <div className='cards__info'>
            <div className='cards__names'>
              <p className='cards__heading'>33 слова о дизайне</p>
              <p className='cards__time'>1ч42м</p>
            </div>
            <button type='button' className='cards__check'></button>
          </div>
        </li>
        <li className='cards__element'>
          <img className='cards__image' src={photo} alt='фото фильма' />
          <div className='cards__info'>
            <div className='cards__names'>
              <p className='cards__heading'>33 слова о дизайне</p>
              <p className='cards__time'>1ч42м</p>
            </div>
            <button type='button' className='cards__check'></button>
          </div>
        </li>
      </ul>
      <button className='cards__button'>Еще</button>
    </section>
  )
}


export default MoviesCardList;
