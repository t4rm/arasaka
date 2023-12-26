import React, { useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../css/loading.css";

const Typingtext = () => {
    let [percent, setPercent] = useState(0);

    useGSAP(() => {
        var tl = new gsap.timeline({
            paused: true
        });

        // letter animation
        tl.fromTo(".anim-typewriter", { width: 0 }, { width: "34.85em", ease: "steps(64)", duration: 5 })

        // text cursor animation
        tl.fromTo(".anim-typewriter", 0.5, {
            "border-right-color": "rgba(255,255,255,0.75)"
        }, {
            "border-right-color": "rgba(255,255,255,0)",
            repeat: 14,
            ease: "steps(1)"
        }, 0);

        tl.add( function(){ increment(2) } )


        tl.play();
    });

    function increment(delay) {
        const timeout = delay * 1000
        for (var i = 1; i <= 100; i++) {
            setTimeout(() => {
                setPercent(percent++)
              }, timeout);
        }
    }

    return (
        <>
            <p className='line-1 typed-text carpet anim-typewriter'><span className='loading-dir-text'>WELCOME TO //:</span> THE LATEST ADVANCEMENT IN PREMIUM DIGITAL FASHION</p>
            <p className='loading-percent'>{percent}%</p>
        </>
    );
};

export default Typingtext;
