import { useQuery } from "react-query"
import { getCreditsByActorId } from "../MoviesAPI"

export const useCreditsByActorId = (id) => {
return useQuery(["actorCredits", id], () => getCreditsByActorId(id))
}