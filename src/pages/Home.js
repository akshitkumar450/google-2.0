import React from 'react'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Search from '../components/Search';
function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__header--left'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__header--right'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <Link to='/apps'>
                        <AppsIcon />
                    </Link>
                    <Link to='/profile'>
                        <Avatar src='' alt='name' />
                    </Link>
                </div>
            </div>
            <div className='home__body'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    alt="" />
                <Search />
            </div>
        </div>
    )
}

export default Home
