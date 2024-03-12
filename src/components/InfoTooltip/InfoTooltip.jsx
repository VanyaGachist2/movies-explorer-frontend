import './InfoTooltip.css';

function InfoTooltip({ isOpen, onClose, name, logo }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img className="popup__logo" src={logo} alt="запрос!" />
        <p className="popup__title popup__title_margin">{name}!</p>
        <button type="button" className="popup__close" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;
