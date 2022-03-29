// This hook, in addition to pagination options, takes the argument of what 
// list of movies to return.
import { useQuery } from "react-query"
import { getMovieList } from "../MoviesAPI"

// Available options for "listType": popular, top_rated, latest
export const useFetchMovies = (listType, page) => {
    return useQuery([listType, page, listType], () => getMovieList(listType, page))
}