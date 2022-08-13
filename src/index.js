import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './js/pages/about.js';
import TopBar from './js/components/topbar.js';
import Home from './js/pages/home.js';
import './index.scss';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
