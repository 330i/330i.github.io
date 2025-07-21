"use client"

import React, { useRef, Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial, Environment, Sky, Cloud, OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { randInt } from 'three/src/math/MathUtils.js';

function GlassTower({ hover }) {
    const ref = useRef();
    const { nodes } = useGLTF('/home/tower.glb');

    useFrame((state, delta) => {
        ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, hover ? 9*Math.PI/16 : Math.PI/4, 8, delta);
    });

    return (
        <mesh ref={ref} {...nodes.sculpture} scale={0.3} position={[-1.5, -15, 0]}>
            <MeshTransmissionMaterial
                thickness={0.5}
                roughness={0.5}
                transmission={1}
                ior={1.7}
                chromaticAberration={0.02}
                backside={true}
                backsideThickness={0.1}
                distortion={0.5}
                distortionScale={1}
                color="#c5cae6"
            />
        </mesh>
    );
}

function GlassTorus({ hover, p, q }) {
    const ref = useRef();
    const [radius, setRadius] = useState(1)

    useFrame((state, delta) => {
        setRadius(THREE.MathUtils.damp(radius, hover ? 1 : 12, 8, delta));
        ref.current.rotation.x += 0.001
        ref.current.rotation.y += 0.001
        ref.current.rotation.z += 0.01
    });

    return (
        <mesh
            scale={1}
            ref={ref}
            position={[0, 0, 0]}
        >
            <torusKnotGeometry args={[radius, 10 / radius, 256, 16, hover ? 1 : p, hover ? 1 : q]} />
            <MeshTransmissionMaterial
                thickness={0.5}
                roughness={0.2}
                transmission={1}
                ior={1.7}
                chromaticAberration={0.02}
                distortion={0.5}
                distortionScale={1}
                color="#dad1ff"
            />
        </mesh>
    );
}

function IntroText({ hover, position, children }) {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.fillOpacity = THREE.MathUtils.damp(ref.current.fillOpacity, hover ? 1 : 0, 48, delta);
        ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, hover ? position[1] : -5, 8, delta);
        ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, hover ? position[2] : -50, 8, delta);
    });

    return (
        <Text ref={ref} position={position} font="/inter_bold.ttf" fontSize={2.5} color="a7aeff" fillOpacity={0.5}>{children}</Text>
    );
}

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
            <IntroText hover={hover} position={[0, 2.3, -15]}>My Bubble</IntroText>
            <IntroText hover={hover} position={[0, 0, -15]}>of the</IntroText>
            <IntroText hover={hover} position={[0, -2.3, -15]}>Internet</IntroText>
        </Canvas>
    );
}