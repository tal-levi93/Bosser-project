import {Component} from "react";
import firebase from "firebase";
import {auth} from "../../Firebase/firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./sign_up.css"



class sign_up extends Component{
    constructor() {
        super();
        this.state = {
            username:"",
            email:"",
            password:"",
            full_name:"",
            age:0
        }
    }



    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        await auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(res =>{
            console.log(this.state)
            const db = firebase.firestore();
            const userRef = db.collection("artists").add({
                fullname: this.state.full_name,
                email: this.state.email,
                age:this.state.age
            });
        }).catch(err=>{
            alert(err)
        })
    }

    render() {
        return(
            <div class="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 class="headline">הרשמה</h5>
                    <div class = "input-field">
                        <label class = "line" htmlFor="username" >שם משתמש </label><br></br>
                        <input class = "box" type="text"  id="username" required  onChange={this.handleChange}/>
                    </div>
                    <div class = "input-field">
                        <label class = "line" htmlFor="password">סיסמא </label><br></br>
                        <input class = "box" type="password" id="password" pattern=".{6,}" title="סיסמא חייבת לכלול 6 אותיות או יותר" required onChange={this.handleChange}/>
                    </div>

                    <div class = "input-field">
                        <label class = "line" htmlFor="email">דואר אלקטרוני </label><br></br>
                        <input class = "box" type="text" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="name@domain.com" onChange={this.handleChange}/>
                    </div>
                    <div class = "Full name: ">
                        <label class = "line" htmlFor="name">שם מלא</label><br></br>
                        <input class = "box" type="text" id="full_name" required onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="line" htmlFor="age">גיל </label><br></br>
                        <input className="box" type="number"  id="age" required onChange={this.handleChange}/>
                    </div>
                    <div><br></br>
                        <button class = "button"><span>הירשם </span></button>
                    </div>
                </form>
            </div>
        )
    }


}



export default sign_up;