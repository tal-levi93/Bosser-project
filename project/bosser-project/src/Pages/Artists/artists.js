import React,{Component} from "react";
import {auth, db} from "../../Firebase/firebase";
import Search from '../../components/Search/index'
import artistLogo from "../Artists/artistLogo.jpg";
import {Button} from "@material-ui/core";
import './artists.css'

//



import ReactRoundedImage from "react-rounded-image";
import deleteDoc from "../../hooks/deleteDoc";
import {FaTrashAlt} from "react-icons/fa"; // ------------------------

class Artists extends Component{

    constructor(props) {
        super(props);
        this.state = {
            artists:[],
            artists_id:[]
        }
    }

    componentDidMount() {
        let artists = [];
        let artists_id =[];
        db.collection('artists').get().then((snapshot) => {
            snapshot.docs.forEach( doc => {

                if(doc.data().IsAdmin == false) {
                    artists.push(doc.data());
                    artists_id.push(doc.id);
                }

            });
            this.setState({artists: artists});
            this.setState({artists_id: artists_id});
        })
    }


    admin_is_logged_in(artist_id, idx) {
        if (this.props.UserDetails.IsAdmin) {
            return (
                <div key={idx}>
                    {this.props.UserDetails.IsAdmin &&
                    // Delete course from courses array and update in Firebase
                    <button id={'delete'} style={{color: 'white'}} onClick={() => {
                        console.log('artist:',this.state.artists[idx])
                        console.log('artist_id:',this.state.artists_id[idx])
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

        return <div></div>

    }

    render() {
        return(
            <div id={'page'}>
                <br/>
                <div id={'title'} style={{color:'black'}}>האמנים שלנו</div>
                <input id={'search'} type="text" placeholder="חיפוש"></input>
                <div className="contains">

                    {this.state.artists.map((artist , idx)=>(
                        this.create_artist(artist,idx)
                    ))}
                </div>

            </div>
        )
    }

    create_artist(artist_id, idx) {
        let url = artistLogo
        if(artist_id.photo ){ url = artist_id.photo }
        return (<div className={'artist'} key={idx}>
            {this.admin_is_logged_in(artist_id, idx)}
            <div id={'artist_container'}>
                <img id={'photo'} src={url} />
                <div id={'a_name'} >{artist_id.full_name}</div>
                <div id={'prof'}>{artist_id.profession}</div>



            </div>
        </div>)

    }
}

export default Artists;

