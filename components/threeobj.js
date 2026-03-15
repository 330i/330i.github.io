"use client"

import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { extend, useFrame } from "@react-three/fiber";
import { useGLTF, MeshTransmissionMaterial, MeshDistortMaterial, Edges, Environment, Text, RoundedBox, Box } from '@react-three/drei';
import * as THREE from 'three';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { useRouter } from 'next/router';
import useSound from 'use-sound';

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Mac({ camera, scene }) {
    const ref = useRef();
    const { nodes } = useGLTF("/icons/mac.glb");

    const intersectionPoint = new THREE.Vector3();
    const planeNormal = new THREE.Vector3();
    const plane = new THREE.Plane();
    const mousePosition = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    
    useEffect(() => {
        window.addEventListener('mousemove', function (e) {
            mousePosition.x = (e.clientX / window.innerWidth) * 2 - 0.5;
            mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
            planeNormal.copy(camera.position).normalize();
            plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
            raycaster.setFromCamera(mousePosition, camera);
            raycaster.ray.intersectPlane(plane, intersectionPoint);
        });
    });

    useFrame((state, delta) => {
        ref.current.lookAt(intersectionPoint.x, intersectionPoint.y, 10);
    });

    return (
        <group ref={ref}>
            <mesh {...nodes.screen} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <meshStandardMaterial emissive="#ffffff" emissiveIntensity={10} color="#ffffff" />
            </mesh>
            <mesh {...nodes.mac} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]}>
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
                    color="#000000"
                />
                <Edges 
                    lineWidth={1}
                    color="#ffffff"
                />
            </mesh>
            <ambientLight color="#ffffff" intensity={1.5} />
            <EffectComposer disableNormalPass>
                <Bloom mipmapBlur levels={2} intensity={1} />
                <ToneMapping />
            </EffectComposer>
        </group>
    );
}

function ContactIcon({ camera, scene }) {
    const ref = useRef();
    const { nodes } = useGLTF("/icons/contact.glb");

    const intersectionPoint = new THREE.Vector3();
    const planeNormal = new THREE.Vector3();
    const plane = new THREE.Plane();
    const mousePosition = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    
    useEffect(() => {
        window.addEventListener('mousemove', function (e) {
            mousePosition.x = (e.clientX / window.innerWidth) * 2 - 0.5;
            mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
            planeNormal.copy(camera.position).normalize();
            plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
            raycaster.setFromCamera(mousePosition, camera);
            raycaster.ray.intersectPlane(plane, intersectionPoint);
        });
    });

    useFrame((state, delta) => {
        ref.current.lookAt(intersectionPoint.x, intersectionPoint.y, 10);
    });

    return (
        <group>
            <mesh {...nodes.body} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <meshStandardMaterial emissive="#ffffff" emissiveIntensity={1} color="#ffffff" />
            </mesh>
            <mesh {...nodes.head} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} ref={ref}>
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
                    color="#000000"
                />
                <Edges 
                    lineWidth={1}
                    color="#ffffff"
                />
            </mesh>
            <ambientLight color="#ffffff" intensity={1.5} />
            <EffectComposer disableNormalPass>
                <Bloom mipmapBlur levels={1} intensity={0.5} />
                <ToneMapping />
            </EffectComposer>
        </group>
    );
}

function Tower({ scale }) {
    const ref = useRef();
    const { nodes } = useGLTF("/icons/tower.glb");

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.5*delta;
    });

    return (
        <group>
            <color attach="background" args={["#09090b"]} />
            <mesh ref={ref} {...nodes.sculpture} scale={10*scale} position={[0, 0, 0]}>
                <MeshTransmissionMaterial
                    thickness={0.5}
                    roughness={0.15}
                    transmission={1}
                    ior={1.8}
                    chromaticAberration={0.02}
                    backside={true}
                    backsideThickness={0.1}
                    distortion={0.5}
                    distortionScale={1}
                    color="#474757"
                />
                <Edges 
                    lineWidth={2}
                    color="#ffffff"
                />
            </mesh>
            <ambientLight color="#ffffff" intensity={1.5} />
            <Environment preset="city" />
        </group>
    );
}

function Blocks({ scale }) {
    const ref = useRef();
    const { nodes } = useGLTF("/icons/blocks.glb");

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.5*delta;
    });

    return (
        <group ref={ref}>
            <color attach="background" args={["#09090b"]} />
            <mesh {...nodes.block1} scale={14*scale} position={[0, -10, 0]}>
                <MeshTransmissionMaterial
                    thickness={0.5}
                    roughness={0}
                    transmission={0.5}
                    ior={1.5}
                    chromaticAberration={0.02}
                    backside={true}
                    backsideThickness={0.1}
                    distortion={0.5}
                    distortionScale={1}
                    color="#ff6861"
                />
            </mesh>
            <mesh {...nodes.block2} scale={14*scale} position={[0, -10, 0]}>
                <MeshTransmissionMaterial
                    thickness={0.5}
                    roughness={0}
                    transmission={0.5}
                    ior={1.5}
                    chromaticAberration={0.02}
                    backside={true}
                    backsideThickness={0.1}
                    distortion={0.5}
                    distortionScale={1}
                    color="#30db5b"
                />
            </mesh>
            <mesh {...nodes.block3} scale={14*scale} position={[0, -10, 0]}>
                <MeshTransmissionMaterial
                    thickness={0.5}
                    roughness={0}
                    transmission={0.5}
                    ior={1.5}
                    chromaticAberration={0.02}
                    backside={true}
                    backsideThickness={0.1}
                    distortion={0.5}
                    distortionScale={1}
                    color="#7d7aff"
                />
            </mesh>
            <ambientLight color="#ffffff" intensity={1.5} />
            <Environment preset="lobby" />
        </group>
    );
}

