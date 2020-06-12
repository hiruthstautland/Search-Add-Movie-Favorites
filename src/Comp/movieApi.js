export const fetchMovie = (movieId) => {
  return fetch(
    "https://api.themoviedb.org/3/movie/" +
      movieId +
      `?api_key=${process.env.MOVIEDB_API_KEY}`,
    {
      method: "GET",
    }
  ).then((respons) => respons.json());
};

export const search = (searchValue) => {
  return fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=d9514d5430ca1c39e3e1d6ea86a26697&query=" +
      searchValue,
    {
      method: "GET",
    }
  ).then((respons) => respons.json());
};

export const movieApi = "..";

// export const page = (this.state.searchValue, pageNumber) => {
//   return fetch(
//     "https://api.themoviedb.org/3/search/movie?api_key=d9514d5430ca1c39e3e1d6ea86a26697&query=" +
//       this.state.searchValue +
//       "&page=" +
//       pageNumber,
//     {
//       method: "GET",
//     }
//   ).then(respons => respons.json());
// };
