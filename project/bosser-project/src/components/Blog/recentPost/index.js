import './style.css'
import Hero from '../../Blog/Hero'
import BlogHeader from "../BlogHeader";
import Card from "../UI/Card";
import BlogPost from "../BlogPost";
import Sidebar from "../Sidebar";
import blogImage2 from "../../../blogImages/blogPotho2.jpg";
import React, {useState, useEffect, Component} from "react";

const ReadMore = (props) => {
    const text = props.children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {text.slice(0, 250) + "..."}
            <span onClick={toggleReadMore} className="read-or-hide">
                <h4>
                    <a  href={"/blog/post/" + props.id}>
                    המשך קריאה
                    </a>
                </h4>
            </span>
        </div>
    );
};

const RecentPost = (props) => {

    return (
        <div style={props.style}>
            <Card style={{marginBottom: '20px'}}>
                <div className="postImageWrapper">
                    <img src={props.post.image}/>
                </div>
                <div style={{textAlign:'center'}}>
                    <span className="blogCategoryS">{props.post.blogCtagory}</span>
                    <h2 className="blogTitleS">{props.post.blogTitle}</h2>
                    <span className="blogPostedOnS">פורסם בתאריך {props.post.postedOn.toDate().toDateString()} </span>
                    <div className="TextContainer">
                        <ReadMore
                            children={props.post.postText} id={props.id}
                        ReadMore/>
                    </div>
                </div>


            </Card>
        </div>
    )
}

export default RecentPost