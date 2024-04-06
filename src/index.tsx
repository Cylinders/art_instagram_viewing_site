import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
	<html>

	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		,
	</React.StrictMode></html>,
  document.getElementById('root')
)


