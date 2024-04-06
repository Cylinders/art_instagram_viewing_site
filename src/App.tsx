<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainpage/mainpage';
import PublishingPage from './components/publishingpage/publishingpage'; 
import ViewingPage from './components/viewingpage/viewingpage'; 
import SignIn from './components/signin/signin'; 
import LogIn from './components/login/login'; 
import LogOut from './components/logout/logout';
import Header from './components/header/header'; 
import {Route, Routes } from 'react-router-dom';
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PublishingPage from "./components/publishingpage/publishingpage";
import SignUp from "./components/signup/signup";
import NewPost from "./components/newpost/newpost";

import { Route, Routes } from "react-router-dom";
import { GetUser } from "./util/database";
>>>>>>> 3366832 (revamped signup page)
function App() {
  // wake me up when its all over
  // when im wiser and im older
  return (
    <div>
      <Routes>
<<<<<<< HEAD
			<Route path="/" element={<ViewingPage />} />
            <Route path="/viewing" element={<ViewingPage />} />
            <Route path="/publishing" element={<PublishingPage />} />
            <Route path="/signup" element={<SignIn/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/logout" element={<LogOut/>} />
=======
        <Route path="/currentposts" element={<PublishingPage />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/login" element={<SignUp />} />
>>>>>>> 3366832 (revamped signup page)
      </Routes>
    </div>
  );
}

export default App;
