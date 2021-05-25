import React, {useState} from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Header isOpen={isOpen} toggle={toggle}/>
            <Footer isOpen={isOpen} toggle={toggle}/>

        </>
    );
};
export default Index