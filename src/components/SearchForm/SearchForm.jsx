import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <article className='search__container'>
        <form className='search__form'>
          <fieldset className='search__part'>
            <input
              className='search__input'
              type='text'
              name='search'
              placeholder='Фильм'
              required
            />
            <button className='search__button' type='button'></button>
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
