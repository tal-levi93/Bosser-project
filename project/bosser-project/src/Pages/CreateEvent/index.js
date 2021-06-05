import React,{Component} from "react";
import firebase from "firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./style.css"
import {db} from '../../Firebase/firebase';

class CreateEvent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date:"",
            description:"",
            link: "",
            participants: [],
            name:""

        }
    }



    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const postsRef = db.collection('events');
        const course = {
            date: new Date(this.state.date),
            description: this.state.description,
            link: this.state.link,
            participants: [],
            name: this.state.name,
        }
        await postsRef.add(course).then(res => {

            this.setState({
                date:"",
                description:"",
                link: "",
                name:"",
                participants: []
            })
            this.props.history.push('/')

        }).catch(err=>{
            alert(err)
        })
    }

    handleUrl = (file_url)=>{
        this.setState({
            url:file_url
        })
    }


    render() {

        return (
            <div className="createPostCon">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="headline">יצירת אירוע חדש:</h5>
                    <div className = "input-field">
                        <label className = "line" htmlFor="name" >שם האירוע:</label><br></br>
                        <input className = "box" type="text"  id="name" required  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="description">תיאור: </label><br></br>
                        <textarea className="description" id="description" name="w3review" rows="5" cols="70" onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="link">קישור לאירוע: </label><br></br>
                        <input className = "box" type="text" id="link" required onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="date">תאריך: </label><br></br>
                        <input className = "box" type="date" id="date" required onChange={this.handleChange}/>
                    </div>

                    <div><br></br>
                        <button className = "button"><span>שלח </span></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateEvent;