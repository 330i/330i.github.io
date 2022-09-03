import React from 'react';

import hines_img from "../assets/experience/hines_interests.png";

import flutter_img from "../assets/experience/flutter.png";

import opencv_img from "../assets/experience/opencv.png";
import pytorch_img from "../assets/experience/pytorch.png";

class Accordion extends React.Component {
    render() {
        return(
            <div class="tabs">
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
                    </ul>
                </div>
                <div class="divider" />
                <div class="accordion">
                    <input type="checkbox" id="chck3" />
                    <label class="accordion-tab" for="chck3">Other Experience</label>
                    <ul class="accordion-content">
                        <img src={opencv_img} />
                        <li class="text-hls">
                            OpenCV
                        </li>
                        <li class="text-nhls">
                            Limited Experience
                        </li>
                        <li>&nbsp;</li>
                        <img src={pytorch_img} />
                        <li class="text-hls">
                            PyTorch
                        </li>
                        <li class="text-nhls">
                            Very Limited Experience
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Accordion;