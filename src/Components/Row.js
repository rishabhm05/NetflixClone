import axios from "axios";
import React, { useEffect, useState } from "react";

import "../App.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios.get(fetchURL).then((res) => setmovies(res.data.results));
    setloading(false);
  }, [fetchURL]);
  const slideleft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideright = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h1 className="text-white font-bold mx-4 my-4 text-2xl">
        {title.toUpperCase()}
      </h1>
      {loading ? (
        <h1>Data Loading</h1>
      ) : (
        <div className="row relative group scrollbar-hide">
          <MdChevronLeft
            onClick={slideleft}
            className="bg-white rounded-full self-center absolute z-10 left-[20px] top-[25%] opacity-50 hover:opacity-100 hidden group-hover:block"
            size={30}
          />
          <div
            className="row w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap"
            id={"slider" + rowId}
          >
            {movies.map((movie, id) => (
              <Movie key={id} movie={movie} />
            ))}
          </div>
          <MdChevronRight
            onClick={slideright}
            className="bg-white rounded-full self-center absolute z-10 right-[20px] top-[25%] opacity-50 hover:opacity-100 hidden group-hover:block"
            size={30}
          />
        </div>
      )}
    </>
  );
};

export default Row;
