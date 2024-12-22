"use client"

import Link from 'next/link';

export default function TopBar() {

    return (
        <div className="text-white">
            <div className="absolute top-0 left-0 flex flex-row align-middle items-center w-screen p-8 gap-4 backdrop-blur-sm mt-0 opacity-100 xl:-mt-32 xl:opacity-0 transition-all duration-500">
                <input type="checkbox" id="menu-toggle" className="topbarm-input hidden" />
                <label className="menubtn text-3xl transition-all" htmlFor="menu-toggle" >
                    ☰
                </label>
                <Link href='/' className="logobtn transition-all" >
                    <img src='/ik_logo.png' alt="Ian Kim Logo" className="h-10 transition-all" />
                </Link>
                <div className="sidebar fixed w-screen h-screen top-[-100vh] left-0 p-8 bg-zinc-900/80 backdrop-blur-sm transition-all duration-500">
                    <label className="menubtn text-5xl transition-all" htmlFor="menu-toggle" >
                        ×
                    </label>
                    <div className="mt-8">
                        <label htmlFor="menu-toggle" className="flex">
                            <Link className="barbtn relative block text-3xl font-semibold py-2 transition-all" href='/resume'>
                                Resume
                            </Link>
                        </label>
                        <label htmlFor="menu-toggle" className="flex">
                            <Link className="barbtn relative block text-3xl font-semibold py-2 transition-all" href='/about'>
                                About
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
            <div className="absolute top-0 left-0 flex flex-row justify-between items-center w-screen px-24 py-4 -mt-32 opacity-0 xl:mt-0 xl:opacity-100 bg-zinc-800/20 backdrop-blur-sm transition-all duration-500">
                <div className="flex flex-row justify-center w-40">
                    <Link className="barbtn relative block text-base font-semibold py-2 transition-all" href='/resume'>
                        Resume
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link className="barbtn relative block text-base font-semibold py-2 transition-all" href='/about'>
                        About
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link className="barbtn relative block text-base font-semibold py-2 transition-all" href='/'>
                        <img src='/ik_logo.png' alt="Ian Kim Logo" className="h-8" />
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link className="barbtn relative block text-base font-semibold py-2 transition-all" href='/experience'>
                        Dev Experience
                    </Link>
                </div>
                <div className="flex flex-row justify-center w-40">
                    <Link className="barbtn relative block text-base font-semibold py-2 transition-all" href='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}