"use client"

import { useState } from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import useSound from 'use-sound';

// import Bulb from '../components/bulb';
import Sculpture from '../components/sculpture';
import Skyline from '../components/skyline';

export default function Home() {
    const [hover, setHover] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    // let bulbList = []
    // for(let i=0;i<100;i++) {
    //     bulbList.push(<Bulb className={clsx(Math.random()>0.05 && !hover && "hidden")} hover={hover} />);
    // }

    // for(let i=0;i<5;i++) {
    //     bulbList.push(<Bulb />);
    // }

    return (
        <div className="flex justify-center items-center h-screen transition-all">
            <Head>
                <title>Ian Kim's Website</title>
            </Head>
            <div className='w-full h-full absolute top-0 xl:hidden'>
                <div className="w-full h-full absolute overflow-hidden left-0">
                    {/* {bulbList} */}
                    {/* <div style={{width: '100%', height: '100%', backdropFilter: 'blur(100px)', position: 'absolute'}} /> */}
                    <Sculpture hover={hover} />
                    <div className="absolute flex flex-col justify-center text-white left-1/2 top-2/5" style={{opacity: hover ? 1 : 0, transform: hover ? 'translate(-50%, -50%)' : 'translate(-60%, -50%)', transition: `all ${hover ? '0.5s' : '0.2s'} ease-in-out`}}>
                        <h1 className="text-xl md:text-3xl text-center font-medium mb-3">Welcome to my</h1>
                    </div>
                </div>
                <div className="absolute flex flex-col justify-center text-white left-1/2 top-1/2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{opacity: hover ? 0 : 1, transform: hover ? 'translate(-40%, -50%)' : 'translate(-50%, -50%)', transition: `all ${hover ? '0.2s' : '0.5s'} ease-in-out`}}>
                    <h1 className="text-base md:text-3xl text-center mb-3">Hello there, my name is</h1>
                    <h1 className="text-5xl md:text-6xl text-center font-bold bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Ian Kim</h1>
                </div>
            </div>
            <div className='w-full h-full absolute top-0 hidden xl:block'>
                <Skyline />
                <span
                    className="absolute flex flex-row left-4 bottom-2 gap-2 text-sm font-light text-white/50 opacity-40 hover:opacity-100 transition-all duration-[0.2s] ease-in-out"
                >
                    <span
                        className='flex flex-row gap-1'
                    >
                        <img src="/icons/cc.svg" />
                        <img src="/icons/by.svg" />
                        <img src="/icons/nc.svg" />
                    </span>
                    <span>
                        <a href='https://www.thingiverse.com/thing:2801164' className='underline hover:text-white'>Downtown Houston Skyline</a> by <a href='https://www.thingiverse.com/brandonw/designs' className='underline hover:text-white'>brandonw</a> is licensed under <a href='https://creativecommons.org/licenses/by-nc/4.0/' className='underline hover:text-white'>CC BY-NC 4.0</a>.
                    </span>
                </span>
            </div>
        </div>
    )
}