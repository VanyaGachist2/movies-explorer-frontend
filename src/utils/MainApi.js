class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _ifCheck(res) {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Ошибка!' + res.status);
  }

  registration(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    .then(this._ifCheck);
  }

  login(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    .then(this._ifCheck)
  }

  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      }
    })
    .then(this._ifCheck)
  }

  getInfo () {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      credentials: 'include',
    })
    .then(this._ifCheck);
  }

  updateInfo(email, name) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
      credentials: 'include',
    })
    .then(this._ifCheck);
  }

  addToSavedMovies(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
  }

  getSaveFilms() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      credentials: 'include',
    })
    .then(this._ifCheck);
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
    .then(this._ifCheck)
  }
}

export const apiMain = new MainApi({
  url: 'https://api.vanyafront.nomoredomainswork.ru',
})
