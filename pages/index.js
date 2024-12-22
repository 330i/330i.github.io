"use client"

import React from 'react';
import clsx from 'clsx';

import Bulb from '../components/bulb';
import Sculpture from '../components/sculpture';

export default function Home() {
    const [hover, setHover] = React.useState(false)

    let bulbList = []
    // for(let i=0;i<100;i++) {
    //     bulbList.push(<Bulb className={clsx(Math.random()>0.05 && !hover && "hidden")} hover={hover} />);
    // }

    for(let i=0;i<5;i++) {
        bulbList.push(<Bulb />);
    }

    return (
        <div className={clsx("flex justify-center items-center h-screen transition-all", hover && "bg-fuchsia-300")}>
            <div className="w-full h-full absolute overflow-hidden left-0">
                {bulbList}
                <div style={{width: '100%', height: '100%', backdropFilter: 'blur(100px)', position: 'absolute'}} />
                <Sculpture hover={hover} />
                <div className="absolute flex flex-col justify-center text-white left-1/2 top-1/2" style={{opacity: hover ? 1 : 0, transform: hover ? 'translate(-50%, -50%)' : 'translate(-60%, -50%)', transition: `all ${hover ? '0.5s' : '0.2s'} ease-in-out`}}>
                    <h1 className="text-xl md:text-3xl text-center font-medium mb-3">Welcome to my</h1>
                </div>
            </div>
            <div className="absolute flex flex-col justify-center text-white left-1/2 top-1/2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{opacity: hover ? 0 : 1, transform: hover ? 'translate(-40%, -50%)' : 'translate(-50%, -50%)', transition: `all ${hover ? '0.2s' : '0.5s'} ease-in-out`}}>
                <h1 className="text-base md:text-3xl text-center mb-3">Hello there, my name is</h1>
                <h1 className="text-5xl md:text-6xl text-center font-bold bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Ian Kim</h1>
            </div>
        </div>
    )
}