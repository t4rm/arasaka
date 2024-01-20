import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "../css/loading.css";

function Loading() {
    gsap.registerPlugin(TextPlugin)

    useGSAP(() => {
        const tl = new gsap.timeline();

        tl.to("#welcome", { text: { value: "WELCOME TO //:" }, duration: 1, ease: "none" }, ">")
        tl.to("#text", { text: { value: "ARASAKA ONLINE - REINVENTING THE INTRANET ~" }, duration: 3, ease: "none" }, ">")
        tl.to("#container-loading", { opacity: 0, duration: 1, ease: "none" }, ">")
    });

    return (
        <div className='flex center' id="container-loading" style={{ alignItems: "center" }}>
            <span className='very-large title' id='welcome'> </span>&nbsp;
            <span className='large' id='text'> </span>
        </div>
    );
}

export default Loading;