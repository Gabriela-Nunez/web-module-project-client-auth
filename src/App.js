import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import AddFriends from './components/AddFriends';
import FriendsList from './components/FriendsList';




function App() {
  return (
  
    <div className="App">
        <h2>FRIENDS DATABASE</h2>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/friends'>FriendsList</Link>
          </div>
          <div>
            <Link to='/friends/add'>AddFriends</Link>
          </div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/friends' element={<FriendsList />} />
          <Route exact path="/friends/add" element={<AddFriends />} />
        </Routes> 
    </div>
   
  );
}

export default App;
