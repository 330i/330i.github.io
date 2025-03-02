"use client";

import { Edges, Environment, MeshDistortMaterial, MeshReflectorMaterial, MeshTransmissionMaterial, MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

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

export default function Signature({ children, className, pageName, isEntry=true, scale=1 }) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60);

    const pageThreeList = {
        "Career": {
            "element": <Tower scale={Math.abs(scale)} />,
            "cameraPosition": [0, 1, 100]
        },
        "Education": {
            "element": <Blocks scale={Math.abs(scale)} />,
            "cameraPosition": [0, 50, 100]
        },
        "Awards": {
            "element": <Wobble scale={Math.abs(scale)} />,
            "cameraPosition": [0, 1, 100]
        },
        "Honors and Activities": {
            "element": <Teapot scale={Math.abs(scale)} />,
            "cameraPosition": [0, 1, 100]
        },
        "Dev Experience": {
            "element": <Mac camera={camera} scene={scene} />,
            "cameraPosition": [0, 1, 6]
        },
    }

    camera.position.set(...pageThreeList[pageName].cameraPosition);
    camera.lookAt(scene.position);

    return (
        <div className={clsx("flex flex-row xl:justify-center items-center h-full w-full xl:w-5/12", className)}>
            <div className={clsx(isEntry ? "keyframe-slide-from-right" : "", "hidden xl:flex w-28 h-28 mx-4")}>
                <Canvas camera={camera} scene={scene}>
                    {pageThreeList[pageName].element}
                </Canvas>
            </div>
            <div className={clsx(isEntry ? "keyframe-increase-scale" : "", "hidden xl:flex border-l-[1px] border-solid border-l-white h-28")} />
            <h1 className={clsx(isEntry ? "keyframe-slide-from-left" : "", "w-56 text-3xl 2xl:text-4xl xl:pl-8 text-left")}>
                {children}
            </h1>
        </div>
    );
}