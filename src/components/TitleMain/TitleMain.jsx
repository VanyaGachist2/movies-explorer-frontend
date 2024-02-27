import './TitleMain.css';

function TitleMain({ name }) {
  return (
    <div className='title'>
      <h2 className="title__title">{name}</h2>
    </div>
  )
}

export default TitleMain;
