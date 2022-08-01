import React from 'react';
import ik_logo from './assets/ik_logo.png'

class TopBar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <btn>
                    Resume
                </btn>
                <btn className="center-btn">
                    About Me
                </btn>
                <img src={ik_logo} className="logo-img"/>
                <btn className="center-btn">
                    Projects
                </btn>
                <btn>
                    Contact
                </btn>
            </div>
        );
    }
}

export default TopBar;