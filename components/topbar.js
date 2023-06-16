"use client"

import topbarStyles from '../styles/topbar.module.css'
import Link from 'next/link'

export default function TopBar() {
    return (
        <div>
            <div className={topbarStyles.topbarm}>
                <input type="checkbox" id="menu-toggle" />
                <label className={topbarStyles.menubtn} htmlFor="menu-toggle" >
                    ☰
                </label>
                <Link href='/' className={topbarStyles.logobtn} >
                    <img src='/ik_logo.png' alt="Ian Kim Logo" className={topbarStyles.logoimg} />
                </Link>
                <div className={topbarStyles.sidebar}>
                    <label className={topbarStyles.menubtn} htmlFor="menu-toggle" >
                        ×
                    </label>
                    <div className={topbarStyles.menuitems}>
                        <label htmlFor="menu-toggle" >
                            <Link className={topbarStyles.barbtn} href='/resume'>
                                Resume
                            </Link>
                        </label>
                        <label htmlFor="menu-toggle" >
                            <Link className={topbarStyles.barbtn} href='/about'>
                                About
                            </Link>
                        </label>
                        <label htmlFor="menu-toggle" >
                            <Link className={topbarStyles.barbtn} href='/experience'>
                                Dev Experience
                            </Link>
                        </label>
                        <label htmlFor="menu-toggle" >
                            <Link className={topbarStyles.barbtn} href='/contact'>
                                Contact
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className={topbarStyles.topbar}>
                <Link className={topbarStyles.barbtn} href='/resume'>
                    Resume
                </Link>
                <Link className={topbarStyles.barbtn} href='/about'>
                    About
                </Link>
                <Link className={topbarStyles.barbtn} href='/'>
                    <img src='/ik_logo.png' alt="Ian Kim Logo" className={topbarStyles.logoimg} />
                </Link>
                <Link className={topbarStyles.barbtn} href='/experience'>
                    Dev Experience
                </Link>
                <Link className={topbarStyles.barbtn} href='/contact'>
                    Contact
                </Link>
            </div>
        </div>
    );
}