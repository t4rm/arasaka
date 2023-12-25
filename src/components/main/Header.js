import React from 'react';
import "../../css/Header.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Bourse from "../tertiary/Bourse";
import { Link } from 'react-router-dom';

const Header = () => {

    useGSAP(() => {
        var tl = new gsap.timeline({
            paused: true
        });

        tl.play();
    });

    return (
        <header>
            <Link to="/"><img src='./assets/images/arasaka-logo-alt.png' className='header-logo' alt='Arasaka Logo (Index)'/></Link>
            <div className='header-nav-container'>
                <nav className='header-nav'>
                    <ul>
                        <li><Link to="/about">ABOUT ARASAKA</Link></li>
                        <li><Link to="/approach">APPROACH</Link></li>
                        <li><Link to="/news">NEWS</Link></li>
                        <li><Link to="/science">SCIENCE</Link></li>
                    </ul>
                </nav>
                <nav className='header-nav secondary'>
                    <ul>
                        <Bourse />
                        <li><Link to="/investors">INVESTORS</Link></li>
                        <li><Link to="/careers">CAREERS</Link></li>
                        <li><Link to="/location">GLOBAL LOCATIONS</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default Header;
