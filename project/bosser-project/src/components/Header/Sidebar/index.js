import {SidebarContainer, Icon, CloseIcon , SidebarLink , SidebarWrapper,SidebarMenu, SideBtn,FSideBtn, SideBtnWrap} from "./SidebarElements";
import {FaFacebookF, FaHome, FaImages, FaNewspaper, FaUserFriends} from "react-icons/fa";
import {GoCalendar, GoMortarBoard} from "react-icons/go";
import {AiOutlineUserAdd} from "react-icons/ai";
import React from "react";


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

export default Sidebar

