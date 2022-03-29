import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./FriendDetail.css";

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend,setFriend]=useState([]);

    useEffect(
      () =>
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
          .then((res) => res.json())
          .then((data) => setFriend(data)),
      []
    );
    return (
      <div className="single-information">
        <h3>This is Friend Details {friendId}</h3>
        <h4>Name: {friend.name}</h4>
        <h5>UserName: {friend.username}</h5>
        <h5>Email: {friend.email}</h5>
        <h5>Website: {friend.website}</h5>
        <p><small>city: {friend.address?.city}</small></p>
        <p><small>Lat: {friend.address?.geo?.lat}</small></p>
      </div>
    );
};

export default FriendDetail;