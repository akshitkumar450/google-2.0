import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

function Search() {
    const [input, setInput] = useState('')

    const search = (e) => {
        e.preventDefault()
        console.log('searche');
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
                <div className='search__button'>
                    <Button type='submit' onClick={search} variant='outlined' className='search__btn'>Google search</Button>
                    <Button variant='outlined' className='search__btn'>I am feeling lucky</Button>
                </div>
            </form>
        </div>
    )
}

export default Search
