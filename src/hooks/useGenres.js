import {useQuery} from 'react-query'
import { getAllGenres } from '../MoviesAPI';

export const useGenres = () => {
    return useQuery("genres", getAllGenres, {keepPreviousData: true});
}