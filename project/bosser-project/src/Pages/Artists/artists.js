import {Component} from "react";
import {auth, db} from "../../Firebase/firebase";
import Search from '../../components/Search/index'
import artistLogo from "../Artists/artistLogo.jpg";
import {Button} from "@material-ui/core";

class Artists extends Component{

    constructor(props) {
        super(props);
        this.state = {
            artists:[]
        }
    }

    componentDidMount() {
        let artists = [];
        db.collection('artists').get().then((snapshot) => {
            snapshot.docs.forEach( doc => {
                artists.push(doc.data());
            });
            this.setState({artists: artists});
        })
    }

    render() {
        return(
            <div>
                {/*<h1>אמנים</h1>*/}
                <h1>האמנים שלנו:</h1>
                <div className="tmp" style={ {display: 'flex', flexDirection: "row", flexWrap: "wrap"}}>
                    {this.state.artists.map((artist , idx)=>(
                        this.create_artist(artist,idx)
                    ))}
                </div>

            </div>
        )
    }

    create_artist(artist_id, idx) {
        return (<div key={idx}>
            <div style={ {color: '#bab9b9' ,border: '3px solid #bab9b9', padding: '10px', margin: '14px', textAlign:'center', width: '24rem'} }>
                <div>
                    <img src={artistLogo} width="250" height="100"/>
                    <h3 style={ { color:'white'} }>{artist_id.full_name}</h3>
                    <br/>
                    <Button id={'enterCourseButton'} style={ { color:'black' , border: '3px solid white' , background:'#c3c3c3'} }>כניסה לעמוד אמן</Button>
                </div>
            </div>
        </div>)

    }
}

export default Artists;

