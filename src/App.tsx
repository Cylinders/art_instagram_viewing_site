import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page404 from './components/page404/page404';
// RUTHVIK VENKATESAN: ORIGINAL DRAFT: 12:00 PM Wednesday, March 20, 2024
import {Route, Routes } from 'react-router-dom';
function App() {
  // wake me up when its all over
  // when im wiser and im older
  return ( <div>
  
      <Routes>
  
			<Route path="/" element={<MainPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/tbt" element={<TbtPage />} />
			<Route path="/feedback" element={<Feedback />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/fencingcamp" element={<FencingCamp />} />
			<Route path="*" element={<Page404 />} />

      </Routes>



      </div>
  );
}

export default App;
