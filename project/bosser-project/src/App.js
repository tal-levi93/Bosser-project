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
import Login from   "./Login";
export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Login/>
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
function signing() {
  auth.createUserWithEmailAndPassword("first@gmail.com", "123456").then(result =>
      console.log(result));
}