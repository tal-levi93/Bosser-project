import {Component} from "react";
import searchLogo from "../../../icons/searchLogo.png";
import React from "react";
import './style.css'

const  BlogHeader = (props) => {

    const submitSearch = (event) => {
        event.preventDefault();
        alert('Searched');
    }

    return (
        <header className='header'>
            <nav className="headerMenu">
                <a href='#'>Home</a>
                <a href='#'>About us</a>
                <a href='#'>Contact us</a>
            </nav>
            <div>
                social media
            </div>
        </header>

    )
}

export default BlogHeader;