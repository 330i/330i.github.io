"use client"

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Head from 'next/head';

import { BlogLink } from '../../components/journal';
import { getRawData } from '../../utilities/retriever';

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
                <title>Ian Kim | Ideation Station</title>
            </Head>
            <div className='w-full h-full flex flex-col overflow-y-scroll items-center'>
                <div className='w-full min-h-[calc(3.75rem+18rem)] hidden xl:flex flex-col items-center overflow-hidden'>
                    <div className='flex flex-col-reverse w-full h-full pt-24 relative items-end self-start justify-center'>
                        <div className='w-full h-[calc(3.75rem+18rem)] absolute top-0 bg-gradient-to-b from-zinc-500 via-white to-zinc-300 pointer-events-none transition-all'></div>
                        <div className='flex flex-col-reverse w-full max-w-[1080px] h-full pt-24 top-0 absolute self-center justify-center'>
                            <div className="text-black/80 text-4xl font-light -mt-2 px-8 md:px-16 transition-all duration-500">
                                <hr className='w-[200vw] absolute -left-[100vw] border-cyan-600'></hr>
                                <div className="handwritten flex flex-row keyframe-increase-opacity">This is pretty much my dumping ground for notes and ideas.</div>
                                <hr className='w-[200vw] absolute -left-[100vw] border-cyan-500'></hr>
                                <div className="handwritten flex flex-row keyframe-increase-opacity text-black font-medium">It will likely involve ideas not in my area of expertise.</div>
                                <hr className='w-[200vw] absolute -left-[100vw] border-cyan-500'></hr>
                                <div className="flex flex-row keyframe-slide-from-top text-black font-medium text-xl/10">If any of my stuff on here ends up on someone's search result, I am very sorry.</div>
                                <hr className='w-[200vw] absolute -left-[100vw] border-cyan-500'></hr>
                                <hr className='rotate-90 w-[100vw] absolute -left-[50vw] border-red-700'></hr>
                            </div>
                        </div>
                        <div className='w-full h-[5vh] bg-gradient-to-b from-transparent to-[#09090b] absolute top-[calc(3.75rem+18rem-5vh)] pointer-events-none'></div>
                    </div>
                </div>
                <div className='w-full h-screen xl:z-10 pt-20 xl:pt-0 mb-8 text-white flex flex-col items-center bg-[#09090b]'>
                    <div className='w-full max-w-[1080px] px-8 md:px-16 py-8 flex flex-col gap-8'>
                        <div className='handwritten text-4xl text-fuchsia-200 flex flex-row gap-4'><div>MY NOTES</div><div className='rotate-45 max-sm:hidden'>-&gt;</div></div>
                        {
                            blogData &&
                            Object.entries(blogData).filter(([_, v]) => v.type == 'ideation').map(([k, v]) => 
                                <BlogLink timestamp={k} entry={v} />
                            ).reverse()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}