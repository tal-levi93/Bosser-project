import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import { Link as Link} from "react-router-dom";
import {FaFacebook, FaTimes} from "react-icons/fa";

export const SidebarContainer = styled.aside`
display: none;
  
  @media screen and (max-width:1250px){
  position: ${({ipOpen}) => (ipOpen ? 'fixed' : 'fixed')};
  cursor: pointer;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  text-align: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ipOpen}) => (ipOpen ? '100%' : '0')};
  top: ${({ipOpen}) => (ipOpen ? '0' : '-85%')};

    //Moto G4
    @media screen and (device-width:360px) and (device-height:640px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-87%')};

    }
    //Pixel
    @media screen and (device-width:411px) and (device-height:731px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-88%')};
    }

    //Pixel 2XL
    @media screen and (device-width:411px) and (device-height:823px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-90%')};
    }

    //iPhone 5/SE
    @media screen and (device-width:320px) and (device-height:568px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-87%')};
    }

    //iPhone 6/7/8
    @media screen and (device-width:375px) and (device-height:667px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-87%')};
    }

    //iPhone 6/7/8 Plus
    @media screen and (device-width:414px) and (device-height:736px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-90%')};
    }

    //iPhone X
    @media screen and (device-width:375px) and (device-height:812px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-89%')};
    }

    //iPad
    @media screen and (device-width:768px) and (device-height:1024px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-91%')};
    }

    //iPad Pro
    @media screen and (device-width:1024px) and (device-height:1366px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-93%')};
    }

    //Surface
    @media screen and (device-width:540px) and (device-height:720px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-88%')};
    }

    //Galaxy Fold
    @media screen and (device-width:280px) and (device-height:653px) {
      top: ${({ipOpen}) => (ipOpen ? '0' : '-87%')};
    }
    
}
`;

export const CloseIcon = styled(FaTimes)`
 color: #fff;
  font-size: 40px;

  &:hover {
    font-size: 50px;
    color: #7A8B8D;
    transition: 0.2s ease-in-out;
  }
  
`;

export const Icon = styled.div`
  position: absolute;
  top:1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2.1rem;
  cursor: pointer;
  outline: none;
  
`;

export const SidebarWrapper = styled.div`
     color: #fff;
     display: ${({ipOpen}) => (ipOpen ? 'grid' : 'none')};
  
`;

export const SidebarMenu = styled.ul`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 50px);
  text-align: center;

  
  @media screen and (max-height: 600px ) {
    grid-template-rows: repeat(8 , 40px);
    
  }
  
  
`;

export const SidebarLink = styled(LinkR) `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #717677;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-height: 600px ) {
    font-size: 30px;
  }
  
`;
export const SideBtnWrap = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(6, 70px);
  text-align: center;
  

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);

  }

  @media screen and (max-height: 500px) {
    grid-template-rows: repeat(6, 40px);
    display: flow;
    margin: 10px;
  }
`;

export const SideBtn = styled(Link)`
  border-radius: 100px;
  text-align: center;
  background: white;
  display: flex;
  white-space: nowrap;
  padding: 10px 14px;
  color: #010606;
  font-size: 26px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #717677;
    color: #fff;
  }

  @media screen and (max-height: 500px) {
    margin: 17px;
  }
  
`;

export const FSideBtn = styled.a`
  border-radius: 50px;
  background: #3B5998;
  text-align: center;
  display: flex;
  padding: 16px 20px;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  
  
  &:hover{
    transition: all 0.2s ease-in-out;
    background: #536162;
    color: #3B5998;
  }

  @media screen and (max-height: 500px) {
    font-size: 20px;
    
    
  }
  
`;

export const SideFullName = styled.div`
  font-size: 26px;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  
  
`;

export const SideLogOutBtn = styled.button`
  border-radius: 100px;
  background: white;
  margin-bottom: 10px;
  padding: 0px 10px;
  color: #010606;
  font-size: 25px;
  outline: none;
  border-color: red;
  text-align: center;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: #fff;
  }
  
`;