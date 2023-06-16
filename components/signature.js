"use client";

import signatureStyles from "../styles/signature.module.css"
import Image from "next/image"

export default function Signature({topicName}) {
    return (
        <div className={signatureStyles.signcontainer}>
            <img src='/sign_w.png' alt="Ian Kim Signature" className={signatureStyles.sgnimg} />
            <div className={signatureStyles.divideline} />
            <div>
                <h1 className={signatureStyles.topic}>
                    {topicName}
                </h1>
            </div>
        </div>
    );
}