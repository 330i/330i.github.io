import React from "react";
import SignatureMl from "../components/signatureml";
import Signature from "../components/signature"

class Resume extends React.Component {
  render() {
    return(
      <div className="scrollsnap">
        <div className="container">
          <section>
            <HNA />
          </section>
          <section>
            <Awards />
          </section>
          <section>
            <Education />
          </section>
        </div>
      </div>
    );
  }
}

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
          <li>&nbsp;</li>
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
          <li>&nbsp;</li>
          <li className="text-hll">
            Mu Alpha Theta | September 2019 - May 2022
          </li>
          <li className="text-nhls">• Volunteer Hours: 5.5</li>
        </ul>
      </div>
    );
  }
}

class Awards extends React.Component {
  render() {
    return (
      <div className="screen-container">
        <div>
          <Signature topicName="Awards" />
        </div>
        <ul className="text-container-hna">
          <li className="text-hll">
            The Square Small Business Hackathon | Jan 22, 2020 | Online / International
          </li>
          <li className="text-hls">• First Place – Services & Other Use Cases</li>
          <span className="text-nhls">• <a className="text-nhls" href="https://devpost.com/software/profit-fw5oyn">https://devpost.com/software/profit-fw5oyn</a> (submitted with parent’s account due to age restriction)</span>
          <li className="text-nhls">• ProFit: an online commerce app for fitness professionals.</li>
          <li className="text-nhls">• Worked on user interface scheduling, tracking, and storage code.</li>
          <li className="text-nhls">• Technology used: Flutter, Dart, Firebase, Agora.io, FFmpeg, Square API, TensorFlow Lite</li>
          <li>&nbsp;</li>
          <li className="text-hll">
            Supersonic, Subatomic, Java Hackathon | June 22, 2020 | Online / International
          </li>
          <li className="text-hls">• 2nd Place Overall</li>
          <span className="text-nhls">• <a className="text-nhls" href="https://devpost.com/software/appname-ybfhks">https://devpost.com/software/appname-ybfhks</a> (submitted with parent’s account due to age restriction)</span>
          <li className="text-nhls">• TidePool: a carpooling app mainly for children with extracurricular activities.</li>
          <li className="text-nhls">• Worked on maps and database code.</li>
          <li className="text-nhls">• Technology used: Flutter, Dart, Firebase, Google Maps API, PostgreSQL, Quarkus, Kubernetes, Java</li>
          <li>&nbsp;</li>
          <li className="text-hll">
            Citrus Hack | April 11, 2021 | Online / International
          </li>
          <li className="text-hls">• Best Health and Wellness Hack</li>
          <span className="text-nhls">• <a className="text-nhls" href="https://devpost.com/software/step-by-step-w6bmod">https://devpost.com/software/step-by-step-w6bmod</a></span>
          <li className="text-nhls">• Step by Step: a virtual fitness tournament app.</li>
          <li className="text-nhls">• Worked on competition logic and database code.</li>
          <li className="text-nhls">• Technology used: Flutter, Dart, Firebase</li>
        </ul>
      </div>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <div className="screen-container">
        <div>
          <Signature topicName="Education" />
        </div>
        <ul className="text-container-hna">
          <li className="text-hll">
            Cinco Ranch High School, Katy, TX | August 2018 - May 2022
          </li>
          <li>&nbsp;</li>
          <li className="text-hll">
            Texas A&M University | August 2022 - 
          </li>
          <li className="text-hls">• Major: General Engineering</li>
        </ul>
      </div>
    );
  }
}

export default Resume;
