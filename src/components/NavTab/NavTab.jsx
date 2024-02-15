import './NavTab.css';
import TitleMain from '../TitleMain/TitleMain.jsx';

function NavTab() {
  return (
    <section className="navtab">
      <article className="navtab__container">
        <TitleMain name='О проекте' />
        <ul className='navtab__lists'>
          <li className='navtab__list'>
            <h3 className='navtab__heading'>Дипломный проект включал 5 этапов</h3>
            <p className='navtab__text'>Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.</p>
          </li>
          <li className='navtab__list'>
            <h3 className='navtab__heading'>На выполнение диплома ушло 5 недель</h3>
            <p className='navtab__text'>У каждого этапа был мягкий 
            и жёсткий дедлайн, которые нужно было соблюдать, 
            чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='navtab__landing'>
          <h4 className='navtab__time'>1 неделя</h4>
          <p className='navtab__description'>backend</p>
          <h4 className='navtab__time navtab__time_color_dark'>4 недели</h4>
          <p className='navtab__description navtab__description_color_dark'>frontend</p>
        </div>
      </article>
    </section>
  )
}

export default NavTab;
