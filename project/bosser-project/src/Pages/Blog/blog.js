import React, {Component} from "react";
import {auth, db} from "../../Firebase/firebase";
import BlogHeader from "../../components/Blog/BlogHeader";
import Hero from '../../components/Blog/Hero';
import Card from "../../components/Blog/UI/Card"
import Sidebar from "../../components/Blog/Sidebar";
import './stype.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import blogImage from "../../blogImages/profileImage.jpg";
import RecentPost from "../../components/Blog/recentPost";

const SideImage = props => {
    return (
        <div style={{height: `${props.height}px` , padding:'3px 3px' , flex:1 , justifyContent:"center", alignItems:'center' ,  position: 'relative' ,textAlign: 'center', color: 'white'}}>
            <img src={props.post.image} alt=""/>
            <div className="textInImage" >
                <a  href={"/blog/post/" + props.id}>
                    {props.post.blogTitle}
                </a>

            </div>
        </div>
    )
}

class Blog extends Component{

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
                    <Card style={{margin: '20px 0'}}>
                        <div className="GalleryPost" style={galleryStyle}>
                            <section style={{width:'70%'}}>
                                <div className="mainImageWrapper">
                                    <div style={{position:'absolute',textAlign: 'center', textShadow:'2px 2px #6c6c6c', left:'50%', transform:'translate(-50%, 100%)', fontSize:'40px'}}>
                                        <a  href={"/blog/post/" + this.state.postIds[0]}>
                                            {this.state.posts[0].blogTitle}
                                        </a>

                                    </div>
                                    <img src={this.state.posts[0].image} style={{width:'100%', padding:'3px 3px'}}/>
                                </div>
                            </section>
                            <section className="sideImageWrapper" style={{width:'30%'}}>
                                < SideImage
                                    height={sideImageHeight}
                                    post={this.state.posts[1]}
                                    id={this.state.postIds[1]}
                                    />
                                < SideImage
                                    height={sideImageHeight}
                                    post={this.state.posts[2]}
                                    id={this.state.postIds[2]}
                                />
                                < SideImage
                                    height={sideImageHeight}
                                    post={this.state.posts[3]}
                                    id={this.state.postIds[3]}
                                />
                            </section>
                        </div>

                    </Card>

                    <section className="BlogPageContainer">
                        <div style={{width:'100%'} }>
                            <RecentPost style={{width:'100%', padding:'3px 3px'}} post={this.state.posts[4]} id={this.state.postIds[4]}/>
                            <RecentPost style={{width:'100%' , padding:'3px 3px'}} post={this.state.posts[5]} id={this.state.postIds[5]}/>
                        </div>

                        <Sidebar/>
                    </section>


                </div>
            </div>

        )
    }
}

export default Blog;