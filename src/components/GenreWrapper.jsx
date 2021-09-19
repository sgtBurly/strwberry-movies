import Style from "../styles/moviesList.module.css";
import Card from "./Card";
import useChangePage from "../hooks/useChangePage";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";

const GenreWrapper = ({ title, genreId }) => {
  const { page, nextPage, prevPage } = useChangePage();
  const {
    data: moviesArray,
    isSuccess,
    error,
  } = useMoviesByGenre(genreId, page);

  return (
    <div className={Style.listContainer}>
      {title && <h1>{title}</h1>}
      <div className={Style.listWrapper}>
        {isSuccess &&
          moviesArray?.results.map((movie, i) => (
            <Card
              key={i}
              title={movie.title}
              description={movie.overview}
              background={movie.backdrop_path}
              id={movie.id}
              type="Movies"
            />
          ))}
      </div>
      <button className={Style.button} onClick={() => nextPage()}>
        Load more movies
      </button>
    </div>
  );
};

export default GenreWrapper;
