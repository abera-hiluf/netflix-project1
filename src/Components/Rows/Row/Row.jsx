import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        setLoading(true);
        setError("");
        const request = await axios.get(fetchUrl);

        if (isMounted) {
          setMovies(request.data.results || []);
        }
      } catch (err) {
        if (isMounted) {
          console.error(`Row fetch error for ${title}:`, err);
          setError("Unable to load titles right now.");
          setMovies([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [fetchUrl, title]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    const movieName = movie?.title || movie?.name || movie?.original_name;

    movieTrailer(movieName)
      .then((url) => {
        if (!url) {
          setTrailerUrl("");
          return;
        }
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v") || "");
      })
      .catch((err) => {
        console.error("Trailer lookup error:", err);
        setTrailerUrl("");
      });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      {loading ? <p className="row_status">Loading titles...</p> : null}
      {error ? <p className="row_status row_statusError">{error}</p> : null}
      <div className="row_posters">
        {movies.map((movie) => {
          const posterPath = isLargeRow ? movie.poster_path : movie.backdrop_path;

          if (!posterPath) return null;

          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${IMAGE_BASE_URL}${posterPath}`}
              alt={movie.title || movie.name || movie.original_name || "Title"}
              className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
              loading="lazy"
            />
          );
        })}
      </div>
      <div className="row_trailer">
        {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : null}
      </div>
    </div>
  );
};

export default Row;
