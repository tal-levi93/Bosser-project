import React, {Component} from 'react'
import {db} from "../../Firebase/firebase";
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
import firebase from "firebase";
import validator from 'validator'

class Footer extends Component {
// const Footer = () => {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            email: "",
            exist:"",
            setIsOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let exist;
        if(validator.isEmail(this.state.email)){
            let docRef = db.collection("newsletters").doc("wXWkD32q93M8YgTPJ4gh");
            docRef.get().then((doc)=>{
                let found = doc.data().Emails.find(element => element === this.state.email)
                if(found == undefined){
                    db.collection("newsletters").doc("wXWkD32q93M8YgTPJ4gh").update({
                        Emails: firebase.firestore.FieldValue.arrayUnion(this.state.email)
                    })
                    alert("Signed in successfully")
                }
                else{
                    alert("This email is aleardy on newsletter list")

                }
            }).catch((err)=>{
                console.log(err)
            })

        }
        else{
            alert("This is not an email address , please try again")
        }
    }


    toggle = () => {
        let not_is_open = !this.state.IsOpen
        this.setState({IsOpen: not_is_open})

    };

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render() {
        return (


            <div>
                <BTN ipOpen={this.props.isOpen} onClick={this.props.toggle}> <FaEnvelope/> הרשמה לדיוור אלקטרוני</BTN>

                <PopUp ipOpen={this.props.isOpen} toggle={this.props.toggle}>
                    <Form onSubmit={this.handleSubmit}>

                        <label  htmlFor="email"></label>
                        <In id="email" value={this.state.email}   onChange={this.handleChange} />

                        {/*<In type="text" value={this.state.email} placeholder="הכנס דואר אלקטרוני" name="email " onfocusout={this.handleEmail}></In>*/}
                        <Confirm onClick={this.handleSubmit}>הרשמה</Confirm>
                        <Close onClick={this.props.toggle}>סגור</Close>
                    </Form>
                </PopUp>


            </div>
        )
    }

}
export default Footer;