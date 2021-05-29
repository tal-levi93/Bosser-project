import React from "react";
import './style.css'
import Hero from '../../Blog/Hero'
import BlogHeader from "../BlogHeader";
import Card from "../UI/Card";
import BlogPost from "../BlogPost";
import Sidebar from "../Sidebar";

const Post = (props) => {

    return (
        <div className="postPage">
            <section className="cont" >
                <BlogPost {...props}/>
                {/*<Sidebar/>*/}
            </section>
        </div>


    )
}

export default Post