"use client";

import clsx from "clsx";

import projectData from "../data/experience.json";

export default function Accordion({ title, openGetter, openSetter, index, note, className }) {

    const card = projectData[title].map((e) => 
        <a href={Object.hasOwn(e, 'link') ? e.link : null} target="_blank" class="project-box grid overflow-hidden md:min-w-96 min-h-96 rounded-2xl shadow-lg transition-all">
            <img class="project-img col-start-1 row-start-1 w-full h-full rounded-2xl object-cover blur-lg transition-all -z-10" title="Project Image" src={e.image} />
            <div class="project-desc col-start-1 row-start-1 flex flex-col p-8 w-full h-full rounded-2xl overflow-y-hidden bg-zinc-800/50">
                <span class="text-xl md:text-2xl leading-none mb-1">{e.title} <span class="text-xs md:text-sm text-nowrap">{e.date}</span></span>
                <span class="text-sm md:text-base font-medium">{e.location}</span>
                <span class="text-sm md:text-base font-medium mt-4">{e.tagline}</span>
                <ul className="text-sm md:text-base list-disc ml-6">
                    {e.desc.map((item) => <li>{item}</li>)}
                </ul>
                <span class="text-sm md:text-base font-medium mt-4">Technology Used</span>
                <div class="pill_box">
                    {e.tech.frontend.map((item) => <span class="pill frontend">{item}</span>)}
                    {e.tech.backend.map((item) => <span class="pill backend">{item}</span>)}
                    {e.tech.api.map((item) => <span class="pill api">{item}</span>)}
                    {e.tech.other.map((item) => <span class="pill">{item}</span>)}
                </div>
            </div>
        </a>
    );

    return(
        <div className={clsx("w-full overflow-hidden", className)}>
            <input type="checkbox" id={`chck_${index}`} className='accordion-input hidden -z-10 top-0 left-0' onChange={(e) => openSetter(openGetter.map((opened, i) => i===index ? e.target.checked : opened))} />
            <label className="accordion-tab flex flex-col justify-between pt-8 pb-4 text-3xl text-white/50 font-medium transition-all hover:text-white" htmlFor={`chck_${index}`}>
                {title}
            </label>
            <ul className="accordion-content flex flex-col w-full max-h-0 p-0 pb-4 gap-4 opacity-0 transition-all duration-500">
                {
                    note &&
                    <div className="flex flex-row items-start w-full p-4 gap-2 rounded-md border-2 border-white/30 text-white/80">
                        <img src="/icons/info.svg" />
                        <span>{note}</span>
                    </div>
                }
                <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 min-[1366px]:grid-cols-3 min-[1920px]:grid-cols-4 gap-4">
                    {card}
                </div>
            </ul>
        </div>
    );
}