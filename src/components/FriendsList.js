import React, { useState, useEffect } from "react";
import axios from 'axios';



const FriendsList = () => {
  const [friends, setFriends] = useState([]);


useEffect(() => {
  const token = localStorage.getItem('token');
    if(token) {
      axios.get('http://localhost:9000/api/friends', {
        headers: {
          authorization: token
        }
      })
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.error);
      })
    }
}, [])


  return (
    <div>
      <h2>Friends List</h2>
        {
          friends.map((friend, index) => {
            return <li key={index}>{friend.name} - {friend.age} - {friend.email}</li>
          })
        }
    </div>
  )
}

export default FriendsList;