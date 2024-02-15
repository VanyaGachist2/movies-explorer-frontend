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

function App() {
  return (
    <div className="app">
      <>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/sign-up' element={
          <Register />
        } 
        />
        <Route path='/sign-in' element={
          <Login />
        } />
        <Route path='*' element={
          <NotFoundPage />
        } 
        />
        <Route path='/movies' element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        }
        />
        <Route path='/profile' element={
          <>
            <Header />
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
