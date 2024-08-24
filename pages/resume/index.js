"use client"

import { useState } from "react";

import Signature from "/components/signature"
import everythingStyle from "../../styles/everything.module.css"

function HNA() {
  return (
    <div className={everythingStyle.screencontainer}>
      <Signature>Honors and<br />Activities</Signature>
      <ul className={everythingStyle.textcontainerlong}>
        <li className={everythingStyle.texthll}>
          CRyptonite Robotics | September 2018 – May 2019
        </li>
        <li className={everythingStyle.textnhls}>• 30 weeks / year, 1-4 hours / week</li>
        <li className={everythingStyle.textnhls}>• Computer-aided design</li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Learned and used SolidWorks
        </li>
        <li className={everythingStyle.textnhls}>
          • Volunteer Hours from Neighborhood Kidz Club: 12 hours
        </li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Helped children with various activities
          including science experiments
        </li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Helped clean up after activities
        </li>
        <li>&nbsp;</li>
        <li className={everythingStyle.texthll}>
          CRHS Innovation and Development Association | September 2019 - May
          2022
        </li>
        <li className={everythingStyle.texthll}>• 32 weeks / year, 2-30 hours / week</li>
        <li className={everythingStyle.texthll}>• VP of Education, April 2020 - May 2021</li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Organized education meetings for the
          extracurricular club.
        </li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Created and edited education documents for
          the club.
        </li>
        <li className={everythingStyle.texthll}>• President, July 2021 - May 2022</li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Organized club meetings including
          hackathons and education.
        </li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Assisted teacher communication with VP of
          Communications.
        </li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Oriented other officers on tasks.
        </li>
        <li className={everythingStyle.textnhls}>
          • Volunteer Hours from the HACK Initiative: 87 hours
        </li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Taught and helped junior high students.
        </li>
        <li className={everythingStyle.textnhls}>
          &nbsp;&nbsp;&nbsp;&nbsp;• Taught p5.js, Java, and Flutter.
        </li>
        <li>&nbsp;</li>
        <li className={everythingStyle.texthll}>
          Mu Alpha Theta | September 2019 - May 2022
        </li>
        <li className={everythingStyle.textnhls}>• Volunteer Hours: 5.5</li>
      </ul>
    </div>
  );
}

function Awards() {
  return (
    <div className={everythingStyle.screencontainer}>
      <Signature>Awards</Signature>
      <ul className={everythingStyle.textcontainerlong}>
        <li className={everythingStyle.texthll}>
          The Square Small Business Hackathon | Jan 22, 2020 | Online / International
        </li>
        <li className={everythingStyle.texthls}>• First Place – Services & Other Use Cases</li>
        <span className={everythingStyle.textnhls}>• <a className={everythingStyle.textnhls} href="https://devpost.com/software/profit-fw5oyn">https://devpost.com/software/profit-fw5oyn</a> (submitted with parent’s account due to age restriction)</span>
        <li className={everythingStyle.textnhls}>• ProFit: an online commerce app for fitness professionals.</li>
        <li className={everythingStyle.textnhls}>• Worked on user interface scheduling, tracking, and storage code.</li>
        <li className={everythingStyle.textnhls}>• Technology used: Flutter, Dart, Firebase, Agora.io, FFmpeg, Square API, TensorFlow Lite</li>
        <li>&nbsp;</li>
        <li className={everythingStyle.texthll}>
          Supersonic, Subatomic, Java Hackathon | June 22, 2020 | Online / International
        </li>
        <li className={everythingStyle.texthls}>• 2nd Place Overall</li>
        <span className={everythingStyle.textnhls}>• <a className={everythingStyle.textnhls} href="https://devpost.com/software/appname-ybfhks">https://devpost.com/software/appname-ybfhks</a> (submitted with parent’s account due to age restriction)</span>
        <li className={everythingStyle.textnhls}>• TidePool: a carpooling app mainly for children with extracurricular activities.</li>
        <li className={everythingStyle.textnhls}>• Worked on maps and database code.</li>
        <li className={everythingStyle.textnhls}>• Technology used: Flutter, Dart, Firebase, Google Maps API, PostgreSQL, Quarkus, Kubernetes, Java</li>
        <li>&nbsp;</li>
        <li className={everythingStyle.texthll}>
          Citrus Hack | April 11, 2021 | Online / International
        </li>
        <li className={everythingStyle.texthls}>• Best Health and Wellness Hack</li>
        <span className={everythingStyle.textnhls}>• <a className={everythingStyle.textnhls} href="https://devpost.com/software/step-by-step-w6bmod">https://devpost.com/software/step-by-step-w6bmod</a></span>
        <li className={everythingStyle.textnhls}>• Step by Step: a virtual fitness tournament app.</li>
        <li className={everythingStyle.textnhls}>• Worked on competition logic and database code.</li>
        <li className={everythingStyle.textnhls}>• Technology used: Flutter, Dart, Firebase</li>
      </ul>
    </div>
  );
}

function Education() {
  return (
    <div className={everythingStyle.screencontainer}>
      <Signature>Education</Signature>
      <ul className={everythingStyle.textcontainer}>
        <li className={everythingStyle.texthll}>
          Cinco Ranch High School, Katy, TX | August 2018 - May 2022
        </li>
        <li>&nbsp;</li>
        <li className={everythingStyle.texthll}>
          Texas A&M University | August 2022 - 
        </li>
        <li className={everythingStyle.texthls}>• Major: Computer Science</li>
      </ul>
    </div>
  );
}



export default function Resume() {
  return(
    <div className="flex flex-row justify-center items-center w-full h-screen overflow-x-hidden">
      <div className="flex-1 h-full m-0 snap-mandatory snap-y overflow-y-scroll overflow-x-hidden">
        <section className="flex items-center h-full relative snap-start">
          <Education />
        </section>
        <section className="flex items-center h-full relative snap-start">
          <Awards />
        </section>
        <section className="flex items-center h-full relative snap-start">
          <HNA />
        </section>
      </div>
    </div>
  );
}