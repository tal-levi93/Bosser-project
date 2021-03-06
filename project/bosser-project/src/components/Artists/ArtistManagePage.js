import React, {useState, useEffect, Component} from "react";
import {auth, db} from '../../Firebase/firebase';
import artistLogo from "../../Pages/Artists/artistLogo.jpg";
import Card from "../../components/Blog/UI/Card";
import UploadImage1 from "./uplodeFiles/img1/uploadImg_1"
import UploadImage2 from "./uplodeFiles/img2/uplodeImg_2"
import UploadImage3 from "./uplodeFiles/img3/uplodeImg_3"
import UploadBlogImage from  "../../components/Blog/UplodeImage"
import deleteDoc from "../../hooks/deleteDoc";
import {FaTrashAlt} from "react-icons/fa";
import firebase from "firebase";
import YoutubeEmbed from "./youtubeVideo";
import UploadProfileImg from "./uplodeFiles/profileImg/uploadProfileImg";

class ArtistManagePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist:{
                IsAdmin:"",
                age:"",
                email:"",
                full_name: "",
                photo:"",
                user_name:"",
                user_uid:"",
                description: "",
                image_1: "",
                image_2: "",
                image_3: "",
                youtubeVideo: ""
            },
            artistImg:"",
            artistVideo:"",
            artistDescription: "",
            loader:false
        }
    }

    componentDidMount() {
        const ArtistsId = this.props.userId ;
        this.setState({
            ArtistsId: ArtistsId
        })
        db.collection('artists').doc(ArtistsId).get()
            .then(snapshot => {
                this.setState({artist: snapshot.data(), loader: true})
            })
    }

    user_delete_his_image_1(artist_id) {
        return (
                // Delete course from courses array and update in Firebase
                <button id={'delete'} style={{color: 'white', position:"absolute"}} onClick={() => {
                    db.collection("artists").doc(artist_id).update({
                        image_1: ""
                    }).catch(function (error) {
                        console.error("Error removing document: ", error);
                    });
                    this.setState(prevState => {
                        let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
                        artist.image_1 = '';                     // update the name property, assign a new value
                        return { artist };                                 // return new object jasper object
                    })
                }}>
                    <FaTrashAlt/></button>
        )
    }

    user_delete_his_image_2(artist_id) {
        return (
            // Delete course from courses array and update in Firebase
            <button id={'delete'} style={{color: 'white', position:"absolute"}} onClick={() => {
                db.collection("artists").doc(artist_id).update({
                    image_2: ""
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
                this.setState(prevState => {
                    let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
                    artist.image_2 = '';                     // update the name property, assign a new value
                    return { artist };                                 // return new object jasper object
                })
            }}>
                <FaTrashAlt/></button>
        )
    }

    user_delete_his_image_3(artist_id) {
        return (
            // Delete course from courses array and update in Firebase
            <button id={'delete'} style={{color: 'white', position:"absolute"}} onClick={() => {
                db.collection("artists").doc(artist_id).update({
                    image_3: ""
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
                this.setState(prevState => {
                    let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
                    artist.image_3 = '';                     // update the name property, assign a new value
                    return { artist };                                 // return new object jasper object
                })
            }}>
                <FaTrashAlt/></button>
        )
    }

    user_delete_his_video(artist_id) {
        return (
            // Delete course from courses array and update in Firebase
            <button id={'delete'} style={{color: 'white'}} onClick={() => {
                db.collection("artists").doc(artist_id).update({
                    youtubeVideo : ""
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
                this.setState(prevState => {
                    let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
                    artist.youtubeVideo = '';                     // update the name property, assign a new value
                    return { artist };                                 // return new object jasper object
                })
                this.setState({artistVideo : ""})
            }}>
                <FaTrashAlt/></button>
        )
    }
    handleImg1 = (img1_url)=>{

        this.setState(prevState => {
            let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
            artist.image_1 = img1_url;                     // update the name property, assign a new value
            return { artist };                                 // return new object jasper object
        })
    }
    handleImg2 = (img2_url)=>{
        this.setState(prevState => {
            let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
            artist.image_2 = img2_url;                     // update the name property, assign a new value
            return { artist };                                 // return new object jasper object
        })
    }

    handleImg3 = (img3_url)=>{
        this.setState(prevState => {
            let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
            artist.image_3 = img3_url;                     // update the name property, assign a new value
            return { artist };                                 // return new object jasper object
        })
    }

    handleProfile = (profile_url)=>{
        this.setState(prevState => {
            let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
            artist.photo = profile_url;                     // update the name property, assign a new value
            return { artist };                                 // return new object jasper object
        })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    handleSubmit =  (e) => {
        e.preventDefault();
        db.collection('artists').doc(this.props.userId).update({
            youtubeVideo : this.state.artistVideo
            }
        ).then( r => {
            this.setState(prevState => {
                let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
                artist.youtubeVideo = this.state.artistVideo;                     // update the name property, assign a new value
                return { artist };                                 // return new object jasper object
            })
        })
    }

    handleSubmitDescription = (e) => {
        e.preventDefault();
        db.collection('artists').doc(this.props.userId).update({
            description : this.state.artistDescription
            }
        ).then( r => {
            this.setState(prevState => {
                let artist = Object.assign({}, prevState.artist);  // creating copy of state variable jasper
                artist.description = this.state.artistDescription;                     // update the name property, assign a new value
                return { artist };                                 // return new object jasper object
            })
        })
    }

    render() {
        if (!this.state.loader) { return (<div></div>)}
        let img1_option
        let img2_option
        let img3_option
        let youtubeVideo
        let artistPhoto

        if (this.state.artist.image_1 == undefined || this.state.artist.image_1 == "") {
            img1_option =
                    <UploadImage1 user_id={this.props.userId} SetUrl={this.handleImg1}/>
        } else {
            img1_option =
                <div id={'img_con'} >
                    <div>{this.user_delete_his_image_1(this.props.userId)}</div>
                    <img id={'artist_img'} src={this.state.artist.image_1} />
                </div>

        }

        if (this.state.artist.image_2 == undefined || this.state.artist.image_2 == "") {
            img2_option =
                <UploadImage2 user_id={this.props.userId} SetUrl={this.handleImg2}/>

        } else {
            img2_option =
                <div id={'img_con'} >
                    <div>{this.user_delete_his_image_2(this.props.userId)}</div>
                    <img id={'artist_img'} src={this.state.artist.image_2} />
                </div>
        }

        if (this.state.artist.image_3 == undefined || this.state.artist.image_3 == "") {
            img3_option =
                <UploadImage3 user_id={this.props.userId} SetUrl={this.handleImg3}/>
        } else {
            img3_option =
                <div id={'img_con'} >
                    <div>{this.user_delete_his_image_3(this.props.userId)}</div>
                    <img id={'artist_img'} src={this.state.artist.image_3} />
                </div>
        }

        if (this.state.artist.youtubeVideo == undefined || this.state.artist.youtubeVideo == "") {
            youtubeVideo =
                <form style={{textAlign:'center'}} onSubmit={this.handleSubmit} className="white">
                    <div className = "input-field">
                        <label className = "line" htmlFor="username" >???????? ???????? ???????????? ?????????? ?????????? ??????????: </label><br></br>
                        <input className = "box" type="text"  id="artistVideo" required  onChange={this.handleChange}/>
                    </div>
                    <div><br></br>
                        <button className = "button"><span>?????? </span></button>
                    </div>
                </form>
        } else {
            youtubeVideo =
                <div>
                    <p style={{fontSize:'40px',textAlign:'center',paddingTop:'30px',textDecoration: 'underline'}}>?????????? ???? ????????:</p>
                    <div>{this.user_delete_his_video(this.props.userId)}</div>
                    <YoutubeEmbed embedId={this.state.artist.youtubeVideo} />
                </div>
        }

        if (this.state.artist.photo == undefined || this.state.artist.photo == "") {
            artistPhoto =
                <img src={artistLogo} alt="artistPhoto" style={{width: 130, height: 130, borderRadius: 150/2}}/>
        } else {
            artistPhoto =
                <img src={this.state.artist.photo} alt="artistPhoto" style={{width: 130, height: 130, borderRadius: 150/2}}/>
        }

        if(this.props.UserDetails.UserUid == this.props.userId ){

        return (
            <div  id={'page'} style={{paddingBottom:'0'}}>
                <br/>
                <Card>
                    <div className="artistPhoto" id="title" style={{ justifyContent: "center",padding:'10px'}}>
                        {artistPhoto}
                        <p style= {{color:'black', fontSize:"20px"}}>???????? / ???????? ??????????</p>
                        <UploadProfileImg user_id={this.props.userId} SetUrl ={this.handleProfile}/>
                    </div>
                </Card>
                <Card>
                    <div>
                        <p style={{fontSize:"36px", textAlign:'center'}}><b>  ???? ????????: </b>{this.state.artist.full_name} </p>
                        <p style={{fontSize:"30px", textAlign:'center'}}> <b> ????????????:</b> {this.state.artist.profession} </p>
                    </div>
                    <div>
                        <p style={{fontSize:"30px", textAlign:'center',fontWeight:"bold",paddingTop:'10px', textDecoration: 'underline'}}>???????? ???????? ???? ????????: </p>
                        <p style={{fontSize:"20px", textAlign:'center',paddingBottom:'13px'}}> {this.state.artist.description}</p>
                        <form style={{textAlign:'center'}} onSubmit={this.handleSubmitDescription} >
                            <div className = "input-field">
                                <label className = "line" htmlFor="postText" > <p style={{paddingBottom:'13px',fontWeight:"bold"}}>???????? ?????????? ??????:  </p></label>
                                <textarea className="artistDescription" id="artistDescription" name="w3review" rows="10" cols="100" onChange={this.handleChange}/>
                            </div>
                            <div><br></br>
                                <button className = "button"><span>?????? </span></button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div id= {'artistUploadFiles'} className="uploadFiles">
                            {img1_option}
                            {img2_option}
                            {img3_option}
                        </div>

                    </div>

                </Card>

                <Card>
                    {youtubeVideo}
                </Card>



            </div>


        )}
        else return <div></div>
    }

}

export default ArtistManagePage