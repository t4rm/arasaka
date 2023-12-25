import React from 'react';
import "../../css/Main.css";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useDataContext } from '../../context/DataContext';
import { useGSAP } from "@gsap/react";
const Main = () => {
    const { data } = useDataContext();

    useGSAP(() => {
        gsap.registerPlugin(CustomEase)

        // Flashing image when loaded :
         data["tl"].fromTo("#arasaka-ceo", { opacity: 0 }, {
            duration: 2.5,
            opacity: 1,
            ease: CustomEase.create("custom", "M0,0 C0.026,0.051 0.04,0.897 0.1,1 0.135,1.062 0.064,-0.019 0.111,0 0.158,0.019 0.139,0.903 0.2,1 0.235,1.058 0.182,-0.017 0.224,0 0.258,0.015 0.222,0.932 0.26,1 0.267,1.013 0.328,-0.011 0.335,0 0.379,0.062 0.352,0.888 0.389,0.984 0.427,1.084 0.364,0.031 0.414,0.012 0.429,0.006 0.412,0.909 0.466,1 0.498,1.054 0.486,-0.017 0.53,0 0.565,0.014 0.544,0.865 0.584,0.933 0.641,1.028 0.675,1.004 0.744,1 0.873,0.99 0.981,1 1,1 "),
        },0);

        data["tl"].play();

    });

    return (
        <main>
            <article className='logo-container'>
                <figure>
                    <img src="./assets/images/arasaka-ceo.webp" alt="Arasaka CEO - Saboro Arasaka" id='arasaka-ceo' />
                    {/* <figcaption>An elephant at sunset</figcaption> */}
                </figure>
            </article>
        </main>
    );
};

export default Main;
