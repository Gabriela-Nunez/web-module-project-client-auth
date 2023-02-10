import React from 'react';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import AddFriends from './components/AddFriends';
import FriendsList from './components/FriendsList';




function App() {
  return (
  
    <div className="App">
        <h2>Client Auth Project</h2>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>FriendsList</Link>
          </li>
          <li>
            <Link to='/login'>AddFriends</Link>
          </li>
        </ul>
       <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
         
        <Route path='/friends' element={<FriendsList />} />
         
        <Route path="/friends/add" element={<AddFriends />} />
         
        </Routes> 
    </div>
   
  );
}

export default App;
