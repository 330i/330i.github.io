import React from 'react';
import ReactDOM from 'react-dom/client';
import TopBar from './js/components/topbar.js';
import Resume from './js/pages/resume.js';
import About from './js/pages/about.js';
import Home from './js/pages/home.js';
import './index.scss';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <div>
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <TopBar />
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
