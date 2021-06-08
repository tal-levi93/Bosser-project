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


/* The Footer contain the popup newsletter signup */
class Footer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            email: "",
            exist:"",
            setIsOpen: false,
            success: false,
            failed: false,
            mail_exist: false

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*Handle submit signup for newsletter  */
    handleSubmit(event) {
        event.preventDefault();
        let exist;
        /* Validation For email */
        if(validator.isEmail(this.state.email)){
            let docRef = db.collection("newsletters").doc("wXWkD32q93M8YgTPJ4gh");
            docRef.get().then((doc)=>{
                let found = doc.data().Emails.find(element => element === this.state.email)
                if(found == undefined){
                    db.collection("newsletters").doc("wXWkD32q93M8YgTPJ4gh").update({
                        Emails: firebase.firestore.FieldValue.arrayUnion(this.state.email)
                    })
                    this.setState({success:true})
                }
                else{
                    this.setState({mail_exist:true})

                }
            }).catch((err)=>{
                console.log(err)
            })

        }
        else{
            this.setState({failed:true})
        }
    }

    /*When the input changing the value of email in this class is changing.*/
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value,failed:false,success:false,mail_exist:false
        })


    };




    /*After the client trying to signup, this function print some feedback */
    printMassage(){
        if(this.state.success == true) return <p style={{color:'green'}}>דואר אלקטרוני זה נרשם בהצלחה</p>
        else if(this.state.mail_exist == true) return <p style={{color:'red'}}>דואר אלקטרוני זה כבר קיים, נא נסה שנית</p>
        else if(this.state.failed == true) return <p style={{color:'red'}}> דואר אלקטרוני לא חוקי</p>


        return<div></div>
    }



    render() {
        return (
            <div>
                <BTN ipOpen={this.props.isOpen} onClick={this.props.toggle}> <FaEnvelope/> הרשמה לדיוור אלקטרוני</BTN>
                <PopUp ipOpen={this.props.isOpen} toggle={this.props.toggle}>

                    {/* Form contain email input and submit button and close popup button*/}
                    <Form onSubmit={this.handleSubmit}>

                        <label htmlFor="email"></label>

                        <div style={{fontSize:'25px',opacity:'0.4'}}> הכנס דואר אלקטרוני</div>

                        <In id="email" value={this.state.email} onChange={this.handleChange} />
                        {this.printMassage()}
                        <Confirm onClick={this.handleSubmit} success={this.state.success}>הרשמה</Confirm>

                        {/*Click on close will reset all this values*/}
                        <Close onClick={() => {
                            this.props.toggle()
                            this.setState({failed:false,success:false,mail_exist:false,email:""})
                        }}>סגור</Close>

                    </Form>

                </PopUp>

            </div>
        )
    }

}
export default Footer;