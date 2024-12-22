"use client"

import React, { useRef, Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial, Environment, Sky, Cloud, OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

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
        <Canvas shadows camera={{ position: [0, -10, 100], fov: 25, zoom: 2 }} className={clsx("transition-all duration-500", hover ? "opacity-100" : "opacity-[1%]")}>
            {/* <OrbitControls minPolarAngle={Math.PI/2} maxPolarAngle={5*Math.PI/8} /> */}
            <Text position={[0, -0.5, -15]} font="/inter_bold.ttf" fontSize={3} color="#ffdbfc">Website</Text>
            <Sky distance={450000} turbidity={10} rayleigh={3} sunPosition={[1, 0, -Math.PI]} />
            <GlassTower hover={hover} />
            <ambientLight color="#ffffff" intensity={1.5} />
            <Environment preset="sunset" />
            <Suspense fallback={null}>
                {cloudList}
            </Suspense>
        </Canvas>
    );
}