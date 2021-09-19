import React, { useEffect } from "react";
import Style from "../styles/moviesList.module.css";
import GenreWrapper from "./GenreWrapper";
import { getAllGenres } from "../MoviesAPI";
import { useQuery } from "react-query";

// This component is given a genres array, and renders a list of cards of each movie.
const GenreComponent = () => {
  const { data: genres, isSuccess, error } = useQuery(["genres"], getAllGenres);

  return (
    <div className={Style.listContainer}>
      {genres &&
        genres?.genres.map((genre, index) => {
          return (
            <GenreWrapper key={index} title={genre.name} genreId={genre.id} />
          );
        })}
    </div>
  );
};

export default GenreComponent;
