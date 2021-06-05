import {SideLogOutBtn, SideFullName, SidebarContainer, Icon, CloseIcon , SidebarLink , SidebarWrapper,SidebarMenu, SideBtn,FSideBtn, SideBtnWrap} from "./SidebarElements";
import {FaFacebookF, FaHome, FaImages, FaNewspaper, FaUserFriends} from "react-icons/fa";
import {GoCalendar, GoMortarBoard} from "react-icons/go";
import {AiOutlineUserAdd} from "react-icons/ai";
import React, {Component} from "react";
import firebase from "firebase";
import {NavLink} from "../NavbarElements/Navbar";




class Sidebar extends Component{
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
        console.log(this.props.UserDetails)
        return(
            <SideFullName>שלום  {this.props.UserDetails.FullName}

                </SideFullName>
        )

    }

    admin_is_logged_in(){
        if(this.props.UserDetails.IsAdmin){
            return(
                <SidebarLink to="/manageBlog"> ניהול הבלוג</SidebarLink>
            )
            return <div></div>
        }

    }

    render() {
        let BuildSideBar
        if(this.props.isLoggedIn == true){
            BuildSideBar = (<SidebarContainer ipOpen={this.props.isOpen} onClick={this.props.toggle}>
                <Icon onClick={this.props.toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    {this.UserTab()}
                    <SidebarMenu>
                        <SidebarLink to='/'> דף הבית </SidebarLink>
                        {this.props.isLoggedIn && (
                            <SidebarLink to='./ArtistProfile'> פרופיל </SidebarLink>
                        )}
                        <SidebarLink to='./artists'>אמנים </SidebarLink>
                        <SidebarLink to='/blog'> בלוג</SidebarLink>
                        {this.admin_is_logged_in()}
                        <SidebarLink to='/gallery'>  גלריה </SidebarLink>
                        <SidebarLink to='/courses'> קורסים</SidebarLink>
                        <SidebarLink to='/events'> אירועים</SidebarLink>

                    </SidebarMenu>

                    <SideBtnWrap>
                        <SideLogOutBtn onClick={this.LogOut}>התנתק</SideLogOutBtn>

                        <FSideBtn href='https://www.facebook.com/bosserco/'> <FaFacebookF/></FSideBtn>

                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>)
        }
        else{
            BuildSideBar = (
                <SidebarContainer ipOpen={this.props.isOpen} onClick={this.props.toggle}>
                    <Icon onClick={this.props.toggle}>
                        <CloseIcon/>
                    </Icon>
                    <SidebarWrapper>
                        <SidebarMenu>
                            <SidebarLink to='/'>דף הבית </SidebarLink>
                            <SidebarLink to='./artists'>אמנים </SidebarLink>
                            <SidebarLink to='/blog'>בלוג </SidebarLink>
                            <SidebarLink to='/gallery'>  גלריה </SidebarLink>
                            <SidebarLink to='/courses'> קורסים</SidebarLink>
                            <SidebarLink to='/events'> אירועים</SidebarLink>
                            <SidebarLink to="/signup">הרשמה</SidebarLink>

                        </SidebarMenu>

                        <SideBtnWrap>
                            <SideBtn to='/login' onClick={this.props.toggle}> התחברות</SideBtn>
                            <FSideBtn href='https://www.facebook.com/bosserco/'> <FaFacebookF/></FSideBtn>


                        </SideBtnWrap>
                    </SidebarWrapper>
                </SidebarContainer>
            )
        }
        return (
            <div>
            {BuildSideBar}
            </div>
        )

    }
}

/*


const Sidebar = ({ isOpen, toggle}) => {



    return(
        <SidebarContainer ipOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/'><FaHome/> דף הבית </SidebarLink>
                    <SidebarLink to='./artists'><FaUserFriends />אמנים   </SidebarLink>
                    <SidebarLink to='/blog'><FaNewspaper/>בלוג </SidebarLink>
                    <SidebarLink to='/gallery'> <FaImages/> גלריה </SidebarLink>
                    <SidebarLink to='/courses'><GoMortarBoard/> קורסים</SidebarLink>
                    <SidebarLink to="/signup"><AiOutlineUserAdd />הרשמה</SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    <FSideBtn href='https://www.facebook.com/bosserco/'> <FaFacebookF /></FSideBtn>
                    <SideBtn to='login' onClick={toggle}> התחברות</SideBtn>

                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};


 */

export default Sidebar

