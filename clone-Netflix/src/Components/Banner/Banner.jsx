import React, { useState,useEffect } from "react";
import axios from "../../utils/axios";

import requests from "../../utils/request";
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState({});
    useEffect(() => {
      (async () => {
        try {
          const request = await axios.get(requests.fetchNetflixOriginals);
          console.log(request);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
        } catch (error) {
          console.log("error", error);
        }
      })();
    }, []);
    // useEffect(() => {
    //   axios
    //     .get(requests.fetchNetflixOriginals) // Make the GET request
    //     .then((response) => {
    //       console.log("API Response:", response.data);
    //       const randomIndex = Math.floor(
    //         Math.random() * response.data.results.length
    //       );
    //       setMovie(response.data.results[randomIndex]);
    //     })
    //     .catch((error) => {
    //       console.error("API Error:", error.message, error.response?.data);
    //     });
    // }, []);
    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"/>
    </div>
  );
}

export default Banner;
