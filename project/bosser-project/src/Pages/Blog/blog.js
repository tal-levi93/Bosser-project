import {Component} from "react";
import {auth} from "../../Firebase/firebase";
import BlogHeader from "../../components/Blog/BlogHeader";
import Hero from '../../components/Blog/Hero'
import './stype.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Blog extends Component{

    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className="blogPage">
                <BlogHeader/>
                <Hero/>
            </div>
        )
    }
}

export default Blog;