import axios from 'axios'

const api_key = `api_key=247fb190ba44f15d155e17f5c50a3d42`

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    const data = res.data
        return data
}

export const getAllGenres = async () => {
    return await get(`genre/movie/list?${api_key}`)
}

export const getMoviesByGenre = async (genreId, page) => {
    return await get(`discover/movie?${api_key}&${page}&with_genres=${genreId}`)
}

export const getMovieById = async (id) => {
    // making sure id is a number 
    const movieId = parseInt(id)

    return await get(`movie/${movieId}?${api_key}`)
}

export const getMovieCredits = async (id) => {
    const creditsId = parseInt(id)
    return await get(`/movie/${creditsId}/credits?${api_key}`)
}

export const getMovieList = async (listType, page) => {
    //The possible listTypes are: popular, top_rated and latest

    if(listType === 'popular'){
        return await get(`/movie/popular?${api_key}&page=${page}`)
    }
    if(listType === 'top_rated'){
        return await get(`/movie/top_rated?${api_key}&page=${page}`)
    }
    if(listType === 'latest'){
        return await get(`/movie/latest?${api_key}&page=${page}`)
    } else {
        throw new Error({
            message: 'The submitted listType is invalid. Valid listTypes must be a string: "popular", top_rated", "latest".',
            listType: listType})
    }
}

export const getActorById = async (id) => {
    //Making sure the id param is a number and not a string
    const actorId = parseInt(id)
    return await get(`/person/${actorId}?${api_key}`)
}

export const getCreditsByActorId = async (id) => {
        //Making sure the id param is a number and not a string
    const actorId = parseInt(id)
    return await get(`/person/${actorId}/movie_credits?${api_key}`)
}