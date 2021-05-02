import {Component} from "react";
import {db} from "../../Firebase/firebase";
import "./courses.css";

class Courses extends Component{

    constructor(props) {
        super(props);
        this.state = {
            courses:[]
        }

    }

    componentDidMount() {
        var courses = [];
        console.log("in DidMount");
        //var collections = await db.collection("courses").get();
        db.collection("courses").get().then((result)=>{
            console.log(result);
            result.docs.forEach(doc=>{

                courses.push(doc.data());
            });
            this.setState({courses: courses});
        });
    }

    test(name,last_name)
    {
        this.setState({fname:name,last_name:last_name})
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
            <h1>{course_id.name}</h1>
            <h2>{course_id.description}</h2>
        </div>)
    }
}

export default Courses;