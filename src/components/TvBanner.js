import React from 'react'
import logo from '../assests/footer-bg.jpg'
import "./TvBanner.css"

function TvBanner({ title }) {
  return (
    <header
      className="movie_banner"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="movie_banner__contents">
        <h1 className="movie_banner__title">
          {title}
        </h1>


      </div>
      <div className="banner__fadeBottom" />
    </header>
  )
}

export default TvBanner