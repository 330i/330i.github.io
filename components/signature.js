"use client";

import clsx from "clsx";

export default function Signature({children, className}) {
    return (
        <div className={clsx("flex flex-row xl:justify-center items-center h-1/3 xl:px-24 w-full xl:w-5/12", className)}>
            <img src='/sign_w.png' alt="Ian Kim Signature" className="keyframe-slide-from-right hidden xl:flex h-28" />
            <div className="keyframe-increase-scale hidden xl:flex border-l-[1px] border-solid border-l-white h-28" />
            <h1 className="keyframe-slide-from-left text-4xl xl:pl-8 text-left">
                {children}
            </h1>
        </div>
    );
}