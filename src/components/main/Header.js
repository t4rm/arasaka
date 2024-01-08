import React, { useState } from 'react';
import "../../css/Header.css";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { getRandomFloat } from "../../utils/functions";

const Header = () => {
    const { data } = useDataContext();
    const [showNavbar, setShowNavbar] = useState(false);
    gsap.registerPlugin(CustomEase, TextPlugin)

    useGSAP(() => {
        data["tl"].fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power1.out", delay: 3 }, "arasaka-ceo-caption")
        data["tl"].to("#about", { text: { value: "ABOUT ARASAKA" }, duration: 2, ease: "none" }, "3")
        data["tl"].to("#approach", { text: { value: "APPROACH" }, duration: 1, ease: "none" }, "3")
        data["tl"].to("#news", { text: { value: "NEWS" }, duration: 1, ease: "none" }, "3")
        data["tl"].to("#science", { text: { value: "SCIENCE" }, duration: 1, ease: "none" }, "3")

        data["tl"].to(".bourse-name", { text: { value: "GLOBAL 500" }, duration: 1, ease: "none" }, "3")
        data["tl"].to(".bourse-value", { text: { value: ": ASK €$194.14 " }, duration: 1, ease: "none" }, ">")
        data["tl"].to(".bourse-fluctuation", { text: { value: `+${getRandomFloat(0, 2, 2)}` }, duration: 1, ease: "none" }, ">")

        data["tl"].to("#investors", { text: { value: "INVESTORS" }, duration: 1, ease: "none" }, "3")
        data["tl"].to("#careers", { text: { value: "CAREERS" }, duration: 1, ease: "none" }, "3")
        data["tl"].to("#location", { text: { value: "GLOBAL LOCATIONS" }, duration: 2, ease: "none" }, "3")


        data["tl"].fromTo(".header-logo", { opacity: 0 }, {
            duration: 2.5,
            opacity: 1,
            repeat: -1,
            repeatDelay: 20,
            ease: CustomEase.create("custom", "M0,0 C0.026,0.051 0.04,0.897 0.1,1 0.135,1.062 0.064,-0.019 0.111,0 0.158,0.019 0.139,0.903 0.2,1 0.235,1.058 0.182,-0.017 0.224,0 0.258,0.015 0.222,0.932 0.26,1 0.267,1.013 0.328,-0.011 0.335,0 0.379,0.062 0.352,0.888 0.389,0.984 0.427,1.084 0.364,0.031 0.414,0.012 0.429,0.006 0.412,0.909 0.466,1 0.498,1.054 0.486,-0.017 0.53,0 0.565,0.014 0.544,0.865 0.584,0.933 0.641,1.028 0.675,1.004 0.744,1 0.873,0.99 0.981,1 1,1 "),
        }, "arasaka-ceo-caption");

    });

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <header>
            <Link to="/"><img src='/assets/images/arasaka-logo.png' className='header-logo' alt='Arasaka Logo (Index)' /></Link>
            <Link className='mobile-menu large' onClick={handleShowNavbar}>{showNavbar ? "Close" : "Menu"}</Link>
            <div className={`header-nav-container ${showNavbar ? "active" : ""}`}>
                <nav className='header-nav'>
                    <ul>
                        <li><Link id="about" to="/about"></Link></li>
                        <li><Link id="approach" to="/approach"></Link></li>
                        <li><Link id="news" to="/newsroom"></Link></li>
                        <li><Link id="science" to="/science"></Link></li>
                    </ul>
                </nav>
                <hr className='mobile-menu' />
                <nav className='header-nav secondary'>
                    <ul>
                        <li className='bourse-container tablet-hidden'>
                            <span className='bourse-name'></span><span className='bourse-value'></span><span className='bourse-fluctuation'></span>
                        </li>
                        <li><Link id="investors" to="/investors"></Link></li>
                        <li><Link id="careers" to="/careers"></Link></li>
                        <li><Link id="location" to="/location"></Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default Header;
