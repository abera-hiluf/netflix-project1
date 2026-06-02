import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results || [];

        if (results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        } else {
          setMovie({});
        }
      } catch (err) {
        console.error("Banner fetch error:", err);
        setError("Unable to load featured title right now.");
      }
    })();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? `${str.slice(0, n - 1)}...` : str;

  const backgroundImage = movie?.backdrop_path
    ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
    : "linear-gradient(135deg, rgba(20,20,20,0.95), rgba(0,0,0,0.65))";

  return (
    <header
      className="banner"
      style={{
        backgroundImage,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name || "Featured"}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">+ My List</button>
        </div>

        <p className="banner_description">{truncate(movie?.overview, 160)}</p>
        {error && <p className="banner_error">{error}</p>}
        {movie?.vote_average ? (
          <span className="banner_rating">
            ★ {movie.vote_average.toFixed(1)}
          </span>
        ) : null}
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
