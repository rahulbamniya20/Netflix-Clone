const APIKEY = "d6e0e77a1e3ad371e781c6d417508a98"

const requests = {
  fetchTopRatedTv: `/tv/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchPopularMovie: `/movie/popular?api_key=${APIKEY}&language=en-US`,
  fetchPopularTv: `/tv/popular?api_key=${APIKEY}&language=en-US`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchPeople: `/trending/person/week?api_key=${APIKEY}`,
}

export default requests