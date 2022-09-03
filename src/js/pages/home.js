import React from "react";
import background from "../assets/home/background.mp4"
import me_img from "../assets/home/me_img.png";

class Home extends React.Component {
    render() {
        return (
            <div className="home-div">
                <div className="welcome-div">
                    <h1 className="hello-text">Hello there, my name is</h1>
                    <h1 className="ian-text">Ian Kim</h1>
                </div>
                <div className="video-div">
                    <video className="bg-video" src={background} muted loop autoPlay></video>
                </div>
                <div className="me-div">
                    <img src={me_img} className="me-img"></img>
                </div>
            </div>
        )
    }
}

export default Home;