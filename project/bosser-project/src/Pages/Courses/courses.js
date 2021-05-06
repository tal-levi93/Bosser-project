import {Component} from "react";
import {db} from "../../Firebase/firebase";
import "./courses.css";
import courseLogo from './courseLogo.jpg';
import {Button, Card} from "@material-ui/core";

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses:[]
        }
    }

    componentDidMount() {
        let courses = [];
        db.collection("courses").get().then((result)=>{
            result.docs.forEach(doc=>{
                courses.push(doc.data());
            });
            this.setState({courses: courses});
        });
    }

    test(f_name,l_name) {
        this.setState({first_name:f_name,last_name:l_name})
    }

    render() {
        return(
            <div>
                <div>
                    <h1>Courses</h1>
                    <h2>info course</h2>
                    <button onClick={()=>{
                    this.test("name1","lastname2")
                    }}>Back</button>
                </div>

                <div className="background">
                    {this.state.courses.map((course, index)=>(
                        this.card(course, index)
                    ))}
                </div>
            </div>
        )
    }

    card(course_id, index) {
        return (<div key={index}>
            <div style={ {border: '3px solid black', padding: '20px', margin: '10px', textAlign:'center', width: '18rem'} }>
                <div>
                    <img src={courseLogo} width="230" height="100"/>
                    <h1>{course_id.name}</h1>
                    <h2>{course_id.description}</h2>
                    <br/>
                    <Button id={'enterCourseButton'}>Enter</Button>
                </div>
            </div>
        </div>)
    }

}
export default Courses;