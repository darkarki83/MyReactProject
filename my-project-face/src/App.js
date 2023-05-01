import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>

            <Route path='/dialogs' element={<DialogsContainer />}>Dialog</Route>
            <Route path='/profile' element={<ProfileContainer />}>Profile</Route>
            <Route path='/profile/:userId' element={<ProfileContainer />}>Profile</Route>
            <Route path='/users' element={<UsersContainer /> }>Users</Route>
          </Routes>
        </div>
      </div>
  
    </BrowserRouter>
  );
}

export default App;



