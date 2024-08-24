"use client";

import Accordion from "../../components/accordion";
import textStyle from "../../styles/text.module.css"
import screenStyle from "../../styles/screen.module.css"
import Signature from "../../components/signature";

export default function Experience() {
  return(
    <div className={screenStyle.screencontainer}>
      <Signature>Developer<br />Experience</Signature>
      <div className={textStyle.textcontainerexperience}>
        <Accordion />
      </div>
    </div>
  );
}