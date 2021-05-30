import React, {Component} from 'react'
import firebase from "firebase";
import {auth} from "../../../Firebase/firebase";
import { Route, Switch} from "react-router-dom";
import Blog from "../../../Pages/Blog/blog";
import Gallery from "../../../Pages/Gallery/gallery";
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
    NavBtnLink,
    FullName,
    LogOutBtn
} from './Navbar';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    LogOut() {
        firebase.auth().signOut().then(() => {
            console.log("signed out success")
        }).catch((error) => {
            console.log(error)
        });
    }

    UserTab(){
        return(
            <FullName>שלום  {this.props.UserDetails.FullName}
            <br/>
            <LogOutBtn onClick={this.LogOut}>התנתק</LogOutBtn></FullName>
        )
    }


    render() {
        const {toggle} = this.props.toggle
        let buildNav
        if (this.props.isLoggedIn == true) {

            buildNav = (<Nav>
                <NavContainer>
                    <Bars onClick={toggle}> <FaBars/> </Bars>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/">  דף הבית </NavLink>
                            <NavLink to="/artists">אמנים </NavLink>
                            <NavLink to="/blog">בלוג </NavLink>
                            <NavLink to="/gallery">  גלריה </NavLink>
                            <NavLink to="/courses"> קורסים</NavLink>
                            <NavLink to="/events"> אירועים </NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {this.UserTab()}

                        <FNavBtnLink href='https://www.facebook.com/bosserco/'><FaFacebookF/> </FNavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>)
        } else {
            buildNav = (
                <Nav>
                    <NavContainer>
                        <Bars onClick={toggle}> <FaBars/> </Bars>
                        <NavMenu>
                            <NavItem>
                                <NavLink to="/">  דף הבית </NavLink>
                                <NavLink to="/artists">אמנים </NavLink>
                                <NavLink to="/blog">בלוג </NavLink>
                                <NavLink to="/gallery">  גלריה </NavLink>
                                <NavLink to="/courses">  קורסים</NavLink>
                                <NavLink to="/events"> אירועים </NavLink>

                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavLink to="/signup"> הרשמה </NavLink>
                            <NavBtnLink to="login">התחברות</NavBtnLink>
                            <FNavBtnLink href='https://www.facebook.com/bosserco/'><FaFacebookF/> </FNavBtnLink>
                        </NavBtn>
                    </NavContainer>
                </Nav>

            )

        }
        return (
            <>
                {buildNav}
            </>
        )

    }
};











/*
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
*/

export default Navbar;






