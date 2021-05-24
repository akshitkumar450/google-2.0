import React from 'react'
import { useStateValue } from '../stateProvider'
import useGoogleSearch from '../useGoogleSearch'
import './SearchPage.css'
import { response } from '../response'

//https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new

function SearchPage() {
    const [{ searchTerm }, dispatch] = useStateValue()
    // const { data } = useGoogleSearch(searchTerm)  //live google search API CALL
    const data = response;
    // console.log('DATA--->>', data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <h1>{searchTerm}</h1>
            </div>
            <div className='searchPage__results'>

            </div>
        </div>
    )
}

export default SearchPage
