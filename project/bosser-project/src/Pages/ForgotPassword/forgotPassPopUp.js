import {Component} from "react";
import "./forgotPassPopUp.css"


class ForgotPassPopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.popUpText
        }
    }

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