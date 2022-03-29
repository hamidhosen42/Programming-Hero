import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setFriends(data));
    },[]);

    return (
        <div>
            <h2>Hello Friend, How are you?</h2>
            <h4>Total Friend: {friends.length}</h4>
            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo repellendus facere quidem nulla autem, beatae voluptatem at distinctio quae, quia tempore? Dolorum ducimus accusantium, vitae reiciendis iste necessitatibus? Odio.</small></p>
            {
                friends.map((friend)=><Friend friend={friend} key={friend.id}></Friend>)
            } 
        </div>
    );
};

export default Friends;