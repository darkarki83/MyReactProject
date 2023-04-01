import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile postsData={props.state.profilePage.postsData}  addPost={props.addPost} />}>Profile</Route>
            <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} />}>Dialog</Route>
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;



