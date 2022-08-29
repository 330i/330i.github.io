import React from "react";
import email_img from "../assets/email.png";
import linkedin_img from "../assets/linkedin.png";
import github_img from "../assets/github.png";
import devpost_img from "../assets/devpost.png";
import Signature from "../components/signature";

class Contact extends React.Component {
    render() {
        return(
            <div>
                <div className="screen-container">
                    <Signature topicName="Contact" />
                    <ul className="text-container">
                        <li className="contact-container">
                            <div className="contact-row">
                                <img src={email_img} className="contact-img"/>
                                <h1 className="text-hls">Email: id.kim.dev@gmail.com</h1>
                            </div>
                            <div className="contact-row">
                                <img src={linkedin_img} className="contact-img"/>
                                <h1 className="text-hls">Linkedin</h1>
                            </div>
                            <div className="contact-row">
                                <img src={github_img} className="contact-img"/>
                                <h1 className="text-hls">Github</h1>
                            </div>
                            <div className="contact-row">
                                <img src={devpost_img} className="contact-img"/>
                                <h1 className="text-hls">Devpost</h1>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Contact;