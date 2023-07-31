"use client"

import React from 'react'
import Bulb from '../components/bulb'
import homeStyles from '../styles/home.module.css'

export default function Home() {
    const [hover, setHover] = React.useState(false)

    return (
        <div className={homeStyles.homediv}>
            <div className={homeStyles.bulbdiv}>
                <Bulb hover={hover} />
                <Bulb hover={hover} />
                <Bulb hover={hover} />
                <Bulb hover={hover} />
                <Bulb hover={hover} />
                {hover ? 
                <div className={homeStyles.bulbdiv}>
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                    <Bulb hover={hover} />
                </div> : ''}
                <div style={{width: '100%', height: '100%', backdropFilter: 'blur(100px)', position: 'absolute'}} />
            <div className={homeStyles.welcomediv} style={{opacity: hover ? 1 : 0, transform: hover ? 'translate(-50%, -50%)' : 'translate(-60%, -50%)', transition: `all ${hover ? '0.5s' : '0.2s'} ease-in-out`}}>
                <h1 className={homeStyles.hellotext}>Welcome to my</h1>
                <h1 className={homeStyles.iantext}>Test Site</h1>
            </div>
            </div>
            <div className={homeStyles.welcomediv} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{opacity: hover ? 0 : 1, transform: hover ? 'translate(-40%, -50%)' : 'translate(-50%, -50%)', transition: `all ${hover ? '0.2s' : '0.5s'} ease-in-out`}}>
                <h1 className={homeStyles.hellotext}>Hello there, my name is</h1>
                <h1 className={homeStyles.iantext}>Ian Kim</h1>
            </div>
        </div>
    )
}