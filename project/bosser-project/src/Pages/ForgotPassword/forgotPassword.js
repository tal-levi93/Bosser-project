import React, {Component} from 'react';
import firebase from "firebase";
import "./forgotPassword.css";
import ForgotPassPopUp from "./forgotPassPopUp";


class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            popUpText: "",
            email: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let auth = firebase.auth();
        let emailAddress = this.state.email;

        if(this.state.email !== "") {
            auth.sendPasswordResetEmail(emailAddress).then(() => {
                this.setState({
                    showPopup: true,
                    popUpText: "נשלח אימייל לאיפוס הסיסמא"
                });
            }).catch(() => {
                this.setState({
                    showPopup: true,
                    popUpText: "שגיאה! אנא נסה שוב"
                });
            });
        }
        else {
            this.setState({
                showPopup: true,
                popUpText: "הכנס את כתובת הדוא''ל"
            });
        }

    }

    handleCancel = async (e) => {
        e.preventDefault();
        this.props.toggleForgotPass();
    }

    togglePopUp = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
        if(this.state.popUpText === "נשלח אימייל לאיפוס הסיסמא")
            this.props.toggleForgotPass();
    }

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