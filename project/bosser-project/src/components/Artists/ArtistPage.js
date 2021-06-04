import React, {useState, useEffect, Component} from "react";
import {auth, db} from '../../Firebase/firebase';
import ArtistProfile from "../../Pages/ArtistProfile/ArtistProfile";
import artistLogo from "../../Pages/Artists/artistLogo.jpg";

class ArtistPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // UserDetails: {
            //     UserUid:"",
            //     FullName:"",
            //     Email:"",
            //     profession:"",
            //     info:"",
            //     UserLog: false
            // }
            currentUser: "",
            profilePhoto: artistLogo,
            userToShow: "",
            IsLoggedIn: false
        }
    }

    initIsLoggedIn = (res => {
        if(res === this.props.UserDetails.UserUid) {
            console.log("TRUE")
        }
        else {
            console.log("FALSE")
        }
    })

    componentDidMount() {
        const userToShow = this.props.match.params.userid;

        console.log("the userToShow is : " , userToShow)                //--------------------------------

        // db.collection('artists').doc(userToShow).get()
        //     .then((res) => {
        //         let data = res.data()
        //         this.setState({
        //             userToShow: userToShow
        //         })
        //     })
        //
        // if(userToShow === this.state.UserUid) {
        //     this.setState({
        //         UserLog: true
        //     })
        // }

        this.setState({
            userToShow: userToShow
        })
    }


    render() {
        return (
            <div>
                {this.initIsLoggedIn(this.state.userToShow)}
                <ArtistProfile UserDetails={this.state.UserDetails} IsLoggedIn={this.state.UserLog}/>
            </div>
        )
    }

}

export default ArtistPage