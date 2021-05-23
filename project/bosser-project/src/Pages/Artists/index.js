import {Component} from "react";
import {auth} from "../../Firebase/firebase";
import Search from '../../components/Search/index'

class Artists extends Component{

    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                {/*<h1>אמנים</h1>*/}
                <Search></Search>

                <button onClick={()=>{

                }}>חזרה</button>

            </div>
        )
    }
}

export default Artists;