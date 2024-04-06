import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainpage/mainpage';

import {Route, Routes } from 'react-router-dom';
function App() {
  // wake me up when its all over
  // when im wiser and im older
  return ( <div>
  
      <Routes>
  
			<Route path="/" element={<MainPage />} />
      </Routes>



      </div>
  );
}

export default App;
