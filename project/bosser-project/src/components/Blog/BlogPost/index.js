import React, {useState, useEffect, Component} from "react";
import './style.css'
import Card from "../UI/Card";
import blogImage from "../../../blogImages/blogPotho2.jpg";
import {db} from '../../../Firebase/firebase';

class BlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post:{
                blogCtagory:"",
                blogTitle:"",
                postText:"",
                postedOn: "",
                author:""
            },
            loader:false

        }
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        db.collection('posts').doc(postId).get()
            .then(snapshot => this.setState({post: snapshot.data(),loader:true}))
    }

    render() {
        if (!this.state.loader) { return (<div></div>)}
        return (
            <div className="blogPostContainer">
                <Card>
                    <div className="blogHeader">
                        <span className="blogCategory">
                            <p>{this.state.post.blogCtagory}</p>
                        </span>
                        <p className="postTitle" style={{fontWeight:'bold'}}>{this.state.post.blogTitle}</p>
                        <span className='postDate'>
                            <p>
                                פורסם בתאריך {this.state.post.postedOn.toDate().toDateString()} על ידי {this.state.post.author}
                            </p>
                        </span>
                    </div>

                    <div className="postImageContainer">
                        <img src={this.state.post.image} className="image"/>
                    </div>

                    <div className="postContent">
                        <p style={{fontSize:"26px", fontWeight:'bold'}}>{this.state.post.blogTitle}</p>
                        <p  style={{fontSize:"20px"}}>{this.state.post.postText}</p>
                    </div>
                </Card>

            </div>
        )
    }

}

export default BlogPost