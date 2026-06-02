const API_KEY =
  import.meta.env.VITE_TMDB_API_KEY || import.meta.env.VITE_API_KEY || "";

const apiKeyQuery = API_KEY ? `api_key=${API_KEY}&` : "";

const requests = {
  fetchTrending: `/trending/all/week?${apiKeyQuery}language=en-US`,
  fetchNetflixOriginals: `/discover/tv?${apiKeyQuery}with_networks=213`,
  fetchActionMovies: `/discover/movie?${apiKeyQuery}with_genres=28`,
  fetchComedyMovies: `/discover/movie?${apiKeyQuery}with_genres=35`,
  fetchHorrorMovies: `/discover/movie?${apiKeyQuery}with_genres=27`,
  fetchRomanceMovies: `/discover/movie?${apiKeyQuery}with_genres=10749`,
  fetchDocumentaries: `/discover/movie?${apiKeyQuery}with_genres=99`,
  fetchTvShow: `/tv/popular?${apiKeyQuery}language=en-US&page=1`,
  hasApiKey: Boolean(API_KEY),
};

export default requests;
