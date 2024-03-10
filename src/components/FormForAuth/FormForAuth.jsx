import { Link } from 'react-router-dom';
import './FormForAuth.css';

function FormForAuth({ logo, title, children, subtitle, link, auth, submit }) {
  return (
    <section className="auth">
      <article className="auth__container">
        <Link className='auth__link' to='/'><img alt="логотип" src={logo} className="auth__logo" /></Link>
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" onSubmit={submit} noValidate>
          { children }
        </form>
        <p className='auth__subtitle'>{ subtitle }
          <Link className='auth__subtitle_color_blue' to={link}>{auth}</Link>
        </p>
      </article>
    </section>
  )
}

export default FormForAuth;
