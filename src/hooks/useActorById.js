import { useQuery } from "react-query"
import { getActorById } from "../MoviesAPI"

export const useActorById = (id) => {
    return useQuery(["actor", id], () => getActorById(id))
}