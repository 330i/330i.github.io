"use client"

import React, { useRef, Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Sky, Cloud, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { EntryText, GlassCity } from './threeobj';
import { mx_bilerp_0 } from 'three/src/nodes/materialx/lib/mx_noise.js';

function CameraMover() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    camera.position.y = 10
    return useFrame((state, delta) => {
        camera.position.x = THREE.MathUtils.damp(camera.position.x, mouse.x * 5, 2, delta)
        camera.position.y = THREE.MathUtils.damp(camera.position.y, mouse.y - 10, 2, delta)
    })
}

export default function Skyline() {
    const [cloudList, setCloudList] = useState([]);

    useEffect(() => {
        let clouds = []
        for(let i=0;i<10;i++) {
            clouds.push(
                <Cloud
                    position={[Math.round(Math.random()*80)+20, Math.round(Math.random()*20)-5, Math.round(Math.random()*40)-20]}
                    speed={0.5}
                    opacity={Math.random()/8}
                    fade={200}
                    growth={10}
                    volume={3}
                    color={"#ffcdcd"}
                />
            );
            clouds.push(
                <Cloud
                    position={[Math.round(Math.random()*80)-100, Math.round(Math.random()*20)-5, Math.round(Math.random()*80)-100]}
                    speed={0.2}
                    opacity={Math.random()/8}
                    fade={200}
                    growth={10}
                    scale={2}
                    color={"#ffcdcd"}
                />
            );
        }
        setCloudList(clouds);
    }, []);

    return (
        <Canvas
            shadows
            camera={{ position: [0, -10, 150], fov: 25, zoom: 1.2 }}
        >
            {/* <OrbitControls minPolarAngle={0} maxPolarAngle={2*Math.PI} /> */}
            <CameraMover />
            <Sky distance={450000} turbidity={10} rayleigh={3} sunPosition={[1, 0, -Math.PI]} />
            <GlassCity />
            <ambientLight color="#ffffff" intensity={1.5} />
            <Environment preset="sunset" />
            <Suspense fallback={null}>
                {cloudList}
            </Suspense>
            <EntryText color="#ffffff" fontSize={1.7} position={[0, 1.2, 0]}>Hello there, my name is</EntryText>
            <EntryText color="#ffdbfc" fontSize={6} position={[0, -1.5, -15]}>Ian Kim</EntryText>

            {/* New navigation buttons */}
            <EntryText
                color="#ffffff"
                hoverColor="#c7a9af"
                fontSize={1}
                position={[-14.5, -1.5, 43]}
                buttonWidth={5.5}
                isClickable={true}
                href={'/resume'}
            >
                Resume
            </EntryText>
            <EntryText
                color="#ffffff"
                hoverColor="#f6dcc6"
                fontSize={1}
                position={[11, 9.5, -15]}
                buttonWidth={4.5}
                isClickable={true}
                href={'/about'}
            >
                About
            </EntryText>
            <EntryText
                color="#ffffff"
                hoverColor="#ffd8be"
                fontSize={1}
                position={[19, 0, 40]}
                buttonWidth={9}
                isClickable={true}
                href={'/experience'}
            >
                Dev Experience
            </EntryText>
            <EntryText
                color="#ffffff"
                hoverColor="#fff2e5"
                fontSize={1}
                position={[33.5, 9.3, 25]}
                buttonWidth={5.5}
                isClickable={true}
                href={'/contact'}
            >
                Contact
            </EntryText>
        </Canvas>
    );
}