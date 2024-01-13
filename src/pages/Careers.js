import React from 'react';
import { Link } from 'react-router-dom';
import "../css/buttons.css";
import "../css/careers.css";
import { useDataContext } from '../context/DataContext';
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

function Careers() {
    const { data } = useDataContext();

    useGSAP(() => {
        // gsap.registerPlugin(CustomEase)

        data["tlCareers"].to("#careers-header", {
            text: { value: 'How will Arasaka shine ?' }, duration: 2,
            ease: "none"
        }, ">")

        data["tlCareers"].to("#careers-header-2", {
            text: { value: 'That depends on you.' }, duration: 2,
            ease: "sine.out",
            delay: 1
        }, ">")

        data["tlCareers"].to("#careers-descri", {
            text: {
                value: "At Arasaka, we don’t just shape the future; we secure it. As a global leader in corporate security, advanced technology, and defense, Arasaka is more than a company; it's a vision of the future."
            }, duration: 3, ease: "none",
        }, ">")

        data["tlCareers"].fromTo("#careers-button",
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: CustomEase.create("custom", "M0,0 C0.026,0.051 0.04,0.897 0.1,1 0.135,1.062 0.064,-0.019 0.111,0 0.158,0.019 0.139,0.903 0.2,1 0.235,1.058 0.182,-0.017 0.224,0 0.258,0.015 0.222,0.932 0.26,1 0.267,1.013 0.328,-0.011 0.335,0 0.379,0.062 0.352,0.888 0.389,0.984 0.427,1.084 0.364,0.031 0.414,0.012 0.429,0.006 0.412,0.909 0.466,1 0.498,1.054 0.486,-0.017 0.53,0 0.565,0.014 0.544,0.865 0.584,0.933 0.641,1.028 0.675,1.004 0.744,1 0.873,0.99 0.981,1 1,1 ") },
            ">"
        )

        data["tlCareers"].fromTo(".careers-group", { opacity: 0 }, { opacity: 1, duration: 1.5 }, ">")

    });

    return (
        <main className='careers-container'>
            <div className='flex row gap-1 espace top-3 bot'>
                <div className='flex col split-2 espace bot-3'>
                    <h1 className='very-very-large' id='careers-header'> </h1>
                    <h1 className='very-very-large' id='careers-header-2'> </h1>
                </div>
                <div className='flex col split-2'>
                    <h2 id='careers-descri'> </h2>
                    <Link to="/careers/jobsearch" id='careers-button'>
                        <button className='large espace top-1'>View all open roles</button>
                    </Link>
                </div>
            </div>
            <div className='careers-group'>
                <figure className='image-container espace bot'>
                    <img src='/assets/images/careers/arasaka-brightfuture.jpeg' className='fit-image' alt='Arasaka bright future project' />
                </figure>
                <hr />
                <h2 className='espace top bot'>A future where stability, security, and technology converge to create a better world. We are looking for extraordinary individuals, dedicated to the pursuit of excellence and driven by an unwavering commitment to innovation and security.</h2>
                <hr />
                <div className='espace top bot flex row'>
                    <div className='flex col split-2'>
                        <h2 className='very-large'>Core values</h2>
                    </div>
                    <div className='flex col split-2'>
                        <ul className='double-list'>
                            <li><b>Security and Protection</b></li>
                            <li>Our foremost commitment is to the safety and security of our clients and their interests. In a world rife with uncertainty, we stand as a bastion of stability and protection.</li>

                            <li><b>Innovation and Advancement</b></li>
                            <li>We are at the forefront of technological revolution. Our relentless pursuit of innovation drives us to redefine the boundaries of what is possible, charting new courses in cyberware, artificial intelligence, and beyond.</li>

                            <li><b>Control and Order</b></li>
                            <li>In the fast-paced and often chaotic world of corporate and global affairs, we prioritize control and order. Our structured approach ensures efficiency and effectiveness in all our operations.</li>

                            <li><b>Loyalty and Obedience</b></li>
                            <li>The strength of Arasaka lies in the unwavering loyalty and discipline of our team. Dedication to our cause and strict adherence to our directives are what set us apart.</li>

                            <li><b>Power and Influence</b></li>
                            <li>As a dominant force on the global stage, we strive for significant power and influence. Our actions shape industries and nations, steering the course of global affairs.</li>

                            <li><b>Excellence and Precision</b></li>
                            <li>We are committed to the highest standards of excellence. Precision in our products, services, and decision-making processes is integral to maintaining our industry-leading position.</li>

                            <li><b>Resilience and Adaptability</b></li>
                            <li>Adaptability and resilience are key in our ever-evolving world. We embrace change and rise to challenges, ensuring our longevity and continued success.</li>

                            <li><b>Legacy and Tradition</b></li>
                            <li>We honor our rich history and uphold our longstanding traditions while forging ahead to create a legacy for the future. Balancing respect for our past with innovation is our strength.</li>

                            <li><b>Confidentiality and Discretion</b></li>
                            <li>In our world, confidentiality and discretion are not just valued; they are essential. We maintain the utmost integrity in handling sensitive information, ensuring trust and confidentiality in all our dealings.</li>

                            <li><b>Dominance and Competitiveness</b></li>
                            <li>We operate in a landscape defined by fierce competition. Our aim is not just to participate but to dominate, continually striving for superiority in every aspect of our business.</li>
                        </ul>
                    </div>
                </div>
                <figure className='figure-max image-container espace bot'>
                    <img src='/assets/images/careers/arasaka-office.jpeg' alt='Arasaka office in 2077' className='fit-image scale-2' />
                </figure>
                <hr />
                <div className='flex row espace top bot'>
                    <div className='flex col split-2'>
                        <h2 className='very-large'>Benefits</h2>
                    </div>
                    <div className='flex col split-2'>
                        <h2>We know that well-being is at the center of everyday life. Our comprehensive benefits package supports you where you are, so you can take care of what matters today while confidently planning for the future.</h2>
                    </div>
                    <div className='flex row split-1 espace top'>
                        <div className='flex col split-3'>
                            <h3 className='espace bot-1'>For employees</h3>
                            <ul className='benefits-list'>
                                <li>Trauma Team Executive package</li>
                                <li>Commuter benefits (Aerodyne)</li>
                                <li>Arasaka's equipment (computers, weapons, cyberware)</li>
                                <li>Arasaka's Security Guarantee</li>
                            </ul>
                        </div>
                        <div className='flex col split-3'>
                            <h3 className='espace bot-1'>Life & Family</h3>
                            <ul className='benefits-list'>
                                <li>Flexible workings hours</li>
                                <li>Trauma Team Silver package for your family</li>
                                <li>Arasaka's Academy access for your childs</li>
                                <li>Emergency family support</li>
                            </ul>
                        </div>
                        <div className='flex col split-3'>
                            <h3 className='espace bot-1'>Culture & Development</h3>
                            <ul className='benefits-list'>
                                <li>Cutting-edge technology ressource</li>
                                <li>Daily breakfast, lunch and dinner</li>
                                <li>Team-driven celebration and events</li>
                                <li>Networking opportunities</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <h2 className='very-very-large espace top-1'>Join us and change the outcome.</h2>
                <Link to="/careers/jobsearch">
                    <button className='split-1 pad-1 large espace top'>View all open roles</button>
                </Link>
            </div>
        </main >
    );
}

export default Careers;