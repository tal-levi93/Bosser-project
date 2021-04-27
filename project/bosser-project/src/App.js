import logo from './logo.svg';
import './App.css';
import {auth} from "./Firebase/firebase";
import Artists from "./Pages/artists";
import Blog from "./Pages/blog";
import Gallery from "./Pages/gallery";
import Courses from "./Pages/courses";
import Events from "./Pages/events";
import Newsletter from "./Pages/newsletter";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://twitch.tv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Switch>
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
  );
}

export default App;
