import { Link, useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
      <button onClick={goBack} className="error__link">Назад</button>
    </section>
  )
}

export default NotFoundPage;
