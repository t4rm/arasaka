import React from 'react';
import { Link } from 'react-router-dom';
import "../css/buttons.css";
import "../css/careers.css";

function Careers() {


    return (
        <main className='careers-container'>
            <div className='flex row gap-1 espace top-3 bot'>
                <div className='flex col split-2 espace bot-3'>
                    <h1 className='very-very-large'>How will Arasaka shine ?<br />That depends on you.</h1>
                </div>
                <div className='flex col split-2'>
                    <h2>At Arasaka, we don’t just shape the future; we secure it. As a global leader in corporate security, advanced technology, and defense, Arasaka is more than a company; it's a vision of the future.</h2>
                    <Link to="/careers/jobsearch">
                        <button className='large espace top-1'>View all open roles</button>
                    </Link>
                </div>
            </div>
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
        </main >
    );
}

export default Careers;