import React,{Component} from "react";
import firebase from "firebase";
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import "./style.css"
import {db} from '../../Firebase/firebase';
import sign_up from "../Sign_up/sign_up";
import UploadForm from "../../components/GalleryImages/UploadForm";
import UploadBlogImage from "../../components/Blog/UplodeImage";

class CreatePost extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            blogCategory:"",
            blogTitle:"",
            postText:"",
            postedOn: new Date(),
            author: "",
            image:"",
            url:"",
            isVerified: false
        }
    }



    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }


    /* When user create new post for blog*/
    handleSubmit = async (e) => {
        e.preventDefault();

        const postsRef = db.collection('posts');
        const post = {
            blogCategory: this.state.blogCtagory,
            blogTitle: this.state.blogTitle,
            postText: this.state.postText,
            postedOn: this.state.postedOn,
            author: this.props.UserDetails.FullName,
            image: this.state.url,
            isVerified: this.state.isVerified
        }
        await postsRef.add(post).then(res => {

                this.setState({
                    blogCategory:"",
                    blogTitle:"",
                    postText:"",
                    postedOn: new Date(),
                    author:this.props.UserDetails.FullName,
                    image:"",
                    isVerified: false
                })
            this.props.history.push('/blog')
            }).catch(err=>{
            alert(err)
        })
    }

    handleUrl = (file_url)=>{
        this.setState({
            url:file_url
        })
    }


    render() {

        return (
            <div className="createPostCon">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="headline">יצירת פוסט חדש:</h5>
                    <div className = "input-field">
                        <label className = "line" htmlFor="blogCtagory" >נושא:</label><br></br>
                        <input className = "box" type="text"  id="blogCtagory" required  onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <label className = "line" htmlFor="blogTitle">כותרת: </label><br></br>
                        <input className = "box" type="text" id="blogTitle" required onChange={this.handleChange}/>
                    </div>

                    <div className = "input-field">
                        <label className = "line" htmlFor="postText">תוכן הפוסט: </label><br></br>
                        <textarea className="postText" id="postText" name="w3review" rows="20" cols="100" onChange={this.handleChange}/>
                    </div>

                        <div className = "input-field">
                        <label className = "line" htmlFor="image">צרף תמונה: </label><br></br>
                        <UploadBlogImage SetUrl = {this.handleUrl}/>
                    </div>

                    <div><br></br>
                        <button className = "button"><span>שלח </span></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePost;