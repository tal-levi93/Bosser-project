import React,{Component} from "react";
import {auth, db} from "../../Firebase/firebase";
import artistLogo from "../Artists/artistLogo.jpg";
import {Button} from "@material-ui/core";
import './artists.css'
import deleteDoc from "../../hooks/deleteDoc";
import {FaTrashAlt} from "react-icons/fa";

class Artists extends Component{

    constructor(props) {
        super(props);
        this.state = {
            artists:[],
            artists_id:[],
            searchTerm:""
        }
    }

    componentDidMount() {
        let artists = [];
        let artists_id =[];
        db.collection('artists').get().then((snapshot) => {
            snapshot.docs.forEach( doc => {

                if(doc.data().IsAdmin === false) {
                    artists.push(doc.data());
                    artists_id.push(doc.id);
                }
            });

            this.setState({
                artists: artists,
                artists_id:artists_id
            });

            this.setState({artists: artists});
            this.setState({artists_id: artists_id});

        })
    }

// if admin id logged in, option of delete will display on every artist
    admin_is_logged_in(artist_id, idx) {
        if (this.props.UserDetails.IsAdmin) {
            return (
                <div key={idx}>
                    {this.props.UserDetails.IsAdmin &&
                    // Delete course from courses array and update in Firebase
                    <button id={'delete'} style={{color: 'white'}} onClick={() => {
                        deleteDoc(this.state.artists_id[idx], 'artists');
                        let array = this.state.artists;
                        array.splice(idx, 1);
                        this.setState({artists: array});
                        this.state.artists_id.splice(idx, 1);
                    }}>
                        <FaTrashAlt/></button>
                    }
                </div>

            )
        }

        return <div/>

    }

    // return the artists and search option
    render() {
        return(
            <div id={'page'}>
                <br/>
                <div id={'title'} style={{color:'black'}}>???????????? ????????</div>
                <input id={'search'} type="text" placeholder="?????????? ?????? ????" style={{fontSize:'20px'}} onChange={event =>
                {
                    this.setState({searchTerm: event.target.value})
                }}/>
                <div className="contains">

                    {this.state.artists.filter((val)=>{
                        if (this.state.searchTerm === "") {
                            return val
                        } else if(val.full_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                            return val
                        }
                    },).map((val , idx)=>(
                        this.create_artist(val,val.user_uid)
                    ))}
                </div>

            </div>
        )
    }

    // for every artist, display his name,photo and profession
    create_artist(artist_id, uid) {
        let idx =  this.state.artists_id.indexOf(uid)
        let url = artistLogo
        if(artist_id.photo ){ url = artist_id.photo }
        return (<div className={'artist'} key={idx}>
            {this.admin_is_logged_in(artist_id, idx)}
            <a href={"/artists/" + this.state.artists_id[idx] } style={{ textDecoration: 'none' }} >
            <div id={'artist_container'}>
                <img id={'photo'} src={url} />
                <div id={'a_name'} >{artist_id.full_name}</div>
                <div id={'prof'}>{artist_id.profession}</div>
            </div>

            </a>



        </div>)

    }
}

export default Artists;

