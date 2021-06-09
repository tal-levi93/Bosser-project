import React, {Component} from 'react'
import firebase from "firebase";
import {FaFacebookF, FaUserFriends, FaImages, FaNewspaper, FaHome, FaBars} from 'react-icons/fa';
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


/*This class provide toolbar for min-width of 1250px (regular computer devices)
the toolbar contain all the pages that belongs to this website and link for facebook page*/
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

    /*User that is logged-in can log-out - click on toolbar */
    LogOut = ()=> {
        this.props.ClearUserDetails()
        firebase.auth().signOut().then(() => {
            console.log("signed out success")
        }).catch((error) => {
            console.log(error)
        });


    }

    /* Toolbar say Hi for User that is logged-in */
    UserTab(){
        return(
            <FullName>שלום  {this.props.UserDetails.FullName}
            <br/>
            <LogOutBtn onClick={this.LogOut}>התנתק</LogOutBtn></FullName>
        )
    }

    /*This is admin only functionality */
    manage_blog(){
        if(this.props.UserDetails.IsAdmin){
            return(
                <NavLink to="/manageBlog"> ניהול הבלוג</NavLink>
            )
            return <div></div>
        }

    }
    /* This is admin only functionality*/
    send_newsletter_massage(){
        if(this.props.UserDetails.IsAdmin){
            return(
                <NavLink to="/createMessageNS">  תפוצה</NavLink>
            )
            return <div></div>
        }

    }


    /* User that is logged-in can manage his artist personal pages*/
    not_admin(){
        if(this.props.UserDetails.IsAdmin == false)
        return(
            <NavLink to={"/artistManagePage/" +  this.props.UserDetails.UserUid} >
                <FaRegEdit/>
            </NavLink>
        )
        return <div></div>
    }





    render(padding) {
        const {toggle} = this.props.toggle //checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk!!!!!!
        let buildNav
        if (this.props.isLoggedIn) {

            buildNav = (<Nav>
                <NavContainer>
                    <Bars onClick={toggle}> <FaBars/> </Bars>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/">  דף הבית </NavLink>
                            <NavLink to="/artists">אמנים </NavLink>
                            <NavLink to="/blog">בלוג </NavLink>
                            {this.manage_blog()}
                            <NavLink to="/gallery">  גלריה </NavLink>
                            <NavLink to="/courses"> קורסים</NavLink>
                            <NavLink to="/events"> אירועים </NavLink>
                            {this.send_newsletter_massage()}
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {this.UserTab()}
                        {this.not_admin()}

                        <FNavBtnLink href='https://www.facebook.com/bosserco/'><FaFacebookF/> </FNavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>)
        } else {
            buildNav = (
                <Nav>
                    <NavContainer>
                        <Bars onClick={toggle} > <FaBars/> </Bars>
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
                            <NavBtnLink to="/login">התחברות</NavBtnLink>
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






