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
            showEditDetails: false,
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

    handleNameChange = (e) => {
        this.setState({
            full_name: e.target.value
        });
    }

    handleProfChange = (e) => {
        this.setState({
            profession: e.target.value
        });
    }

    handleAgeChange = (e) => {
        this.setState({
            age: e.target.value
        });
    }

    handleInfoChange = (e) => {
        this.setState({
            info: e.target.value
        });
    }

   toggleEditDetails = () => {
        this.setState({
            showEditDetails: !this.state.showEditDetails
        });
   }

    toggleEditInfo = () => {
        this.setState({
            showEditInfo: !this.state.showEditInfo
        });
    }

    updateDetails = () => {
        db.collection("artists").doc(this.state.user_uid).set({
            full_name: this.state.full_name,
            profession: this.state.profession,
            age: this.state.age
        }, {merge: true}).then(() => {
            console.log("Document successfully written")
        }).catch(() => {
            console.log("Error writing document")
        })
        this.setState({
            showEditDetails: !this.state.showEditDetails
        })
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
                                    <td>שם: {this.state.full_name}  </td>
                                    <td>{this.props.IsLoggedIn && this.state.showEditDetails && (
                                        <input className="editDetailsInput" onChange={this.handleNameChange} defaultValue={this.state.full_name} autoFocus={true}/>
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>מקצוע: {this.state.profession}</td>
                                    <td>{this.props.IsLoggedIn && this.state.showEditDetails && (
                                        <input className="editDetailsInput" onChange={this.handleProfChange} defaultValue={this.state.profession}/>
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>גיל: {this.state.age}</td>
                                    <td>{this.props.IsLoggedIn && this.state.showEditDetails && (
                                        <input className="editDetailsInput" onChange={this.handleAgeChange} defaultValue={this.state.age}/>
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>{this.props.IsLoggedIn && (
                                        <button className="editDetailsBtn" onClick={this.toggleEditDetails}>ערוך פרטים אישיים</button>
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>{this.props.IsLoggedIn && this.state.showEditDetails && (
                                        <button className="submitDetailsBtn" onClick={this.updateDetails}>אישור</button>
                                    )}</td>
                                    <td>{this.props.IsLoggedIn && this.state.showEditDetails && (
                                        <button className="cancelDetailsBtn" onClick={this.toggleEditDetails}>ביטול</button>
                                    )}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{display: "inline-flex", width: "250", height: "auto", padding: 30}}>
                        <h2>על האמן: {this.state.info}</h2>
                    </div>
                    {this.props.IsLoggedIn && (
                        <button className="editInfoBtn" onClick={this.toggleEditInfo}>ערוך מידע אישי</button>
                    )}
                    {this.state.showEditInfo && (
                        <div>
                            <TextareaAutosize onChange={this.handleInfoChange} defaultValue={this.state.info} autoFocus={true} cols={200}
                                              style={{fontSize: 50,width:'600px',marginRight:'100px',height:'300px'}}/>
                            <br/>
                            <button className="submitInfoBtn" onClick={this.updateInfo}>אישור</button>
                            <button className="cancelInfoBtn" onClick={this.toggleEditInfo}>ביטול</button>
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
