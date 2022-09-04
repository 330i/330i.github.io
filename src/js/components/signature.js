import React from 'react';
import sign_w from '../assets/sign_w.png'

class Signature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topicName: "",
        }
    }

    render() {
        return (
            <div className="sign-container">
                <img src={sign_w} alt="Ian Kim Signature" className="sgnimg" />
                <div className="divide-line" />
                <div>
                    <h1 className="topic">
                        {this.props.topicName}
                    </h1>
                </div>
            </div>
        );
    }
}

export default Signature;