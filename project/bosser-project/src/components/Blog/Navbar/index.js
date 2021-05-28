import './style.css'
import searchLogo from "../../../icons/search-32.png";
import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (event) => {
        event.preventDefault();
        alert('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? "searchInput active" : "searchInput" ;

    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about-us'>About us</NavLink></li>
                <li><NavLink to='/blog/post'>Posts</NavLink></li>
                <li><NavLink to='/contact-us'>Contact us</NavLink></li>
            </ul>
            <div className='search'>
                <form onSubmit={submitSearch}>
                    <input type='text' className={searchClass} placeholder='חיפוש'/>
                    <img onClick={openSearch} className='searchIcon' src={searchLogo} alt='Search'/>
                </form>

            </div>
        </div>
    )
}

export default Navbar