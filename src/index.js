import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import { robots } from './robots'; // for multiple imports; destructure it

// <App /> is mounted onto root when it first loads on website. 
// - mounting (several methods, aka lifecycle hooks, are called inorder, depending whether its used or not)
// Updating: whenever state or props is updated, the respective lifecycle hooks will be called in order...
// ...when we type in the input field, the state changes
// Unmount: When a new page from another site is loaded, the app is unmount from the webpage.
ReactDOM.render(<App /> ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
