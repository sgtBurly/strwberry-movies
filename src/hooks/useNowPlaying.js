import { useQuery } from "react-query"
import { getNowPlaying } from "../MoviesAPI"

export const useNowPlaying = () => {
    return useQuery(["Now playing"], () => getNowPlaying())
}