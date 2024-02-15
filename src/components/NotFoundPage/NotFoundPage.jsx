import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
      <a href="#" className="error__link">Назад</a>
    </section>
  )
}

export default NotFoundPage;
