import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input
          className='search__input'
          type='text'
          name='search'
          placeholder='Фильм'
        />
        <button className='search__button' type='button'></button>
        <div className='search__'>
          <label className='search__switch'>
            <input type='checkbox' className='search__checkbox' />
            <span className='search__slide'></span>
          </label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
