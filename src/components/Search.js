import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from '../stateProvider';

function Search({ hidebuttons }) {
    const [input, setInput] = useState('')
    const history = useHistory()
    const [state, dispatch] = useStateValue()

    const search = (e) => {
        e.preventDefault()
        // console.log('search');
        dispatch({
            type: 'SET_SEARCH_TERM',
            payload: input
        })

        history.push('/search')
    }

    return (
        <div className='search'>
            <form>
                <div className='search__input'>
                    <SearchIcon />
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='search google'
                    />
                    <MicIcon />
                </div>

                {/**to make buttons reusable in home and search page */}
                {/**hidding buttons but the functionality will not be broken it's present in the DOM */}
                {
                    hidebuttons
                        ?
                        (<div className='search__button hidden'>
                            <Button type='submit' onClick={search} variant='outlined' className='search__btn'>Google search</Button>
                            <Button variant='outlined' className='search__btn'>I am feeling lucky</Button>
                        </div>)
                        :
                        (<div className='search__button'>
                            <Button type='submit' onClick={search} variant='outlined' className='search__btn'>Google search</Button>
                            <Button variant='outlined' className='search__btn'>I am feeling lucky</Button>
                        </div>)
                }

            </form>
        </div>
    )
}

export default Search
