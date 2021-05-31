import React, {Component} from 'react';
import {db} from '../../Firebase/firebase';
import './courses.css';
import courseLogo from './courseLogo.jpg';
import {Button, Card} from '@material-ui/core';
import deleteDoc from "../../hooks/deleteDoc";
import {FaTrashAlt} from "react-icons/fa";


/* This component represents the courses page. Shows all the association's courses. */
class Courses extends Component {

    /* Constructor. Initialize the component state. */
    constructor(props) {
        super(props);
        this.state = {
            courses:[],
            courses_id:[]
        }
    }

    /* This method get all the courses data from the data base. */
    componentDidMount() {
        let courses = [];
        let courses_id= [];
        db.collection('courses').get().then((result) => {
            result.docs.forEach(doc => {
                courses.push(doc.data());
                courses_id.push(doc.id);
                console.log(courses_id)

            });
            this.setState({courses: courses});
            this.setState({courses_id: courses_id});
        });
    }

    /* This method renders the list of the courses in the page. */
    render() {
        if(!this.state.courses_id == undefined){return (<div></div>)}

        return(
            <div>
                <div id={'title'}>הקורסים שלנו</div>
                <div className='courses' >
                    {this.state.courses.map(            /* Sends each course data to represent the course in the fixed format. */
                        (course,index)=>(
                            this.card(course,index)
                        ))}
                </div>
            </div>
        )
    }

    /* This method returns a card that presents the course information in a uniform format. */
    card(course_id,index) {
        if(!this.state.courses_id == undefined){return (<div></div>)}

        return (<div key={course_id.name}>

                <button  id={'delete'} style={{color:'white'}} onClick={() =>
                { deleteDoc(this.state.courses_id[index],'courses');}} >
                    <FaTrashAlt/></button>
                <div id={"course"}>
                    <img src={courseLogo} width='100%' height='20%'/>
                    <div id={'course_name'}> {course_id.name} - {course_id.description}</div>

                    <h2 id={'course_dit'}>
                        <div id={'c_title'} > משך זמן:</div>
                        {course_id.duration} שעות</h2>

                    <h2 id={'course_dit'}>  <div id={'c_title'} >מספר נרשמים:</div>
                        {course_id.currentParticipants} מתוך {course_id.participants}</h2>

                    <h2 id={'course_dit'}> <div id={'c_title'} >תאריך:</div>
                        {course_id.date.toDate().toLocaleDateString()} </h2>
                    <br/>
                    <br/>

                    <Button id={'co_btn'} >רישום לקורס</Button>

            </div>
        </div>)
    }


}
export default Courses;