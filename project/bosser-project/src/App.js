
import './App.css';
import {auth, db} from "./Firebase/firebase";
import Home from "./Pages/Home";
import Artists from "./Pages/Artists/artists";
import Blog from "./Pages/blog";
import Gallery from "./Pages/Gallery/gallery";
import Courses from "./Pages/Courses/courses";
import Events from "./Pages/Events/events";
import Newsletter from "./Pages/newsletter";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./Pages/Login/login";


import Navbar from "./components/Header/NavbarElements";



import React, {Component, useState} from "react";
import Sidebar from "./components/Header/Sidebar";
import Index from "./Pages";
import sign_up from "./Pages/Sign_up/sign_up";
import firebase from "firebase";



class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      UserLog:false,
      UserDetails:{
        UserName:"",
        Email:"",
        FullName:"",
        UserUid:""
      }
    }
  }







  IsLoggedIn = async()=>{
    try {
      await new Promise((resolve, reject) =>
          firebase.auth().onAuthStateChanged(
              user => {
                if (user) {
                  this.setState({UserLog:true})
                  resolve(user)
                } else {
                  this.setState({UserLog:false})
                  reject('no user logged in')
                }
              },
              // Prevent console error
              error => reject(error)
          )
      )

    } catch (error) {

    }
  }

  componentDidMount() {
    this.IsLoggedIn().then(r => {

    });
    let users = [];
    const db = firebase.firestore()


    db.collection('artists').get().then((result)=>{
      result.docs.forEach(doc=>{
        users.push(doc.data());
      });
      let current_user_uid = firebase.auth().currentUser.uid;
      console.log(current_user_uid)
      users.forEach(user => {
        if(user.user_uid == current_user_uid){
          this.setState({
            UserDetails:{
              FullName:user.full_name,
              Email:user.email,
              UserUid:user.user_uid,
              UserName:user.user_name
            }
          })
        }
      })
    }).catch(function(err){
      console.log(err)
    })
  }







  render(){




    return (
        <>
          <div className="App" dir="rtl">
            <header className="App-header">
              <Router>
                {/*{console.log(this.state.UserLog)}*/}
                <Index isLoggedIn = {this.state.UserLog} userDetails = {this.state.UserDetails}/>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/artists" component={Artists}/>
                  <Route exact path="/blog" component={Blog}/>
                  <Route exact path="/gallery" component={Gallery}/>
                  <Route exact path="/courses" component={Courses}/>
                  <Route exact path="/signup" component={sign_up}/>
                  {<Route exact path="/courses/:id" component={Courses}/>}
                  <Route exact path="/events" component={Events}/>
                  <Route exact path="/newsletter" component={Newsletter}/>
                  {/*<Route exact path="/newsletter/:id" component={Newsletter}/>*/}
                </Switch>
              </Router>



            </header>
          </div>
        </>
    );
  }




}
export default App;




//
// function App() {
//
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       console.log("imhere")
//     } else {
//       console.log("3213")
//     }
//   });
//
//   return (
//       <>
//     <div className="App" dir="rtl">
//       <header className="App-header">
//
//         <Router>
//           <Index/>
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/artists" component={Artists}/>
//               <Route exact path="/blog" component={Blog}/>
//               <Route exact path="/gallery" component={Gallery}/>
//               <Route exact path="/courses" component={Courses}/>
//               <Route exact path="/signup" component={sign_up}/>
//               {<Route exact path="/courses/:id" component={Courses}/>}
//               <Route exact path="/events" component={Events}/>
//               <Route exact path="/newsletter" component={Newsletter}/>
//               {/*<Route exact path="/newsletter/:id" component={Newsletter}/>*/}
//           </Switch>
//         </Router>
//
//
//
//       </header>
//     </div>
//       </>
//   );
// }


