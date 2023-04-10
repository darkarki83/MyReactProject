import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>

            <Route path='/dialogs' element={<DialogsContainer />}>Dialog</Route>
            <Route path='/profile' element={<Profile />}>Profile</Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



