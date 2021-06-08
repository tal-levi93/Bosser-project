import React,{Component} from "react";
import firebase from "firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./style.css"
import {db} from '../../Firebase/firebase';
import axios from "axios";

class CreateMessageNS extends Component{
    constructor(props) {
        super(props);
        this.state = {
            description:""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    sendEmail = (msg , to)=>{
        const email = {
            fromEmail:
                "bosserjce@gmail.com",
            mailContent:
                msg,
            mailSubject:
                "עמותת בוסר",
            toEmail:
            to,
        }
        axios.post('https://endodty5c2zjzm7.m.pipedream.net', email)
            .then(response =>
                console.log(response)
            ).catch(err=>{
            console.log(err)
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let docRef = db.collection("newsletters").doc("wXWkD32q93M8YgTPJ4gh");
        docRef.get().then((doc)=>{
            doc.data().Emails.forEach(element => this.sendEmail(this.state.description , element))
        }).catch((err)=>{
            console.log(err)
        })
        this.props.history.push("/")

    }

    render() {
        return (
            <div className="createPostCon">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="headline">שלח הודעה לרשימת התפוצה:</h5>

                    <div className = "input-field">
                        <label className = "line" htmlFor="description">תוכן ההודעה: </label><br></br>
                        <textarea className="description" id="description" name="w3review" rows="10" cols="100" onChange={this.handleChange}/>
                    </div>

                    <div><br></br>
                        <button className = "button"><span>שלח </span></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateMessageNS;