// FOR DEVELOPMENT ONLY
const API_KEY = "00a26d6751ef8b197f2afb0f728b6577";

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  popular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  netflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`
}

export default requests;