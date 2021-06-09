import React, {Component} from 'react';
import {db} from '../../Firebase/firebase';
import './courses.css';
import courseLogo from './courseLogo.jpg';
import {Button, Card} from '@material-ui/core';
import deleteDoc from "../../hooks/deleteDoc";
import {FaTrashAlt} from "react-icons/fa";
import firebase from "firebase";
import axios from "axios";

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

    /*If admin is logged in - delete button will show up for manage courses */
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

    /*If admin is logged in, button to create a new course will show up */
    createCourseBtn(){
        if (this.props.UserDetails.IsAdmin) {
            return (
                <a id={'create_btn'} href="/createCourse">יצירת קורס חדש</a>
            )
        }

        return <div></div>

    }

    /* When user cancel to signup for course, email will sent*/
    cancel_sendEmail = (course)=>{

        const email = {
            fromEmail:
                "bosserjce@gmail.com",
            mailContent:
                " שלום " + this.props.UserDetails.FullName +", \n"
                +"ביטול הרשמתך לקורס '"+course.description +"' בוצע בהצלחה." +"\n"
                +"תודה מצוות בוסרה."+"\n",
            mailSubject:
                 "ביטול רישום לקורס",
            toEmail:
            this.props.UserDetails.Email,
        }
        axios.post('https://endodty5c2zjzm7.m.pipedream.net', email)
            .then(response => console.log(response)).catch(err=>{
            console.log(err)
        })
    };

    /* When user confirm to signup for course, email will sent*/
    sign_sendEmail = (course)=>{

        const email = {
            fromEmail:
                "bosserjce@gmail.com",
            mailContent:
            " שלום " + this.props.UserDetails.FullName +", \n"
            +"הרשמתך לקורס '"+course.description +"' בוצעה בהצלחה." +"\n"
            +"הקורס יתקיים בתאריך " +course.date.toDate().toLocaleDateString() +" .\n"
            +"קישור לקורס: " +course.link +"\n"
            +"צוות בוסרה מאחל לך בהצלחה בקורס."+"\n",
            mailSubject:
                "אישור רישום לקורס",
            toEmail:
            this.props.UserDetails.Email,
        }
        axios.post('https://endodty5c2zjzm7.m.pipedream.net', email)
            .then(response => console.log(response)).catch(err=>{
            console.log(err)
        })
    };

    /*User can signup for course, his details will save in firebase under 'courses' collection in filed 'signed' */
    sign(course_id,index) {
        if (window.confirm('האם אתה בטוח שהנך רוצה להירשם לקורס זה?')) {
            let update_parti = this.state.courses[index].currentParticipants + 1
            console.log(update_parti)
            db.collection("courses").doc(this.state.courses_id[index]).update({
                signed: firebase.firestore.FieldValue.arrayUnion(this.props.UserDetails),
                currentParticipants: update_parti
            }).then(r => {

                let update_courses = []
                db.collection('courses').get().then((result) => {
                    result.docs.forEach(doc => {
                        update_courses.push(doc.data());
                    });
                    this.setState({courses: update_courses});

                    this.sign_sendEmail(this.state.courses[index])

                })

            });
        }

    }

    /*User can cancel his Request to register for course - this is also update in firebase */

    cancel(course_id, index){
        if (window.confirm('האם אתה בטוח שהנך רוצה לבטל רישום לקורס זה?')) {
            let update_parti = this.state.courses[index].currentParticipants - 1
            console.log(update_parti)
            db.collection("courses").doc(this.state.courses_id[index]).update({
                signed: firebase.firestore.FieldValue.arrayRemove(this.props.UserDetails)}).then(r => {
                db.collection("courses").doc(this.state.courses_id[index]).update({currentParticipants: update_parti}).then(r => {


                    let update_courses = []
                    db.collection('courses').get().then((result) => {
                        result.docs.forEach(doc => {
                            update_courses.push(doc.data());
                        });
                        this.setState({courses: update_courses});

                        this.cancel_sendEmail(this.state.courses[index])

                    })

                });
            });
        }}

    /*Only users can signup for courses */
    is_logged_in(course_id,index){
        let is_sign = false

        if(this.props.IsLoggedIn) {
            let curr_participants = this.state.courses[index].signed
            curr_participants.forEach( (user) => {
                if (user.UserUid == this.props.UserDetails.UserUid) { is_sign = true}})

            if(is_sign == true)
                return (<Button id={'co_btn'} style={{backgroundColor:'red',color:'white'}} onClick={()=>{this.cancel(course_id, index)}}>בטל רישום</Button>)

            else
                return(<Button id={'co_btn'} onClick={()=>{this.sign(course_id, index)}}>רישום לקורס</Button>)
        }

        else
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

    /*This function will show the course details */
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
                    {this.is_logged_in(course_id,index)}

            </div>
        </div>)
    }


}
export default Courses;