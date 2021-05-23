import React, {Component} from "react";
import {Bars, FNavBtnLink, Nav, NavBtn, NavBtnLink, NavLink, NavMenu} from "../../components/Header/NavbarElements/Navbar";
import {FaFacebookF, FaHome, FaImages, FaNewspaper, FaUserFriends} from "react-icons/fa";
import {GoCalendar, GoMortarBoard} from "react-icons/go";
import {AiOutlineUserAdd} from "react-icons/ai";
import styled from "styled-components";
import logo from './logo.png';



export const Back = styled.body`
  background: black;

`;

export const P = styled.p`
  padding-right: 30px;
  padding-left: 30px;
  text-align: center;
  color: white;
  font-size: 46px;
  margin-bottom: 100px;

`;

export const Title = styled.div`
  padding-right: 30px;
  margin-top: 17px;
  padding-left: 30px;
  text-align: center;
  color: white;
  font-size: 65px;
  text-decoration: underline;
  text-decoration-color: red;

`;

export const Img = styled.div`
background-image: url(${logo});
width: 100%;
height: 350px;
margin-top: 15px;
margin-bottom: 15px;
padding: 10px 10px;



`;