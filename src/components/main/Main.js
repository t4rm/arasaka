import React from 'react';
import "../../css/Main.css";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDataContext } from '../../context/DataContext';
import { useGSAP } from "@gsap/react";
import "../../css/loading.css";
import { Link } from 'react-router-dom';
import Frame from '../frame/Frame';
import AvatarLayout from "../avatar/AvatarLayout";

const Main = () => {
    const { data } = useDataContext();
    const arasakaCaptionText = "<span class='title secondary'>Saburo Arasaka</span> - Our visionary leader, guiding humanity towards a bright future.";
    const arasakaWelcomeText = "Welcome to Arasaka Corporation, pioneers in security and cybernetic technology. Guided by the vision of our legendary leader, Saburo Arasaka, we are committed to creating a safer and more innovative future for everyone.";
    useGSAP(() => {
        gsap.registerPlugin(CustomEase, TextPlugin, ScrollTrigger)

        data["tl"].fromTo("#arasaka-ceo", { opacity: 0 }, {
            duration: 2.5,
            opacity: 1,
            ease: CustomEase.create("custom", "M0,0 C0.026,0.051 0.04,0.897 0.1,1 0.135,1.062 0.064,-0.019 0.111,0 0.158,0.019 0.139,0.903 0.2,1 0.235,1.058 0.182,-0.017 0.224,0 0.258,0.015 0.222,0.932 0.26,1 0.267,1.013 0.328,-0.011 0.335,0 0.379,0.062 0.352,0.888 0.389,0.984 0.427,1.084 0.364,0.031 0.414,0.012 0.429,0.006 0.412,0.909 0.466,1 0.498,1.054 0.486,-0.017 0.53,0 0.565,0.014 0.544,0.865 0.584,0.933 0.641,1.028 0.675,1.004 0.744,1 0.873,0.99 0.981,1 1,1 "),
        }, 0);

        data["tl"].to("#arasaka-welcome-title", { text: { value: "(アラサカ社)" }, duration: 1, ease: "none" }, ">")
        data["tl"].to("#arasaka-ceo-caption", { text: { value: arasakaCaptionText }, duration: 3, ease: "none" })
        data["tl"].to("#arasaka-welcome-paragraph", { text: { value: arasakaWelcomeText }, duration: 3, ease: "none" }, "<")
        data["tl"].fromTo("#aside-aboutus-link", { opacity: 0 }, { opacity: 0.9, duration: 1, ease: "power1.out" }, ">")


        // Show when scrolled :
        data["tlSecu"].fromTo(".section-container", { opacity: 0 }, { opacity: 1 }, 1)

        data["tlSecu"].fromTo("#security-h3", { opacity: 0 }, {
            duration: 2.5,
            opacity: 0.9,
            delay: 0.25,
            ease: CustomEase.create("custom", "M0,0 C0.026,0.051 0.04,0.897 0.1,1 0.135,1.062 0.064,-0.019 0.111,0 0.158,0.019 0.139,0.903 0.2,1 0.235,1.058 0.182,-0.017 0.224,0 0.258,0.015 0.222,0.932 0.26,1 0.267,1.013 0.328,-0.011 0.335,0 0.379,0.062 0.352,0.888 0.389,0.984 0.427,1.084 0.364,0.031 0.414,0.012 0.429,0.006 0.412,0.909 0.466,1 0.498,1.054 0.486,-0.017 0.53,0 0.565,0.014 0.544,0.865 0.584,0.933 0.641,1.028 0.675,1.004 0.744,1 0.873,0.99 0.981,1 1,1 "),
        });

        data["tlSecu"].to(".security-annotation", {
            delay: 1,
            text: { value: "//: SINCE 1915" }, duration: 1, ease: "none"
        });

    });

    return (
        <main>
            <div className='main-container'>
                <article className='logo-container'>
                    <figure>
                        <img src="./assets/images/arasaka-ceo.png" alt="Arasaka CEO - Saboro Arasaka" id='arasaka-ceo' />
                        <figcaption id='arasaka-ceo-caption' className=''></figcaption>
                    </figure>
                </article>
                <aside>
                    <h1 id='arasaka-welcome-title' className='title secondary'>&#8203;</h1>
                    <p id='arasaka-welcome-paragraph'></p>
                    <div className='aside-aboutus'>
                        <Link to="/about" id='aside-aboutus-link' className='title large'>ABOUT US</Link>
                    </div>
                </aside>
            </div>
            <section className='section-container'>
                <div className='section-title reveal'>
                    <div className='stairs-disposition'>
                        <h2 id='security-h2' className='very-very-large'>ARASAKA SECURITY SOLUTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        <h3 id='security-h3' className='very-large title'>SAFEGUARDING YOUR TOMORROW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                        <br />
                        <h3 className='very-large'>PHYSICAL&nbsp;&nbsp;&nbsp;</h3>
                        <h3 className='very-large'>&&nbsp;&nbsp;</h3>
                        <h3 className='very-large'>DIGITAL</h3>
                    </div>
                    <div className='mobile-hidden'>
                        <br /><br /><br /><br /><br /><br /><br /><span className='security-annotation'></span>
                    </div>
                </div>
                <div className='section-content'>
                    <figure className='section-container-3d'>
                        <img src="./assets/images/arasaka-smasher.png" alt="Adam Smasher - Security officer" />
                    </figure>
                    <div>
                        <Frame text={"CUTTING-EDGE SECURITY"} />
                        <p>Arasaka Security Solutions, a global force in advanced protection, is epitomized by the legendary Adam Smasher, a fusion of human resilience and cybernetic prowess. Our world-class security extends from cyberspace to physical realms, offering an unyielding shield against the uncertainties of a rapidly evolving world. With Arasaka, experience security redefined.</p>
                    </div>
                </div>
                <section>
                    <div className='reveal very-very-large' style={{ width: "fit-content", marginLeft: "auto" }}>
                        {/* Des agents  */}
                        <p style={{ textIndent: "50px" }}>Meet Arasaka's Elite</p>
                        <p className='title'><b>Virtuoso Guardians</b></p>
                        <p style={{ textIndent: "100px" }}>of Security</p>
                    </div>
                    <AvatarLayout />
                </section>
            </section>



        </main>
    );
};

export default Main;
