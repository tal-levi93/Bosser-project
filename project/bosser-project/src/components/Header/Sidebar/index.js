import {SideLogOutBtn, SideFullName, SidebarContainer, Icon, CloseIcon , SidebarLink , SidebarWrapper,SidebarMenu, SideBtn,FSideBtn, SideBtnWrap} from "./SidebarElements";
import {FaFacebookF, FaRegEdit} from "react-icons/fa";
import React, {Component} from "react";
import firebase from "firebase";
import {NavLink} from "../NavbarElements/Navbar";




/*This class provide toolbar for max-width of 1250px (regular phone,ipad devices)
the toolbar contain all the pages that belongs to this website and link for facebook page*/
class Sidebar extends Component{
    constructor(props) {
        super(props);
    }

    /*User that is logged-in can log-out - click on toolbar */
    LogOut() {
        firebase.auth().signOut().then(() => {
            console.log("signed out success")
        }).catch((error) => {
            console.log(error)
        });
    }
    /* Toolbar say hi for User that is logged-in */
    UserTab(){
        return(
            <SideFullName>שלום  {this.props.UserDetails.FullName}

                </SideFullName>
        )

    }

    /*This is admin only functionality */
    manage_blog(){
        if(this.props.UserDetails.IsAdmin){
            return(
                <SidebarLink to="/manageBlog"> ניהול הבלוג</SidebarLink>
            )
            return <div></div>
        }

    }
    /* This is admin only functionality*/
    send_newsletter_massage(){
        if(this.props.UserDetails.IsAdmin){
            return(
                <SidebarLink to="/createMessageNS">  תפוצה</SidebarLink>
            )
            return <div></div>
        }

    }

    /* User that is logged-in can manage his artist personal pages*/
    not_admin(){
        if(this.props.UserDetails.IsAdmin == false)
            return(
                <SidebarLink to={"/artistManagePage/" +  this.props.UserDetails.UserUid} >
                    עריכת הפרופיל
                </SidebarLink>
            )
        return <div></div>
    }


    render() {
        let BuildSideBar
        if(this.props.isLoggedIn == true){
            BuildSideBar = (<SidebarContainer ipOpen={this.props.isOpen} onClick={this.props.toggle}>
                <Icon onClick={this.props.toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper ipOpen={this.props.isOpen} >
                    {this.UserTab()}
                    <SidebarMenu>
                        <SidebarLink to='/'> דף הבית </SidebarLink>
                        <SidebarLink to='/artists'>אמנים </SidebarLink>
                        <SidebarLink to='/blog'> בלוג</SidebarLink>
                        {this.manage_blog()}
                        <SidebarLink to='/gallery'>  גלריה </SidebarLink>
                        <SidebarLink to='/courses'> קורסים</SidebarLink>
                        <SidebarLink to='/events'> אירועים</SidebarLink>
                        {this.send_newsletter_massage()}
                        {this.not_admin()}

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
                    <SidebarWrapper ipOpen={this.props.isOpen}>
                        <SidebarMenu>
                            <SidebarLink to='/'>דף הבית </SidebarLink>
                            <SidebarLink to='/artists'>אמנים </SidebarLink>
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


export default Sidebar

