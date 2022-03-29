import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId}=useParams();
    const [post,setPost]=useState([]);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res)=>res.json())
        .then((data)=>setPost(data))
    },[postId])
    return (
      <div className="single-information">
        <h4>This is Post Detail for :{postId}</h4>
        <h5>Title : {post?.title}</h5>
        <h4>Body</h4>
        <p>
          <small>{post?.body}</small>
        </p>
      </div>
    );
};

export default PostDetail;