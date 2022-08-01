import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './js/about.js';
import HNA from './js/hna.js';
import TopBar from './js/topbar.js';
import './index.scss';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopBar />
          <About />
        </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
