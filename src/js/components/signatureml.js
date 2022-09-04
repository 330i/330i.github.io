import React from 'react';
import sign_w from '../assets/sign_w.png'

class SignatureMl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topicNameL1: "",
            topicNameL2: "",
        }
    }

    render() {
        return (
            <div className="sign-container">
                <img src={sign_w} alt="Ian Kim Signature" className="sgnimg" />
                <div className="divide-line" />
                <h1 className="topic-ml">
                    {this.props.topicNameL1}<br></br>{this.props.topicNameL2}
                </h1>
            </div>
        );
    }
}

export default SignatureMl;