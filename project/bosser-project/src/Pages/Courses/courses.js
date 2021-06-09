import React, {Component} from 'react';
import {db} from '../../Firebase/firebase';
import './courses.css';
import courseLogo from './courseLogo.jpg';
import {Button, Card} from '@material-ui/core';
import deleteDoc from "../../hooks/deleteDoc";
import {FaTrashAlt} from "react-icons/fa";

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses:[],
            courses_id:[]
        }
    }

    componentDidMount() {
        let courses = [];
        let courses_id= [];
        db.collection('courses').get().then((result) => {
            result.docs.forEach(doc => {
                courses.push(doc.data());
                courses_id.push(doc.id);

            });
            this.setState({courses: courses});
            this.setState({courses_id: courses_id});
        });
    }

    admin_is_logged_in(course,index){
        return(
            <div key={index}>
            {this.props.UserDetails.IsAdmin &&

            // Delete course from courses array and update in Firebase
            <button  id={'delete'} style={{color:'white'}} onClick={() =>
        {
            deleteDoc(this.state.courses_id[index],'courses');
            let array = this.state.courses;
            array.splice(index,1);
            this.setState({courses : array});
            this.state.courses_id.splice(index,1);
        }}>
            <FaTrashAlt/></button>
            }
            </div>
        )
    }

    createCourseBtn(){
        if (this.props.UserDetails.IsAdmin) {
            return (
                <a id={'create_btn'} href="/createCourse">יצירת קורס חדש</a>
            )
        }

        return <div></div>

    }

    SignUpForCourse(idx , course_id){

    }


    is_logged_in(){
        if(this.props.IsLoggedIn) {
            return (
                <Button id={'co_btn'} >רישום לקורס</Button>
            )
        }
        return <div></div>
    }


    render() {
        if(!this.state.courses_id == undefined || !this.props.UserDetails){return (<div></div>)}



        return(
            <div>
                <div id={'title'}>הקורסים שלנו</div>
                <br/>
                <div className={"create_btn_contain"} >
                    {this.createCourseBtn()}
                </div>
                <div className='courses' >
                    {this.state.courses.map(
                        (course,index)=>(
                            this.card(course,index)
                        ))}
                </div>
            </div>
        )
    }

    card(course_id,index) {
        if(!this.state.courses_id == undefined){return (<div></div>)}
        return (
            <div key={course_id.name}>

                {this.admin_is_logged_in(course_id,index)}

                {/*Show course details*/}
                <div id={"course"}>
                    <img src={courseLogo} width='100%' height='20%'/>
                    <div id={'course_name'}> {course_id.name} - {course_id.description}</div>

                    <h2 id={'course_dit'}>
                        <div id={'c_title'} > משך זמן:</div>
                        {course_id.duration} שעות  </h2>
                    <h2 id={'course_dit'}>
                        <div id={'c_title'} >מספר נרשמים:</div>
                        {course_id.currentParticipants} מתוך {course_id.participants}</h2>
                    <h2 id={'course_dit'}> <div id={'c_title'} >תאריך:</div>
                        {course_id.date.toDate().toLocaleDateString()} </h2>
                    <br/>
                    <br/>
                    {this.is_logged_in()}

            </div>
        </div>)
    }


}
export default Courses;