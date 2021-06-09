import React,{Component} from "react";
import firebase,{db,auth} from "../../Firebase/firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./sign_up.css"
import axios from "axios";




class sign_up extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            full_name:"",
            user_id:"",
            yearOfBorn:0,
            password2:"",
            profession:""

        }
    }

    sendEmail = (mail)=>{
        const email = {
            fromEmail:
                "bosserjce@gmail.com",
            mailContent:
                "נרשמתם בהצלחה לאתר בוסר אנחנו מאחלים לכם חוויה מהנה :)",
            mailSubject:
                "Event sign in Confirmation",
            toEmail:
            mail,
        }
        axios.post('https://endodty5c2zjzm7.m.pipedream.net', email)
            .then(response => console.log(response)).catch(err=>{
            console.log(err)
        })
    };




    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    handleSubmit =  (e) => {
        e.preventDefault();
        if(this.state.password != this.state.password2){
            alert("הסיסמא חייבת להיות תואמת")
            this.props.history.push('/signup')
            return
        }
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(res =>{
            console.log(res)

            db.collection("artists").doc(res.user.uid).set({
                user_name:this.state.username,
                user_uid:res.user.uid,
                full_name: this.state.full_name,
                email: this.state.email,
                yearOfBorn:this.state.yearOfBorn,
                IsAdmin:false,
                profession:this.state.profession,
                description:"",
                image_1:"",
                image_2:"",
                image_3:"",
                youtubeVideo:""
            }).then(result=>{
                console.log(result)
                this.sendEmail(this.state.email)
                this.props.history.push('/')
            });

        }).catch(err=>{
            alert(err)
        })
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="headline">הרשמה</h5>
                    <div className = "input-field">
                        <label className = "line" htmlFor="username" >שם משתמש </label><br></br>
                        <input className = "box" type="text"  id="username" required  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="password">סיסמא </label><br></br>
                        <input className = "box" type="password" id="password" pattern=".{6,}" title="סיסמא חייבת לכלול 6 אותיות או יותר" required onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="password2"> סיסמא בשנית </label><br></br>
                        <input className = "box" type="password" id="password2" pattern=".{6,}"  required onChange={this.handleChange}/>
                    </div>

                    <div className = "input-field">
                        <label className = "line" htmlFor="email">דואר אלקטרוני </label><br></br>
                        <input className = "box" type="text" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="name@domain.com" onChange={this.handleChange}/>
                    </div>
                    <div className = "Full name: ">
                        <label className = "line" htmlFor="name">שם מלא</label><br></br>
                        <input className = "box" type="text" id="full_name" required onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="line" htmlFor="yearOfBorn">שנת לידה </label><br></br>
                        <input className="box" type="number"  id="yearOfBorn" min="1900" max="2021" required onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field ">
                        <label className = "line" htmlFor="name">התמחות:</label><br></br>
                        <input className = "box" type="text" id="profession" required onChange={this.handleChange}/>
                    </div>
                    <div><br></br>
                        <button className = "button"><span>הירשם </span></button>
                    </div>
                </form>
            </div>
        )
    }


}



export default sign_up;