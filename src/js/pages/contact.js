import React from "react";
import email_img from "../assets/contact/email.png";
import linkedin_img from "../assets/contact/linkedin.png";
import github_img from "../assets/contact/github.png";
import devpost_img from "../assets/contact/devpost.png";
import Signature from "../components/signature";

class Contact extends React.Component {
    render() {
        return(
            <div>
                <div className="screen-container">
                    <Signature topicName="Contact" />
                    <ul className="text-container">
                        <li className="contact-container">
                            <a className="contact-row" href="mailto:id.kim.dev@gmail.com">
                                <img src={email_img} className="contact-img"/>
                                <h1 className="text-hls">Email: id.kim.dev@gmail.com</h1>
                            </a>
                            <a className="contact-row" href="https://www.linkedin.com/in/ian-kim-4130501a5/">
                                <img src={linkedin_img} className="contact-img"/>
                                <h1 className="text-hls">Linkedin</h1>
                            </a>
                            <a className="contact-row" href="https://github.com/330i">
                                <img src={github_img} className="contact-img"/>
                                <h1 className="text-hls">Github</h1>
                            </a>
                            <a className="contact-row" href="https://devpost.com/330i">
                                <img src={devpost_img} className="contact-img"/>
                                <h1 className="text-hls">Devpost</h1>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Contact;