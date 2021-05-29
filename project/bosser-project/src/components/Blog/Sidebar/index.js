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
        return (
            <div className="sidebarContainer">
                {/*
                <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box"}}>
                    <div className="cardHeader">
                        <span>About us</span>
                    </div>
                    <div className="profileImageContainer">
                        <img src={ProfileImage}/>
                    </div>
                    <div className="cardBody">
                        <p className="personalBio">My name is Ofir and I am a software enginiree student</p>
                    </div>
                </Card>
                <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box"}}>
                    <div className="cardHeader">
                        <span>Social Network</span>
                    </div>
                </Card>
                   */}
                <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box", height: '100%'}}>
                    <div className="cardHeader">
                        <span>פוסטים אחרונים:</span>
                    </div>

                    <div className="recentPosts">
                        {
                            this.state.posts.map((post, index) => {
                                return (
                                    <a key={index} href={"/blog/post/" + this.state.postIds[index]}>
                                        <div className="recentPost">
                                            <h3>{post.blogTitle}</h3>
                                            <span>{post.postedOn.toDate().toDateString()}</span>
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

export default Sidebar