import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
      <Link to='/' href="#" className="error__link">Назад</Link>
    </section>
  )
}

export default NotFoundPage;
