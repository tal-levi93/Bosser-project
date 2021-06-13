import React, {Component} from "react";
import {db} from "../../Firebase/firebase";
import show from './show.png';
import './events.css';
import {FaThumbtack, FaTrashAlt} from "react-icons/fa";
import firebase from "firebase"
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import SignUpForEvent from "../SignUpForEvent";
import deleteDoc from "../../hooks/deleteDoc";
import axios from "axios"

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            events_id: [],
            signed_up:[]
        }
    }


    /* Events list will save in event array and id's will save in events_id, Participants in signed_up*/
    componentWillMount() {
        let events = [];
        let events_id = [];
        let signed_up = [];
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let signed = false;
                events.push(doc.data());
                events_id.push(doc.id);
                doc.data().participants.forEach((participant)=>{
                    if(participant.FullName == this.props.UserDetails.FullName){
                        signed = true
                    }
                })
                signed_up.push(signed)
            });
            this.setState({events: events});
            this.setState({events_id: events_id});
        })

    }

    /* When user signed for event he will get an email with confirm */
    sendEmail = (event)=>{
        const email = {
            fromEmail:
                "bosserjce@gmail.com",
            mailContent:
                "שלום "+this.props.UserDetails.FullName+","
                 +"\n"+ "נרשמתם בהצלחה לאירוע " + event.name +" , '"+ event.description+"'."
                + "\n" + "האירוע יתקיים בתאריך: " + event.date.toDate().toLocaleDateString()+"."
                + "\n" + "הלינק לאירוע הוא: " + event.link
                + "\n" + "נתראה," + "\n צוות בוסרה.",
            mailSubject:
                "אישור רישום לאירוע",
            toEmail:
            this.props.UserDetails.Email,
        }
        axios.post('https://endodty5c2zjzm7.m.pipedream.net', email)
            .then(response => console.log(response)).catch(err=>{
                console.log(err)
        })
    };

    /* When user cancel to signup for event, email will sent*/
    cancel_sendEmail = (event)=>{

        const email = {
            fromEmail:
                "bosserjce@gmail.com",
            mailContent:
                "שלום " + this.props.UserDetails.FullName +", \n"
                +"ביטול הרשמתך לאירוע "+event.name+" ,'"+event.description +"' בוצע בהצלחה." +"\n"
                +"תודה מצוות בוסרה."+"\n",
            mailSubject:
                "ביטול רישום לאירוע",
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
            }).then(r =>{
                let update_events = []
                db.collection('events').get().then((result) => {
                    result.docs.forEach(doc => {
                        update_events.push(doc.data());
                    });
                    this.setState({events: update_events})
                    this.sendEmail(this.state.events[idx])

                })
            });
        }
    }



    /* When user cancel his signed for event */
    cancel_reg(idx , event_id){
        if (window.confirm('האם אתה בטוח שהנך רוצה לבטל רישום לאירוע זה?')) {
            db.collection("events").doc(this.state.events_id[idx]).update({
                participants: firebase.firestore.FieldValue.arrayRemove(this.props.UserDetails)
            }).then(r => {

                let update_events = []
                db.collection('events').get().then((result) => {
                    result.docs.forEach(doc => {
                        update_events.push(doc.data());
                    });
                    this.setState({events: update_events})
                    this.cancel_sendEmail(this.state.events[idx])

                })
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }
    }

    /* Button for signed/cancel for events */
    btn_switch(event_id , idx){
        let events = this.state.events
        let signed_in = false;
        let curr_participants = events[idx].participants
        curr_participants.forEach( (participant) => {
            if(participant.UserUid === this.props.UserDetails.UserUid){
                signed_in = true;
            }
        })
        if(signed_in){
            return (<button className={'c_btn'} onClick={() => this.cancel_reg(idx , event_id)}>בטל רישום</button>)
        }
        else{
            return (<button className={'e_btn'} onClick={() => this.SignUpForEvent(idx, event_id)}>רישום לאירוע</button>)
        }
    }

    /*Create events for user that logged in */
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

    /*Create events for guest*/
    create_event_offline(event_id, idx) {
        return (<div key={idx}>

            <div id={'event'}>
                <i>
                    <FaThumbtack/>
                </i>

                <img src={show} width="250" height="100"/>
                <h2 style={{fontWeight: 'normal', color:'black'}}>{event_id.name} - {event_id.description}</h2>
                <h2 style={{fontWeight: 'normal', color:'black'}}>{event_id.date.toDate().toLocaleDateString()}</h2>
                <Link to={{pathname: "/events/signUpEvent/"+this.state.events_id[idx], state: {events_id: this.state.events_id},}}
                      className={'e_btn'}>רישום לאירוע</Link>

            </div>
        </div>)

    }

    /*Admin can delete events*/
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

 
    createEventBtn(){
        if (this.props.UserDetails.IsAdmin) {
            return (
                <a id={'create_btn'} href="/createEvent">יצירת אירוע חדש</a>
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
                        <br/>
                        <div className={"create_btn_contain"} >
                            {this.createEventBtn()}
                        </div>
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