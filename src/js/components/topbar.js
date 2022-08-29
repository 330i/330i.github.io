import React from 'react';
import ik_logo from '../assets/ik_logo.png'
import {useNavigate} from 'react-router-dom';

export default function TopBar() {

    const navigate = useNavigate();

    const navigateResume = () => {
        navigate('/resume');
    };

    const navigateAbout = () => {
    navigate('/about');
    };

    const navigateHome = () => {
    navigate('/');
    };

    const navigateExperience = () => {
        navigate('/experience');
    };

    const navigateContact = () => {
        navigate('/contact');
    };

    return (
        <div className="topbar">
            <div className="bar-btn">
                <btn onClick={navigateResume}>
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
                <btn onClick={navigateExperience}>
                    Dev Experience
                </btn>
            </div>
            <div className="bar-btn">
                <btn onClick={navigateContact}>
                    Contact
                </btn>
            </div>
        </div>
    );
}