import {Component} from 'react';
import {db} from '../../Firebase/firebase';
import './courses.css';
import courseLogo from './courseLogo.jpg';
import {Button, Card} from '@material-ui/core';

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses:[]
        }
    }

    componentDidMount() {
        let courses = [];
        db.collection('courses').get().then((result) => {
            result.docs.forEach(doc => {
                courses.push(doc.data());
            });
            this.setState({courses: courses});
        });
    }

    render() {
        return(
            <div>
                <div id={'title'}>הקורסים שלנו</div>
                {/*style={ {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'} }*/}
                <div className='courses' >
                    {this.state.courses.map(
                        (course, index)=>(
                            this.card(course, index)
                        ))}
                </div>
            </div>
        )
    }

    card(course_id, index) {
        return (<div key={index}>
            <div key={index}>
                <div id={"course"}>
                    <img src={courseLogo} width='100%' height='20%'/>
                    <div id={'course_name'}> {course_id.name} - {course_id.description}</div>

                    <h2 id={'course_dit'}>
                        <div id={'c_title'} > משך זמן:</div>
                        {course_id.duration}שעות</h2>

                    <h2 id={'course_dit'}>  <div id={'c_title'} >מספר נרשמים:</div>
                        {course_id.currentParticipants} מתוך {course_id.participants}</h2>

                    <h2 id={'course_dit'}> <div id={'c_title'} >תאריך:</div>
                        {course_id.date.toDate().toLocaleDateString()} </h2>
                    <br/>
                    <br/>

                    <Button className={course_id} id={'co_btn'} >רישום לקורס</Button>
                </div>
            </div>
        </div>)
    }


}
export default Courses;