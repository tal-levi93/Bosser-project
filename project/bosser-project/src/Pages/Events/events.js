import React, {Component} from "react";
import {db} from "../../Firebase/firebase";
import eventLogo from "./eventLogo.jpg";
import show from './show.png';
import {Button} from "@material-ui/core";
import './events.css';
import { FaThumbtack } from "react-icons/fa";
import firebase from "firebase"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SignUpForEvent from "../SignUpForEvent";

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            events_id: []
        }
    }

    componentDidMount() {
        let events = [];
        let events_id = [];
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                events.push(doc.data());
                events_id.push(doc.id);
            });
            this.setState({events: events});
            this.setState({events_id: events_id});
        })
    }

    SignUpForEvent(idx) {
        let eventRef
        if (window.confirm('האם אתה בטוח שהנך רוצה להירשם לקורס זה?')) {
            db.collection("events").doc(this.state.events_id[idx]).update({
                participants: [this.props.UserDetails]
            })
        }
    }

    create_event_logged_in(event_id, idx) {
        return (<div key={idx}>


            <div id={'event'}>
                <i>
                    <FaThumbtack/>
                </i>

                <img src={show} width="250" height="100"/>
                <h2 style={{fontWeight: 'normal'}}>{event_id.name} - {event_id.description}</h2>
                <h2 style={{fontWeight: 'normal'}}>{event_id.date.toDate().toLocaleDateString()}</h2>
                <button className={'e_btn'} onClick={() => this.SignUpForEvent(idx)}>רישום לאירוע</button>
            </div>
        </div>)

    }

    create_event_offline(event_id, idx) {
        return (<div key={idx}>

            <div id={'event'}>
                <i>
                    <FaThumbtack/>
                </i>

                <img src={show} width="250" height="100"/>
                <h2 style={{fontWeight: 'normal'}}>{event_id.name} - {event_id.description}</h2>
                <h2 style={{fontWeight: 'normal'}}>{event_id.date.toDate().toLocaleDateString()}</h2>
                <Link to={{pathname: "/events/signUpEvent", state: {events_id: this.state.events_id},}}
                      className={'e_btn'}>רישום לאירוע</Link>

            </div>
        </div>)

    }

    render() {

        let BuildEvents;

        if (this.props.IsLoggedIn == true) {
            BuildEvents = (
                <div>
                    <div id={'frame'}>
                        <div id={'title'} style={{color: 'black'}}>האירועים שלנו</div>
                        <div className="contain">
                            {this.state.events.map((event, idx) => (
                                this.create_event_logged_in(event, idx)
                            ))}
                        </div>
                    </div>

                </div>
            )
        } else
            {
                BuildEvents = (
                    <div>
                        <div id={'frame'}>
                            <div id={'title'} style={{color: 'black'}}>האירועים שלנו</div>
                            <div className="contain">
                                {this.state.events.map((event, idx) => (
                                    this.create_event_offline(event, idx)
                                ))}
                            </div>
                        </div>
                    </div>
                )

            }
            return (
                <div>
                    {BuildEvents}
                </div>
            )
        }

}

export default Events;