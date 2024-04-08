export const checkBoxMovie = (movie) => {
  return movie.filter(m => m.duration <= 30);
}

export const allSearchFilteredMovies = (movie, searchQuery) => {
  const allSearchMovies = movie.filter((m) => {
    const russia = String(m.nameRU).toLowerCase().includes(searchQuery.toLowerCase());
    const english = String(m.nameEN).toLowerCase().includes(searchQuery.toLowerCase());
    return russia || english;
  })

  return allSearchMovies;
}
