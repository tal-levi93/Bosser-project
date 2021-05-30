import {Component} from "react";
import {db} from "../../Firebase/firebase";
import eventLogo from "./eventLogo.jpg";
import show from './show.png';
import {Button} from "@material-ui/core";
import './events.css';
import { FaThumbtack } from "react-icons/fa";
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
            <div >
                <div id={'frame'}>
                    <div id={'title'} style={{color:'black'}}>האירועים שלנו</div>
                <div className="contain" >
                    {this.state.events.map((event , idx)=>(
                        this.create_event(event,idx)
                    ))}
                </div>
                </div>

            </div>
        )
    }

    create_event(event_id, idx) {
        return (<div key={idx} >


                <div id={'event'}>
                    <i>
                        <FaThumbtack/>
                    </i>

                    <img src={show} width="250" height="100"/>
                    <h2 style={{fontWeight: 'normal'}}>{event_id.name} - {event_id.description}</h2>
                    <h2 style={{fontWeight: 'normal'}}>{event_id.date.toDate().toLocaleDateString()}</h2>

                    <button className={'e_btn'}  >רישום לאירוע</button>

            </div>
        </div>)

    }
}

export default Events;