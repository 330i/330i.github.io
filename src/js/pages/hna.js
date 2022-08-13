import React from "react";
import SignatureMl from "../components/signatureml";

class HNA extends React.Component {
  render() {
    return (
      <div className="screen-container">
        <div>
          <SignatureMl topicNameL1="Honors and" topicNameL2="Activities" />
        </div>
        <ul className="text-container-hna">
          <li className="text-hll">
            CRyptonite Robotics | September 2018 – May 2019
          </li>
          <li className="text-nhls">• 30 weeks / year, 1-4 hours / week</li>
          <li className="text-nhls">• Computer-aided design</li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Learned and used SolidWorks
          </li>
          <li className="text-nhls">
            • Volunteer Hours from Neighborhood Kidz Club: 12 hours
          </li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Helped children with various activities
            including science experiments
          </li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Helped clean up after activities
          </li>
          <li className="text-hll">&nbsp;</li>
          <li className="text-hll">
            CRHS Innovation and Development Association | September 2019 - May
            2022
          </li>
          <li className="text-hll">• 32 weeks / year, 2-30 hours / week</li>
          <li className="text-hll">• VP of Education, April 2020 - May 2021</li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Organized education meetings for the
            extracurricular club.
          </li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Created and edited education documents for
            the club.
          </li>
          <li className="text-hll">• President, July 2021 - May 2022</li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Organized club meetings including
            hackathons and education.
          </li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Assisted teacher communication with VP of
            Communications.
          </li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Oriented other officers on tasks.
          </li>
          <li className="text-nhls">
            • Volunteer Hours from the HACK Initiative: 87 hours
          </li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Taught and helped junior high students.
          </li>
          <li className="text-nhls">
            &nbsp;&nbsp;&nbsp;&nbsp;• Taught p5.js, Java, and Flutter.
          </li>
          <li className="text-hll">
            Mu Alpha Theta | September 2019 - May 2022
          </li>
          <li className="text-nhls">• Volunteer Hours: 5.5</li>
        </ul>
      </div>
    );
  }
}

export default HNA;
