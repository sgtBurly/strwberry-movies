import {useState} from 'react'

const useChangePage = () => {
const [page, setPage] = useState(1)

    const nextPage = () => {
        return setPage(old => old + 1)
    }

    const prevPage = () => {
        return setPage(old => Math.max(old - 1, 0))
    }

    return {
        page,
        nextPage,
        prevPage
    }
}

export default useChangePage;