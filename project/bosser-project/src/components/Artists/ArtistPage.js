import React, {useState, useEffect, Component} from "react";
import {db} from '../../Firebase/firebase';

class ArtistPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist_details:{
                name:"",
                profession:"",
                personal_data:"",
            },
            loader:false
        }
    }

    componentDidMount() {
        const userid = this.props.match.params.userid;
        console.log("the user id is : " , userid)
        db.collection('artists').doc(userid).get()
            .then((res)=>{
                let data = res.data()
                if(res.exists){
                    this.setState({
                        artist_details:{
                            name : data.full_name,
                            profession:data.profession,
                            personal_data:data.personal_data,
                        },
                        loader:true
                    })
                }
                else{
                    console.log("ERROR!")
                }
            })
    }


    render() {
        if (!this.state.loader) { return (<div></div>)}
        return (
            <div><h1>{this.state.artist_details.name}</h1></div>
        )
    }

}

export default ArtistPage