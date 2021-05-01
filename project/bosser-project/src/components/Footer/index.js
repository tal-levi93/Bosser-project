import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import {
    BTN,
    Confirm,
    Close,
    Form,
    PopUp,
    In
} from './Footer';
import {useState} from 'react'
import {SidebarContainer} from "../Header/Sidebar/SidebarElements";


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (

        <>
            <BTN ipOpen={isOpen} onClick={toggle} > <FaEnvelope/> הרשמה לדיוור אלקטרוני</BTN>

            <PopUp ipOpen={isOpen} toggle={toggle}>
                <Form>

                    <label htmlFor="email"></label>
                    <In type="text" placeholder="הכנס דואר אלקטרוני" name="email " required></In>
                    <Confirm >הרשמה</Confirm>
                        <Close onClick={toggle}>סגור</Close>
                </Form>
            </PopUp>


        </>
    );
};
export default Footer;