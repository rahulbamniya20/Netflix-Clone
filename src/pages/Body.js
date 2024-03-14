import '../App.css';

import Row from './Row';
import requests from '../request/requests';
import Banner from "../components/Banner"

function Body() {
  return (
    <div>
      <Banner />
      <Row title="Trending Now Movies" apiUrl={requests.fetchPopularMovie}  isMovie />
      <Row title="Top Rated TV" apiUrl={requests.fetchPopularTv}  />
      <Row title="Top Rated Movies" apiUrl={requests.fetchTopRatedMovie} isMovie  />
      <Row title="Top Rated TV" apiUrl={requests.fetchTopRatedTv}  />
    </div>
  )
}

export default Body