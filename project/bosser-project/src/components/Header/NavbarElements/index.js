import React from 'react'

import { Route, Switch} from "react-router-dom";
import Blog from "../../../Pages/blog";
import Gallery from "../../../Pages/gallery";
import Courses from "../../../Pages/Courses/courses";
import Events from "../../../Pages/Events/events";
import Newsletter from "../../../Pages/newsletter";
import {FaFacebookF, FaUserFriends, FaImages, FaNewspaper, FaHome, FaBars} from 'react-icons/fa';
import { GoMortarBoard , GoCalendar } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";
import {
    Nav,
    NavContainer,
    NavItem,
    NavLink,
    FNavBtnLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './Navbar';

const Navbar = ( {toggle}) => {
    return (
        <>
            <Nav>
                <NavContainer>
                <Bars onClick={toggle}> <FaBars/> </Bars>
            <NavMenu>
                <NavItem>
                <NavLink to="/" >  <FaHome/> דף הבית </NavLink>
                <NavLink to="/artists" ><FaUserFriends />אמנים   </NavLink>
                <NavLink to="/blog" ><FaNewspaper/>בלוג </NavLink>
                <NavLink to="/gallery" >  <FaImages/> גלריה </NavLink>
                <NavLink to="/courses" > <GoMortarBoard/> קורסים</NavLink>
                <NavLink to="/events" > <GoCalendar/>אירועים </NavLink>
                <NavLink to="/signup"  > <AiOutlineUserAdd />הרשמה </NavLink>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="login">התחברות</NavBtnLink>
                <FNavBtnLink href='https://www.facebook.com/bosserco/' ><FaFacebookF /> </FNavBtnLink>
            </NavBtn>
                </NavContainer>
        </Nav>
            </>
    );
};
export default Navbar;






