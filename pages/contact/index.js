"use client";

import Head from 'next/head';

import Signature from "../../components/signature";

var email_img = "/contact/email.png";
var linkedin_img = "/contact/linkedin.png";
var github_img = "/contact/github.png";
var devpost_img = "/contact/devpost.png";

export default function Contact() {
    return(
        <div className="xl:flex flex-row justify-center items-center xl:w-screen h-screen pt-28 xl:pt-0 px-8 xl:pr-10 overflow-y-scroll text-white">
            <Head>
                <title>Ian Kim | Contact</title>
            </Head>
            <div className="flex flex-col xl:items-center xl:px-24 w-full xl:w-5/12">
                <div className="text-4xl font-light text-white/80">
                    <div className="flex flex-row keyframe-slide-from-bottom">Feel free to</div>
                    <div className="flex flex-row"><span className="font-medium text-white keyframe-increase-opacity">contact</span><div className="keyframe-slide-from-left ml-2"> me!</div></div>
                </div>
            </div>
            <div className="xl:w-[52vw] flex flex-col xl:items-center keyframe-text-entry mt-8">
                <div className="flex flex-col gap-3 xl:w-[30vw]">
                    <div className="flex flex-row items-start w-full p-4 gap-2 rounded-md border-2 border-white/30 text-white/80">
                        <img src="/icons/info.svg" />
                        <span className="text-sm">
                            If you want my Instagram for some reason, you can find it <a className="underline" href="https://www.instagram.com/supersuriken/">here</a>.
                            It's pretty much like finding a dusty, empty album in the attic since I never really used social media except LinkedIn and YouTube.
                            Who knows? I might start using it as a non-corporate/non-academic messaging medium.
                        </span>
                    </div>
                    <a className="flex flex-row items-center keyframe-text-entry" href="mailto:id.kim.dev@proton.me">
                        <img src={email_img} alt="Email" className="h-8 pr-2" />
                        <h1 className="text-lg font-semibold">Email: id.kim.dev@proton.me</h1>
                    </a>
                    <a className="flex flex-row items-center keyframe-text-entry" href="https://www.linkedin.com/in/ian-kim-4130501a5/">
                        <img src={linkedin_img} alt="Linkedin" className="h-8 pr-2" />
                        <h1 className="text-lg font-semibold">LinkedIn</h1>
                    </a>
                    <a className="flex flex-row items-center keyframe-text-entry" href="https://github.com/330i">
                        <img src={github_img} alt="Github" className="h-8 pr-2" />
                        <h1 className="text-lg font-semibold">Github</h1>
                    </a>
                    <a className="flex flex-row items-center keyframe-text-entry" href="https://devpost.com/330i">
                        <img src={devpost_img} alt="Devpost" className="h-8 pr-2" />
                        <h1 className="text-lg font-semibold">Devpost</h1>
                    </a>
                </div>
            </div>
        </div>
    );
}