"use client";

import Accordion from "../../components/accordion";
import SignatureMl from "../../components/signatureml";
import textStyle from "../../styles/text.module.css"
import screenStyle from "../../styles/screen.module.css"

export default function Experience() {
  return(
    <div className={screenStyle.screencontainer}>
      <SignatureMl topicNameL1="Developer" topicNameL2="Experience"/>
      <div className={textStyle.textcontainerexperience}>
        <Accordion />
      </div>
    </div>
  );
}