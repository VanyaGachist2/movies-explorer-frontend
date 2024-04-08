import './Preloader.css'

const Preloader = ({ isOpen, isCard }) => {
  return (
    isCard ? (
      <div className={`preloader ${isOpen ? 'preloader_active' : ''}`}>
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    ) : (
      <div className={`preloader__main ${isOpen ? 'preloader__main_active' : ''}`}>
        <div className={`preloader ${isOpen ? 'preloader_active' : ''}`}>
          <div className="preloader__container">
            <span className="preloader__round"></span>
          </div>
        </div>
      </div>
    )
  )
};

export default Preloader
