import {Component} from "react";
import {db} from "../../Firebase/firebase";
import eventLogo from "./eventLogo.jpg";
import {Button} from "@material-ui/core";
import './events.css';
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
                <div id={'title'}>האירועים שלנו</div>

                <div className="contain" >
                    {this.state.events.map((event , idx)=>(
                        this.create_event(event,idx)
                    ))}
                </div>
            </div>
        )
    }

    create_event(event_id, idx) {
        return (<div key={idx} >

                <div id={'event'}>
                    <img src={eventLogo} width="250" height="100"/>
                    <h2 style={{fontWeight: 'normal'}}>{event_id.name}</h2>
                    <h2 style={{fontWeight: 'normal'}}>{event_id.description}</h2>
                    <h2 style={{fontWeight: 'normal'}}>{event_id.date.toDate().toLocaleDateString()}</h2>
                    <br/>
                    <button className={'e_btn'}  >רישום לאירוע</button>

            </div>
        </div>)

    }
}

export default Events;