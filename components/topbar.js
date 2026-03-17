"use client"

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function TopBar() {
    const pathname = usePathname();
    const [look, setLook] = useState('');

    return (
        <div className="text-white">
            <div className="absolute top-0 left-0 flex flex-row align-middle items-center w-screen p-8 gap-4 backdrop-blur-sm mt-0 opacity-100 xl:-mt-32 xl:opacity-0 transition-all duration-500">
                <input type="checkbox" id="menu-toggle" className="topbarm-input hidden" />
                <label className="menubtn text-3xl transition-all" htmlFor="menu-toggle" >
                    ☰
                </label>
                <Link href='/' className="logobtn transition-all" >
                    <img src='/topbar/ik_logo.png' alt="Ian Kim Logo" className="h-10 transition-all" />
                </Link>
                <div className="sidebar fixed w-screen h-screen top-[-100vh] left-0 p-8 bg-zinc-900/80 backdrop-blur-sm transition-all duration-500">
                    <label className="menubtn text-5xl transition-all" htmlFor="menu-toggle" >
                        ×
                    </label>
                    <div className="mt-8">
                        <label htmlFor="menu-toggle" className="flex">
                            <Link className="barbtn relative block text-3xl font-semibold py-2 transition-all" href='/ideationstation'>
                                Ideation Station
                            </Link>
                        </label>
                        <label htmlFor="menu-toggle" className="flex">
                            <Link className="barbtn relative block text-3xl font-semibold py-2 transition-all" href='/resume'>
                                Resume
                            </Link>
                        </label>
                        <label htmlFor="menu-toggle" className="flex">
                            <Link className="barbtn relative block text-3xl font-semibold py-2 transition-all" href='/experience'>
                                Dev Experience
                            </Link>
                        </label>
                        <label htmlFor="menu-toggle" className="flex">
                            <Link className="barbtn relative block text-3xl font-semibold py-2 transition-all" href='/contact'>
                                Contact
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className={clsx("absolute top-0 left-0 flex flex-row justify-between items-center w-screen px-24 py-4 -mt-32 opacity-0 xl:mt-0 backdrop-blur-sm transition-all duration-500 xl:opacity-25 hover:xl:opacity-100 hover:bg-zinc-800/5 z-10")}>
                <div className="flex flex-row justify-center w-40">
                    <Link
                        className="barbtn relative block text-base font-semibold py-2 transition-all"
                        href='/ideationstation'
                        onMouseEnter={() => setLook('_left')}
                        onMouseLeave={() => setLook('')}
                    >
                        Ideation Station
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link
                        className="barbtn relative block text-base font-semibold py-2 transition-all"
                        href='/resume'
                        onMouseEnter={() => setLook('_left')}
                        onMouseLeave={() => setLook('')}
                    >
                        Resume
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link
                        className={clsx(pathname == '/' && 'py-2', "relative block text-base font-semibold transition-all")}
                        href='/'
                    >
                        <img src={pathname == '/' ? '/topbar/ik_logo.png' : `/topbar/doodle${look}.png`} alt="Ian Kim Logo" className={clsx(pathname == '/' ? "h-8" : "h-12")} />
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link
                        className="barbtn relative block text-base font-semibold py-2 transition-all"
                        href='/experience'
                        onMouseEnter={() => setLook('_right')}
                        onMouseLeave={() => setLook('')}
                    >
                        Dev Experience
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link
                        className="barbtn relative block text-base font-semibold py-2 transition-all"
                        href='/contact'
                        onMouseEnter={() => setLook('_right')}
                        onMouseLeave={() => setLook('')}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}