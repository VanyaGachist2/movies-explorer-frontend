import './AboutProject.css';
import TitleMain from '../TitleMain/TitleMain.jsx';

function AboutProject({ refer }) {
  return (
    <section ref={refer} className="project">
      <article className="project__container">
        <TitleMain name='О проекте' />
        <ul className='project__lists'>
          <li className='project__list'>
            <h3 className='project__heading'>Дипломный проект включал 5 этапов</h3>
            <p className='project__text'>Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.</p>
          </li>
          <li className='project__list'>
            <h3 className='project__heading'>На выполнение диплома ушло 5 недель</h3>
            <p className='project__text'>У каждого этапа был мягкий 
            и жёсткий дедлайн, которые нужно было соблюдать, 
            чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='project__landing'>
          <h4 className='project__time'>1 неделя</h4>
          <p className='project__description'>backend</p>
          <h4 className='project__time project__time_color_dark'>4 недели</h4>
          <p className='project__description project__description_color_dark'>frontend</p>
        </div>
      </article>
    </section>
  )
}

export default AboutProject;
