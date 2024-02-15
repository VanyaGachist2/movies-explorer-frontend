import './FormForAuth.css';

function FormForAuth({ logo, title, children }) {
  return (
    <section className="auth">
      <article className="auth__container">
        <img alt="логотип" src={logo} className="auth__logo" />
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form">
          { children }
        </form>
      </article>
    </section>
  )
}

export default FormForAuth;
