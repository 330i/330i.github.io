import React from 'react';
import ik_logo from '../assets/ik_logo.png'

class TopBar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <div className="bar-btn">
                    <btn>
                        Resume
                    </btn>
                </div>
                <div className="bar-btn">
                    <btn>
                        About Me
                    </btn>
                </div>
                <div className="bar-btn">
                    <img src={ik_logo} className="logo-img"/>
                </div>
                <div className="bar-btn">
                    <btn>
                        Projects
                    </btn>
                </div>
                <div className="bar-btn">
                    <btn>
                        Contact
                    </btn>
                </div>
            </div>
        );
    }
}

export default TopBar;