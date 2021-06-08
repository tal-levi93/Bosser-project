import React, {Component, useState} from 'react'
import Sidebar from "./Sidebar";
import Navbar from "./NavbarElements";


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle} isLoggedIn = {props.isLoggedIn} UserDetails = {props.UserDetails} ClearUserDetails = {props.ClearUserDetails}/>
            <Sidebar isOpen={isOpen} toggle={toggle}  isLoggedIn = {props.isLoggedIn} UserDetails = {props.UserDetails} ClearUserDetails = {props.ClearUserDetails}/>
        </div>
    );
}


export default Header