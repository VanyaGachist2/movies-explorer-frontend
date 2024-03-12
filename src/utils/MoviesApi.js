class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _ifCheck(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Ошибка!');
  }

  getMovies() {
    return fetch(this._url, {
      headers: this._headers,
    })
    .then(this._ifCheck);
  }
}

export const movieApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Content-Type": "application/json",
  }
});
