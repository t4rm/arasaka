import React from 'react';
import Arasaka3D from '../components/spline/logo/Arasaka3D';
import Accordion from '../components/accordeon/Accordion';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

function About() {

    useGSAP(() => {
        gsap.fromTo(".reveal-opacity", { opacity: 0 }, { opacity: 1, duration: 2, delay: 1 })
    });
    return (
        <>
            <div className="flex col center t-center" >
                <Arasaka3D />
                <div className='reveal-opacity'>
                    <h1>ABOUT US - ARASAKA</h1>
                    <br />
                    <p>Arasaka is a Japanese multinational corporation with its headquarters located in Night City, Northern California. The company is one of the world's leading manufacturers of cybernetic implants, weapons, vehicles and robotics.</p>
                    <br />
                    <p>Founded in 1919 by Saburo Arasaka, the company is currently led by his grandson, Kei Arasaka, and is one of the most influential corporations in the world.</p>
                    <br />
                    <hr />
                    <br />
                    <h2>OUR BUSINESSES</h2>
                    <Accordion />
                </div>
            </div>
        </>
    );
}

export default About;