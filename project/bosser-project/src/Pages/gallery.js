import {Component} from "react";
import {auth} from "../Firebase/firebase";

class Gallery extends Component{

    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <h1>Gallery</h1>

                <button onClick={()=>{

                }}>Back</button>

            </div>
        )
    }
}

export default Gallery;