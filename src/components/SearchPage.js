import React from 'react'
import { useStateValue } from '../stateProvider'
import useGoogleSearch from '../useGoogleSearch'
import './SearchPage.css'
import { response } from '../response'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new
import API_KEY from '../key'

function SearchPage() {
    const [{ searchTerm }, dispatch] = useStateValue()

    const { data } = useGoogleSearch(searchTerm)  //live google search API CALL
    // getting the results from our file
    // const data = response.items; //STTORING RESULT FROM GOOGLE API 
    console.log('DATA--->>', data?.items);
    // console.log('DATA ITEMS--->>', data.items);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                        alt="" />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hidebuttons={true} />

                    <div className='searchPage__options'>
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='searchPage__results'>
                {
                    data?.items?.map((item) => {
                        return (
                            <div className='searchPage__result' key={item.title} >
                                {/**<img src={item?.pagemap?.cse_image[0]?.src} alt='' />*/}
                                <div>
                                    <Link to={`/${item.displayLink}`}>
                                        {item.displayLink}
                                    </Link>

                                    <Link to={`/${item.title}`} className='searchPage__resultTitle'>
                                        <h2>{item.title}</h2>
                                    </Link>

                                    <p className='searchPage__description'>
                                        {item.snippet}
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default SearchPage
