"use client"

import Head from 'next/head';

import Signature from "../../components/signature";
import { getResourceLink } from '../../utilities/retriever';


export default function Page() {
    return(
        <div className="flex flex-row justify-center items-center w-full h-screen overflow-x-hidden text-white">
            <Head>
                <title>Ian Kim | Resume</title>
            </Head>
            <div className="hidden xl:block w-5/12">
                <Signature
                    className="transition-opacity duration-300 absolute left-0 top-0"
                    pageName="Resume"
                >Resume</Signature>
            </div>
            <div
                className="flex-1 h-full m-0 px-4 pt-28 xl:pt-20 pb-8 divide-white/50 overflow-y-scroll overflow-x-hidden text-white"
            >
                <iframe src="/resume/Ian Kim Resume.pdf" width="100%" height="100%"></iframe>
            </div>
        </div>
    );
}