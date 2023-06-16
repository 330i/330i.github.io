"use client";

import everythingStyle from '../styles/everything.module.css'

var hines_img = "/experience/hines_interests.png";

var flutter_img = "/experience/flutter.png";
var firebase_img = "/experience/firebase.png";

var opencv_img = "/experience/opencv.png";
var pytorch_img = "/experience/pytorch.png";
var react_img = "/experience/react.png";
var python_img = "/experience/python.png";
var javascript_img = "/experience/javascript.png";
var java_img = "/experience/java.png";

export default function Accordion() {
    return(
        <div className={everythingStyle.accordionscreen}>
            <div className={everythingStyle.accordion}>
                <input type="checkbox" id="chck1" />
                <label className={everythingStyle.accordiontab} htmlFor="chck1">Work Experience</label>
                <ul className={everythingStyle.accordioncontent}>
                    <img src={hines_img} alt="Hines Interests LP" />
                    <li className={everythingStyle.texthls}>
                        Hines Interests LP | Software Development Intern
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Main Technology: Django
                    </li>
                </ul>
            </div>
            <div className={everythingStyle.divider} />
            <div className={everythingStyle.accordion}>
                <input type="checkbox" id="chck2" />
                <label className={everythingStyle.accordiontab} htmlFor="chck2">Hackathon Experience</label>
                <ul className={everythingStyle.accordioncontent}>
                    <img src={flutter_img} alt="Flutter" />
                    <li className={everythingStyle.texthls}>
                        Flutter
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Proficient Experience
                    </li>
                    <li>&nbsp;</li>
                    <img src={firebase_img} alt="Firebase" />
                    <li className={everythingStyle.texthls}>
                        Firebase
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Proficient Experience
                    </li>
                </ul>
            </div>
            <div className={everythingStyle.divider} />
            <div className={everythingStyle.accordion}>
                <input type="checkbox" id="chck3" />
                <label className={everythingStyle.accordiontab} htmlFor="chck3">Project Experience</label>
                <ul className={everythingStyle.accordioncontent}>
                    <img src={opencv_img} alt="OpenCV" />
                    <li className={everythingStyle.texthls}>
                        OpenCV
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Moderate Experience
                    </li>
                    <li>&nbsp;</li>
                    <img src={pytorch_img} alt="PyTorch" />
                    <li className={everythingStyle.texthls}>
                        PyTorch
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Limited Experience
                    </li>
                    <li>&nbsp;</li>
                    <img src={react_img} alt="React" />
                    <li className={everythingStyle.texthls}>
                        React
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Moderate Experience
                    </li>
                </ul>
            </div>
            <div className={everythingStyle.divider} />
            <div className={everythingStyle.accordion}>
                <div className={everythingStyle.sidebar}></div>
                <input type="checkbox" id="chck4" />
                <label className={everythingStyle.accordiontab} htmlFor="chck4">Other Experience</label>
                <ul className={everythingStyle.accordioncontent}>
                    <img src={python_img} alt="Python" />
                    <li className={everythingStyle.texthls}>
                        Python
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Proficient Experience
                    </li>
                    <li>&nbsp;</li>
                    <img src={javascript_img} alt="JavaScript" />
                    <li className={everythingStyle.texthls}>
                        Javascript
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Proficient Experience
                    </li>
                    <li>&nbsp;</li>
                    <img src={java_img} alt="Java" />
                    <li className={everythingStyle.texthls}>
                        Java
                    </li>
                    <li className={everythingStyle.textnhls}>
                        Proficient Experience
                    </li>
                </ul>
            </div>
        </div>
    );
}