"use client";

import Signature from "../../components/signature";
import everythingStyles from "../../styles/everything.module.css"

var email_img = "/contact/email.png";
var linkedin_img = "/contact/linkedin.png";
var github_img = "/contact/github.png";
var devpost_img = "/contact/devpost.png";

export default function Contact() {
  return(
    <div>
      <div className={everythingStyles.screencontainer}>
        <Signature topicName="Contact" />
        <ul className={everythingStyles.textcontainer}>
          <li className={everythingStyles.contactcontainer}>
            <a className={everythingStyles.contactrow} href="mailto:id.kim.dev@proton.me">
              <img src={email_img} alt="Email" className={everythingStyles.contactimg}/>
              <h1 className={everythingStyles.texthls}>Email: id.kim.dev@proton.me</h1>
            </a>
            <a className={everythingStyles.contactrow} href="https://www.linkedin.com/in/ian-kim-4130501a5/">
              <img src={linkedin_img} alt="Linkedin" className={everythingStyles.contactimg}/>
              <h1 className={everythingStyles.texthls}>Linkedin</h1>
            </a>
            <a className={everythingStyles.contactrow} href="https://github.com/330i">
              <img src={github_img} alt="Github" className={everythingStyles.contactimg}/>
              <h1 className={everythingStyles.texthls}>Github</h1>
            </a>
            <a className={everythingStyles.contactrow} href="https://devpost.com/330i">
              <img src={devpost_img} alt="Devpost" className={everythingStyles.contactimg}/>
              <h1 className={everythingStyles.texthls}>Devpost</h1>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}