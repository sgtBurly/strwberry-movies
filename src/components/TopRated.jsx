import React, { useEffect, useState } from "react";
import Card from "./Card";
import Style from "../styles/moviesList.module.css";
import { useFetchMovies } from "../hooks/useFetchMovies";
import useChangePage from "../hooks/useChangePage";

const Popular = () => {
  const { page, nextPage, prevPage } = useChangePage();
  const { data: topRated, isSuccess: topRatedSuccess } = useFetchMovies(
    "top_rated",
    page
  );

  return (
    <div className={Style.listContainer}>
      <h1>Top rated movies</h1>
      <div className={Style.listWrapper}>
        {topRated &&
          topRated?.results.map((movie, i) => {
            return (
              <Card
                key={i}
                background={movie.backdrop_path}
                title={movie.title}
                type="Movies"
                id={movie.id}
              />
            );
          })}
        <div className={Style.buttonContainer}></div>
      </div>
      <button className={Style.button} onClick={() => nextPage()}>
        Load more movies
      </button>
    </div>
  );
};

export default Popular;
