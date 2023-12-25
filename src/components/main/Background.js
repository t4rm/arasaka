import React from 'react';
import "../../css/Background.css";
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useDataContext } from '../../context/DataContext';
import { getRandomInt } from "../../utils/functions";


function Background() {
    const { data } = useDataContext();


    useGSAP(() => {
        gsap.registerPlugin(CustomEase)
        let q = gsap.utils.selector(".main-bg");


        q("p").forEach((element, index) => {
            data["tl"].fromTo(element,
                { y: -200 - getRandomInt(25, 75*index), opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    delay: 2,
                }, 0);
        });

    });

    return (
        <div className='main-bg'>
            <p>A</p>
            <p>R</p>
            <p>A</p>
            <p>S</p>
            <p>A</p>
            <p>K</p>
            <p>A</p>
            <p>-</p>
            <p>C</p>
            <p>O</p>
            <p>R</p>
            <p>P</p>
            <p>O</p>
            <p className='main-bg-corp'>©</p>
        </div>
    );
}

export default Background;