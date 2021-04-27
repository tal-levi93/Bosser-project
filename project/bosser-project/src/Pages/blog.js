import {Component} from "react";
import {auth} from "../Firebase/firebase";

class Blog extends Component{

    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <h1>Blog</h1>

                <button onClick={()=>{

                }}>Back</button>

            </div>
        )
    }
}

export default Blog;