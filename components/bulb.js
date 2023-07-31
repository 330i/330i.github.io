"use client"

import React, { useEffect } from 'react';

export default function Bulb({hover}) {
    const [style, setStyle] = React.useState('');
    const [size, setSize] = React.useState(0);
    const [pos, setPos] = React.useState([0, 0]);
    const [show, setShow] = React.useState(false)
    
    useEffect(() => {
        const bulb = setInterval(() => {
            const c = [
                [255, 105, 97],
                [255, 179, 64],
                [255, 212, 38],
                [49, 222, 75],
                [102, 212, 207],
                [93, 230, 255],
                [112, 215, 255],
                [64, 156, 255],
                [125, 122, 255],
                [218, 143, 255],
                [255, 100, 130],
            ];
            const ci = Math.floor(Math.random() * c.length);
            setStyle(`radial-gradient(rgba(${c[ci][0]}, ${c[ci][1]}, ${c[ci][2]}, 1) 0%, rgba(${c[ci][0]}, ${c[ci][1]}, ${c[ci][2]}, 0) 40%, rgba(${c[ci][0]}, ${c[ci][1]}, ${c[ci][2]}, 0) 100%)`);
            setSize(30+Math.random()*70);
            setPos([Math.random()*100, Math.random()*100]);
            setShow(true)
        }, 3000+Math.random()*3000);
        return () => clearInterval(bulb);
    }, []);

    return (
        <div style={{position: 'absolute', left: (pos[0]-size/2)+'%', top: (pos[1]-size/2)+'%', width: '100%', height: '100%', maxWidth: size+'vw', maxHeight: size+'vw', background: style, opacity: show ? 1 : 0, transition: `${hover ? 'all 1s' : 'opacity 1s'} ${show ? 'ease-in' : 'ease-out'} ${hover ? '' : '1s'}`}} onTransitionEnd={() => setShow(false)}></div>
    )
}