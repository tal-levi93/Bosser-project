import React from 'react'
import { Route, Switch} from "react-router-dom";
import Blog from "../../Pages/blog";
import Gallery from "../../Pages/gallery";
import Courses from "../../Pages/courses";
import Events from "../../Pages/events";
import Newsletter from "../../Pages/newsletter";
import { FaFacebookF , FaUserFriends , FaImages ,FaNewspaper , FaHome} from 'react-icons/fa';
import { GoMortarBoard , GoCalendar } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";
import {
    Nav,
    NavLink,
    FNavBtnLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './Navbar';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
            <NavMenu>
                <NavLink to="/" >  <FaHome/> דף הבית </NavLink>
                <NavLink to="/artists" ><FaUserFriends />אמנים   </NavLink>
                <NavLink to="/blog" ><FaNewspaper/>בלוג </NavLink>
                <NavLink to="/gallery" >  <FaImages/> גלריה </NavLink>
                <NavLink to="/courses" > <GoMortarBoard/> קורסים</NavLink>
                <NavLink to="/events" > <GoCalendar/>אירועים </NavLink>
                <NavLink to="/signup"  > <AiOutlineUserAdd />הרשמה </NavLink>

            </NavMenu>
            <NavBtn>
                <NavBtnLink to="">כניסה</NavBtnLink>
                <FNavBtnLink  to="" ><FaFacebookF /> </FNavBtnLink>
            </NavBtn>

        </Nav>
            </>
    );
};
export default Navbar

