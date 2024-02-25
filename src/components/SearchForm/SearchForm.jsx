import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <article className='search__container'>
        <form className='search__form'>
          <input
            className='search__input'
            type='text'
            name='search'
            placeholder='Фильм'
          />
          <button className='search__button' type='button'></button>
      </form>
      <div className='checkbox'>
        <label className="checkbox__button">
          <input type="checkbox" className="checkbox__switch" />
          <span className="checkox__switch_ios"></span>
        </label>
        <p className='checkbox__name'>Короткометражки</p>
      </div>
      </article>
    </section>
  )
}

export default SearchForm;
