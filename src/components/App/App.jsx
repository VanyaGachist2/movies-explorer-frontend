import { Route, Routes } from 'react-router-dom';
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
import { useState } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

function App() {
  const [ burgerMenu, setBurgerMenu ] = useState(false);

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  }

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  }

  return (
    <div className="app">
      <Nav burger={burgerMenu} closeBurgerMenu={closeBurgerMenu} />
      <>
      <Routes>
        <Route path='/' element={
          <>
            <Header openBurger={openBurgerMenu} />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/signup' element={
          <Register />
        } 
        />
        <Route path='/signin' element={
          <Login />
        } />
        <Route path='*' element={
          <NotFoundPage />
        } 
        />
        <Route path='/movies' element={
          <>
            <Header openBurger={openBurgerMenu} />
            <Movies />
            <Footer />
          </>
        }
        />
        <Route path='/saved-movies' element={
          <>
            <Header openBurger={openBurgerMenu} />
            <SavedMovies />
            <Footer />
          </>
        } 

        />
        <Route path='/profile' element={
          <>
            <Header openBurger={openBurgerMenu} />
            <Profile />
          </>
        }
        />
      </Routes>
      </>
    </div>
  );
}

export default App;
