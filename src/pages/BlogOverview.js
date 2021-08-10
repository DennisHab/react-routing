import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";
import './BlogOverview.css';

function BlogOverview({logState}) {
    const blogTitles = posts.map((blogPost) =>{
        return <Link to={`/blog-posts/${blogPost.id}`}><li key={blogPost.id}>{blogPost.title}</li></Link>;
    });
    return (
        <div className="blog-overview">
            {!logState ? <>
                <h3>Total number of posts: {posts.length}</h3>
                <ul>{blogTitles}</ul>
            </> : <span>Please Log in to view posts</span>
            }
        </div>
    )
}
export default BlogOverview