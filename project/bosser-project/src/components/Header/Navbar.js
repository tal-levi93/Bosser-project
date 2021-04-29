import styled from 'styled-components';
import { NavLink as Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  float: right;
  color: white;
  display: block;
  text-align:center;
  text-decoration: none;
  padding: 20px 35px;
  cursor: pointer;
  font-size: 22px;
  &.active {
    background-color: #dddddd;
    color: white;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ddd;
    color: black;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  float: right;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;



export const NavBtnLink = styled(Link)`
  border-radius: 200px;
  padding: 17px 17px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
 
  
`;

export const FNavBtnLink = styled(Link)`
  border-radius: 200px;
  background: #3B5998;
  padding: 17px 17px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  
`;




