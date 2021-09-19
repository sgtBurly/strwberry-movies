import { getMovieCredits } from "../MoviesAPI";
import { useQuery } from "react-query";

export const useMovieCredits = (id) => {
    return useQuery(["movieCredits", id], () => getMovieCredits(id));
}
