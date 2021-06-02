import React, {Component} from "react";
import {auth, db} from "../../Firebase/firebase";
import BlogHeader from "../../components/Blog/BlogHeader";
import Hero from '../../components/Blog/Hero';
import Card from "../../components/Blog/UI/Card"
import Sidebar from "../../components/Blog/Sidebar";
import './style.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import blogImage from "../../blogImages/profileImage.jpg";
import RecentPost from "../../components/Blog/recentPost";
import deleteDoc from "../../hooks/deleteDoc";
import {FaTrashAlt} from "react-icons/fa";
import {FiCheck} from  "react-icons/fi";

class ManageBlog extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            postIds:[],
            loader:false
        }
    }

    componentDidMount() {
        let posts = [];
        let postIds = [];
        db.collection('posts').get().then((result) => {
            result.docs.forEach(doc => {
                posts.push(doc.data());
                postIds.push(doc.id);
            });
            this.setState({posts: posts});
            this.setState({postIds: postIds});
            this.setState({loader: true})
        });
    }

    admin_is_logged_in_delete(post_id, idx) {
        if (this.props.UserDetails.IsAdmin) {
            return (
                <div key={idx}>
                    {this.props.UserDetails.IsAdmin &&
                    // Delete course from courses array and update in Firebase
                    <button id={'delete'} style={{color: 'white', position:"absolute"}} onClick={() => {
                        deleteDoc(this.state.postIds[idx], 'posts');
                        let array = this.state.posts;
                        array.splice(idx, 1);
                        this.setState({posts: array});
                        this.state.postIds.splice(idx, 1);
                    }}>
                        <FaTrashAlt/></button>
                    }
                </div>
            )
        }
        return <div></div>
    }

    admin_is_logged_in_verify(post_id, idx) {
        if (this.props.UserDetails.IsAdmin) {
            return (
                <div key={idx}>
                    {this.props.UserDetails.IsAdmin &&
                    // Delete course from courses array and update in Firebase
                    <button id={'delete'} style={{color: 'white', position:"absolute"}} onClick={() => {
                        {
                        db.collection('posts').doc(post_id).update({
                                isVerified: true
                            }
                        ).then( r => {})
                        }
                    }}>
                        <FiCheck style={{backgroundColor:'green'}}/></button>
                    }
                </div>
            )
        }
        return <div></div>
    }

    render() {
        if (!this.state.loader) { return (<div></div>)}
        const galleryHeight =450;
        const galleryStyle = {
            height: galleryHeight + 'px',
            overflow: 'hidden'
        };
        const sideImageHeight = galleryHeight/3;
        return(

            <div className="blogPage">
                {/*<BlogHeader/>
                <Hero/>*/}
                <div>
                    <section className="BlogPageContainer">

                        <div style={{width:'100%'} }>
                            {
                                this.state.posts.map((postObj, index) => {
                                    if(postObj.isVerified == false) {
                                        return(
                                            <div key={index}>
                                                <div style={{justifyContent: "space-between" , display:'flex'}}>
                                                    <div>{this.admin_is_logged_in_delete(this.state.postIds[index], index)}</div>
                                                    <div style={{width:'92%'}}>{this.admin_is_logged_in_verify(this.state.postIds[index], index)}</div>
                                                </div>
                                                <div>
                                                    <RecentPost  style={{width:'100%', padding:'3px 3px'}} post={postObj} id={this.state.postIds[index]}/>
                                                </div>

                                            </div>
                                        )
                                    } else {
                                        return(
                                            <div key={index}>
                                                <div style={{justifyContent: "space-between" , display:'flex'}}>
                                                    <div>{this.admin_is_logged_in_delete(this.state.postIds[index], index)}</div>
                                                </div>
                                                <div>
                                                    <RecentPost  style={{width:'100%', padding:'3px 3px'}} post={postObj} id={this.state.postIds[index]}/>
                                                </div>

                                            </div>
                                        )
                                    }

                                },)
                            }
                        </div>
                    </section>


                </div>
            </div>

        )
    }
}

export default ManageBlog;