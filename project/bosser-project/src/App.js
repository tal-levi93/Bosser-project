
import './App.css';
import {auth, db} from "./Firebase/firebase";
import Home from "./Pages/Home";
import Artists from "./Pages/Artists/artists";
import Blog from "./Pages/Blog/blog";
import Gallery from "./Pages/Gallery/gallery";
import Courses from "./Pages/Courses/courses";
import Events from "./Pages/Events/events";
import Newsletter from "./Pages/newsletter";
import Post from "./components/Blog/Post"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./Pages/Login/login";
import CreatePost from "./Pages/CreatePost"
import CreateCourse from "./Pages/CreateCourse"
import CreateEvent from "./Pages/CreateEvent"
import SignUpForEvent from "./Pages/SignUpForEvent"
import ManageBlog from "./Pages/ManageBlog"
import Navbar from "./components/Header/NavbarElements";
import React, {Component, useState} from "react";
import Sidebar from "./components/Header/Sidebar";
import Index from "./Pages";
import sign_up from "./Pages/Sign_up/sign_up";
import firebase from "firebase";
import ArtistProfile from "./Pages/ArtistProfile/ArtistProfile";
import ArtistManagePage from "./components/Artists/ArtistManagePage";
import ArtistPage from "./components/Artists/ArtistPage";
import CreateMessageNS from "./Pages/CreateMessageForNS"

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      UserLog:"",
      UserDetails:{
        UserName:"",
        Email:"",
        FullName:"",
        UserUid:"",
        IsAdmin:""
      }
    }
  }
  IsLoggedIn = async()=>{
    try {
      await new Promise((resolve, reject) =>
          firebase.auth().onAuthStateChanged(
              async (user) => {
                if (user && user.uid) {
                  const curr_user = await db.collection('artists').doc(user.uid)
                  curr_user.get().then((res)=>{
                    let data = res.data()
                    if(res.exists){
                      this.setState({
                        UserLog:true,
                        UserDetails:{
                          FullName:data.full_name,
                          Email:data.email,
                          UserUid:data.user_uid,
                          UserName:data.user_name,
                          IsAdmin:data.IsAdmin
                        }
                      })
                    }
                    else{
                      console.log("errERE!")
                    }
                  })
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

  componentWillMount() {
    this.IsLoggedIn().then(r => {
      console.log( "r :: " , r)

    });
  }

  handleUserDetails = ()=>{
    this.setState({
      UserLog : "",
      UserDetails:{
        UserName:"",
        Email:"",
        FullName:"",
        UserUid:"",
        IsAdmin:""
      }
    })
  }

  render(){
    return (
        <div>
          <div className="App" dir="rtl">
            <header className="App-header">
              <Router>
                {/*{console.log(this.state.UserLog)}*/}
                <Index isLoggedIn = {this.state.UserLog} UserDetails = {this.state.UserDetails} ClearUserDetails = {this.handleUserDetails}/>
                <Switch >
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/ArtistProfile" render={(props) => (
                      <ArtistProfile UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog}/>
                  )} />
                  <Route exact path="/artists" render={(props) => (
                      <Artists UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog}/>
                  )} />
                  <Route exact path="/blog" render={(props) => (
                      <Blog UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog}/>
                  )} />
                  <Route exact path="/manageBlog" render={(props) => (
                      <ManageBlog UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog}/>
                  )} />
                  <Route exact path="/artistManagePage/:userid" render={(props) => (
                      <ArtistManagePage UserDetails={this.state.UserDetails} IsLoggedIn = {this.state.UserLog} userId={props.match.params.userid}/>
                  )} />
                  <Route exact path="/artists/:userid" render={(props) => (
                      <ArtistPage UserDetails={this.state.UserDetails} IsLoggedIn = {this.state.UserLog} userId={props.match.params.userid}/>
                  )} />
                  <Route exact path="/gallery" render={(props) => (
                      <Gallery UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog}/>)} />
                  <Route exact path="/courses" render={(props) => (
                      <Courses UserDetails={this.state.UserDetails} IsLoggedIn = {this.state.UserLog}/>)} />
                  <Route exact path="/signup" component={sign_up}/>
                  {<Route exact path="/courses/:id" component={Courses}/>}
                  <Route exact path="/events" render={(props) => (
                      <Events UserDetails={this.state.UserDetails} IsLoggedIn = {this.state.UserLog} {...props} />)}/>
                  <Route exact path="/newsletter" component={Newsletter}/>
                  <Route exact path="/blog/post/:postId" component={Post}/>
                  <Route exact path="/blog/createPost"  render={(props) => (
                      <CreatePost UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog} {...props}/>
                  )} />
                  <Route exact path="/createEvent"  render={(props) => (
                      <CreateEvent UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog} {...props}/>
                  )} />

                  <Route exact path="/createCourse"  render={(props) => (
                      <CreateCourse UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog} {...props}/>
                  )} />
                  <Route exact path="/events/signUpEvent/:EventId"  render={(props) => (
                      <SignUpForEvent  EventId={props.match.params.EventId} {...props}/>
                  )} />
                  <Route exact path="/createMessageNS"  render={(props) => (
                      <CreateMessageNS UserDetails={this.state.UserDetails}  IsLoggedIn = {this.state.UserLog} {...props}/>
                  )} />
                  <Route exact path="/events/signUpEvent"  render={(props) => (
                      <SignUpForEvent />)}/>
                  {/*<Route exact path="/newsletter/:id" component={Newsletter}/>*/}
                </Switch>
              </Router>



            </header>
          </div>
        </div>
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


