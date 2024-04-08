import './SearchForm.css';

function SearchForm({ onMovie, short, isShort, handleChange, search, error, errorText, errorValid, errorButton }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onMovie(search);
  }

  return (
    <section className='search'>
      <article className='search__container'>
        <form className='search__form' onSubmit={handleSubmit} noValidate>
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
            <button className={`search__button ${errorButton ? 'search__button_disabled' : ''}`} disabled={errorButton} type='submit'></button>
          </fieldset>
          {error ? (
            <p className='search__error search__error_active'>{errorText}</p>
          ) : (
            <p className='search__error'></p>
          )}
          {errorValid ? (
            <p className='search__error search__error_active'>Введите символы для поиска!</p>
          ) : (
            <p className='search__error'></p>
          )}
          <fieldset className='checkbox'>
            <label className="checkbox__button">
              <input 
                type="checkbox" 
                className="checkbox__switch" 
                placeholder='переключатель чекбокса'
                onChange={isShort}
                checked={short}
                />
              <span className="checkox__switch_ios"></span>
            </label>
            <p className='checkbox__name'>Короткометражки</p>
          </fieldset>
        </form>
      </article>
    </section>
  )
}

export default SearchForm;
