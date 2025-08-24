"use client";

import { useState } from "react";
import clsx from "clsx";
import Head from 'next/head';

export default function About() {
    const [selectedImage, setSelectedImage] = useState("");

    const locationDesc = {
        'tamu.jpg': {
            title: 'Texas A&M University Engineering Quad',
            location: 'College Station, Texas, USA'
        },
        'tamuhack.jpg': {
            title: 'Texas A&M University Memorial Student Center (TAMUHack)',
            location: 'College Station, Texas, USA'
        },
        'office.jpg': {
            title: 'Texas Tower',
            location: 'Houston, Texas, USA'
        },
        'towerview.jpg': {
            title: 'JPMorgan Chase Tower',
            location: 'Houston, Texas, USA'
        },
        'hiking.jpg': {
            title: 'Blue Lakes Trail',
            location: 'Telluride, Colorado, USA'
        },
        'austin.jpg': {
            title: 'The Sailboat Building',
            location: 'Austin, Texas, USA'
        },
        'molecules.jpg': {
            title: 'Perot Museum of Nature and Science',
            location: 'Dallas, Texas, USA'
        },
        'shark.jpg': {
            title: 'Houston Museum of Natural Science',
            location: 'Houston, Texas, USA'
        }
    }
    const imgList = Object.keys(locationDesc).map((e) => <img src={`/about/${e}`} className={clsx("absolute left-0 top-0 w-screen h-screen -z-10 object-cover blur-md brightness-50 transition-all", selectedImage===e ? "opacity-100" : "opacity-0")} />);

    return (
        <div className="xl:flex flex-row justify-center items-center xl:w-screen h-screen pt-28 xl:pt-0 px-8 xl:pr-10 overflow-y-scroll text-white">
            <Head>
                <title>Ian Kim | About</title>
            </Head>
            <div className="flex flex-col xl:items-center xl:px-24 w-full xl:w-5/12">
                <div className="text-4xl font-light text-white/80">
                <div className="flex flex-row keyframe-increase-opacity">Hi!</div>
                    <div className="flex flex-row"><div className="keyframe-slide-from-right mr-2">I'm</div><div className="keyframe-increase-opacity"><span className="font-medium text-white">Ian</span>.</div></div>
                    <div className="flex flex-row keyframe-slide-from-top">Nice to meet you.</div>
                </div>
            </div>
            {imgList}
            <ul className="w-full xl:w-1/2 xl:pr-20 keyframe-text-entry mt-8 mb-4 sm:mb-16 xl:mb-0">
                <li className="text-base md:text-base font-medium flex flex-col gap-2">
                    <div>
                        Currently a Class of '26 Computer Science student at Texas A&M University.
                        My main area of interest is software engineering (mainly full stack with some form of React frontend and Python backend) as well as some computer science areas like machine learning, networking, and computation processes.
                    </div>
                    <div>
                        Outside of computer science, I've been somewhat interested in learning automotive engineering and commercial real estate (in relation to a previous internship).
                    </div>
                </li>
                <li className="text-base font-semibold">&nbsp;</li>
                <li className="text-base font-semibold">Ian is a...</li>
                <li className="flex flex-col gap-2">
                    <div>
                        <div
                            className="inline-block rounded-md px-2 py-1 bg-white text-black text-sm font-semibold hover:bg-transparent hover:text-white transition-all"
                            onMouseEnter={() => setSelectedImage("tamu.jpg")}
                            onMouseLeave={() => setSelectedImage("")}
                        >
                            student at Texas A&M University</div>
                    </div>
                    <div>
                        <div
                            className="inline-block rounded-md px-2 py-1 bg-white text-black text-sm font-semibold hover:bg-transparent hover:text-white transition-all"
                            onMouseEnter={() => setSelectedImage("office.jpg")}
                            onMouseLeave={() => setSelectedImage("")}
                        >
                            full stack developer</div>
                    </div>
                </li>
                <li className="text-base font-semibold">&nbsp;</li>
                <li className="text-base font-semibold">Ian has completed...</li>
                <li className="flex flex-col gap-2">
                    <div>
                        <div
                            className="inline-block rounded-md px-2 py-1 bg-white text-black text-sm font-semibold hover:bg-transparent hover:text-white transition-all"
                            onMouseEnter={() => setSelectedImage("austin.jpg")}
                            onMouseLeave={() => setSelectedImage("")}
                        >
                            CSCE 421 Machine Learning</div>
                    </div>
                    <div>
                        <div
                            className="inline-block rounded-md px-2 py-1 bg-white text-black text-sm font-semibold hover:bg-transparent hover:text-white transition-all"
                            onMouseEnter={() => setSelectedImage("molecules.jpg")}
                            onMouseLeave={() => setSelectedImage("")}
                        >
                            CSCE 449 Applied Cryptography</div>
                    </div>
                    <div>
                        <div
                            className="inline-block rounded-md px-2 py-1 bg-white text-black text-sm font-semibold hover:bg-transparent hover:text-white transition-all"
                            onMouseEnter={() => setSelectedImage("shark.jpg")}
                            onMouseLeave={() => setSelectedImage("")}
                        >
                            CSCE 331 Foundations of Software Engineering</div>
                    </div>
                    <div>
                        <div
                            className="inline-block rounded-md px-2 py-1 bg-white text-black text-sm font-semibold hover:bg-transparent hover:text-white transition-all"
                            onMouseEnter={() => setSelectedImage("towerview.jpg")}
                            onMouseLeave={() => setSelectedImage("")}
                        >
                            CSCE 411 Design and Analysis of Algorithms</div>
                    </div>
                </li>
                <li className="text-base font-semibold">&nbsp;</li>
                <li className="text-base font-semibold">Ian is currently working on...</li>
                <li className="flex flex-col gap-2">
                    <div>
                        <div
                            className="inline-block rounded-md px-2 py-1 bg-white text-black text-sm font-semibold hover:bg-transparent hover:text-white transition-all"
                            onMouseEnter={() => setSelectedImage("hiking.jpg")}
                            onMouseLeave={() => setSelectedImage("")}
                        >
                            something</div>
                    </div>
                </li>
            </ul>
            {
                selectedImage && 
                <div className="sm:absolute left-4 bottom-0 mb-8 sm:mb-2 flex flex-col text-sm font-light text-white/80">
                    <span>{locationDesc[selectedImage].title}</span>
                    <span className="flex flex-row gap-1"><img src="/icons/location.svg" className="h-5" /> {locationDesc[selectedImage].location}</span>
                </div>
            }
        </div>
    );
}
