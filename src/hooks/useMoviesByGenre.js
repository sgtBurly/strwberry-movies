import { useQuery } from 'react-query'
import { getMoviesByGenre } from '../MoviesAPI';

// This hook takes the genres array, executes a map() on it and returns a 
// query key and query function for each genre in the array.
export const useMoviesByGenre = (genreId, page) => {
     return useQuery(
          ["movie", genreId, page],
          () => getMoviesByGenre(genreId, page),
      )
  }
