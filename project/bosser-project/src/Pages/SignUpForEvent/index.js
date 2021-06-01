import React,  {Component, useState} from "react";
import firebase from "firebase";
import {BrowserRouter as Router , Link , Route, Switch} from "react-router-dom";
import Home from "../Home";
import {auth, db} from '../../Firebase/firebase';


class SignUpForEvent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            age:"0",
            cellular:"",
        }

    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value


        })

    }
    handleSubmit  = (e) => {

    }

    render() {
        console.log(this.props.events_id)

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="headline"> הרשמה לאירוע </h5>
                    <div className = "input-field">
                        <label className = "line" htmlFor="first_name" >שם פרטי </label><br></br>
                        <input className = "box" type="text"  id="first_name" required  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="last_name" >שם משפחה </label><br></br>
                        <input className = "box" type="text"  id="last_name" required  onChange={this.handleChange}/>
                    </div>

                    <div className = "input-field">
                        <label className = "line" htmlFor="email">דואר אלקטרוני </label><br></br>
                        <input className = "box" type="text" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="name@domain.com" onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field ">
                        <label className = "line" htmlFor="cellular">מספר טלפון</label><br></br>
                        <input className = "box" type="cellular" id="cellular" required onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="line" htmlFor="age">גיל </label><br></br>
                        <input className="box" type="number"  id="age" required onChange={this.handleChange}/>
                    </div>
                    <div><br></br>
                        <button className = "button"><span>הירשם </span></button>
                    </div>
                </form>
            </div>
        )
    }


}

export default SignUpForEvent