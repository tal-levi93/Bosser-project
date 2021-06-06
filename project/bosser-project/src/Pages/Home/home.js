import React, {Component} from "react";
import {Bars, FNavBtnLink, Nav, NavBtn, NavBtnLink, NavLink, NavMenu} from "../../components/Header/NavbarElements/Navbar";
import {FaFacebookF, FaHome, FaImages, FaNewspaper, FaUserFriends} from "react-icons/fa";
import {GoCalendar, GoMortarBoard} from "react-icons/go";
import {AiOutlineUserAdd} from "react-icons/ai";
import styled from "styled-components";
import logo1 from './logo2.jpg';
import logo3 from './logo2.1.jpg';
import logo2 from './logo2.3.jpg';


export const Back = styled.body`
  background: black;

`;

export const P = styled.p`
  padding-right: 30px;
  padding-left: 30px;
  text-align: center;
  color: white;
  font-size: 40px;
  margin-bottom: 100px;


`;

export const Title = styled.div`
  padding-right: 30px;
  margin-top: 17px;
  padding-left: 30px;
  text-align: center;
  color: white;
  font-size: 120px;
  text-decoration: underline;
  text-decoration-color: red;

`;

export const Img = styled.div`
  background-image: url(${logo1}) ;
  background-repeat: no-repeat;
  width: 100%;
  display: grid;
  height: 500px;
  position: center;
  
  
  @media screen and (max-width: 800px ) {
    background-image: url(${logo3}) ;
    height: 300px;


  }
  @media screen and (max-width: 500px ) {
    background-image: url(${logo2}) ;
    height: 400px;
    

  }

    

`;