function Wobble({ scale }) {
    const ref = useRef();
    const { nodes } = useGLTF("/icons/blocks.glb");
    const size = 30*scale;

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.5*delta;
    });

    return (
        <group ref={ref}>
            <color attach="background" args={["#09090b"]} />
            <mesh>
                <sphereGeometry args={[size, size, size]} />
                <MeshDistortMaterial distort={0.2} speed={5} color="#5aa8ff" />
            </mesh>
            <mesh>
                <sphereGeometry args={[size, size, size]} />
                <meshStandardMaterial emissive="#7d7aff" emissiveIntensity={10} color="#7d7aff" />
            </mesh>
            <ambientLight color="#ffffff" intensity={1.5} />
            <Environment preset="lobby" />
            <EffectComposer disableNormalPass>
                <Bloom mipmapBlur levels={2} intensity={0.2} />
                <ToneMapping />
            </EffectComposer>
        </group>
    );
}

function Teapot({ scale }) {
    const ref = useRef();
    const { nodes } = useGLTF("/icons/teapot.glb");

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.5*delta;
    });

    return (
        <group>
            <color attach="background" args={["#09090b"]} />
            <mesh ref={ref} {...nodes.teapot} scale={14*scale} position={[0, 0, 0]}>
                <MeshTransmissionMaterial
                    thickness={0.5}
                    roughness={0}
                    transmission={0.5}
                    ior={1.5}
                    chromaticAberration={0.02}
                    backside={true}
                    backsideThickness={0.1}
                    distortion={0.5}
                    distortionScale={1}
                    color="#8d919a"
                />
            </mesh>
            <ambientLight color="#ffffff" intensity={1.5} />
            <Environment preset="apartment" />
        </group>
    );
}

function GlassCity() {
    const ref = useRef();
    const { nodes } = useGLTF('/home/houston.glb');

    return (
        <mesh ref={ref} {...nodes.skyline} scale={1} position={[0, -27, 0]}>
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

function HoverText({ hover, position, color, fontSize, children }) {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.fillOpacity = THREE.MathUtils.damp(ref.current.fillOpacity, hover ? 1 : 0, 48, delta);
        ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, hover ? position[1] : position[1]-5, 8, delta);
        ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, hover ? position[2] : position[2]-50, 8, delta);
    });

    return (
        <Text
            ref={ref}
            position={position}
            font="/inter_bold.ttf"
            fontSize={fontSize}
            color={color}
            fillOpacity={0.5}
        >
            {children}
        </Text>
    );
}

function EntryText({ position, color, hoverColor, fontSize, isClickable, buttonWidth, href, children }) {
    const ref = useRef();
    const textRef = useRef()
    const boxRef = useRef()
    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);
    const router = useRouter();
    const [playHover] = useSound('/home/balloon.mp3')

    useFrame((state, delta) => {
        if(1 < state.clock.elapsedTime) {
            textRef.current.fillOpacity = THREE.MathUtils.damp(textRef.current.fillOpacity, 1, 48, delta);
            if(boxRef.current) {
                boxRef.current.emissiveIntensity = THREE.MathUtils.damp(boxRef.current.emissiveIntensity, hover ? 1 : 0, 48, delta);
                boxRef.current.opacity = THREE.MathUtils.damp(boxRef.current.opacity, hover ? 1 : 0.7, 48, delta);
            }
            ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, click ? position[1] + 0.5 : position[1], 6, delta);
        }
    });

    return (
        <group>
            <group
                ref={ref}
                position={[position[0], position[1]-5, position[2]]}
            >
                <Text
                    ref={textRef}
                    font="/inter_bold.ttf"
                    fontSize={fontSize}
                    color={hover ? '#000000' : color}
                    fillOpacity={0}
                >
                    {children}
                </Text>
                {isClickable &&
                <group>
                    <RoundedBox
                        position={[0, 0, -0.3]}
                        args={[buttonWidth, 1.5, 0.5]}
                        radius={0.3}
                    >
                        <meshPhongMaterial
                            ref={boxRef}
                            emissive='#ffffff'
                            emissiveIntensity={0}
                            color={hoverColor}
                            specular='#ffd998'
                            shininess={70}
                            transparent={true}
                            opacity={0}
                        />
                    </RoundedBox>
                </group>}
            </group>
            {isClickable &&
            <mesh
                position={[position[0], position[1], position[2]-0.4]}
                onPointerEnter={() => setHover(true)}
                onPointerDown={() => {
                    setClick(true);
                    playHover();
                }}
                onPointerLeave={() => {
                    setHover(false);
                    setClick(false);
                }}
                onClick={() => router.push(href)}
            >
                <boxGeometry
                    args={[buttonWidth, 2.5, 0.5]}
                />
                <meshPhongMaterial
                    transparent={true}
                    opacity={0}
                />
            </mesh>}
        </group>
    );
}

export { Mac, ContactIcon, Tower, Blocks, Wobble, Teapot, GlassCity, GlassTower, GlassTorus, HoverText, EntryText }