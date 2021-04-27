import {Component} from "react";
import {auth} from "../Firebase/firebase";

class Artists extends Component{

    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <h1>Artists</h1>

                <button onClick={()=>{

                }}>Back</button>

            </div>
        )
    }
}

export default Artists;