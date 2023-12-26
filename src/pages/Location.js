import React from 'react';
import "../css/location.css"
import LocationItem from "../components/secondary/LocationItem";
import { useDataContext } from '../context/DataContext';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Location = () => {
    const { data } = useDataContext();

    useGSAP(() => {
        data["tlLoca"].to("#location-header", { text: { value: "Arasaka Global" }, duration: 1, ease: "none" }, ">")
        data["tlLoca"].to("#location-paragraph", { text: { value: "Arasaka's impact circles the globe. Our headquarters is in Tokyo, Japan, and our operating companies and regional offices keep us connected to our customers and markets." }, duration: 3, ease: "none" })
        data["tlLoca"].fromTo("#location-items-container", { opacity: 0 }, { opacity: 1, duration: 1.5 })
        // data["tl"].add(data["tlLoca"], "#location")

        var items = gsap.utils.toArray('.location-item');

        items.forEach((section, index) => {
            gsap.set(section, { autoAlpha: 0 });

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'bottom bottom',
                    scrub: true,
                    end: '-=600'
                }
            });

            tl.to(section, { autoAlpha: 1 });
        })
    });

    return (
        <main className='section-container'>
            <h1 id='location-header' className='very-very-large'>&#8203;</h1>
            <p id='location-paragraph' className='large'></p>
            <div id='location-items-container'>
                {data["locations"].map((location, index) => (
                    <LocationItem key={index} {...location} />
                ))}
            </div>
            <div style={{ height: "200px" }}></div>
        </main>
    );
}

export default Location;