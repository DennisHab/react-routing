import React from 'react';
import './Blogposts.css';
import {useParams} from 'react-router-dom'

function Blogposts() {
    let {id} = useParams()
    const data = require('../data/posts.json');

    return (
        <div className="blog-post">
            {data.map((blogPost)=> {
                    if (blogPost.id === id) {
                        return <><h2>Now showing post {blogPost.id}</h2>
                            <p>Date: {blogPost.date}</p>
                            <h1>{blogPost.title}</h1>
                            <p>{blogPost.content}</p>
                            </>}})
            }
        </div>
    )
}

export default Blogposts;