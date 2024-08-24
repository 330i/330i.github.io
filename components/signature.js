"use client";

import signatureStyles from "../styles/signature.module.css"

export default function Signature({children}) {
    return (
        <div className="flex flex-row justify-center items-center h-1/3 px-24 w-5/12">
            <img src='/sign_w.png' alt="Ian Kim Signature" className={signatureStyles.sgnimg+" h-1/3"} />
            <div className="border-l-[1px] border-solid border-l-white h-1/3" />
            <h1 className={signatureStyles.topic}>
                {children}
            </h1>
        </div>
    );
}