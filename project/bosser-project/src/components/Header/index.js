import React, {Component, useState} from 'react'
import Sidebar from "./Sidebar";
import Navbar from "./NavbarElements";


/*
class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }
    toggle = ()=>{
        if(this.state.isOpen == true){
            this.setState({
                isOpen:false
            })
        }
        else {
            this.setState({
                isOpen: true
            })
        }
    }
    render(){

        return(

            <>
                <Sidebar isOpen={this.isOpen} toggle={this.toggle}/>
                <Navbar toggle={this.toggle} isLoggedIn = {this.props.isLoggedIn}/>

            </>
        )
    }

}


*/


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}  isLoggedIn = {props.isLoggedIn}/>
            <Navbar toggle={toggle} isLoggedIn = {props.isLoggedIn} UserDetails = {props.UserDetails}/>
        </>
    );
}


export default Header