import {Component} from "react";
import firebase from "firebase";
import {auth} from "../../Firebase/firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./sign_up.css"



class sign_up extends Component{
    state = {
        username:"",
        email:"",
        password:"",
        full_name:""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        await auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(res =>{
            this.prop.history.push({
                pathname:"/"
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3>הרשמה</h3>
                    <div className = "input-field">
                        <label htmlFor="username">שם משתמש: </label>
                        <input type="text" id="username"  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor="password">סיסמא: </label>
                        <input type="password" id="password"  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor="email">דואר אלקטרוני: </label>
                        <input type="text" id="email"  onChange={this.handleChange}/>
                    </div>
                    <div className = "Full name: ">
                        <label htmlFor="name">שם מלא:</label>
                        <input type="text" id="full_name" onChange={this.handleChange}/>
                    </div>
                    <div className = "Full name: ">
                        <button className="btn">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }


}



export default sign_up;