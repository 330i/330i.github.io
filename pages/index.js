"use client"

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Head from 'next/head';

import { BlogLink } from '../components/journal';
import { getRawData } from '../utilities/retriever';

var portrait_doodle = '/home/portrait_doodle.apng'
var portrait = '/home/portrait.png'

export default function Page() {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        getRawData("blog.json").then((response) => {
            if (response) {
                response.json().then((json) => {
                    setBlogData(json);
                });
            }
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen transition-all">
            <Head>
                <title>Ian Kim's Website</title>
            </Head>
            <div className='w-full h-full flex flex-col overflow-y-scroll items-center'>
                <div className='w-full min-h-[calc(3.75rem+18rem)] hidden xl:flex flex-col items-center overflow-hidden'>
                    <div className='flex flex-col-reverse w-full h-full pt-24 relative items-end self-start justify-center group'>
                        <div className='opacity-0 group-hover:opacity-100 w-full h-[calc(3.75rem+18rem)] absolute top-0 bg-gradient-to-b from-zinc-500 via-white to-zinc-300 pointer-events-none transition-all'></div>
                        <div className='opacity-100 group-hover:opacity-0 w-full h-[calc(3.75rem+18rem)] absolute top-0 bg-zinc-900 pointer-events-none transition-all'></div>
                        <div className='flex flex-col-reverse w-full max-w-[1366px] h-full top-0 absolute items-end self-center justify-center'>
                            <div className="flex flex-col xl:items-center w-8/12 pt-24 relative">
                                <div className="text-white/80 group-hover:text-black/80 handwritten text-4xl font-light -mt-2 transition-all duration-500">
                                    <hr className='opacity-0 translate-36 rotate-12 group-hover:opacity-100 group-hover:translate-0 group-hover:rotate-0 w-[200vw] absolute -left-[100vw] border-cyan-600 transition-all duration-200 delay-150'></hr>
                                    <div className="flex flex-row keyframe-increase-opacity">Hi!</div>
                                    <hr className='opacity-0 translate-36 rotate-12 group-hover:opacity-100 group-hover:translate-0 group-hover:rotate-0 w-[200vw] absolute -left-[100vw] border-cyan-500 transition-all duration-200 delay-[225ms]'></hr>
                                    <div className="flex flex-row"><div className="keyframe-slide-from-right mr-2">I'm</div><div className="keyframe-increase-opacity"><span className="text-white group-hover:text-black font-medium transition-all duration-500">Ian</span>.</div></div>
                                    <hr className='opacity-0 translate-36 rotate-12 group-hover:opacity-100 group-hover:translate-0 group-hover:rotate-0 w-[200vw] absolute -left-[100vw] border-cyan-500 transition-all duration-200 delay-300'></hr>
                                    <div className="flex flex-row keyframe-slide-from-top">Welcome to my corner</div>
                                    <hr className='opacity-0 translate-36 rotate-12 group-hover:opacity-100 group-hover:translate-0 group-hover:rotate-0 w-[200vw] absolute -left-[100vw] border-cyan-500 transition-all duration-200 delay-[375ms]'></hr>
                                    <div className="flex flex-row keyframe-slide-from-top">of the internet.</div>
                                    <hr className='opacity-0 translate-36 rotate-12 group-hover:opacity-100 group-hover:translate-0 group-hover:rotate-0 w-[200vw] absolute -left-[100vw] border-cyan-600 transition-all duration-200 delay-[450ms]'></hr>
                                    <hr className='opacity-0 translate-36 rotate-[102deg] group-hover:opacity-100 group-hover:translate-0 group-hover:rotate-90 w-[100vw] absolute -left-[70vw] border-red-700 transition-all duration-200'></hr>
                                </div>
                            </div>
                            <div
                                className='group-hover:translate-y-full w-7/12 h-[18rem] absolute top-15 left-0 flex justify-center transition-all duration-500 invert'
                            >
                                <img
                                    src={portrait_doodle}
                                />
                            </div>
                            <div
                                className='opacity-0 translate-36 rotate-12 scale-125 group-hover:opacity-100 group-hover:translate-0 group-hover:rotate-0 group-hover:scale-100 w-7/12 h-[18rem] absolute top-15 left-0 flex justify-center transition-all duration-500'
                            >
                                <img
                                    className='drop-shadow-[5px_-5px_0_white,-5px_-5px_0_white,5px_5px_0_white,-5px_5px_0_white,-5px_5px_20px_black]'
                                    src={portrait}
                                />
                            </div>
                        </div>
                        <div className='w-full h-[5vh] bg-gradient-to-b from-transparent to-[#09090b] absolute top-[calc(3.75rem+18rem-5vh)] pointer-events-none'></div>
                    </div>
                </div>
                <div className='w-full h-screen xl:z-10 pt-20 xl:pt-0 mb-8 text-white flex flex-col items-center bg-[#09090b]'>
                    <div className='w-full max-w-[1080px] px-8 md:px-16 py-8 flex flex-col gap-8'>
                        <div className='handwritten text-4xl text-fuchsia-200 flex flex-row gap-4'><div>WHAT RANDOMLY POPPED UP IN MY BRAIN</div><div className='rotate-45 max-sm:hidden'>-&gt;</div></div>
                            <div className='flex flex-col gap-8'>
                            {
                                blogData &&
                                Object.entries(blogData).filter(([_, v]) => v.type == 'blog').map(([k, v]) => 
                                    <BlogLink blogKey={k} entry={v} key={`blog-${k}`} />
                                ).reverse()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}