import React, {Component} from 'react';
import {auth, db} from '../../Firebase/firebase';
import firebase from "firebase";
import artistLogo from "../Artists/artistLogo.jpg";
import UpdateProfile from "./UpdateProfile";


class ArtistProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_uid: "",
            full_name: "",
            profession: "",
            age: ""
        }
    }

   async componentDidMount() {
        let name = "";
        let prof = "";
        let age = "";
        auth.onAuthStateChanged((user) => {
            if(!user) {
                return
            }

            db.collection("artists").where("user_uid", "==",user.uid).get()
                .then((res) => {
                    res.docs.forEach((doc) => {
                        name = doc.data().full_name;
                        prof = doc.data().proffesion;
                        age = doc.data().age;
                    });
                    this.setState({user_uid: user.uid});
                    this.setState({full_name: name});
                    this.setState({profession: prof});
                    this.setState({age: age});
                });

        })
   }


    render() {
        return(
            <div>
                <div className="profile">
                    <div className="artistPhoto" style={{display: "absolute", textAlign: "center", alignItems: "center"}}>
                        <br/>
                        <img src={artistLogo} style={{width: 130, height: 130, borderRadius: 150/2}}/>
                    </div>
                    <div className="artist details" style={{display: "absolute", flexDirection: "column", right: 150}}>
                        <h1>{this.state.full_name}</h1>
                        <h1>מקצוע: {this.state.profession}</h1>
                        <h1>גיל: {this.state.age}</h1><br/>
                    </div>
                </div>

                <div className="uploadFiles" style={{display: "absolute", left: 500}}>
                  <UpdateProfile/>
                </div>
            </div>
        )
    }

<<<<<<< HEAD
=======
    // profileCard() {
    //     return (
    //
    //     )
    // }
>>>>>>> origin/main

}
export default ArtistProfile;
