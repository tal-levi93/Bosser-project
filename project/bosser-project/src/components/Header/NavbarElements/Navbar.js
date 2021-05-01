import styled from 'styled-components';
import { NavLink as Link} from "react-router-dom";
import {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
  background: black;
  height: 80px;
  /*margin-top: -80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top:0;
  z-index: 10;
  
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkR)`
  color: #fff;
  display: flex;
  float: right;
  align-items: center;
  text-decoration:none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #dddddd;
    color: white;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ddd;
    color: black;
  }
`;

export const Bars = styled.div`
  display: none;
  
  @media screen and (max-width: 840px) {
    display: grid;
    color: #ffff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: -22px;
  text-align: center;
 
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  float: right;
  padding: 0 1rem;
  
  @media screen and (max-width: 840px) {
    display: none;
  }
  
`;

export const NavBtnLink = styled(Link)`
  padding: 20px 20px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 10px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ddd;
    color: #010606;
  }
 
  
`;

export const FNavBtnLink = styled.a`
  border-radius: 200px;
  background: #3B5998;
  padding: 20px 20px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #3B5998;
  }
  
`;




