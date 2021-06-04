import React,{Component} from "react";
import {auth, db} from "../../Firebase/firebase";
import Search from '../../components/Search/index'
import artistLogo from "../Artists/artistLogo.jpg";
import {Button} from "@material-ui/core";
import './artists.css'
import ReactRoundedImage from "react-rounded-image";
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

    render() {
        return(
            <div id={'page'}>
                <br/>
                <div id={'title'} style={{color:'black'}}>האמנים שלנו</div>
                <input id={'search'} type="text" placeholder="חיפוש" onChange={event =>
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
                        this.create_artist(val,idx)
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
            <a href={"/artists/" + this.state.artists_id[idx] } style={{ textDecoration: 'none' }} >
            <div id={'artist_container'}>
                <img id={'photo'} src={url} />
                <div id={'a_name'} >{artist_id.full_name}</div>
                <div id={'prof'}>{artist_id.profession}</div>
            </div>

            </a>
            {/*<div style={ {color: '#bab9b9' ,border: '3px solid #bab9b9', padding: '10px', margin: '14px', textAlign:'center', width: '24rem'} }>*/}
            {/*<div style={ {color: '#bab9b9', padding: '10px', margin: '14px', textAlign:'center', width: '24rem'} }>*/}
            {/*    <div style={ {position: "fixed", justifyContent: "center", alignItems: "center"} }>*/}
            {/*        /!*<img src={artistLogo} width="250" height="100"/>*!/*/}
            {/*        <ReactRoundedImage*/}
            {/*            image={artistLogo}*/}
            {/*            roundedColor="#66A5CC"*/}
            {/*            imageWidth="150"*/}
            {/*            imageHeight="150"*/}
            {/*            roundedSize="13"*/}
            {/*            borderRadius="150"*/}
            {/*            hoverColor="#DD1144"*/}
            {/*        />*/}
            {/*        <br/>*/}
            {/*        <h3 style={ { color:'white'} }>{artist_id.full_name}</h3>*/}
            {/*        <br/>*/}
            {/*        /!*<Button id={'enterArtistButton'} style={ { color:'black' , border: '3px solid white' , background:'#c3c3c3'} }>כניסה לעמוד אמן</Button>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>)

    }
}

export default Artists;

