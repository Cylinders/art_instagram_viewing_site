import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainpage/mainpage';
import PublishingPage from './components/publishingpage/publishingpage'; 
import ViewingPage from './components/viewingpage/viewingpage'; 
import SignIn from './components/signin/signin'; 
import {Route, Routes } from 'react-router-dom';
function App() {
  // wake me up when its all over
  // when im wiser and im older
  return ( <div>
  
      <Routes>
			<Route path="/" element={<MainPage />} />
            <Route path="/viewing" element={<ViewingPage />} />
            <Route path="/publishing" element={<PublishingPage />} />
            <Route path="/signin" element={<SignIn/>} />
      </Routes>



      </div>
  );
}

export default App;
