import { useEffect, useState, Fragment } from "react";
import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import {compile, evaluate, run} from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import { CodeBlock, ImageBlock, HoverTextBlock } from "../../../components/journal"

import { getRawData } from "../../../utilities/retriever";

export default function Page({ code }) {
    const router = useRouter();
    const [blogInfo, setBlogInfo] = useState({ "title": "", "date": "", "type": "" });
    const [Content, setContent] = useState(() => Fragment)

    useEffect(() => {
        if(router.isReady) {
            getRawData("blog.json").then((response) => {
                if (response) {
                    response.json().then((json) => {
                        if (json[router.query.slug]) {
                            const date = new Date(parseInt(json[router.query.slug].timestamp) * 1000);
                            setBlogInfo({
                                "title": json[router.query.slug].title,
                                "date": date.toLocaleDateString(),
                                "type": json[router.query.slug].type,
                            });
                        }
                        else {
                            setBlogInfo({
                                "title": "404",
                                "date": "Page does not exist",
                            });
                        }
                    });
                }
            });

            getRawData(`blog/${router.query.slug}.mdx`)
            .then((response) => {
                if (response) {
                    response.text().then((text) => {
                    return evaluate((text), {
                        ...runtime,
                        baseUrl: import.meta.url,
                    });
                })
                .then((mod) => setContent(() => mod.default));
                }
            });
        }
    }, [router.isReady]);

    return (
        <div className="flex justify-center items-center h-screen transition-all">
            <Head>
                <title>{blogInfo.title}</title>
            </Head>
            <div className="w-full h-full flex flex-col overflow-y-scroll items-center">
                <div className="w-full min-h-[calc(3.75rem+18rem)] hidden xl:flex flex-col items-center overflow-hidden">
                    <div className="flex flex-col-reverse w-full h-full pt-24 relative items-end self-start justify-center">
                        <div className="w-full h-[calc(3.75rem+18rem)] absolute top-0 bg-gradient-to-b from-zinc-500 via-white to-zinc-300 pointer-events-none transition-all"></div>
                        <div className="flex flex-col-reverse w-full max-w-[1080px] h-full pt-24 top-0 absolute self-center justify-center">
                            <div className="text-black/80 text-4xl font-light -mt-2 px-8 md:px-16 transition-all duration-500">
                                <hr className="w-[200vw] absolute -left-[100vw] border-cyan-600"></hr>
                                <div className="handwritten flex flex-row">&nbsp;</div>
                                <hr className="w-[200vw] absolute -left-[100vw] border-cyan-500"></hr>
                                <div className="handwritten flex flex-row keyframe-increase-opacity"><span className="text-5xl/0 z-10">{blogInfo.title}</span>&nbsp;</div>
                                <hr className="w-[200vw] absolute -left-[100vw] border-cyan-500"></hr>
                                <div className="handwritten flex flex-row keyframe-increase-opacity">({blogInfo.type == "ideation" ? "Updated " : ""}{blogInfo.date})</div>
                                <hr className="w-[200vw] absolute -left-[100vw] border-cyan-500"></hr>
                                <hr className="rotate-90 w-[100vw] absolute -left-[50vw] border-red-700"></hr>
                            </div>
                        </div>
                        <div className="w-full h-[5vh] bg-gradient-to-b from-transparent to-[#09090b] absolute top-[calc(3.75rem+18rem-5vh)] pointer-events-none"></div>
                    </div>
                </div>
                <div className="w-full h-screen xl:z-10 pt-20 xl:pt-0 mb-8 text-white flex flex-col items-center bg-[#09090b]">
                    <div className="w-full max-w-[1080px] px-8 md:px-16 py-8 flex flex-col gap-8">
                        <div className="flex flex-col xl:hidden">
                            <div className="text-4xl text-white flex flex-row gap-4">{blogInfo.title}</div>
                            <div className="text-2xl text-white/80 flex flex-row gap-4">({blogInfo.type == "ideation" ? "Updated " : ""}{blogInfo.date})</div>
                        </div>
                        {
                            Content ?
                            <div className="flex flex-col gap-8">
                                <div className="handwritten keyframe-slide-from-top text-2xl keyframe-increase-opacity">{blogInfo.type == "blog" ? "Hi there!" : ""}</div>
                                <div className="blog-box flex flex-col gap-4">
                                    <Content components={{ CodeBlock, ImageBlock, HoverTextBlock }} />
                                </div>
                                {
                                    blogInfo.type == "blog" ? 
                                    <div className="handwritten flex flex-col keyframe-slide-from-top text-2xl keyframe-increase-opacity">
                                        <span>See ya!</span>
                                        <span>Ian</span>
                                    </div> :
                                    []
                                }
                            </div> :
                            <div className="flex flex-col gap-8">
                                <div className="grid grid-cols-5 gap-4 animate-pulse">
                                    <div className="col-span-5 h-2 rounded bg-white/20"></div>
                                    <div className="col-span-5 h-2 rounded bg-white/20"></div>
                                    <div className="col-span-5 h-2 rounded bg-white/20"></div>
                                    <div className="col-span-3 h-2 rounded bg-white/20"></div>
                                </div>
                                <div className="grid grid-cols-5 gap-4 animate-pulse">
                                    <div className="col-span-5 h-2 rounded bg-white/20"></div>
                                    <div className="col-span-2 h-2 rounded bg-white/20"></div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}