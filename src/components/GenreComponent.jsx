import React, { useEffect } from "react";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";
import Card from "./Card";
import Style from "../styles/moviesList.module.css";
import GenreWrapper from "./GenreWrapper";
import { getAllGenres } from "../MoviesAPI";
import { useQuery } from "react-query";

// This component is given a genres array, and renders a list of cards of each movie.
const GenreComponent = () => {
  // Declaring and using the useMoviesByGenre hook, which takes an array of genres
  // and fetches all movies associated with the genre. It returns an array of movies,
  // and an options object containing the genre + id.

  const { data: genres, isSuccess, error } = useQuery(["genres"], getAllGenres);

  // return (
  //   <div className={Style.listContainer}>
  //     {moviesByGenre?.map((movie, index) => {
  //       if (movie.isSuccess) {
  //         return (
  //           <GenreWrapper
  //             key={index}
  //             title={movie.data.options.name}
  //             movieArray={movie.data.data.results}
  //             genreId={movie.data.options.id}
  //           />
  //         );
  //       }
  //     })}
  //   </div>
  // );

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
