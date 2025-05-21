import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Banner fetch error:", error);
      }
    })();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">▶ Play</button>
          <button className="banner_button">+ My List</button>
        </div>

        <p className="banner_description">{truncate(movie?.overview, 160)}</p>
        {movie?.vote_average && (
          <span className="banner_rating">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        )}
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
