import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../Context/AuthContext";

const Movie = ({ movie }) => {
  const { user } = UserAuth();
  const [like, setlike] = useState(false);

  const movieId = doc(db, "users", `${user?.email}`);
  const saveshow = async () => {
    if (user?.email) {
      setlike(!like);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("You must be login to save a movie");
    }
  };
  return (
    <div>
      <div className="relative">
        <img
          className="  img"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path} `}
          alt={`${movie?.title}`}
        ></img>
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="absolute top-[30%] max-w-sm left-[10%] text-xs cursor-pointer text-center text-white ">
            {movie?.title}
          </p>
          <p onClick={saveshow} className="absolute top-[5%] left-[80%]">
            {like ? <FaHeart className="text-[gold]" /> : <FaRegHeart />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
