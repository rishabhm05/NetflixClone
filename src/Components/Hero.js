import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
const Hero = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((req) => setmovies(req.data.results));
  }, []);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="w-full h-[600px]">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black  "></div>
        <img
          className="bg-cover w-full h-[600px] bg-no-repeat object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path} `}
          alt={`${movie?.title}`}
        ></img>
      </div>
      <h2 className="text-white absolute top-[20%] left-4 font-bold text-3xl">
        {movie?.title.toUpperCase()}
      </h2>
      <div className="absolute top-[30%] left-4">
        <button className="bg-[rgb(51,51,51,.5)] text-white py-2 px-6 font-bold rounded hover:bg-white hover:text-black  text-center mr-2">
          Play
        </button>
        <button className="bg-[rgb(51,51,51,.5)] text-white py-2 px-6 font-bold rounded hover:bg-white hover:text-black  text-center">
          My List
        </button>
      </div>
      <p className="text-white top-[40%] left-4 font -bold absolute text-left max-w-md ">
        {movie?.overview}
      </p>
    </div>
  );
};

export default Hero;
