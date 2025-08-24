"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import * as THREE from 'three';
import { Blocks, Mac, Teapot, Tower, Wobble } from "./threeobj";

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