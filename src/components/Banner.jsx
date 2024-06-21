import React, { useState, useEffect } from "react";
import requests from "../request/requests";
import axios from "../request/axios";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRatedMovie);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {movie && (
          <h1 className="banner__desc">
            {truncate(String(movie?.overview), 150)}
          </h1>
        )}
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;




// import React, { useState, useEffect } from "react";
// import requests from "../request/requests";
// import axios from "../request/axios";
// import "./Banner.css";

// const Banner = () => {
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(requests.fetchTopRatedMovie);

//       setMovie(
//         request.data.results[
//           Math.floor(Math.random() * request.data.results.length)
//         ]
//       );
//     }
//     fetchData();
//   }, []);

//   function truncate(str, n) {
//     return str.length > n ? str.substr(0, n - 1) + "..." : str;
//   }
//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner__contents">
//         <h1 className="banner__title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner__buttons">
//           <button className="banner__button">Play</button>
//           <button className="banner__button">My List</button>
//         </div>

//         {movie && (
//           <h1 className="banner__desc">
//             {truncate(String(movie?.overview), 150)}
//           </h1>
//         )}
//       </div>
//       <div className="banner__fadeBottom" />
//     </header>
//   );
// };

// export default Banner;
