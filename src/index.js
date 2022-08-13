import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './js/pages/about.js';
import HNA from './js/pages/hna.js';
import TopBar from './js/components/topbar.js';
import Home from './js/pages/home.js';
import './index.scss';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopBar />
          <Home />
        </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
