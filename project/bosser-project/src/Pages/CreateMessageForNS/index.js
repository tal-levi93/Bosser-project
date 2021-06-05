import React,{Component} from "react";
import firebase from "firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./style.css"
import {db} from '../../Firebase/firebase';

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

    handleSubmit = async (e) => {
        e.preventDefault();
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