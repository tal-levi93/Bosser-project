import {Component} from "react";
import firebase from "firebase";
import {auth} from "../../Firebase/firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./login.css"
import styled from "styled-components";
import logo from "../Home/logo.png";
import Header from "../../components/Header";


class login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(this.state.email , this.state.password).then((res )=> {
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })




    }

    forgot_password(){
        auth.onAuthStateChanged(function(user) {
            if (user) {
                console.log("logged-in")
            } else {
                console.log("Not-logged-in")
            }
        });



    }

    render() {
        return(
            <div className="container">
            {/*<Header style={{display:'none'}}> <Header/>*/}

                <form id='form' onSubmit={this.handleSubmit} className="white">
                    <br/>
                    <h5 className="headline">התחברות</h5>
                    <div className = "input-field">
                        <label className = "line" htmlFor="Email" >דואר אלקטרוני </label><br></br>
                        <input className = "box" type="text"  id="email" required  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="password">סיסמא </label><br></br>
                        <input className = "box" type="password" id="password"  required onChange={this.handleChange}/>
                    </div>

                    <div><br></br>
                        <button className = "login"><span>התחבר </span></button>
                    </div>
                </form>
                <button className="forgot_pass"  onClick={this.forgot_password}><span>שכחתי סיסמא </span></button>
            </div>
        )
    }


}

export default login;

