"use client"

import Head from 'next/head';

import Signature from "/components/signature";
import { useState } from 'react';
import clsx from 'clsx';

function Career() {
    return(
        <div className="xl:flex flex-row justify-center items-center w-screen xl:h-screen mb-16 xl:mr-10 xl:mb-0">
            <ul className="w-full keyframe-text-entry mt-8 xl:mt-0">
                <li class="text-lg 2xl:text-xl font-semibold">Summer Intern - Application Development, Hines Interests LP | 2022 – 2024 (June – August)</li>
                <ul className="list-disc ml-8 max-w-4xl">
                    <li>
                        <h3 class="text-base 2xl:text-lg font-semibold">June 2022 - August 2022</h3>
                        <ul className="text-sm 2xl:text-base list-disc ml-8">
                            <li>Adapted to the development framework used by the Application Development Team.</li>
                            <li>Worked on development sprints for software assisting the investment pipeline of Hines.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="text-base 2xl:text-lg font-semibold">June 2023 - August 2023</h3>
                        <ul className="text-sm 2xl:text-base list-disc ml-8">
                            <li>Worked on development sprints for software assisting real estate and accounting interests of Hines.</li>
                            <li>Participated in the initial frontend transition from Jinja and jQuery to Next.js.</li>
                            <li>Participated in client meetings. Recognized and implemented provided requirements.</li>
                            <li>Understood the basics of commercial real estate through the first week training.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="text-base 2xl:text-lg font-semibold">June 2024 - August 2024</h3>
                        <ul className="text-sm 2xl:text-base list-disc ml-8">
                            <li>Worked on development sprints for software assisting real estate product lifecycle.</li>
                            <li>Helped monitor and respond to software usage issues in preparation of transitioning database and storage systems.</li>
                            <li>Worked on the initial implementation of a global property mapping feature.</li>
                            <li>Continued learning commercial real estate basics through the first week training and Eastdil Secured Virtual Real Estate Finance Training Program.</li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </div>
    );
}

function Education() {
    return (
        <div className="xl:flex flex-row justify-center items-center w-screen xl:h-screen my-16 xl:mr-10 xl:my-0">
            <ul className="w-full keyframe-text-entry mt-8 xl:mt-0">
                <li className="text-lg 2xl:text-xl font-semibold">
                    Cinco Ranch High School, Katy, TX | August 2018 - May 2022
                </li>
                <li>&nbsp;</li>
                <li className="text-lg 2xl:text-xl font-semibold">
                    Texas A&M University | August 2022 - 
                </li>
                <ul className="list-disc ml-8">
                    <li className="text-base 2xl:text-lg font-semibold">Computer Science - Bachelor of Science</li>
                    <li className="text-base 2xl:text-lg">Business - Minor</li>
                </ul>
            </ul>
        </div>
    );
}

function Awards() {
    return (
        <div className="xl:flex flex-row justify-center items-center w-screen xl:h-screen my-16 xl:mr-10 xl:my-0">
            <ul className="w-full keyframe-text-entry mt-8">
                <li className="text-lg 2xl:text-xl font-semibold">
                    The Square Small Business Hackathon | Jan 22, 2020 | Online / International
                </li>
                <ul className="list-disc ml-8">
                    <li className="text-sm 2xl:text-base font-semibold">First Place – Services & Other Use Cases</li>
                    <li className="text-sm 2xl:text-base"><a className="text-sm 2xl:text-base" href="https://devpost.com/software/profit-fw5oyn">https://devpost.com/software/profit-fw5oyn</a> (submitted with parent’s account due to age restriction)</li>
                    <li className="text-sm 2xl:text-base">ProFit: an online commerce app for fitness professionals.</li>
                    <li className="text-sm 2xl:text-base">Worked on user interface scheduling, tracking, and storage code.</li>
                    <li className="text-sm 2xl:text-base">Technology used: Flutter, Dart, Firebase, Agora.io, FFmpeg, Square API, TensorFlow Lite</li>
                </ul>
                <li>&nbsp;</li>
                <li className="text-lg 2xl:text-xl font-semibold">
                    Supersonic, Subatomic, Java Hackathon | June 22, 2020 | Online / International
                </li>
                <ul className="list-disc ml-8">
                    <li className="text-sm 2xl:text-base font-semibold">2nd Place Overall</li>
                    <li className="text-sm 2xl:text-base"><a className="text-sm 2xl:text-base" href="https://devpost.com/software/appname-ybfhks">https://devpost.com/software/appname-ybfhks</a> (submitted with parent’s account due to age restriction)</li>
                    <li className="text-sm 2xl:text-base">TidePool: a carpooling app mainly for children with extracurricular activities.</li>
                    <li className="text-sm 2xl:text-base">Worked on maps and database code.</li>
                    <li className="text-sm 2xl:text-base">Technology used: Flutter, Dart, Firebase, Google Maps API, PostgreSQL, Quarkus, Kubernetes, Java</li>
                </ul>
                <li>&nbsp;</li>
                <li className="text-lg 2xl:text-xl font-semibold">
                    Citrus Hack | April 11, 2021 | Online / International
                </li>
                <ul className="list-disc ml-8">
                    <li className="text-sm 2xl:text-base font-semibold">Best Health and Wellness Hack</li>
                    <li className="text-sm 2xl:text-base"><a className="text-sm 2xl:text-base" href="https://devpost.com/software/step-by-step-w6bmod">https://devpost.com/software/step-by-step-w6bmod</a></li>
                    <li className="text-sm 2xl:text-base">Step by Step: a virtual fitness tournament app.</li>
                    <li className="text-sm 2xl:text-base">Worked on competition logic and database code.</li>
                    <li className="text-sm 2xl:text-base">Technology used: Flutter, Dart, Firebase</li>
                </ul>
            </ul>
        </div>
    );
}

