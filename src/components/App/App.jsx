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

function App() {
  const location = useLocation();
  // бургер
  const [ burgerMenu, setBurgerMenu ] = useState(false);
  
  // аккаунт
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userData, setUserData ] = useState({});

  // попапы
  const [ textPopup, setTextPopup ] = useState('');
  const [ popupStatus, setPopupStatus ] = useState(false);
  const [ logoPopup, setLogoPopup ] = useState(null);

  const [ savedMovies, setSavedMovies ] = useState([]);

  const navigate = useNavigate();


  // блок с регистрацией и авторизацией
  const handleRegistration = (name, email, password) => {
    const data = { name, email, password };
    apiMain.registration(data)
      .then(() => {
        setPopupStatus(true);
        setTextPopup('Вы успешно зарегистрировались!');
        setLogoPopup(complete);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleLogin = (email, password) => {
    const data = { email, password };
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
    apiMain.updateInfo(userData.email, userData.name)
      .then((newUser) => {
        setUserData(newUser);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleExit = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  const handleLikeMovie = (data) => {
    apiMain.addToSavedMovies(data)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies,]);
      })
      .catch((err) => {
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
