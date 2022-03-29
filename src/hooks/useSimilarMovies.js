import { useQuery } from "react-query"
import { getSimilarMovies } from "../MoviesAPI"

export const useSimilarMovies = (id) => {
    return useQuery(["Similar movies", id], () => getSimilarMovies(id))
}