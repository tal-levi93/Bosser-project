import {Component} from "react";
import {db} from "../Firebase/firebase";
import eventLogo from "./eventLogo.jpg";
import {Button} from "@material-ui/core";
class Events extends Component{

    constructor(props) {
        super(props);
        this.state = {
            events:[]
        }
    }

    componentDidMount() {
        let events = [];
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach( doc => {
                events.push(doc.data());
            });
            this.setState({events: events});
        })
    }

    render() {
        return(
            <div>
                <h1>אירועים עתידיים:</h1>

                <button onClick={()=>{

                }}>Back</button>

                <div className="tmp" style={ {display: 'flex', flexDirection: "row", flexWrap: "wrap"}}>
                    {this.state.events.map((event , idx)=>(
                        this.create_event(event,idx)
                    ))}
                </div>
            </div>
        )
    }

    create_event(event_id, idx) {
        return (<div key={idx}>
            <div style={ {border: '3px solid black', padding: '10px', margin: '10px', textAlign:'center', width: '18rem'} }>
                <div>
                    <img src={eventLogo} width="250" height="100"/>
                    <h2>{event_id.name}</h2>
                    <h2>{event_id.description}</h2>
                    <h2>{event_id.date.toDate().toString()}</h2>
                    <Button id={'enterCourseButton'}>רישום לאירוע</Button>
                </div>
            </div>
        </div>)

    }
}

export default Events;