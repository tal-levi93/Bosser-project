import React,{Component} from "react";
import {db} from '../../Firebase/firebase';

class CreateCourse extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentParticipants: 0 ,
            date:"",
            description:"",
            duration: 0,
            link: "",
            name:"",
            participants: 0,
            signed:[]
        }
    }




    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }


    /* When admin create courses- all the data will send to firebase*/
    handleSubmit = async (e) => {
        e.preventDefault();

        const postsRef = db.collection('courses');
        const course = {
            currentParticipants: this.state.currentParticipants,
            date: new Date(this.state.date),
            description: this.state.description,
            duration: Number(this.state.duration),
            link: this.state.link,
            name: this.state.name,
            participants: Number(this.state.participants)
        }
        await postsRef.add(course).then(res => {

            this.setState({
                currentParticipants: 0,
                date:"",
                description: null,
                duration: "",
                link: "",
                name:"",
                participants: 0,
                signed:[]
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
                    <h5 className="headline">יצירת קורס חדש:</h5>
                    <div className = "input-field">
                        <label className = "line" htmlFor="name" >שם הקורס:</label><br></br>
                        <input className = "box" type="text"  id="name" required  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="description">תיאור: </label><br></br>
                        <textarea className="description" id="description" name="w3review" rows="5" cols="70" onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="link">קישור לקורס: </label><br></br>
                        <input className = "box" type="text" id="link" required onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="participants">מספר משתתפים: </label><br></br>
                        <input className = "box" type="number" id="participants" required onChange={this.handleChange}/>
                    </div>

                    <div className = "input-field">
                        <label className = "line" htmlFor="duration">משך זמן (בשעות): </label><br></br>
                        <input className = "box" type="number" id="duration" required onChange={this.handleChange}/>
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

export default CreateCourse;