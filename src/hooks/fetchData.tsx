import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url: string) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    setLoading(true)
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [url])

    return { data, loading, error }
}

export default useFetch