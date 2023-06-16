"use client";

import signatureStyles from "../styles/signature.module.css"

export default function SignatureMl({topicNameL1, topicNameL2}) {
    return (
        <div className={signatureStyles.signcontainer}>
            <img src='/sign_w.png' alt="Ian Kim Signature" className={signatureStyles.sgnimg} />
            <div className={signatureStyles.divideline} />
            <h1 className={signatureStyles.topicml}>
                {topicNameL1}<br></br>{topicNameL2}
            </h1>
        </div>
    );
}