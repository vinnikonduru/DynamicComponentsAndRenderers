import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Service worker start
// if ('serviceWorker' in navigator) {
    
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }

ReactDOM.render(
    <App />
,document.getElementById('root'));
