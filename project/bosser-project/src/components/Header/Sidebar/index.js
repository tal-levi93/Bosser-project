import {SidebarContainer, Icon, CloseIcon , SidebarLink , SidebarWrapper,SidebarMenu, SideBtn,FSideBtn, SideBtnWrap} from "./SidebarElements";
import {FaFacebookF, FaHome, FaImages, FaNewspaper, FaUserFriends} from "react-icons/fa";
import {GoCalendar, GoMortarBoard} from "react-icons/go";
import {AiOutlineUserAdd} from "react-icons/ai";
import React, {Component} from "react";
import firebase from "firebase";
import {FullName,LogOutBtn} from "../NavbarElements/Navbar";



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
            <FullName>שלום  {this.props.UserDetails.FullName}
                <br/>
                <LogOutBtn onClick={this.LogOut}>התנתק</LogOutBtn></FullName>
        )

    }
    render() {
        let BuildSideBar
        if(this.props.isLoggedIn == true){
            BuildSideBar = (<SidebarContainer ipOpen={this.props.isOpen} onClick={this.props.toggle}>
                <Icon onClick={this.props.toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/'><FaHome/> דף הבית </SidebarLink>
                        <SidebarLink to='./artists'><FaUserFriends/>אמנים </SidebarLink>
                        <SidebarLink to='/blog'><FaNewspaper/>בלוג </SidebarLink>
                        <SidebarLink to='/gallery'> <FaImages/> גלריה </SidebarLink>
                        <SidebarLink to='/courses'><GoMortarBoard/> קורסים</SidebarLink>

                    </SidebarMenu>

                    <SideBtnWrap>
                        {this.UserTab()}
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
                            <SidebarLink to='/'><FaHome/> דף הבית </SidebarLink>
                            <SidebarLink to='./artists'><FaUserFriends/>אמנים </SidebarLink>
                            <SidebarLink to='/blog'><FaNewspaper/>בלוג </SidebarLink>
                            <SidebarLink to='/gallery'> <FaImages/> גלריה </SidebarLink>
                            <SidebarLink to='/courses'><GoMortarBoard/> קורסים</SidebarLink>
                            <SidebarLink to="/signup"><AiOutlineUserAdd/>הרשמה</SidebarLink>

                        </SidebarMenu>

                        <SideBtnWrap>
                            <FSideBtn href='https://www.facebook.com/bosserco/'> <FaFacebookF/></FSideBtn>
                            <SideBtn to='login' onClick={this.props.toggle}> התחברות</SideBtn>

                        </SideBtnWrap>
                    </SidebarWrapper>
                </SidebarContainer>
            )
        }
        return (
            <>
            {BuildSideBar}
            </>
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

