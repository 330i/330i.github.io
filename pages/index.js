"use client"

import homeStyles from '../styles/home.module.css'

export default function Home() {
    return (
        <div className={homeStyles.homediv}>
            <div className={homeStyles.welcomediv}>
                <h1 className={homeStyles.hellotext}>Hello there, my name is</h1>
                <h1 className={homeStyles.iantext}>Ian Kim</h1>
            </div>
            <div className={homeStyles.videodiv}>
                <video className={homeStyles.bgvideo} src="/home/background.mp4" muted loop autoPlay></video>
            </div>
            <div className={homeStyles.mediv}>
                <img src="/home/me_img.png" alt="Ian Kim" className={homeStyles.meimg}></img>
            </div>
        </div>
    )
}