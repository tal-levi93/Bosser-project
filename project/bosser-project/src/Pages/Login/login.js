import React,{Component} from "react";
import {auth} from "../../Firebase/firebase";
import "./login.css"
import ForgotPassword from "../ForgotPassword/forgotPassword";


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            forgot_pass: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
            this.props.history.push('/')
        }).catch((e) => {
            alert(e)
        })


    }

    toggleForgotPass = () => {
        this.setState({
            forgot_pass: !this.state.forgot_pass
        });
    }

    render() {
        return (
            <div className="container">
                {/*<Header style={{display:'none'}}> <Header/>*/}

                {!this.state.forgot_pass && (
                    <div>
                        <form id='form' onSubmit={this.handleSubmit} className="white">
                            <br/>
                            <h5 className="headline">התחברות</h5>
                            <div className="input-field">
                                <label className="line" htmlFor="Email">דואר אלקטרוני </label><br></br>
                                <input className="box" type="text" id="email" required onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="line" htmlFor="password">סיסמא </label><br></br>
                                <input className="box" type="password" id="password" required
                                       onChange={this.handleChange}/>
                            </div>

                            <div><br></br>
                                <button className="login"><span>התחבר </span></button>
                            </div>
                        </form>
                        <button className="forgot_pass" onClick={this.toggleForgotPass}><span>שכחתי סיסמא </span>
                        </button>
                    </div>
                )}
                {this.state.forgot_pass && (
                    <div className='forgotPassword'>
                        <ForgotPassword toggleForgotPass={this.toggleForgotPass}/>
                    </div>
                )}
            </div>
        )
    }


}

export default login;

