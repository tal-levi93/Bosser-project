import React,{Component} from "react";
import "./forgotPassPopUp.css"


/* This component represents pop-up for user feedback about the forgot password process. */
class ForgotPassPopUp extends Component {

    /* Constructor. Initialize the component state. */
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.popUpText
        }
    }

    /* This method renders the pop-up page with the appropriate feedback. */
    render() {
        return (
            <div className='modal'>
                <div className='modal_content'>
                    <p id='context'>{this.props.popUpText}</p>
                    <br/><br/><br/>
                    <button className="close" onClick={this.props.togglePopUp}><span>אישור</span></button>
                </div>
            </div>
        );
    }

}
export default ForgotPassPopUp;