import React from 'react';

import hines_img from "../assets/experience/hines_interests.png";

import flutter_img from "../assets/experience/flutter.png";
import firebase_img from "../assets/experience/firebase.png";

import opencv_img from "../assets/experience/opencv.png";
import pytorch_img from "../assets/experience/pytorch.png";
import react_img from "../assets/experience/react.png";
import python_img from "../assets/experience/python.png";
import javascript_img from "../assets/experience/javascript.png";
import java_img from "../assets/experience/java.png";

class Accordion extends React.Component {
    render() {
        return(
            <div class="accordion-screen">
                <div class="accordion">
                    <input type="checkbox" id="chck1" />
                    <label class="accordion-tab" for="chck1">Work Experience</label>
                    <ul class="accordion-content">
                        <img src={hines_img} />
                        <li class="text-hls">
                            Hines Interests LP | Software Development Intern
                        </li>
                        <li class="text-nhls">
                            Main Technology: Django
                        </li>
                    </ul>
                </div>
                <div class="divider" />
                <div class="accordion">
                    <input type="checkbox" id="chck2" />
                    <label class="accordion-tab" for="chck2">Hackathon Experience</label>
                    <ul class="accordion-content">
                        <img src={flutter_img} />
                        <li class="text-hls">
                            Flutter
                        </li>
                        <li class="text-nhls">
                            Proficient Experience
                        </li>
                        <li>&nbsp;</li>
                        <img src={firebase_img} />
                        <li class="text-hls">
                            Firebase
                        </li>
                        <li class="text-nhls">
                            Proficient Experience
                        </li>
                    </ul>
                </div>
                <div class="divider" />
                <div class="accordion">
                    <input type="checkbox" id="chck3" />
                    <label class="accordion-tab" for="chck3">Project Experience</label>
                    <ul class="accordion-content">
                        <img src={opencv_img} />
                        <li class="text-hls">
                            OpenCV
                        </li>
                        <li class="text-nhls">
                            Moderate Experience
                        </li>
                        <li>&nbsp;</li>
                        <img src={pytorch_img} />
                        <li class="text-hls">
                            PyTorch
                        </li>
                        <li class="text-nhls">
                            Limited Experience
                        </li>
                        <li>&nbsp;</li>
                        <img src={react_img} />
                        <li class="text-hls">
                            React
                        </li>
                        <li class="text-nhls">
                            Moderate Experience
                        </li>
                    </ul>
                </div>
                <div class="divider" />
                <div class="accordion">
                    <div class="sidebar"></div>
                    <input type="checkbox" id="chck4" />
                    <label class="accordion-tab" for="chck4">Other Experience</label>
                    <ul class="accordion-content">
                        <img src={python_img} />
                        <li class="text-hls">
                            Python
                        </li>
                        <li class="text-nhls">
                            Proficient Experience
                        </li>
                        <li>&nbsp;</li>
                        <img src={javascript_img} />
                        <li class="text-hls">
                            Javascript
                        </li>
                        <li class="text-nhls">
                            Proficient Experience
                        </li>
                        <li>&nbsp;</li>
                        <img src={java_img} />
                        <li class="text-hls">
                            Java
                        </li>
                        <li class="text-nhls">
                            Proficient Experience
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Accordion;