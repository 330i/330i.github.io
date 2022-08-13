import React from 'react';
import ik_logo from '../assets/ik_logo.png'
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function TopBar() {

    const navigate = useNavigate();

    const navigateAbout = () => {
    navigate('/about');
    };

    const navigateHome = () => {
    navigate('/');
    };

    return (
        <div className="topbar">
            <div className="bar-btn">
                <btn>
                    Resume
                </btn>
            </div>
            <div className="bar-btn">
                <btn onClick={navigateAbout}>
                    About Me
                </btn>
            </div>
            <div className="bar-btn">
                <btn onClick={navigateHome}>
                    <img src={ik_logo} className="logo-img"/>
                </btn>
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