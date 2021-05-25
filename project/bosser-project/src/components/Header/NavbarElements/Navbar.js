import styled from 'styled-components';
import { NavLink as Link} from "react-router-dom";
import {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
  cursor: pointer;
  background: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: black;
  position: sticky;
  top:0;
  z-index: 10;
  
  @media screen and (max-width:1250px){
    transition: 0.8s all ease;
    width: 150px;
    height: 90px;
  }

  @media screen and (max-width:190px){
    transition: 0.8s all ease;
    width: 50%;
    height: 60px;

  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 10px;

`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkR)`
  color: black;
  display: flex;
  float: right;
  align-items: center;
  text-decoration:none;
  padding: 10px 10px;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #dddddd;
    color: black;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ddd;
    color: white;
  }
`;

export const Bars = styled.div`
  display: none;
  
  @media screen and (max-width: 1250px) {
    display: grid;
    color: black;
    position: fixed;
    top: 0;
    text-align: center;
    transform: translate(-10%, 30%);
    font-size: 59px;
    cursor: pointer;
  }

  @media screen and (max-width: 190px) {
    font-size: 30px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  //margin-right: -22px;
  text-align: center;
 
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  float: right;
  padding: 0 5px;
  
  @media screen and (max-width: 1250px) {
    display: none;
  }
  
`;

export const NavBtnLink = styled(Link)`
  border-radius: 200px;
  border-color: #fa2727;
  border-bottom-style: double;
  border-top-style: double;
  padding: 15px 20px;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 18px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #F55656;
    color: white;
  }


`;

export const FNavBtnLink = styled.a`
  border-radius: 200px;
  background: #3B5998;
  padding: 20px 25px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ddd;
    color: #3B5998;
  }
  
`;




