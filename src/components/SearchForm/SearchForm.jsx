import { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ onMovie }) {
  const [ search, setSearch ] = useState('');
  
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onMovie(search);
  }

  useEffect(() => {
    const savedText = localStorage.getItem('saveText');
    if (savedText) {
      setSearch(savedText);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('saveText', search)
  }, [search]);

  return (
    <section className='search'>
      <article className='search__container'>
        <form className='search__form' onSubmit={handleSubmit}>
          <fieldset className='search__part'>
            <input
              className='search__input'
              type='text'
              name='search'
              onChange={handleChange}
              value={search}
              placeholder='Фильм'
              required
            />
            <button className='search__button' type='submit'></button>
          </fieldset>
          <div className='checkbox'>
            <label className="checkbox__button">
              <input 
                type="checkbox" 
                className="checkbox__switch" 
                placeholder='переключатель чекбокса' />
              <span className="checkox__switch_ios"></span>
            </label>
            <p className='checkbox__name'>Короткометражки</p>
          </div>
        </form>
      </article>
    </section>
  )
}

export default SearchForm;
