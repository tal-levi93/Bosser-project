import React, {Component} from 'react';
import firebase from "firebase";
import "./forgotPassword.css";
import ForgotPassPopUp from "./forgotPassPopUp";


/* This component represents the forgot password page. Allows the user to reset the password. */
class ForgotPassword extends Component {

    /* Constructor. Initialize the component state. */
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            popUpText: "",
            email: ""
        }
    }

    /* This method update the email state immediately when the user write it. */
    handleChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    /* This method checks if the email the user entered is valid. If so send an email to reset the password. */
    handleSubmit = async (e) => {
        e.preventDefault();
        let auth = firebase.auth();
        let emailAddress = this.state.email;

        if(this.state.email !== "") {
            auth.sendPasswordResetEmail(emailAddress).then(() => {      // Email is valid. Send mail for reset password.
                this.setState({
                    showPopup: true,
                    popUpText: "נשלח אימייל לאיפוס הסיסמא"
                });
            }).catch(() => {                                // Email is invalid.
                this.setState({
                    showPopup: true,
                    popUpText: "שגיאה! אנא נסה שוב"
                });
            });
        }
        else {                          // Email is empty.
            this.setState({
                showPopup: true,
                popUpText: "הכנס את כתובת הדוא''ל"
            });
        }

    }

    /* This method return the user to the login page. */
    handleCancel = async (e) => {
        e.preventDefault();
        this.props.toggleForgotPass();
    }

    /* This method eliminates the pop-up that gives user feedback. */
    togglePopUp = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
        if(this.state.popUpText === "נשלח אימייל לאיפוס הסיסמא")
            this.props.toggleForgotPass();
    }

    /* This method renders the forgot password page. */
    render() {
        return (
            <div className='forgotPasswordComp'>
                <h1 className='headline'>איפוס סיסמא</h1>
                <br/><br/>
                <br/>
                <div className="input-field">
                    <label className="line" htmlFor="Email">כתובת דוא"ל לאיפוס</label><br></br>
                    <input className="box" type="text" id="email" required onChange={this.handleChange}/></div>
                <br/><br/><br/>
                <button className='reset_pass' onClick={this.handleSubmit}><span>אפס סיסמא</span></button>
                <button className='cancel' onClick={this.handleCancel}><span>ביטול</span></button>
                {this.state.showPopup ?
                    <ForgotPassPopUp popUpText={this.state.popUpText} togglePopUp={this.togglePopUp}/>
                    : null
                }

            </div>
        )
    }

}
export default ForgotPassword;