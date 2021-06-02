import React, {Component, useEffect, useState} from "react";
import './style.css'
import Card from "../UI/Card";
import ProfileImage from "../../../blogImages/profileImage.jpg";
import {db} from "../../../Firebase/firebase";
import {NavLink} from "react-router-dom";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [] ,
            postIds: []
        }
    }

    componentDidMount() {
        let posts = [];
        let postIds = [];
        db.collection('posts').get().then((result)=>{
            result.docs.forEach(doc=>{
                posts.push(doc.data());
                postIds.push(doc.id);
            });
            this.setState({posts: posts});
            this.setState({postIds: postIds});
        });
    }

    render() {
        if (this.props.IsLoggedIn == true) {
            return (
                <div className="sidebarContainer">
                    <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box", backgroundColor:'palevioletred'}}>
                        <div className="cardHeader" style={{fontSize:'30px'}}>
                        <span>
                            <a href={"/blog/createPost"}>
                                <p style={{fontWeight:'bold'}}>צור פוסט</p>
                            </a>
                        </span>
                        </div>
                    </Card>

                    <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box", height: '100%'}}>
                        <div className="cardHeader">
                            <span><p style={{fontWeight:'bold'}}>פוסטים אחרונים:</p></span>
                        </div>

                        <div className="recentPosts">
                            {
                                this.state.posts.map((post, index) => {
                                    if (post.isVerified == false) {return <div></div>}
                                    return (
                                        <a key={index} href={"/blog/post/" + this.state.postIds[index]}>
                                            <div className="recentPost">
                                                <p style={{fontSize:'18px'}}>{post.blogTitle}</p>
                                                <span><p style={{fontSize:'14px'}}>{post.postedOn.toDate().toDateString()}</p></span>
                                            </div>
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </Card>
                </div>
            )
        } else {
            return (
                <div className="sidebarContainer">

                    <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box", height: '100%'}}>
                        <div className="cardHeader">
                            <span><p style={{fontWeight:'bold'}}>פוסטים אחרונים:</p></span>
                        </div>

                        <div className="recentPosts">
                            {
                                this.state.posts.map((post, index) => {
                                    if (post.isVerified == false) {return <div></div>}
                                    return (
                                        <a key={index} href={"/blog/post/" + this.state.postIds[index]}>
                                            <div className="recentPost">
                                                <p style={{fontSize:'18px'}}>{post.blogTitle}</p>
                                                <span><p style={{fontSize:'14px'}}>{post.postedOn.toDate().toDateString()}</p></span>
                                            </div>
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </Card>
                </div>
            )
        }

    }

}

export default Sidebar