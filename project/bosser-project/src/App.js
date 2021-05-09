
import './App.css';
import {auth} from "./Firebase/firebase";
import Home from "./Pages/Home";
import Artists from "./Pages/artists";
import Blog from "./Pages/blog";
import Gallery from "./Pages/gallery";
import Courses from "./Pages/Courses/courses";
import Events from "./Pages/Events/events";
import Newsletter from "./Pages/newsletter";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from   "./Login";
import Navbar from "./components/Header/NavbarElements";


import React ,{useState} from "react";
import Sidebar from "./components/Header/Sidebar";
import Index from "./Pages";
export default App;

function App() {
  return (
      <>
    <div className="App" dir="rtl">
      <header className="App-header">

        <Router>
          <Index/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/artists" component={Artists}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/gallery" component={Gallery}/>
              <Route exact path="/courses" component={Courses}/>
              {/*<Route exact path="/courses/:id" component={Courses}/>*/}
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
function signing() {
  auth.createUserWithEmailAndPassword("first@gmail.com", "123456").then(result =>
      console.log(result));
}