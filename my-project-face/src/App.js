import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

let postsData = [{id: 1, message:'Hi, How are you?', likesCount: 20},
{id: 2, message:'This is my first post', likesCount: 12},
{id: 3, message:'I love jS', likesCount: 420},
{id: 4, message:'Hi, How are you222?', likesCount: 120} ]

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile postsData={postsData} />}>Profile</Route>
            <Route path='/dialogs' element={<Dialogs />}>Dialog</Route>
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;



