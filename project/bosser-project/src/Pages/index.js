import React, {Component, useState} from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";


const Index = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <Header isOpen={isOpen} toggle={toggle} isLoggedIn={props.isLoggedIn} UserDetails = {props.UserDetails} ClearUserDetails = {props.ClearUserDetails}/>
            <Footer isOpen={isOpen} toggle={toggle}/>
        </div>
    )
}

export default Index