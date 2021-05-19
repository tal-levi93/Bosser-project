import {Component} from "react";
import firebase from "firebase";
import {auth} from "../../Firebase/firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
//import "./login.css"


class login extends Component{
    constructor() {
        super();
        this.state = {
            username:"",
            password:""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = async (e) => {
        console.log()

    }

    forgot_password(){
        console.log("imhere")
    }

    render() {
        return(
            <div class="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 class="headline">התחברות</h5>
                    <div class = "input-field">
                        <label class = "line" htmlFor="username" >שם משתמש </label><br></br>
                        <input class = "box" type="text"  id="username" required  onChange={this.handleChange}/>
                    </div>
                    <div class = "input-field">
                        <label class = "line" htmlFor="password">סיסמא </label><br></br>
                        <input class = "box" type="password" id="password"  required onChange={this.handleChange}/>
                    </div>

                    <div><br></br>
                        <button class = "button"><span>התחבר </span></button>
                    </div>
                </form>
                <button className="button" onClick={this.forgot_password}><span>שכחתי סיסמא </span></button>
            </div>
        )
    }


}



export default login;