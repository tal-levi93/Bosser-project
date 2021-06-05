import React, {Component} from 'react'
import firebase from "firebase";
import {auth} from "../../../Firebase/firebase";
import { Route, Switch} from "react-router-dom";
import Blog from "../../../Pages/Blog/blog";
import Gallery from "../../../Pages/Gallery/gallery";
import Courses from "../../../Pages/Courses/courses";
import Events from "../../../Pages/Events/events";
import Newsletter from "../../../Pages/newsletter";
import ArtistProfile from "../../../Pages/ArtistProfile/ArtistProfile";
import {FaFacebookF, FaUserFriends, FaImages, FaNewspaper, FaHome, FaBars} from 'react-icons/fa';
import { GoMortarBoard , GoCalendar } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

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
import artistLogo from "../../../Pages/Artists/artistLogo.jpg";
import ReactRoundedImage from "react-rounded-image";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoggedIn: props.IsLoggedIn
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isLoggedIn != prevProps.isLoggedIn){
            this.setState({
                LoggedIn:this.props.isLoggedIn
            })
        }
    }

    LogOut = ()=> {
        this.props.ClearUserDetails()
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

    admin_is_logged_in(){
        if(this.props.UserDetails.IsAdmin){
            return(
                <NavLink to="/manageBlog"> ניהול הבלוג</NavLink>
            )
            return <div></div>
        }

    }


    render(padding) {
        const {toggle} = this.props.toggle
        let buildNav
        console.log("the prop is:" ,  this.props.IsLoggedIn)
        if (this.state.LoggedIn) {

            buildNav = (<Nav>
                <NavContainer>
                    <Bars onClick={toggle}> <FaBars/> </Bars>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/">  דף הבית </NavLink>
                            <NavLink to="/artists">אמנים </NavLink>
                            <NavLink to="/blog">בלוג </NavLink>
                            {this.admin_is_logged_in()}
                            <NavLink to="/gallery">  גלריה </NavLink>
                            <NavLink to="/courses"> קורסים</NavLink>
                            <NavLink to="/events"> אירועים </NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {this.UserTab()}
                        <NavLink to={"/artistManagePage/" +  this.props.UserDetails.UserUid} >
                            <FaRegEdit/>
                        </NavLink>

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
            <div>
                {buildNav}
            </div>
        )

    }
};











/*
const Navbar = ( {toggle}) => {

    return (
        <div>
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
            </div>
    );
};
*/

export default Navbar;






