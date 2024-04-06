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
function App() {
  // wake me up when its all over
  // when im wiser and im older
  return ( <div>
	  <Header />
      <Routes>
			<Route path="/" element={<ViewingPage />} />
            <Route path="/viewing" element={<ViewingPage />} />
            <Route path="/publishing" element={<PublishingPage />} />
            <Route path="/signup" element={<SignIn/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/logout" element={<LogOut/>} />
      </Routes>



      </div>
  );
}

export default App;
