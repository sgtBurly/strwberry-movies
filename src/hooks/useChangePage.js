import React, {useState} from 'react'

const useChangePage = () => {
const [page, setPage] = useState(1)

    const nextPage = () => {
        return setPage((currPage) => currPage + 1)
    }

    const prevPage = () => {
        return setPage((currPage) => Math.max(currPage - 1, 0))
    }

    return {
        page,
        nextPage,
        prevPage
    }
}

export default useChangePage;