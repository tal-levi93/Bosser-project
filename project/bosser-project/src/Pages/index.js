import React, {Component, useState} from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";


/*
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:'false'
        }
    }
    toggle = () => {
        if(this.state.isOpen == true){
            this.setState({
                isOpen:'false'
            })
        }
        else {
            this.setState({
                isOpen: 'true'
            })
        }
        return this.state.isOpen
    };

    render() {


        return (
            <>
                <Header isOpen={this.isOpen} toggle={this.toggle} isLoggedIn={this.props.isLoggedIn}/>
                <Footer isOpen={this.isOpen} toggle={this.toggle}/>
            </>
        );
    }
}
export default Index
*/





const Index = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Header isOpen={isOpen} toggle={toggle} isLoggedIn={props.isLoggedIn} UserDetails = {props.userDetails}/>
            <Footer isOpen={isOpen} toggle={toggle}/>
        </>
    )
}

export default Index