import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './about.css';
import './IntersectionObserver/InsersectionObserver.css'
import './parallaxSection/ParallaxSection.css'
import './GridCollection/HomeDesignerGrid.css'
import './GridCollection/Footer.css'
import './Contact.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
