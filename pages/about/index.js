"use client";

import Signature from "../../components/signature";
import screenStyles from "../../styles/screen.module.css"
import textStyles from "../../styles/text.module.css"

export default function About() {
  return (
    <div>
      <div className={screenStyles.screencontainer}>
        <Signature>About Me</Signature>
        <ul className={textStyles.textcontainerlong}>
          <li className={textStyles.texthls}>
            A college student always looking forward to learning and working
            in a team with various skills and ideas for the benefit of the
            organization and self-growth. Also looking forward to learning
            software engineering, data science, and computer science where he
            would be able to learn to utilize his skills.
          </li>
          <li className={textStyles.texthls}>&nbsp;</li>
          <li className={textStyles.texthls}>I am currently a...</li>
          <li className={textStyles.textnhls}>• student at Texas A&M University</li>
          <li className={textStyles.textnhls}>• full stack Flutter mobile developer</li>
          <li className={textStyles.textnhls}>• participant in various hackathons</li>
          <li className={textStyles.texthls}>&nbsp;</li>
          <li className={textStyles.texthls}>I am currently learning...</li>
          <li className={textStyles.textnhls}>• machine learning</li>
          <li className={textStyles.textnhls}>• web development</li>
          <li className={textStyles.textnhls}>• computer vision</li>
          <li className={textStyles.texthls}>&nbsp;</li>
          <li className={textStyles.texthls}>I am currently working on...</li>
          <li className={textStyles.textnhls}>• something</li>
        </ul>
      </div>
    </div>
  );
}
