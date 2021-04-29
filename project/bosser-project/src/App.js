
import './App.css';
import {auth} from "./Firebase/firebase";
import Home from "./Pages/Home";
import Artists from "./Pages/artists";
import Blog from "./Pages/blog";
import Gallery from "./Pages/gallery";
import Courses from "./Pages/courses";
import Events from "./Pages/events";
import Newsletter from "./Pages/newsletter";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from   "./Login";
import Navbar from "./components/Header";

import React from "react";
export default App;



function App() {
  return (
      <html dir="rtl">
    <div className="App">
      <header className="App-header">

        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/artists" component={Artists}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/gallery" component={Gallery}/>
              <Route exact path="/courses" component={Courses}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/newsletter" component={Newsletter}/>

          </Switch>
        </Router>




      </header>
    </div>
      </html>
  );
}
function signing() {
  auth.createUserWithEmailAndPassword("first@gmail.com", "123456").then(result =>
      console.log(result));
}