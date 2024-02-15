import './Techs.css';
import TitleMain from '../TitleMain/TitleMain.jsx';

function Techs() {
  return (
    <section className="techs">
      <article className='techs__container'>
        <TitleMain name='Технологии' />
        <div className='techs__technology'>
          <h2 className='techs__title'>7 технологий</h2>
          <p className='techs__text'>На курсе веб-разработки 
          мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__cards'>
            <li className='techs__card'>
              <h3 className='techs__heading'>HTML</h3>
            </li>
            <li className='techs__card'>
              <h3 className='techs__heading'>CSS</h3>
            </li>
            <li className='techs__card'>
              <h3 className='techs__heading'>JS</h3>
            </li>
            <li className='techs__card'>
              <h3 className='techs__heading'>React</h3>
            </li>
            <li className='techs__card'>
              <h3 className='techs__heading'>Git</h3>
            </li>
            <li className='techs__card'>
              <h3 className='techs__heading'>Express.js</h3>
            </li>
            <li className='techs__card'>
              <h3 className='techs__heading'>mongoDB</h3>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Techs;
