import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";

const Account = () => {
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(
      doc(db, "users", `${user?.email}`),
      (doc) => {
        console.log(doc.data());
        setMovies(doc.data()?.savedShows);
      },
      [user.email]
    );
  });

  return (
    <div className="absolute">
      <h1 className="text-white font-bond text-3xl  my-20 mx-2">My Shows</h1>
      <div className="flex flex-wrap items-center justify-between">
        {movies.map((movie, id) => (
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie?.img}`}
              alt={`${movie?.title}`}
            ></img>
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"></div>
            <p className="absolute top-[30%] max-w-sm left-[10%] font-bold text-xs cursor-pointer text-center text-white ">
              {movie?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
