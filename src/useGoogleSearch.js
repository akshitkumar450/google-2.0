import axios from 'axios'
import React, { useState, useEffect } from 'react'
import API_KEY from './key'

// https://cse.google.com/cse/create/new
const CONTEXT_KEY = '9617e31f5a1851282'

// custom hook
function useGoogleSearch(term) {
    const [data, setData] = useState(null)
    useEffect(() => {
        // whenever we change the term run this
        const fetchData = async () => {
            console.log('insiders');
            const response = await axios.get(`
            https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            setData(response.data)
            console.log(' RESPONSE-- >>', response.data);
        }
        fetchData()

    }, [term])

    return { data }
}

export default useGoogleSearch
