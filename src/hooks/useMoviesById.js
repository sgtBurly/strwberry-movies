import { useQuery } from "react-query"
import { getMovieById } from "../MoviesAPI"

export const useMoviesById = (id) => {
    return useQuery(["Movie", id], () => getMovieById(id))
}