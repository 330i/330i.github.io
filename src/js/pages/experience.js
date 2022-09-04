import React from "react";
import Accordion from "../components/accordion";
import SignatureMl from "../components/signatureml";

class Experience extends React.Component {
    render() {
        return(
            <div className="screen-container">
                <SignatureMl topicNameL1="Developer" topicNameL2="Experience"/>
                <div className="text-container-experience">
                    <Accordion />
                </div>
            </div>
        );
    }
}

export default Experience;