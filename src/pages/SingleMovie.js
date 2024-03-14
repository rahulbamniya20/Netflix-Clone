

import "./SingleMovie.css"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ScrollToTop from "react-scroll-to-top";

const baseImgUrl = "https://image.tmdb.org/t/p/original"

function SingleMovie() {
  const [movieInfo, setMovieInfo] = useState([])
  const [cast, setCast] = useState([])
  const [similar, setSimilar] = useState([])
  const [key, setKey] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let navigate = useNavigate()

  const params = useParams()
  const api_key = "8a2705651c885ab1d285fc80ee1021c5"
  const movieUrl = `https://api.themoviedb.org/3/${params.type}/${params.movieId}?api_key=${api_key}&language=en-US&append_to_response=videos`
  const castUrl = `https://api.themoviedb.org/3/${params.type}/${params.movieId}/credits?api_key=${api_key}&language=en-US`
  const similarUrl = `https://api.themoviedb.org/3/${params.type}/${params.movieId}/similar?api_key=${api_key}&language=en-US&page=1&adult=false`
  const youtubeUrl = `https://api.themoviedb.org/3/${params.type}/${params.movieId}?api_key=${api_key}&append_to_response=videos`
  // let dummy = []
  // let movieKey = []
  useEffect(() => {
    setIsLoading(true)
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(movieUrl)
        const data = await res.json()

        setMovieInfo(data)
      }
      catch (err) {
        console.log(err)
      }

    }
    fetchMovieDetails()

    const fetchMovieCast = async () => {
      const res = await fetch(castUrl)
      const data = await res.json()

      setCast(data.cast.slice(0, 5))


    }
    fetchMovieCast()

    const similarMovie = async () => {
      const res = await fetch(similarUrl)
      const data = await res.json()


      setSimilar(data.results)
    }
    similarMovie()

    const fetchYoutube = async () => {
      const res = await fetch(youtubeUrl)
      const data = await res.json()

      const filterMovie = data.videos.results.filter(item => item.type === "Trailer")
      setKey(filterMovie)
    }
    fetchYoutube()

    setIsLoading(false)
  }, [movieUrl, similarUrl, castUrl, youtubeUrl])
  const opts = {
    height: "400px",
    width: "100%",
    playerVars: {
      autoplay: false,
    },
  };

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <>
      <div className='single'>
        <img
          loading="lazy"
          className="single__image"
          src={`${baseImgUrl}${movieInfo.backdrop_path}`} alt="a movie"
        />


        <div className="single__wrapper">
          <div className="single__left">
            <img src={`${baseImgUrl}${movieInfo.poster_path}`} alt='some movie'
              className="single__left-img"
              loading="lazy"
            />
          </div>

          <div className="single__rightInfo">
            <h1>{movieInfo?.title || movieInfo?.name || movieInfo?.original_name}</h1>
            <div className="single__genres">
              {movieInfo.genres?.map(item => (
                <button className="single__button" key={item.name}>{item.name}</button>
              ))}
            </div>

            <p className="single__desc">
              {truncate(String(movieInfo?.overview), 150)}

            </p>
            <div className="single__castContainer">
              <h3>Casts</h3>
              <div className="single__castImgRow">
                {cast.map(item => (
                  <div className="cast-item" key={item.id}>
                    <img src={`${baseImgUrl}${item.profile_path}`} key={item.id}
                      className="single__castImg"
                      alt="a movie"
                      loading="lazy"
                    />
                    <span className="cast-title">{item.original_name}</span>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* movie trailer */}
      <div className="movie-trailer">
        {key.map(item => {
          if (item.key) {
            return <YouTube videoId={item.key} opts={opts} />
          }
        })}
      </div>
      <div style={{ padding: "1rem " }}>
        <h2>You might also Like </h2>
        <div className="cardContainer">
          {similar.map(item => (
            <div key={item.id} >
              <img src={`${baseImgUrl}${item.poster_path}`} 
                alt="a movie"
                loading="lazy"
                onClick={() => navigate(`/${params.type}/${item.id}`, { replace: true })}
              />
              <ScrollToTop
                smooth
                viewBox="0 0 24 24"
                svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
              />
            </div>

          ))}
        </div>
      </div>

    </>
  )
}
// poster_path
export default SingleMovie