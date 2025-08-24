"use client"

import React, { useRef, Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Environment, Sky, Cloud, OrbitControls } from '@react-three/drei';
import { randInt } from 'three/src/math/MathUtils.js';
import { GlassTower, GlassTorus, HoverText } from './threeobj';

export default function Sculpture({ hover }) {
    const [cloudList, setCloudList] = useState([]);

    useEffect(() => {
        let clouds = []
        for(let i=0;i<10;i++) {
            clouds.push(
                <Cloud
                    position={[Math.round(Math.random()*20)+10, Math.round(Math.random()*20)-5, Math.round(Math.random()*40)+10]}
                    speed={0.2}
                    opacity={Math.random()/4}
                    fade={200}
                    growth={10}
                    color={"#ffcdcd"}
                />
            );
            clouds.push(
                <Cloud
                    position={[Math.round(Math.random()*20)-30, Math.round(Math.random()*20)-5, Math.round(Math.random()*40)-50]}
                    speed={0.2}
                    opacity={Math.random()/4}
                    fade={200}
                    growth={10}
                    color={"#ffcdcd"}
                />
            );
        }
        setCloudList(clouds);
    }, []);

    return (
        <Canvas
            shadows
            camera={{ position: [0, -10, 100], fov: 25, zoom: 2 }}
            // className={clsx("transition-all duration-500", hover ? "opacity-100" : "opacity-[1%]")}
        >
            {/* <OrbitControls minPolarAngle={Math.PI/2} maxPolarAngle={5*Math.PI/8} /> */}
            <Sky distance={450000} turbidity={10} rayleigh={3} sunPosition={[1, 0, -Math.PI]} />
            <GlassTorus hover={hover} p={randInt(1, 8)} q={randInt(1, 8)} />
            <ambientLight color="#ffffff" intensity={1.5} />
            <Environment preset="sunset" />
            <Suspense fallback={null}>
                {cloudList}
            </Suspense>
            <HoverText hover={hover} color="#a7aeff" fontSize={2.3} position={[0, 2.1, -15]}>My Bubble</HoverText>
            <HoverText hover={hover} color="#a7aeff" fontSize={2.3} position={[0, 0, -15]}>of the</HoverText>
            <HoverText hover={hover} color="#a7aeff" fontSize={2.3} position={[0, -2.1, -15]}>Internet</HoverText>
        </Canvas>
    );
}