import React, {Component} from "react";
import {db} from "../../Firebase/firebase";
import eventLogo from "./eventLogo.jpg";
import show from './show.png';
import {Button} from "@material-ui/core";
import './events.css';
import {FaThumbtack, FaTrashAlt} from "react-icons/fa";
import firebase from "firebase"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SignUpForEvent from "../SignUpForEvent";
import deleteDoc from "../../hooks/deleteDoc";
import emailjs from "emailjs-com";
import axios from "axios"

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            events_id: []
        }
    }

    // sendEmail(){
    //     emailjs.sendForm('gmail', 'template_5coreyc', {name:"Tal Levi" , subejct:"das" , message:"tasda"}, 'user_3S2tYOLpeQzh4elu8tjpo')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }

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

    sendEmail = ()=>{
        const email = {
            fromEmail:
                "bosserjce@gmail.com",
            mailContent:
                "You successfully signed up for the event",
            mailSubject:
                "Event sign in Confirmation",
            toEmail:
            this.props.UserDetails.Email,
        }
        axios.post('https://endodty5c2zjzm7.m.pipedream.net', email)
            .then(response => console.log(response)).catch(err=>{
                console.log(err)
        })
    };



    SignUpForEvent(idx) {
        let eventRef
        if (window.confirm('האם אתה בטוח שהנך רוצה להירשם לאירוע זה?')) {
            db.collection("events").doc(this.state.events_id[idx]).update({
                participants: firebase.firestore.FieldValue.arrayUnion(this.props.UserDetails )
            })
            this.sendEmail()
        }
    }

    cancel_reg(idx , event_id){
        console.log(event_id)
        if (window.confirm('האם אתה בטוח שהנך רוצה לבטל רישום לאירוע זה?')) {
            console.log("the event id is:" , this.state.events_id[idx])
            db.collection("events").doc(this.state.events_id[idx]).update({
                participants: firebase.firestore.FieldValue.arrayRemove(this.props.UserDetails)
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }
    }

    btn_switch(event_id , idx){
        let events = this.state.events
        let signed_in = false;
        let curr_participants = events[idx].participants
        curr_participants.forEach( (participant) => {
            console.log("the par useruid is: " , participant.UserUid , "and the curr user is: " , this.props.UserDetails.UserUid)
            if(participant.UserUid === this.props.UserDetails.UserUid){
                signed_in = true;
            }
        })
        if(signed_in){
            return (<button className={'e_btn'} onClick={() => this.cancel_reg(idx , event_id)}>בטל רישום</button>)
        }
        else{
            return (<button className={'e_btn'} onClick={() => this.SignUpForEvent(idx, event_id)}>רישום לאירוע</button>)
        }
    }


    create_event_logged_in(event_id, idx) {

        return (<div key={idx}>
            {this.admin_is_logged_in(event_id, idx)}
            <div id={'event'}>
                <i>
                    <FaThumbtack/>
                </i>

                <img src={show} width="250" height="100"/>
                <h2 style={{fontWeight: 'normal', color:'black'}}>{event_id.name} - {event_id.description}</h2>
                <h2 style={{fontWeight: 'normal', color:'black'}}>{event_id.date.toDate().toLocaleDateString()}</h2>
                {this.btn_switch(event_id,idx)}
                {/*<button className={'e_btn'} onClick={() => this.SignUpForEvent(idx)}>רישום לאירוע</button>*/}
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
                <h2 style={{fontWeight: 'normal', color:'black'}}>{event_id.name} - {event_id.description}</h2>
                <h2 style={{fontWeight: 'normal', color:'black'}}>{event_id.date.toDate().toLocaleDateString()}</h2>
                <Link to={{pathname: "/events/signUpEvent", state: {events_id: this.state.events_id},}}
                      className={'e_btn'}>רישום לאירוע</Link>

            </div>
        </div>)

    }

    admin_is_logged_in(event_id, idx) {
        if (this.props.UserDetails.IsAdmin) {
            return (
                <div key={idx}>
                    {this.props.UserDetails.IsAdmin &&
                    // Delete course from courses array and update in Firebase
                    <button id={'delete'} style={{color: 'white'}} onClick={() => {
                        deleteDoc(this.state.events_id[idx], 'events');
                        let array = this.state.events;
                        array.splice(idx, 1);
                        this.setState({events: array});
                        this.state.events_id.splice(idx, 1);
                    }}>
                        <FaTrashAlt/></button>
                    }
                </div>

            )
        }

        return <div></div>

    }

    render() {

        let BuildEvents;


        if(!this.props.UserDetails){return (<div></div>)}

        if (this.props.IsLoggedIn == true) {
            BuildEvents = (
                <div>
                    <div id={'frame'}>
                        <br/>
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