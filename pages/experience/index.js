"use client";

import { useState } from "react";
import clsx from "clsx";
import Head from 'next/head';

import Accordion from "../../components/accordion";
import Signature from "../../components/signature";

export default function Experience() {
    const [accordionOpened, setAccordionOpened] = useState([false, false, false]);
    console.log(accordionOpened)

    return(
        <div className={clsx(accordionOpened.some((e) => e) ? "justify-start items-start" : "justify-center items-center", "xl:flex flex-row w-screen h-screen pt-28 pb-16 overflow-y-scroll text-white transition-all")}>
            <Head>
                <title>Ian Kim | Dev Experience</title>
            </Head>
            <Signature className={clsx(accordionOpened.some((e) => e) && "opacity-0 !w-0 !px-0", "hidden xl:flex transition-all duration-500")}>Developer<br />Experience</Signature>
            <div className={clsx(accordionOpened.some((e) => e) ? "xl:!px-24" : "xl:px-0 xl:w-[52vw]", "flex flex-col divide-y-2 divide-white/50 justify-center items-center w-full px-8 xl:pr-10 keyframe-text-entry transition-all duration-500")}>
                <Accordion title="Work Experience" openGetter={accordionOpened} openSetter={setAccordionOpened} index={0} note={"Of course, this won't include all projects; just publicly mentioned ones. The screenshots are not part of the app. (Although adding mixed reality to Hines' platforms does sound interesting 🤔) However, it is somewhat related to things I've built."} />
                <Accordion title="Project Experience" openGetter={accordionOpened} openSetter={setAccordionOpened} index={1} />
                <Accordion title="Hackathon Experience" openGetter={accordionOpened} openSetter={setAccordionOpened} index={2} note={"I will say that I'm not too proud of my hackathon projects. While attending more than a dozen hackathons is an interesting feat, it produced a lot of quantity over quality projects. Also, in many of these hackathons, I didn't have time to learn every part of the tech stack other team members used in these hackathons. So \"Technology Used\" won't mean I've worked with all of them."} />
            </div>
        </div>
    );
}