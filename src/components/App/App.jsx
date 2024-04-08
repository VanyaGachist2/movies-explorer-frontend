import complete from '../../images/yes.svg';
import error from '../../images/no.svg';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Movies from '../Movies/Movies.jsx';
import Profile from '../Profile/Profile.jsx';
import Nav from '../Navigation/Navigation.jsx';
import { useEffect, useState } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import ProtectedRoute from '../../utils/ProtectedRoute/ProtectedRoute.jsx';
import { apiMain } from '../../utils/MainApi.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Preloader from '../Preloader/Preloader.jsx';

function App() {
  // бургер
  const [ burgerMenu, setBurgerMenu ] = useState(false);
  
  // аккаунт
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userData, setUserData ] = useState({});
  // попапы
  const [ textPopup, setTextPopup ] = useState('');
  const [ popupStatus, setPopupStatus ] = useState(false);
  const [ logoPopup, setLogoPopup ] = useState(null);

  const [ preloader, setPreloader ] = useState(false);

  const [ savedMovies, setSavedMovies ] = useState([]);

  const navigate = useNavigate();

  // блок с регистрацией и авторизацией
  const handleRegistration = (name, email, password) => {
    const data = { name, email, password };
    setPreloader(true);
    apiMain.registration(data)
      .then(() => {
        setPopupStatus(true);
        setTextPopup('Вы успешно зарегистрировались!');
        setLogoPopup(complete);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(true);
        setTextPopup('Что-то пошло не так');
        setLogoPopup(error);
      })
      .finally(() => {
        setPreloader(false);
      })
  }

  const handleLogin = (email, password) => {
    const data = { email, password };
    setPreloader(true);
    apiMain.login(data)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('jwt', res.token);
          setPopupStatus(true);
          setTextPopup('Вы успешно вошли!');
          setLogoPopup(complete);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupStatus(true);
        setTextPopup('Что-то пошло не так');
        setLogoPopup(error);
      })
      .finally(() => {
        setInterval(() => {
          setPreloader(false);
        }, 2000)
      })
  }

  const handleCheckToken = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      apiMain.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        })
        .catch(() => {
          setLoggedIn(false);
        })
    }
  }

  useEffect(() => {
    handleCheckToken();
  }, [loggedIn]);

  // --------------------------
  // блок с инфо о пользователе

  useEffect(() => {
    if (loggedIn) {
      apiMain.getInfo()
        .then((data) => {
          setUserData(data);
        })
        .catch((err) => {
          console.log(err);
        });
      apiMain.getSaveFilms()
        .then((data) => {
          const sortData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          setSavedMovies(sortData)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [loggedIn]);


  const updateUserInfo = (userData) => {
    setPreloader(true);
    apiMain.updateInfo(userData.email, userData.name)
      .then((newUser) => {
        setUserData(newUser);
        setPopupStatus(true);
        setTextPopup('Обновление прошло успешно!');
        setLogoPopup(complete);
      })
      .catch(err => {
        console.log(err);
        setPopupStatus(true);
        setTextPopup('Ошибка!');
        setLogoPopup(error);
      })
      .finally(() => {
        setPreloader(false);
      })
  }

  const handleExit = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  const handleLikeMovie = (data) => {
      apiMain.addToSavedMovies(data)
      .then((newCard) => {
        const updatedSavedMovies = [newCard, ...savedMovies]; 
        setSavedMovies(updatedSavedMovies);
        apiMain.getSaveFilms()
        .then((data) => {
          const sortData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          setSavedMovies(sortData)
        })
        .catch(err => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }  
  
  const handleCardDelete = (card) => {
      apiMain.deleteMovie(card)
        .then(() => {
          setSavedMovies(cards => cards.filter((c) => c._id !== card._id));
          apiMain.getSaveFilms()
            .then((data) => {
              const sortData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              setSavedMovies(sortData)
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch((err) => {
          console.log(card._id);
          console.log(err);
        })
  }
  
  // блок с попапами

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  }

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  }

  const closePopups = () => {
    setPopupStatus(false);
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={userData}>
      <Nav burger={burgerMenu} closeBurgerMenu={closeBurgerMenu} />
      <InfoTooltip isOpen={popupStatus} onClose={closePopups} name={textPopup} logo={logoPopup} />
      <Preloader isCard={false} isOpen={preloader} />
      <>
      <Routes>
        <Route exact path='/' element={
          <>
            <Header openBurger={openBurgerMenu} loggedIn={loggedIn} />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/signup' element={
          <Register handleRegister={handleRegistration} />
        } 
        />
        <Route path='/signin' element={
          <Login handleLogin={handleLogin} />
        } />
        <Route path='*' element={
          <NotFoundPage />
        } 
        />
        <Route path='/movies' element={
          <>
            <Header openBurger={openBurgerMenu} loggedIn={loggedIn} />
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              onLike={handleLikeMovie}
              savedMovies={savedMovies}
              onDelete={handleCardDelete}
            />
            <Footer />
          </>
        }
        />
        <Route path='/saved-movies' element={
          <>
            <Header openBurger={openBurgerMenu} loggedIn={loggedIn} />
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onDelete={handleCardDelete}
            />
            <Footer />
          </>
        } 

        />
        <Route path='/profile' element={
          <>
            <Header openBurger={openBurgerMenu} loggedIn={loggedIn} />
            <ProtectedRoute 
              element={Profile}
              loggedIn={loggedIn}
              onOut={handleExit}
              updateInfo={updateUserInfo}
            />
          </>
        }
        />
      </Routes>
      </>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
