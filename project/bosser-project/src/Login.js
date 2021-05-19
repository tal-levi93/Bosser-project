import {Component} from "react";
import firebase from "firebase";
import {auth} from "./Firebase/firebase";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
        }
    }


        render() {

            return(

                <div>
                    <h3>,שלום אורח</h3>
                    <input type = "email"
                           id = "email"
                           placeholder= "Email"
                           title = "email"
                           onChange={(event)=>{
                                this.setState({email:event.target.value})
                           }}
                    />
                    <br/>
                    <input type = "password"
                           id = "password"
                           placeholder= "Password"
                           title = "password"
                           onChange={(event)=>{
                               this.setState({password:event.target.value})
                           }}
                    />
                    <br/>
                    <button onClick={()=>{
                        this.login()
                        console.log(this.state)
                    }}>התחבר</button>
                </div>
            )
        }



    login(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((result)=>{
                console.log("Logged In")
                console.log(result)
            }).catch((e)=> {
                console.log("Cannot Logged In")

        })
    }
}

    export default Login;