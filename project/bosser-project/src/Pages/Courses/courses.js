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
        db.collection('courses').get().then((result)=>{
            result.docs.forEach(doc=>{
                courses.push(doc.data());
            });
            this.setState({courses: courses});
        });
    }

    render() {
        return(
            <div>
                <h1>רשימת קורסים:</h1>

                <div className='background' style={ {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'} }>
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
            <div style={ { textAlign:'center' ,color:'#bab9b9',border: '3px solid white', padding: '10px', margin:'10px', text:'center',width: '18rem'} }>
                <div>
                    <img src={courseLogo} width='250' height='100'/>
                    <h2>{course_id.name}</h2>
                    <h2>{course_id.description}</h2>
                    <h2> משך זמן: {course_id.duration} שעות</h2>
                    <h2> מספר נרשמים: {course_id.currentParticipants} מתוך {course_id.participants}</h2>
                    <h2>{course_id.date.toDate().toString()}</h2>
                    <br/>

                    <Button id={course_id} style={ { color:'black' , border: '3px solid white' , background:'#c3c3c3'} } >רישום לקורס</Button>
                </div>
            </div>
        </div>)
    }

}
export default Courses;