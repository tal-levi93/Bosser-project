import React, {Component} from 'react';
import {auth, db} from '../../Firebase/firebase';
import firebase from "firebase";
import artistLogo from "../Artists/artistLogo.jpg";
import UpdateProfile from "./UpdateProfile";
import "./ArtistProfile.css";
import {TextareaAutosize} from "@material-ui/core";


class ArtistProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_uid: "",
            full_name: "",
            profession: "",
            age: "",
            info: "",
            showEditInfo: false
        }
    }

   async componentDidMount() {
        let name = "";
        let prof = "";
        let age = "";
        let info = "";
        auth.onAuthStateChanged((user) => {
            if(!user) {
                return
            }

            db.collection("artists").where("user_uid", "==",user.uid).get()
                .then((res) => {
                    res.docs.forEach((doc) => {
                        name = doc.data().full_name;
                        prof = doc.data().profession;
                        age = doc.data().age;
                        info = doc.data().info;
                    });
                    this.setState({user_uid: user.uid});
                    this.setState({full_name: name});
                    this.setState({profession: prof});
                    this.setState({age: age});
                    this.setState({info: info});
                });

        })
   }

    handleChange = (e) => {
        this.setState({
            info: e.target.value
        });
    }

   toggleShowInfo = () => {
        this.setState({
            showEditInfo: !this.state.showEditInfo
        });
   }

   updateInfo = () => {
        db.collection("artists").doc(this.state.user_uid).set({
            info: this.state.info
        }, {merge: true}).then(() => {
            console.log("Document successfully written")
        }).catch(() => {
            console.log("Error writing document")
        })
       this.setState({
           showEditInfo: !this.state.showEditInfo
       })
   }


    render() {
        return(
            <div>
                <div className="profile"><br/>
                    <div className="artistPhoto" id="title" style={{display: "flex", justifyContent: "center"}}>
                        <img src={artistLogo} style={{width: 130, height: 130, borderRadius: 150/2}}/>
                    </div>
                    <div className="table" style={{display: "flex", justifyContent: "center"}}>
                        <table style={{textAlign: "center", fontSize: 40, color: "white"}}>
                            <tbody>
                            <tr>
                                <td><h1>{this.state.full_name}</h1></td>
                                <td>{this.props.IsLoggedIn && (
                                        <button className="editDetailsBtn">ערוך שם</button>
                                    )}</td>
                            </tr>
                            <tr>
                                <td><h1>מקצוע: {this.state.profession}</h1></td>
                                <td>{this.props.IsLoggedIn && (
                                    <button className="editDetailsBtn">ערוך מקצוע</button>
                                )}</td>
                            </tr>
                            <tr>
                                <td><h1>גיל: {this.state.age}</h1></td>
                                <td>{this.props.IsLoggedIn && (
                                    <button className="editDetailsBtn">ערוך גיל</button>
                                )}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{display: "inline-flex", width: "250", height: "auto", padding: 30}}>
                        <h2>על האמן: {this.state.info}</h2>
                    </div>
                    {this.props.IsLoggedIn && (
                        <button className="editInfoBtn" onClick={this.toggleShowInfo}>ערוך מידע אישי</button>
                    )}
                    {this.state.showEditInfo && (
                        <div>
                            <TextareaAutosize onChange={this.handleChange} defaultValue={this.state.info} cols={200} style={{fontSize: 25}}/>
                            <br/>
                            <button className="submitInfoBtn" onClick={this.updateInfo}>אישור</button>
                            <button className="cancelInfoBtn" onClick={this.toggleShowInfo}>ביטול</button>
                        </div>
                    )}
                    <br/><br/><br/><br/><br/><br/>
                    <div className="uploadFiles">
                      <UpdateProfile/>
                    </div>
                </div>
            </div>
        )
    }


}
export default ArtistProfile;