function HNA() {
    return (
        <div className="xl:flex flex-row justify-center items-center w-screen xl:h-screen my-16 xl:mr-10 xl:my-0">
            <ul className="w-full keyframe-text-entry mt-8">
                <li className="text-lg 2xl:text-xl font-semibold">
                    CRHS Innovation and Development Association | September 2019 – May 2022
                </li>
                <ul className="list-disc ml-8">
                    <li className="text-base 2xl:text-lg">High school club for computer science and attendance of hackathons</li>
                    <li className="text-base 2xl:text-lg">32 weeks/year, 2-30 hours/week</li>
                    <li>
                        <h3 className="text-base 2xl:text-lg font-semibold">VP of Education | April 2020 – May 2021</h3>
                        <ul className="text-sm 2xl:text-base list-disc ml-6">
                            <li>Organized educational meetings.</li>
                            <li>Created and edited educational documents.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 className="text-base 2xl:text-lg font-semibold">President | July 2021 – May 2022</h3>
                        <ul className="text-sm 2xl:text-base list-disc ml-6">
                            <li>Organized club meetings for hackathons and education.</li>
                            <li>Assisted teacher outreach with VP of Communications.</li>
                            <li>Oriented and organized officers’ tasks.</li>
                        </ul>
                    </li>
                    <li className="text-sm 2xl:text-base">
                        Volunteer Hours from the HACK Initiative: 87 hours
                    </li>
                    <ul className="list-disc ml-6">
                        <li className="text-sm 2xl:text-base">
                            Taught and helped junior high students.
                        </li>
                        <li className="text-sm 2xl:text-base">
                            Taught p5.js, Java, and Flutter.
                        </li>
                    </ul>
                </ul>
                <li>&nbsp;</li>
                <li className="text-lg 2xl:text-xl font-semibold">
                    CRyptonite Robotics | September 2018 – May 2019
                </li>
                <ul className="list-disc ml-8">
                    <li className="text-base 2xl:text-lg">30 weeks / year, 1-4 hours / week</li>
                    <ul className="list-disc ml-6">
                        <li className="text-sm 2xl:text-base">Computer-aided design</li>
                        <li className="text-sm 2xl:text-base">Learned and used SolidWorks</li>
                    </ul>
                    <li className="text-base 2xl:text-lg">Volunteer Hours from Neighborhood Kidz Club: 12 hours</li>
                    <ul className="list-disc ml-6">
                        <li className="text-sm 2xl:text-base">Helped children with various activities including science experiments</li>
                        <li className="text-sm 2xl:text-base">Helped clean up after activities</li>
                    </ul>
                </ul>
                <li>&nbsp;</li>
                <li className="text-lg 2xl:text-xl font-semibold">
                    Mu Alpha Theta | September 2019 - May 2022
                </li>
                <ul className="list-disc ml-8">
                    <li className="text-base 2xl:text-lg">Volunteer Hours: 5.5</li>
                </ul>
            </ul>
        </div>
    );
}


export default function Resume() {
    const titleList = [<span>Career</span>, <span>Education</span>, <span>Awards</span>, <span>Honors and<br />Activities</span>];
    const pageNameList = ["Career", "Education", "Awards", "Honors and Activities"];
    const [isEntry, setIsEntry] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    return(
        <div className="flex flex-row justify-center items-center w-full h-screen overflow-x-hidden text-white">
            <Head>
                <title>Ian Kim | Resume</title>
            </Head>
            <div className="hidden xl:block w-5/12">
                {titleList.map((e, i) => <Signature
                                            className={clsx(Math.floor(scrollProgress)==i ? "opacity-100" : "opacity-0", "transition-opacity duration-300 absolute left-0 top-0")}
                                            pageName={pageNameList[i]}
                                            isEntry={isEntry}
                                            scale={1-scrollProgress+i}
                                        >{e}</Signature>)}
            </div>
            <div
                className="flex-1 h-full m-0 px-8 pt-28 xl:px-0 xl:pt-0 max-xl:divide-y-2 divide-white/50 xl:snap-mandatory snap-y overflow-y-scroll overflow-x-hidden text-white"
                onScroll={(e) => {
                    setScrollProgress(e.target.scrollTop/window.innerHeight);
                    setIsEntry(false);
                }}
            >
                <section className="flex items-center relative xl:snap-start">
                    <Career />
                </section>
                <section className="flex items-center relative xl:snap-start">
                    <Education />
                </section>
                <section className="flex items-center relative xl:snap-start">
                    <Awards />
                </section>
                <section className="flex items-center relative xl:snap-start">
                    <HNA />
                </section>
            </div>
        </div>
    );
}