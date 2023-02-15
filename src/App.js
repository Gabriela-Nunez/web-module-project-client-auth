import React from 'react';
import './App.css';
import { Routes, Route, Link,  } from 'react-router-dom';

import Login from './components/Login';
import AddFriends from './components/AddFriends';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
  
    <div className="App">
        <h2>FRIENDS DATABASE</h2>
          <div className='links'>
            <Link to='/login'>Login</Link>
          
            <Link to='/friends'>FriendsList</Link>
          
            <Link to='/friends/add'>AddFriends</Link>
         
            <Link to='/logout'>Logout</Link>
          </div>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/friends/' element={<FriendsList />} />
            <Route exact path='friends/add' element={<AddFriends />} />
            <Route exact path="/logout" element={<Logout />} />
        </Routes> 
    </div>
   
  );
}

export default App;
